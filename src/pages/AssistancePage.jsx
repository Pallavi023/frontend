import React, { useState } from 'react';
import CaAssitance from '../component/Assitance/CaAssitance';
import Registrations from '../component/Assitance/Registrations';
import BusinessConsultants from '../component/Assitance/BusinessConsultants';
import DesignsNPhotography from '../component/Assitance/DesignsNPhotography';
import GrowYourBusiness from '../component/Assitance/GrowYourBusiness';

const AssistancePage = () => {
  // State to track which component is currently open
  const [activeComponent, setActiveComponent] = useState(null);

  // Function to toggle the visibility of a component
  const toggleComponent = (componentName) => {
    if (activeComponent === componentName) {
      // Clicking on the active component again hides it
      setActiveComponent(null);
    } else {
      setActiveComponent(componentName);
    } 
  };

  return (
    <div className="p-4 max-w-[1300px] mx-auto flex flex-col">
      <h1 className="text-3xl font-bold mb-4 flex justify-center items-center">
        Assistance
      </h1>

      <div className="mb-4">
        <div
          className={`cursor-pointer mb-2 text-xl font-semibold ${
            activeComponent === 'CaAssitance' ? 'text-blue-500' : 'text-gray-700'
          }`}
          onClick={() => toggleComponent('CaAssitance')}
          style={
            activeComponent === 'CaAssitance'
              ? {
                  border: '1px solid #007BFF',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  padding: '8px',
                  borderRadius: '4px',
                }
              : {}
          }
        >
          CA Assistance
        </div>
        {activeComponent === 'CaAssitance' && <CaAssitance />}
      </div>

      <div className="mb-4">
        <div
          className={`cursor-pointer mb-2 text-xl font-semibold ${
            activeComponent === 'Registrations' ? 'text-blue-500' : 'text-gray-700'
          }`}
          onClick={() => toggleComponent('Registrations')}
          style={
            activeComponent === 'Registrations'
              ? {
                  border: '1px solid #007BFF',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  padding: '8px',
                  borderRadius: '4px',
                }
              : {}
          }
        >
          Registrations
        </div>
        {activeComponent === 'Registrations' && <Registrations />}
      </div>

      <div className="mb-4">
        <div
          className={`cursor-pointer mb-2 text-xl font-semibold ${
            activeComponent === 'BusinessConsultants' ? 'text-blue-500' : 'text-gray-700'
          }`}
          onClick={() => toggleComponent('BusinessConsultants')}
          style={
            activeComponent === 'BusinessConsultants'
              ? {
                  border: '1px solid #007BFF',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  padding: '8px',
                  borderRadius: '4px',
                }
              : {}
          }
        >
          Business Consultants
        </div>
        {activeComponent === 'BusinessConsultants' && <BusinessConsultants />}
      </div>

      <div className="mb-4">
        <div
          className={`cursor-pointer mb-2 text-xl font-semibold ${
            activeComponent === 'DesignsNPhotography' ? 'text-blue-500' : 'text-gray-700'
          }`}
          onClick={() => toggleComponent('DesignsNPhotography')}
          style={
            activeComponent === 'DesignsNPhotography'
              ? {
                  border: '1px solid #007BFF',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  padding: '8px',
                  borderRadius: '4px',
                }
              : {}
          }
        >
          Designs & Photography
        </div>
        {activeComponent === 'DesignsNPhotography' && <DesignsNPhotography />}
      </div>

      <div className="mb-4">
        <div
          className={`cursor-pointer mb-2 text-xl font-semibold ${
            activeComponent === 'GrowYourBusiness' ? 'text-blue-500' : 'text-gray-700'
          }`}
          onClick={() => toggleComponent('GrowYourBusiness')}
          style={
            activeComponent === 'GrowYourBusiness'
              ? {
                  border: '1px solid #007BFF',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                  padding: '8px',
                  borderRadius: '4px',
                }
              : {}
          }
        >
          Grow Your Business
        </div>
        {activeComponent === 'GrowYourBusiness' && <GrowYourBusiness />}
      </div>
    </div>
  );
};

export default AssistancePage;
