import React, { useState } from 'react';
// import FaqImage from '../assets/logo/Faq.jpg';

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      category: 'General FAQs',
      questions: [

        { question: 'How can I place an order?', answer: 'Answer1' },
        { question: 'What payment methods do you accept?', answer: '' },
        { question: 'Do you ship internationally?', answer: 'We appreciate your interest in our products/services. Currently, we do not offer international shipping. However, we have exciting plans. We will notify our users through email, WhatsApp, and app notifications when we expand our shipping options to include international destinations. Thank you for your understanding, and we look forward to serving you on a global scale soon.' },
        { question: 'What is The Ekaiv return/exchange policy?', answer: 'We appreciate your interest in our products. Please note that we do not have a return or exchange policy as our items are made to order, tailored to your specific preferences. We strongly recommend that you review our Size Chart carefully and double-check your measurements before placing an order to ensure a perfect fit. If you have any questions about sizing or product specifications, our customer support team is here to assist you prior to your purchase. Your satisfaction is important to us, and we want to make sure you receive a product that meets your expectations from the outset. Thank you for understanding our approach, and we are here to help with any inquiries you may have before ordering.' },

        { question: 'How can I place an order?', answer: 'Answer 1' },
        { question: 'What payment methods do you accept?', answer: 'Answer 2' },
        { question: 'Do you ship internationally?', answer: 'Answer 2' },
<<<<<<< HEAD

=======
        { question: 'What is The Ekaiv return/exchange policy?', answer: 'Answer 2' },
>>>>>>> 5ca3efa4986f108a04031ca9e7892d14ab630987
        { question: 'How do I track my order?', answer: 'Answer 2' },
        { question: 'Are the images accurate representations of the products?', answer: 'Answer 2' },
        { question: 'Is my personal information secure?', answer: 'Answer 2' },
      ],
    },
    {
      category: 'Clothing FAQs',
      questions: [
        { question: 'How do I find my size?', answer: 'Answer A' },
<<<<<<< HEAD

        { question: 'Can I return or exchange clothing if it does not fit?', answer: 'Answer B' },
        { question: 'What are the care instructions for the clothing items?', answer: 'Answer B' },
=======
        { question: 'Can I return or exchange clothing if it does not fit?', answer: 'Answer 8' },
        { question: 'What are the care instructions for the clothing items?', answer: 'Answer 9' },
>>>>>>> 5ca3efa4986f108a04031ca9e7892d14ab630987

        { question: 'Can I return or exchange clothing if it does not fit?', answer: 'Answer 8' },
        { question: 'What are the care instructions for the clothing items?', answer: 'Answer 9' },

      ],
    },
    {
      category: 'Accessories FAQs',
      questions: [
        { question: 'Are the accessories hypoallergenic?', answer: 'Answer A' },
        { question: 'Do you offer warranties on accessories?', answer: 'Answer B' },
        { question: 'Explain whether your accessories come with any warranties or guarantees against defects.', answer: 'Answer B' },
      ],
    },
    {
      category: 'Homemade Food Items FAQs',
      questions: [
        { question: 'What is the shelf life of your homemade food products?', answer: 'Answer A' },
        { question: 'Do you accommodate special dietary requirements?', answer: 'Answer B' },
        { question: 'How are the homemade food items packaged to ensure freshness during shipping?', answer: 'Answer B' },
      ],
    },
    {
      category: 'Home Decor FAQs',
      questions: [
        { question: 'Do you provide installation instructions for your home decor items?', answer: 'Answer A' },
        { question: 'Can I return home decor items if they do not match my interior? ', answer: 'Answer B' },
        { question: 'How are the homemade food items packaged to ensure freshness during shipping?', answer: 'Answer B' },
        { question: 'Clarify the accuracy of the dimensions listed for your home decor products?', answer: 'Answer B' },
      ],
    },
  ];

  const toggleQuestion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex w-full m-auto container flex-col">
      <div className="faq-content text-center space-y-10">
        {faqData.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl mt-5 mb-5 font-semibold">{category.category}</h2>
            <div className="m-3 space-y-6 md:w-2/3 lg:w-1/2 mx-auto">
              {category.questions.map((faq, faqIndex) => (
                <div key={faqIndex} className="text-center">
                  <div
                    className={`cursor-pointer p-4 bg-white rounded-lg shadow-md text-left relative ${
                      activeIndex === index * 1000 + faqIndex ? 'rounded-b-none' : ''
                    }`}
                    onClick={() => toggleQuestion(index * 1000 + faqIndex)}
                  >
                    <div className="flex justify-between items-center">
                      <p className="">{faq.question}</p>
                      <span className="transform transition-transform">
                        {activeIndex === index * 1000 + faqIndex ? '-' : '+'}
                      </span>
                    </div>
                    {activeIndex === index * 1000 + faqIndex && (
                      <div className={`mt-2`}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;