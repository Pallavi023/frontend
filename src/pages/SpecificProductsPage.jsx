// import React from 'react'
// import ProductDesc from '../component/SpecificProduct/ProductDesc'
// import RecentlyViewedProduct from '../component/SpecificProduct/RecentlyViewedProduct';
// import ParticularProduct from '../component/SpecificProduct/ParticularProduct';
// import { Box } from '@mui/material';

// const ProductsPage = () => {
//   return (
//     <Box sx={{width:"100%", padding:"0 50px 0 50px"}}>
//     <ParticularProduct/>
//      <ProductDesc/>
//      <RecentlyViewedProduct/>
     
//     </Box>
//   )
// }

// export default ProductsPage;   


import React from 'react'
import ParticularProduct from '../component/SpecificProduct/ParticularProduct'
// import ProductDesc from '../component/SpecificProduct/ProductDesc'
// import ProductDetails from '../component/SpecificProduct/ProductDetails'
// import RecentlyViewedProduct from '../component/SpecificProduct/RecentlyViewedProduct'

function SpecificProductsPage() {
  return (
    <>
    <ParticularProduct />
    {/* <ProductDesc />
    <ProductDetails />
    <RecentlyViewedProduct /> */}
    </>
    
  )
}

export default SpecificProductsPage 