import React from 'react';
import image1 from '../../assets/images/Assitance/Image1.png';
import image2 from '../../assets/images/Assitance/Image2.png';
import image3 from '../../assets/images/Assitance/Image3.png';
import image4 from '../../assets/images/Assitance/Image4.png';

const DesignsNPhotography = () => {
    const previousWorks = [
        {
            title: 'Creative Event Design',
            description: 'Capturing the essence of people through striking portrait photography. Memorable moments in every frame.',
            imageUrl: image1,
        },
        {
            title: 'Modern Interior Design',
            description: 'Innovative interior designs that transform living spaces. Harmony and style in every room.',
            imageUrl: image2,
        },
        {
            title: 'Abstract Art Photography',
            description: 'Exploring abstract forms and colors in the world of photography. Unveiling artistry in everyday scenes.',
            imageUrl: image3,
        },
        {
            title: 'Logo Design',
            description: 'Crafting unique logos that symbolize brands. Graphic design expertise that leaves a lasting impression.',
            imageUrl: image4,
        },
        // Add more works with specific details and actual image URLs
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Designs & Photography</h2>
            <p className="text-gray-600">
                Explore our previous works in designs and photography. We take pride in our creative projects.
            </p>
            <div className="mt-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {previousWorks.map((work, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                            <div className="aspect-w-1 aspect-h-1">
                                <img
                                    src={work.imageUrl}
                                    alt={work.title}
                                    className="w-96 h-96 object-cover opacity-100 hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white text-center opacity-0 hover:opacity-100 transition-opacity p-4">
                                    <h3 className="text-lg font-bold">{work.title}</h3>
                                    <p className="text-gray-200 ">{work.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">Interested in our services?</h3>
                <p className="text-gray-600">
                    If you liked our work and want to create your own masterpiece, feel free to contact us. We'd love to hear from you!
                </p>
                <button>Contact us</button>
            </div>
        </div>
    );
};

export default DesignsNPhotography;
