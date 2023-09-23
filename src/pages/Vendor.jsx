import React, { useState } from 'react';
import VendorMenuBar from '../component/VendorProfile/Dashboard/VendorMenuBar';
import VendorNavbar from '../component/VendorProfile/Dashboard/VendorNavbar';
import VendorSales from '../component/VendorProfile/Dashboard/VendorSales';
import VendorStore from '../component/VendorProfile/YourStore/Store'
import NewOrders from '../component/VendorProfile/Dashboard/NewOrders'
import DeliveredOrders from '../component/VendorProfile/Dashboard/DeliveredOrders'
import InProcessOrders from '../component/VendorProfile/Dashboard/InProcessOrders'
import SalesStore from '../component/VendorProfile/YourStore/SalesStore'
import ManageProduct from '../component/VendorProfile/AddProduct/ManageProduct';
import Help from '../component/VendorProfile/NeedHelp/help';
import Report from '../component/VendorProfile/Report/Report';
import AccountDetailsEdit from '../component/VendorProfile/AccounSettings/AccountDetailsEdit'
import TransitOrders from '../component/VendorProfile/Dashboard/TransitOrders'

function Vendor() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [activeOrders, setActiveOrders] = useState('newOrders');

  const handleOrders = (tabName) => {
    setActiveOrders(tabName);
  }


  return (
    <div>
      <div className="flex flex-row">
        <VendorMenuBar activeTab={activeTab} handleTabClick={handleTabClick} />
        <div className='flex flex-col w-full'>
          <div>
            <VendorNavbar />

          </div>
          <div className='p-1 bg-gray-100' >
            {activeTab === 'dashboard' && (
              <>
                <div className='p-1 bg-gray-100' >
                  <VendorSales />
                </div>
                <div className="flex space-x-4 p-1 ml-3">
                  <button
                    onClick={() => handleOrders('newOrders')}
                    className={`py-2 px-4 rounded ${activeOrders === 'newOrders' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                  >
                    New Orders
                  </button>
                  <button
                    onClick={() => handleOrders('inProcessOrders')}
                    className={`py-2 px-4 rounded ${activeOrders === 'inProcessOrders' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                  >
                    In Process
                  </button>
                  <button
                    onClick={() => handleOrders('transitOrders')}
                    className={`py-2 px-4 rounded ${activeOrders === 'transitOrders' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                  >
                    Transit
                  </button>
                  <button
                    onClick={() => handleOrders('deliveredOrders')}
                    className={`py-2 px-4 rounded ${activeOrders === 'deliveredOrders' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                  >
                    Delivered Orders
                  </button>

                </div>

                {activeOrders === 'newOrders' && <NewOrders />}
                {activeOrders === 'inProcessOrders' && <InProcessOrders />}
                {activeOrders === 'transitOrders' && <TransitOrders />}
                {activeOrders === 'deliveredOrders' && <DeliveredOrders />}


              </>
            )}
          </div>
          <div className=' bg-gray-100' >
            {activeTab === 'store' && (
              <>
                <div className=' bg-gray-100' >
                  <SalesStore />
                </div>
                <VendorStore />

              </>
            )}
          </div>
          <div className=' bg-gray-100' >
            {activeTab === 'product' && (
              <>
                <ManageProduct />
              </>
            )}
          </div>
          <div className=' bg-gray-100 ' >
            {activeTab === 'account' && (
              <>
                <AccountDetailsEdit />
              </>
            )}
          </div>
          <div className=' bg-gray-100' >
            {activeTab === 'report' && (
              <>
                <Report />
              </>
            )}
          </div>
          <div className=' bg-gray-100' >
            {activeTab === 'help' && (
              <>
                <Help />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendor;
