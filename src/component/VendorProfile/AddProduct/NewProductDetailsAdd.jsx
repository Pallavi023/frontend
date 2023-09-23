import React, { useState, useCallback } from 'react';
import DropBox from './Dropbox';
import axios from 'axios'; // Import Axios


const NewProductDetailsAdd = () => {

    const [images, setImages] = useState([]);
    const [productName, setProductName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [material, setMaterial] = useState('');
    const [internalMaterial, setInternalMaterial] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('clothing');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [dimensions, setDimensions] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountPrice, setDiscountPrice] = useState('');
    const [modelSize, setModelSize] = useState('');
    const [sizeChartImage, setSizeChartImage] = useState('');

    const [expiryDate, setExpiryDate] = useState('');

    const handleVideoChange = (event) => {
        const videoFile = event.target.files[0];
        setSelectedVideo(videoFile);
    };

    console.log(productName);


    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file, index) => {
            if (file instanceof Blob) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    setImages((prevState) => [
                        ...prevState,
                        { id: index, src: e.target.result },
                    ]);
                };
                reader.readAsDataURL(file);
            }
        });
    }, []);

    const handleSizeChange = (event) => {
        const size = event.target.value;
        setSelectedSizes((prevSelectedSizes) => {
            if (prevSelectedSizes.includes(size)) {
                return prevSelectedSizes.filter((s) => s !== size);
            } else {
                return [...prevSelectedSizes, size];
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const submitData = {
            productName,
            selectedCategory,
            type,
            description,
            material,
            internalMaterial,
            selectedSizes: selectedSizes.join(','),
            dimensions,
            originalPrice,
            modelSize,
            expiryDate,
            discountPrice,
            selectedVideo,
            sizeChartImage,
        }

        console.log("SubmitData:", submitData);



        try {
            // Make a POST request to your backend API
            const response = await axios.post('/api/product', submitData,);


            console.log(response.data); // Log the response from the server
            // You can redirect the user or perform any other necessary actions upon successful submission
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (

        <div className='container mx-auto p-4'>
            <form onSubmit={handleSubmit} className='max-w-full mx-auto bg-[#F5f6f9] shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 '>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4">
                    <div className='left w-full flex-wrap flex flex-col   px-2 mb-4'>
                        <div className='flex flex-col '>
                            <label htmlFor='productName' className="text-sm font-semibold">Product Name</label>
                            <input
                                type='text'
                                placeholder='Add name of your product'
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full"
                            />
                            <small className="text-xs text-gray-500 break-words">Do not exceed 20 characters when entering the product name.</small>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='category' className="text-sm font-semibold">Choose a category</label>
                            <select
                                id='category'
                                name='category'
                                value={selectedCategory}
                                onChange={(e) => { setSelectedCategory(e.target.value) }}
                                className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full"
                            >
                                <option value='clothing'>Clothing</option>
                                <option value='home-decor'>Home Decor</option>
                                <option value='accessories'>Accessories</option>
                                <option value='homemade-food'>Homemade Food</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>

                            {selectedCategory === 'clothing' ? <> <label htmlFor='type' className="text-sm font-semibold">
                                Type</label>
                                <select id='type' name='type' value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="mt-2 px-3 py-2 border rounded-md focus:outline-none
                                     focus:border-blue-500 w-full"
                                >

                                    <option value='male'>Male</option>
                                    <option value='women'>Women</option>
                                    <option value='kids'>Kids</option></select> </> : <></>
                            }


                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='description' className="text-sm font-semibold">Product Description</label>
                            <textarea
                                id='description'
                                name='description'
                                rows='8'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            ></textarea>
                            <small className="text-xs text-gray-500 break-words">Do not exceed 100 characters when entering the product description.</small>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='material' className="text-sm font-semibold">
                                {selectedCategory === 'homemade-food' ? 'Ingredients' : 'Material'}
                            </label>
                            <input
                                type='text'
                                placeholder={
                                    selectedCategory === 'homemade-food'
                                        ? 'Add ingredients for homemade food'
                                        : 'Material'
                                }
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                                className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full"
                            />
                        </div>

                        {selectedCategory === 'clothing'  ? (
                            <div className='flex flex-col'>
                                <label htmlFor='internalMaterial' className="text-sm font-semibold">Internal Material</label>
                                <input
                                    type='text'
                                    placeholder='Internal Material'
                                    value={internalMaterial}
                                    onChange={(e) => setInternalMaterial(e.target.value)}
                                    className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full"
                                />
                            </div>
                        ) : null}







                    </div>
                    <div className='right flex flex-col w-full flex-wrap px-2 mb-4'>
                        <label className="text-sm font-semibold">Product Images</label>
                        <div className="flex flex-col flex-wrap mt-2 w-full lg:w-full md:w-1/3">
                            <div>
                                <DropBox onDrop={onDrop} className="mt-2 border rounded p-4" />
                            </div>
                            <div className='flex flex-row  flex-wrap'>
                                {images.slice(0, 5).map((file, index) => (
                                    <div key={index} className="w-16 h-16  p-2 border border-gray-300">
                                        <img src={file.src} alt="Product Image" className="w-12 h-12  object-cover" />
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="w-full ">
                            <p className="text-sm text-gray-600 break-words">You need to add maximum 5 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Ensure that the product showcases all the details.</p>
                        </div>
                        <div className="w-full lg:w-full md:w-1/3 px-2 mb-4">
                            {selectedCategory === "clothing" ? <>
                                <div className="mt-2">

                                    <div className="flex gap-4 flex-wrap">
                                        {type === 'kids' ? (
                                            <div className="flex-col flex mt-2 ">
                                                <h3 className="text-sm font-semibold ">Select Years:</h3>
                                                <div className=''>
                                                    {['0-1', '1-3', '3-5', '5-7', '7-9', '9-11', '11-13'].map((size, index) => (
                                                        <label key={index} className="inline-flex items-center mt-2">
                                                            <input
                                                                type="checkbox"
                                                                value={size}
                                                                checked={selectedSizes.includes(size)}
                                                                onChange={handleSizeChange}
                                                                className="form-checkbox h-4 w-4 bg-custom-purple flex"
                                                            />
                                                            <span className="ml-2 mr-4">{size}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex gap-4">
                                                <h3 className="text-sm font-semibold">Select Sizes:</h3>
                                                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                                                    <label key={index} className="inline-flex items-center mt-2">
                                                        <input
                                                            type="checkbox"
                                                            value={size}
                                                            checked={selectedSizes.includes(size)}
                                                            onChange={handleSizeChange}
                                                            className="form-checkbox h-4 w-4 bg-custom-purple flex"
                                                        />
                                                        <span className="ml-2 mr-4">{size}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}



                                    </div>
                                </div>
                                <div className="mt-2 flex gap-2">
                                    <h3 className="text-sm font-semibold">Selected Sizes:</h3>
                                    <ul className="list-disc list-inside flex gap-2">
                                        {selectedSizes.map((size, index) => (
                                            <li className="text-sm" key={index}>{size}</li>
                                        ))}
                                    </ul>
                                </div> </> : <></>}


                        </div>
                        <div className="w-full md:w-1/2 lg:w-full px-2 mb-4">
                            {selectedCategory === 'clothing' ? (
                                <>
                                    <label className="text-sm font-semibold" htmlFor='size-chart'>Size Chart Image</label>
                                    <div>
                                        <input type='file'
                                            className="mt-2 border rounded p-4 "
                                            value={sizeChartImage}
                                            onChange={(e) => setSizeChartImage(e.target.value)}

                                        ></input>
                                    </div>
                                    <label htmlFor='model-size' className="text-sm font-semibold mt-4">Model Size</label>
                                    <input
                                        type='text'
                                        placeholder='Add size of the model'
                                        value={modelSize}
                                        onChange={(e) => setModelSize(e.target.value)}
                                        className="mt-2 px-3 py-2 border w-full rounded-md focus:outline-none focus:border-blue-500 "
                                    />
                                </>
                            ) : (
                                selectedCategory !== 'homemade-food' ? (
                                    <div className="w-full md:w-1/2 lg:w-full px-2 mb-2">
                                        <label htmlFor='dimensions' className="text-sm font-semibold">Dimensions</label>
                                        <input
                                            type='text'
                                            placeholder="Add product dimensions (e.g., 10x12x5 )"
                                            value={dimensions}
                                            onChange={(e) => setDimensions(e.target.value)}
                                            className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full "
                                        />
                                    </div>
                                ) : null

                            )}
                        </div>
                        <div className="flex gap-4 ">
                            <div>
                                <label htmlFor='original-price' className="text-sm font-semibold">Original Price</label>
                                <input
                                    type='number'
                                    placeholder='Add original price of the product'
                                    onChange={(e) => setOriginalPrice(e.target.value)}
                                    className="mt-2 px-3 py-2 border rounded-md focus:outline-none w-full focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor='discount-price' className="text-sm font-semibold mt-2">Discounted Price</label>
                                <input
                                    type='number'
                                    placeholder='Add discount price of the product'
                                    onChange={(e) => setDiscountPrice(e.target.value)}
                                    className="mt-2 px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="video" className="text-sm font-semibold">
                                Product Video
                            </label>
                            <input
                                type="file"
                                id="video"
                                name="video"
                                accept="video/*"
                                onChange={handleVideoChange}
                                className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full"
                            />
                        </div>

                        {selectedCategory === 'packed-food' && (
                            <div className='flex flex-col'>
                                <label htmlFor='expiry-date' className="text-sm font-semibold">Expiry Date</label>
                                <input
                                    type='text'
                                    placeholder='Add expiry date of the item'
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    className="mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full mt-4">
                    <button type='submit' className="bg-custom-purple hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >Save Product</button>
                </div>

            </form>
        </div>
    );
}

export default NewProductDetailsAdd;
