import React, { useEffect, useState} from 'react';
import ProductCard from '../../ProductCard/ProductCard'



const Store = () =>
{
    const productData = [
        {
          id: 1,
          category: "Computers and Laptops",
          name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
            },
            {
              public_id: "test",
              url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
            },
          ],
          shop: {
            name: "Apple inc.",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          price: 1099,
          discount_price: 1049,
          rating: 4,
          total_sell: 35,
          stock: 10,
        },
        {
          id: 2,
          category: "Mobile and Tablets",
          name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
            },
            {
              public_id: "test",
              url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
            },
          ],
          shop: {
            name: "Amazon Ltd",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          discount_price: 1099,
          rating: 5,
          total_sell: 80,
          stock: 10,
          category: "Mobile & Tablets"
        },
        {
          id: 1,
          category: "Computers and Laptop",
          name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
            },
            {
              public_id: "test",
              url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
            },
          ],
          shop: {
            name: "Apple inc.",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          price: 1099,
          discount_price: 1049,
          rating: 4,
          total_sell: 75,
          stock: 10,
          category: "Computers & Laptop"
        },
        {
          id: 4,
          category: "Others",
          name: "New Fashionable Watch for men 2023 with multiple colors",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
            },
            {
              public_id: "test",
              url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
            },
          ],
          shop: {
            name: "Shahriar Watch House",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
            category: "Others"
          },
          price: 100,
          discount_price: 79,
          rating: 4,
          total_sell: 12,
          stock: 10,
        },
        {
          id: 5,
          category: "Shoes",
          name: "New Trend shoes for gents with all sizes",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
            },
            {
              public_id: "test",
              url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
            },
          ],
          shop: {
            name: "Alisha Shoes Mart",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          price: 120,
          discount_price: 89,
          rating: 5,
          total_sell: 49,
          stock: 10,
          category: "Shoes"
        },
        {
          id: 1,
          name: "Gaming Headphone Asus with mutiple color and free delivery",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
            },
            {
              public_id: "test",
              url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
            },
          ],
          shop: {
            name: "Asus Ltd",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          price: 300,
          discount_price: 239,
          rating: 4.5,
          reviews: [
            {
              user: {
                // user object will be here
              },
              comment: "IT's so cool!",
              rating: 5,
            },
          ],
          total_sell: 20,
          stock: 10,
          category: "Music and Gaming"
        },
        {
          id: 4,
          name: "New Fashionable Watch for men 2023 with multiple colors",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
            },
            {
              public_id: "test",
              url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
            },
          ],
          shop: {
            name: "Shahriar Watch House",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          price: 100,
          discount_price: 79,
          rating: 4,
          total_sell: 62,
          stock: 10,
        },
        {
          id: 1,
          name: "Gaming Headphone Asus with mutiple color and free delivery",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
            },
            {
              public_id: "test",
              url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
            },
          ],
          shop: {
            name: "Asus Ltd",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          price: 300,
          discount_price: 239,
          rating: 4.5,
          reviews: [
            {
              user: {
                // user object will be here
              },
              comment: "IT's so cool!",
              rating: 5,
            },
          ],
          total_sell: 20,
          stock: 10,
        },
        {
          id: 2,
          category: "Mobile and Tablets",
          name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
            },
            {
              public_id: "test",
              url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
            },
          ],
          shop: {
            name: "Amazon Ltd",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          discount_price: 1099,
          rating: 5,
          total_sell: 20,
          stock: 10,
        },
        {
          id: 1,
          category: "Music and Gaming",
          name: "Gaming Headphone Asus with mutiple color and free delivery",
          description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
          image_Url: [
            {
              public_id: "test",
              url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
            },
            {
              public_id: "test",
              url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
            },
          ],
          shop: {
            name: "Asus Ltd",
            shop_avatar: {
              public_id: "test",
              url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
          },
          price: 300,
          discount_price: 239,
          rating: 4.5,
          reviews: [
            {
              user: {
                // user object will be here
              },
              comment: "IT's so cool!",
              rating: 5,
            },
          ],
          total_sell: 20,
          stock: 10,
        },
      ];
    const [data, setData] = useState([]);

    useEffect(() => {
      const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell);
      const firstFive = d.slice(0,6);
      setData(firstFive);
  
    }, [])
    return(
      <div className="ml-5">
      <h1 className="mt-3 mb-3">Store</h1>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-12 border-0">
        {data &&
          data.map((i, index) => {
            return <ProductCard data={i} key={index} />;
          })}
      </div>
    </div>
    )
}
export default Store