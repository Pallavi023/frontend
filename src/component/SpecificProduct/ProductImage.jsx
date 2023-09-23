import React, { useState } from 'react'



const ZoomedImage = ({ src }) => {
    const [showZoomed, setShowZoomed] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (e) => {
        setShowZoomed(true);
        setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    const handleMouseLeave = () => {
        setShowZoomed(false);
    };

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    return (
        <div
            className='relative w-[50%] h-full aspect-square overflow-hidden'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <img src={src} alt="" className='w-full h-full object-cover' />
            {showZoomed && (
                <div
                    className='absolute top-0 left-0 w-full h-full overflow-hidden border border-black'
                    style={{
                        transformOrigin: `${cursorPosition.x}px ${cursorPosition.y}px`,
                        transform: 'scale(3)', // Adjust the zoom level as needed
                    }}
                    onWheel={(e) => {
                        e.preventDefault();
                        const container = e.currentTarget;
                        container.scrollTop += e.deltaY;
                    }}
                >
                    <img src={src} alt="" className='w-full h-full object-cover' />
                </div>
            )}
        </div>
    );
};


function ProductImage() {
    const [images, setImages] = useState({
        img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    })

    const [activeImg, setActiveImage] = useState(images.img1)
  return (
    <>
     <div className="flex md:flex-row sm:flex-col w-[50%] gap-1 justify-evenly items-center p-5 border border-[#F16080] rounded-sm lg:sticky top-0">
            {/* Div for small thumbnail images */}
            <div className="flex lg:flex-col gap-1 md:flex-row">
                <img
                    src={images.img1}
                    alt=""
                    className={`w-24 h-24 cursor-pointer ${activeImg === images.img1 ? 'border border-[#8A58DC]' : ''}`}
                    onClick={() => setActiveImage(images.img1)}
                />
                <img
                    src={images.img2}
                    alt=""
                    className={`w-24 h-24 cursor-pointer ${activeImg === images.img2 ? 'border border-[#8A58DC]' : ''}`}
                    onClick={() => setActiveImage(images.img2)}
                />
                <img
                    src={images.img3}
                    alt=""
                    className={`w-24 h-24 cursor-pointer ${activeImg === images.img3 ? 'border border-[#8A58DC]' : ''}`}
                    onClick={() => setActiveImage(images.img3)}
                />
                <img
                    src={images.img4}
                    alt=""
                    className={`w-24 h-24 cursor-pointer ${activeImg === images.img4 ? 'border border-[#8A58DC]' : ''}`}
                    onClick={() => setActiveImage(images.img4)}
                />
            
            </div>
            {/* <div className='flex justify-end items-center'> */}

                <ZoomedImage src={activeImg} />
            {/* </div> */}
        </div>
    </>
  )
}

export default ProductImage