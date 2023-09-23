import React,{ useState } from "react";

const VendorPolicyPopup = ({ onClose, onAgree }) => {
    const [isAgreed, setIsAgreed] = useState(false);

    const policyGuidelines = [
        "<strong>Purpose of this Policy:</strong> Our aim is to facilitate hassle-free business conduct and uphold ethical standards within our operations. By registering as a vendor, you agree to abide by the following guidelines and policies:",
        "<strong>Required Documents:</strong> To get started, you must submit all necessary documents via our app. These documents will undergo review and approval by our team before you can complete your registration.",
        "<strong>Product Guidelines:</strong> Your products should be genuine, maintaining the promised quality and quantity. Clear and high-quality images of your products must be provided. Include a size chart for your products to assist customers. Set prices that are reliable and avoid making frequent price changes.",
        "<strong>Communication:</strong> Keep your product information updated to provide accurate details to potential buyers. Avoid frequent price changes in the system. Only a maximum of 20% decrement or increment of prices would be acceptable by the system, for a change of pricing above or below 20% needs an approval of 'The Ekaiv'.",
        "<strong>Vendor Conduct:</strong> Act fairly and honestly in all your business dealings. Show loyalty not only towards 'The Ekaiv' but also to our valued customers.",
        "<strong>Policy Compliance:</strong> Any infringements of these policies may result in penalties or other consequences. It's essential to maintain delivery schedules, as delayed deliveries can negatively impact your vendor rating.",
        "<strong>Ethical Business Conduct:</strong> We hold ourselves to high standards of ethics and responsible business conduct. Safeguard and respect the confidentiality of information provided to you.",
        "<strong>Required Documents for Registration:</strong> To complete your registration, ensure you have the following documents ready: Gumasta License registration, UDYAM Registration, MSME certificate, FSSAI compulsory (for food Brands), or any other registration (state-wise). A copy of the front page of the Passbook of your business account is a must-have.",
        "<strong>Packaging and Quality:</strong> As a vendor, you are responsible for packaging your products securely and delivering them as promised to customers."
    ];

    const handleCheckboxChange = (e) => {
        setIsAgreed(e.target.checked);
      };
      
      const handleClose = () => {
        onClose();
      };


    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white p-6 max-w-md rounded-md shadow-lg border border-slate-200">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Vendor Registration Policies:</h2>
          <hr className=" border-gray-300 m-2" />
          <div className="max-h-[300px] overflow-y-auto">
            <ul className="list-disc pl-6 pr-6">
              {policyGuidelines.map((guideline, index) => (
                <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: guideline }} />
              ))}
            </ul>
          </div>
          
          
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="agreeCheckbox"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className="mr-2"
            />

            <label htmlFor="agreeCheckbox">I agree to the policies</label>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-white bg-[#8A58DC] rounded hover:bg-[#F16080]"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className={`ml-2 px-4 py-2 text-white bg-[#8A58DC] rounded ${
              isAgreed ? "hover:bg-green-600" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={onAgree}
            disabled={!isAgreed}
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  
    );
};

export default VendorPolicyPopup;