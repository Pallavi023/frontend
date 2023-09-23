import React from "react";

const InputBox = (props) => {
  const { key, ...fields } = props;
  return (
    <>
      
      <label className='block text-gray-700 text-sm font-bold text-left mb-2'>
    {fields.label}
  </label>
  <input
   {...fields}
    className='border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
    required
  />
    </>
  );
};

export default InputBox;

