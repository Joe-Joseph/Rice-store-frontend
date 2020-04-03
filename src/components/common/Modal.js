import React from 'react';
import { Modal } from 'reactstrap';

const ModalExample = ({ modal, toggle, children, closemodal }) => {

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} centered>
        <div className="my-modal-header">
          <span className="sell-form-title">Fill the information</span>
          <div className="close-modal" onClick={closemodal}>
            &times;
          </div>
        </div>
        <div>
          {children}
        </div>
      </Modal>
    </div>
  );
}

export default ModalExample;
