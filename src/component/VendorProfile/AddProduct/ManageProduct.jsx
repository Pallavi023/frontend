import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ImageIcon from '@mui/icons-material/Image';
import TablePagination from '@mui/material/TablePagination';
import NewProductDetailsAdd from './NewProductDetailsAdd';
const sampleData = [
  {
    id: '1',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '2',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '3',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  }, {
    id: '4',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '5',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '6',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '7',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '8',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '9',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '10',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '11',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },
  {
    id: '12',
    img: 'product_a.jpg',
    name: {
      name: 'Mens Long Sleeves',
      component: 'Tshirt Cotton'
    },
    price: 'Rs. 250.00',
    category: 'Mens Clothing',
    stock: 'In Stock',
    date: {
      modify: 'Last Modified',
      date: '29/8/23',
      duration: '11:14 AM',
    }

  },



]
const ManageProduct = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [data, setData] = useState(sampleData);
  const [active, setActive] = useState(null);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newSelectedItems = {};
    data.forEach((item) => {
      newSelectedItems[item.id] = !selectAll;
    });
    setSelectedItems(newSelectedItems);
  };

  const handleSelectItem = (itemId) => {
    const newSelectedItems = { ...selectedItems };
    newSelectedItems[itemId] = !newSelectedItems[itemId];
    setSelectedItems(newSelectedItems);
    setSelectAll(Object.values(newSelectedItems).every((selected) => selected));
  };

  const handleDeleteSelected = () => {
    const newData = data.filter((item) => !selectedItems[item.id]);
    setData(newData);
    setSelectedItems({});
    setSelectAll(false);
  };

  const handleStockSelected = () => {
    const newData = data.map((item) => {
      if (selectedItems[item.id]) {
        return { ...item, stock: 'In Stock' };
      }
      return item;
    });
    setData(newData);
  };

  const handleOutStockSelected = () => {
    const newData = data.map((item) => {
      if (selectedItems[item.id]) {
        return { ...item, stock: 'Out Stock' };
      }
      return item;
    });
    setData(newData);
  };

  const selectedItemCount = Object.values(selectedItems).filter(Boolean).length;
  const isEditButtonHidden = selectedItemCount > 1;

  const handleAddNewProduct = () => {
    setActive('NewProductDetailsAdd');
  };

  const displayedData = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <>
      <div className="p-4">
        <div className="flex flex-row justify-between w-full ">
          <h2 className="text-lg md:text-xl lg:text-2xl">Product</h2>
          <div className="ml-auto">
            <button

              onClick={handleAddNewProduct}
              className="bg-[#8A58DC] p-1 font-sm text-white rounded-lg border-none font-semibold"



            >
              <FontAwesomeIcon icon={faPlus} /> Add New Product
            </button>
          </div>
        </div>
        {active === 'NewProductDetailsAdd' && <NewProductDetailsAdd />} 

     {active !== 'NewProductDetailsAdd' &&   <div className="mt-5">
          <div className="overflow-x-auto">
            <table className="w-full md:w-[100%] border rounded-lg bg-white ">
              <thead>
                <tr className="font-poppins font-medium flex justify-between p-1">
                  <th className="w-1/12">
                    <input
                      type="checkbox"
                      className=""
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="w-1/12"><ImageIcon className="" /></th>
                  <th className="w-2/12 text-md md:text-lg lg:text-xl font-semibold">Name</th>
                  <th className="w-2/12 text-md md:text-lg lg:text-xl font-semibold">Price</th>
                  <th className="w-2/12 text-md md:text-lg lg:text-xl font-semibold">Category</th>
                  <th className="w-2/12 text-md md:text-lg lg:text-xl font-semibold">Stock</th>
                  <th className="w-2/12 text-md md:text-lg lg:text-xl font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {displayedData.map((item) => (
                  <tr key={item.id} className="font-poppins font-medium flex justify-between p-1">
                    <td className="w-1/12">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={selectedItems[item.id] || selectAll}
                        onChange={() => handleSelectItem(item.id)}
                      />
                    </td>
                    <td className="w-1/12">{item.img}</td>
                    <td className="w-2/12 p-2">
                      <div className="flex flex-col text-[#4779CC]">
                        <div className="mb-1">{item.name.name}</div>
                        <div>{item.name.component}</div>
                      </div>
                    </td>
                    <td className="w-2/12">{item.price}</td>
                    <td className="w-2/12 text-[#4779CC]">{item.category}</td>
                    <td className={`w-2/12 ${item.stock === "In Stock" ? 'text-green-500' : 'text-red-500'}`}>
                      {item.stock}
                    </td>
                    <td className="w-2/12 p-2">
                      <div className="flex flex-col">
                        <div className="mb-1">{item.date.modify}</div>
                        <div>
                          {item.date.date} at {item.date.duration}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <div className="w-full md:w-auto">
            {!isEditButtonHidden && (
              <button
                className="w-full md:w-28 h-9 rounded-lg bg-[#8A58DC] text-white font-poppins text-lg md:text-base lg:text-lg font-semibold tracking-wide"
              >
                Edit
              </button> )}
            </div>
            <div className="w-full md:w-auto">
              <button
                className="w-full md:w-28 h-9 rounded-lg bg-[#8A58DC] text-white font-poppins text-lg md:text-base lg:text-lg font-semibold tracking-wide"
                onClick={handleDeleteSelected}
              >
                Delete
              </button>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-28 h-9 rounded-lg bg-[#3FBD6A] text-white font-poppins text-lg md:text-base lg:text-lg font-semibold tracking-wide" onClick={handleStockSelected}>
                In Stock
              </button>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-28 h-9 rounded-lg bg-[#FF6B6B] text-white font-poppins text-lg md:text-base lg:text-lg font-semibold tracking-wide" onClick={handleOutStockSelected}>
                Out Stock
              </button>
            </div>
          </div>

          <TablePagination
            component="div"
            count={140}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
}
      </div>
          

    </>
  );
};

export default ManageProduct;
