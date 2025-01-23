import React, { useState } from 'react';
import './ScrollToTop.css'; 
import SupportModal from './SupportModal';
const ScrollToSupport = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSupport = () => {
    setShowModal(true);  
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div className='support-modal'>
         {showModal && <SupportModal showModal={showModal} handleCloseModal={handleCloseModal} />}
    <div className="support-icon-container">
      <p className='support-p'>How can I help you!</p>
      <div className="support-icon blink" style={{ fontSize: '2rem' }} onClick={handleSupport}>
        <span className="material-symbols-outlined icon-support">
          support_agent
        </span>
      </div>
    </div>
    </div>
  );
};

export default ScrollToSupport;
