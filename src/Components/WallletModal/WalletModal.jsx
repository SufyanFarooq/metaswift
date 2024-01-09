import React, { useState } from 'react';
import { Modal, Input, Button, notification } from 'antd';
import "./WalletModal.css"
const WalletModal = ({open,data,onClose,sendOtp}) => {
  const [walletAddress, setWalletAddress] = useState('');


  const handleWalletInputChange = (e) => {
    setWalletAddress(e.target.value);
  };


  const handleOk = () => {
    // Perform any additional logic if needed
    // For now, just close the modal
    // setIsModalVisible(false);
  };

  const handleSendOTP = () => {
    // Perform logic to send OTP
    // For now, just show a notification with the wallet address
    notification.success({
      message: 'OTP Sent!',
      description: `OTP sent to wallet address: ${walletAddress}`,
    });

    // Optionally, close the modal after sending OTP
    // setIsModalVisible(false);
  };

    

  return (
    <div className='container responsive-modal'>

      <Modal
        title="Confirm Wallet Address"
        open={open}
        onOk={handleOk}
        onCancel={onClose}
        footer={[
          <Button key="cancel" onClick={onClose} type='primary' danger>
            Cancel
          </Button>,
          <Button key="confirm" type="primary"  onClick={sendOtp}>
            Send Otp
          </Button>,
        ]}
      >
        <p>Are you sure the wallet address is correct?</p>
        <Input
          placeholder="Enter Wallet Address"
          value={data}
          onChange={handleWalletInputChange}
          readOnly
        />
      </Modal>
    </div>
  );
};

export default WalletModal;
