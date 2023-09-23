import React, { useState, useEffect } from 'react';

const RecentlyViewedProduct = () => {
  // State to hold the recently viewed products
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Function to add a product to the recently viewed list
  const addProductToRecentlyViewed = (product) => {
    // Limit the list to the last 5 viewed products (you can adjust this number as needed)
    const newRecentlyViewed = [product, ...recentlyViewed.slice(0, 4)];
    setRecentlyViewed(newRecentlyViewed);
  };

  // useEffect hook to update the recently viewed products in local storage
  useEffect(() => {
    // Save the recently viewed products to local storage whenever the list changes
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  // useEffect hook to load the recently viewed products from local storage on initial render
  useEffect(() => {
    const storedRecentlyViewed = localStorage.getItem('recentlyViewed');
    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }
  }, []);

  return (
    <div className='w-full flex justify-center text-[20px] font-[600] h-[500px] text-[#343246] '>

      <h2>Recently Viewed Products</h2>
      <ul>
        {recentlyViewed.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyViewedProduct;
