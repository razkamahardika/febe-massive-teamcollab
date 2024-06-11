import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/pages/PaymentProof.css";
import Header from "../components/Header";

const PaymentProof = () => {
  const [proofImage, setProofImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
      setProofImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Create a preview URL for the image
      setError("");
    } else {
      setError("Unsupported file format. Please upload a JPEG, PNG, or JPG file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!proofImage) {
      setError("Please upload the proof of payment.");
      return;
    }

    const formData = new FormData();
    formData.append("proofImage", proofImage);

    try {
      const response = await fetch("http://localhost:8081/api/upload-proof", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate("/profile"); // Navigate to profile page after successful upload
      } else {
        setError("Failed to upload payment proof. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading payment proof:", error);
      setError("Failed to upload payment proof. Please try again.");
    }
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
          <form onSubmit={handleSubmit}>
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
              {previewImage && <img src={previewImage} alt="Preview" className="preview-image-small" />} {/* Add small image preview */}
              <p>Supported formats: JPEG, PNG, JPG</p>
            </div>
            {error && <span className="error-message">{error}</span>}
            <button type="submit" className="upload-button">Upload</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentProof;