import React from 'react'

function WhyEkaiv() {
    const whySellOnEkaive = [
        {
            image: "logo1.svg",
            title: "Sell Across India",
            description: "Reach over 50 crore+ customers across 27000+ pincodes",
        },
        {
            image: "logo2.svg",
            title: "Higher Profits",
            description: "With 0% commission* , you take 100% profits with you",
        },
        {
            image: "logo3.svg",
            title: "Account Management",
            description:
                "Our Dedicated managers will help your business on Flipkart.",
        },
        {
            image: "logo4.svg",
            title: "Simple Pricing Calculator",
            description:
                "Use our simple pricing calculator to decide the best and competitive selling price for your product",
        },
        {
            image: "logo5.svg",
            title: "24x7 Seller Support",
            description:
                "All your queries and issues are answered by our dedicated Seller Support Team",
        },
        {
            image: "logo6.svg",
            title: "Fast & Regular Payments",
            description:
                "Get payments as fast as 7-10 days from the date of dispatch",
        },
        {
            image: "logo7.svg",
            title: "Lower Return Charges",
            description:
                "With our flat and low return charges, ship your products stress- free",
        },
        {
            image: "logo8.svg",
            title: "Fast & Regular Payments",
            description:
                "Get payments as fast as 7-10 days from the date of dispatch",
        },

    ];

    return (
        <>
            <div className='p-5 bg-gray-200 h-max'>
                <div className='mt-5 font-bold text-4xl text-center'>
                    <h1>Why Sell On Ekaiv ?</h1>
                </div>
                <div className="grid grid-cols-1 p-5 md:grid-cols-4 gap-4 mt-8">
                    {whySellOnEkaive.map((item, index) => (
                        <div className="flex justify-center items-center flex-col mb-4" key={index} >
                            {item.image && <img src={`${require(`../../assets/images/SellerRgiesteration/whySellOnEkaive/${item.image}`)}`} alt={item.title} />}
                            <h3 className="font-bold md:text-center text-start mb-2">{item.title}</h3>
                            <p className="md:text-center text-start">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default WhyEkaiv