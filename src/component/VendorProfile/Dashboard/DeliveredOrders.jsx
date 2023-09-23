import React from 'react';

const sampleData = [
  {
    customer: 'Vishal',
    location: 'Indore,India',
    orderDetails: {
      orderID: '#12345',
      name: 'Product A',
      image: 'product_a.jpg',
      price: '$29.99',
    },
    orderStatus:'Completed',
    dateTime: '2023-08-11 10:00 AM',
    
  },
  {
    customer: 'Anish',
    location: 'Indore,India',
    orderDetails: {
      orderID: '#67890',
      name: 'Product B',
      image: 'product_b.jpg',
      price: '$39.99',
    },
    orderStatus: 'Completed',
    dateTime: '2023-08-11 11:30 AM',
    
  },
  {
    customer: 'Aman',
    location: 'Indore,India',
    orderDetails: {
      orderID: '#67560',
      name: 'Product c',
      image: 'product_c.jpg',
      price: '$50.99',
    },
    orderStatus: 'Completed',
    dateTime: '2023-08-11 01:80 AM',
   
  },
  {
    customer: 'Vibha',
    location: 'Indore,India',
    orderDetails: {
      orderID: '#64560',
      name: 'Product d',
      image: 'product_d.jpg',
      price: '$80.99',
    },
    orderStatus: 'Completed',
    dateTime: '2023-08-12 01:80 AM',
   
  },
  {
    customer: 'Pallavi',
    location: 'Indore,India',
    orderDetails: {
      orderID: '#64560',
      name: 'Product e',
      image: 'product_e.jpg',
      price: '$70.99',
    },
    orderStatus: 'Completed',
    dateTime: '2023-07-10 01:80 AM',
    
  },
  {
    customer: 'Aman',
    location: 'Indore,India',
    orderDetails: {
      orderID: '#67560',
      name: 'Product c',
      image: 'product_c.jpg',
      price: '$50.99',
    },
    orderStatus: 'Completed',
    dateTime: '2023-08-11 01:80 AM',
   
  },
  {
    customer: 'Aman',
    location: 'Indore,India',
    orderDetails: {
      orderID: '#67560',
      name: 'Product c',
      image: 'product_c.jpg',
      price: '$50.99',
    },
    orderStatus: 'Completed',
    dateTime: '2023-08-11 01:80 AM',
    
  },
];

const Table = () => {
  return (
    <div className='p-5'>
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border bg-gray-100">
        <thead>
          <tr className=''>
            <th className="bg-gray-200 font-bold px-4 py-2">Customer</th>
            <th className="bg-gray-200 font-bold px-4 py-2">Location</th>
            <th className="bg-gray-200 font-bold px-4 py-2">Order Details</th>
            <th className="bg-gray-200 font-bold px-4 py-2">Order Status</th>
            <th className="bg-gray-200 font-bold px-4 py-2">Date/Time</th>
          </tr>
        </thead>
        <tbody className=''>
          {sampleData.map((item, index) => (
            <tr key={index} className='border-b border-gray-400'>
              <td className='px-4 py-2'>{item.customer}</td>
              <td className='px-4 py-2'>{item.location}</td>
              <td className='px-4 py-2'>
                <div className='flex flex-col md:flex-row gap-2'>
                  <div>
                    <img src={item.orderDetails.image} alt="Product" className='w-16 h-16 md:w-24 md:h-24 object-cover' />
                  </div>
                  <div className='flex flex-col'>
                    <div>
                      Order ID: {item.orderDetails.orderID}
                    </div>
                    <div>
                      Name: {item.orderDetails.name}
                    </div>
                    <div>
                      Price: {item.orderDetails.price}
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-4 py-2'>
                <div>
                  <button className='bg-green-100 w-28 h-10 rounded-2xl text-green-600'>{item.orderStatus}</button>
                </div>
              </td>
              <td className='px-4 py-2'>{item.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Table;
