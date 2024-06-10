import React from "react";
import "../assets/pages/PaymentProof.css";
import Header from "../components/Header";

const PaymentProof = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("File uploaded:", file);
    // Add logic to handle file upload
  };

  return (
    <>
      <Header />
      <div className="payment-proof-container">
        <div className="card">
          <h2>Scan the QRIS code</h2>
          <p>Open your mobile banking app, and scan the QR code below</p>
          <img src="/images/barcode.png" alt="QR Code" className="qr-code" />
          <div className="qr-code-info">RIO MAULANA</div>
          <div className="qr-code-id">NMID: 0128371039212180</div>
          <div className="qr-code-id">A01</div>
        </div>
        <div className="card">
          <h2>Upload your payment proof</h2>
          <p>Screenshot the payment information.</p>
          <div className="upload-area">
            <input
              type="file"
              id="file-upload"
              accept="image/jpeg, image/png, image/jpg"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <p>
                Drag & drop files or <a>Browse</a>
              </p>
            </label>
            <p>Supported formats: JPEG, PNG, JPG</p>
          </div>
          <button className="upload-button">Upload</button>
        </div>
      </div>
    </>
  );
};

export default PaymentProof;
