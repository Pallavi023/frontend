import React from 'react'
import ProductDesc from './ProductDesc';
import ProductPrice from './ProductPrice';
import RecentlyViewedProduct from './RecentlyViewedProduct';
import ProductImage from './ProductImage';

const ParticularProduct = () => {
    return (
        <>
            {/* main div */}
            <div className='flex flex-col bg-[#F7FAFC] justify-between lg:flex-row gap-10 lg:items-start p-4'>
                {/* left div */}
                <ProductImage />
                {/* right div */}
                <div className='flex flex-col justify-between items-center w-[50%] border border-none'>
                    <ProductPrice />
                    <ProductDesc />
                </div>
            </div>
            <RecentlyViewedProduct />
        </>
    )
}

export default ParticularProduct 