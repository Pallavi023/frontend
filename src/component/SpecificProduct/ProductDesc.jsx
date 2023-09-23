import React, { useState } from 'react';

function ExpandableDiv({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-[#F7FAFC] p-4 border border-[#F16080] rounded-sm w-full mb-4 relative cursor-pointer ${isExpanded ? 'expanded' : ''
        }`}
      onClick={toggleExpand}
    >
      <button
        className={`absolute text-3xl top-2 right-2 mr-2 text-[#5156E9] transform transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
        onClick={(e) => {
          e.stopPropagation(); // Prevent the div click event from triggering
          toggleExpand(); // Toggle the expand/collapse state
        }}
      >
        {isExpanded ? '-' : '+'}
      </button>
      <div className="mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className={isExpanded ? 'block' : 'hidden'}>
        {content}
      </div>
    </div>
  );
}

function ProductDesc() {
  return (
    <>
      <ExpandableDiv
        title="Product Details"
        content={
          <ul>
            <li>Not intended for use as Personal Protective Equipment (PPE)</li>
            <li>Weight: 310g (men's size 9)</li>
            <li>Heel-to-toe drop: 9mm</li>
            <li>Colour Shown: Light Cream/Coconut Milk/Oxygen Purple/Light Orewood Brown</li>
            <li>Style: DR2615-200</li>
            <li>Country/Region of Origin: Vietnam</li>
          </ul>
        }
      />

      <ExpandableDiv
        title="Dimensions"
        content={
          <div>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/2696715b-0b95-4c43-b43c-ab428a52b436/how-to-measure-your-foot-to-find-the-right-shoe-size.jpg" alt="" />
          </div>
        }
      />

      <ExpandableDiv
        title="Care Instructions"
        content={
          <div>
            <p>Supplies:</p>
            <ol>
              <li>Washing-up Liquid</li>
              <li>Bicarbonate of Soda</li>
              <li>Household Magic Eraser (Optional)</li>
              <li>Leather Conditioner (Optional)</li>
              <li>White Vinegar (Optional)</li>
            </ol>
            <p>Tools:</p>
            <ol>
              <li>Shoe Brush</li>
              <li>Toothbrush</li>
              <li>Soft Clean Cloth</li>
              <li>Suede Brush (Optional)</li>
            </ol>
          </div>
        }
      />


      <ExpandableDiv
        title="Customization"
        content={
          <ul>
            <li>Details 4a</li>
            <li>Details 4b</li>
          </ul>
        }
      />

      <ExpandableDiv
        title="Product Details 5"
        content={
          <ul>
            <li>Details 5a</li>
            <li>Details 5b</li>
          </ul>
        }
      />
    </>
  );
}

export default ProductDesc;
