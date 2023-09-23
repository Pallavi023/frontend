// import React from "react";
// import CatalogueCard from "../component/CatalogueCard";
// import { useState } from "react";
// const CataloguePage = () => {
//   const [data, setCar] = useState([
//     {
//       img: "GH",
//       name: "Gadgets Hub",
//       title: "Indore, MP",
//       item: "Men & Kids Wear",
//     },
//     {
//       img: "GH",
//       name: "Gadgets Hub",
//       title: "Indore, MP",
//       item: "Men & Kids Wear",
//     },
//     {
//       img: "GH",
//       name: "Gadgets Hub",
//       title: "Indore, MP",
//       item: "Men & Kids Wear",
//     },
//     {
//       img: "GH",
//       name: "Gadgets Hub",
//       title: "Indore, MP",
//       item: "Men & Kids Wear",
//     },
//     {
//       img: "GH",
//       name: "Gadgets Hub",
//       title: "Indore, MP",
//       item: "Men & Kids Wear",
//     },
//     {
//       img: "GH",
//       name: "Gadgets Hub",
//       title: "Indore, MP",
//       item: "Men & Kids Wear",
//     },
//   ]);
//   return (
//     <>
//       <div>
//         <div class="input-group ">
//           <div class="form-outline ml-10">
//             <input
//               type="search"
//               id="form1"
//               class="form-control h-9 w-4/5 rounded-full mt-10 mb-10 p-3"
//               placeholder="Search for the Vendor"
//             ></input>
//           </div>
//         </div>
//         <div className="main w-full">
          

//           <div className=" 800px: flex space-around p-3 space-x-10  ml-[100px]">
//             <div>
//             <h1 className="text-xl-4 font-[800]">All Vendor</h1>
//           </div>
//             <button class="hover:bg-sky-700 hover:text-white inline-block rounded-full border-50">
//               All Vendor
//             </button>
//             <button class="hover:bg-sky-700 hover:text-white inline-block rounded-full border-50">
//               Mens & kids wear
//             </button>
//             <button class="hover:bg-sky-700 hover:text-white inline-block rounded-full border-50">
//               Womens Wear
//             </button>
//             <button class="hover:bg-sky-700 hover:text-white inline-block rounded-full border-50">
//               Accesories
//             </button>
//             <button class="hover:bg-sky-700 hover:text-white inline-block rounded-full border-50">
//               Packed Food
//             </button>
//             <button class="hover:bg-sky-700 hover:text-white inline-block rounded-full border-50">
//               Home Decor
//             </button>
//           </div>
//           <hr className="my-1 border-gray-300" />
//           <div className="flex flex-1 flex-wrap gap-20 p-20">
//   {data.map((e) => {
//     console.log(e);
//     return <CatalogueCard data={e} className="w-1/3" />;
//   })}
// </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default CataloguePage;

import React from 'react'
import Searchbar from '../component/Catalogue/Searchbar'
import VendorCard from '../component/Catalogue/VendorCard'
import BrandingTag  from '../component/Home/BrandingTag'
import Instagram  from '../component/Home/Instagram'

function CataloguePage() {
  return (
    <>
      <div className='bg-[#F7FAFC] '>
      <Searchbar />
      <VendorCard />
      <BrandingTag />
      <Instagram />
      </div>
    </>
  )
}

export default CataloguePage