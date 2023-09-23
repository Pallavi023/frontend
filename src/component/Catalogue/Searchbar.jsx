import React, { useState } from 'react'
import { Search } from 'react-feather';

const tabs = [
  'All Vendors',
  'Clothing',
  'Homemade Food',
  'Accessories',
  'Home Decor',
]

function Searchbar() {

  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      {/* search bar "catalogue page" */}
      <div className='justify-center items-center p-5'>
        <div className="relative rounded-fullbg-gray-100 p-1 w-[90%] flex left-10"> {/* Set width to w-1/2 */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="flex justify-center items-center pl-12 pr-1 py-1.5 rounded-full shadow-lg w-full "
            type="text"
            placeholder="Search for the vendor"
          />
        </div>

        {/* tabs */}

        <div className='pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center flex-wrap'>
  <div className='mb-2 md:mb-0 font-bold text-xl text-center'>
    {activeTab}
  </div>

  <div className='flex justify-center flex-wrap'>
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`py-2 px-4 rounded-3xl transition-all duration-300 ease-in-out ${activeTab === tab
            ? 'bg-[#8a58dc] text-white font-bold'
            : 'text-gray-800 '
          }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
</div>

        <hr className='mt-5 border-gray-300' />

      </div>
    </>
  )
}

export default Searchbar