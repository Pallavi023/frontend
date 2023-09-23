import React, { useState, useEffect } from "react";
import CategoryFilter from "../component/SearchPage/CategoryFilter";
import axios from "axios";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(data)

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/search?q=${searchTerm}`);
      const searchData = response.data;
      setData(searchData);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <>
   
      <div className="SearchPage flex bg-white mt-5 ">
        <div className="CategorySection ml-20">
          <CategoryFilter />
        </div>
        <div className="ProductSection ">
          
          {/* <div className="MainProductSection ml-5 flex flex-wrap justify-between py-4 ">
            {(data.length!=0)?
              (data.map((item, index) => (
                <div key={index} className="w-1/3 p-4 ">
                  {(data.length>0)&&<ProductCard data={item} />}
                </div>)
              ))
              :<></>}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SearchPage;