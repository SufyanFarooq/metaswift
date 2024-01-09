
import React from 'react';
import { Modal } from 'antd';
import "./popup.css"

const ImagePopupAnt = ({ imageUrl, visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnClose
      className='popupbody'
    >
      <img src={imageUrl} alt="Popup" style={{ width: '100%', height: 'auto' }} className='popupImage' />
    </Modal>
  );
};

export default ImagePopupAnt;
