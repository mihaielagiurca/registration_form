import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to get the state
import "../index.css";

function SubmittedDataPage() {
  const location = useLocation(); // Get the current location
  const submittedData = location.state?.submittedData; // Get the passed data (if it exists)
  const navigate = useNavigate();
  return (
    
    <div className="submitted_form">
      <h2>Submitted User Data:</h2>
      {submittedData ? (
         <div>
   
         <p><strong>Name:</strong> {submittedData?.firstName} {submittedData?.lastName}</p>
         <p><strong>Date of Birth:</strong> {submittedData?.dob}</p>
         <p><strong>Gender:</strong> {submittedData?.gender}</p>
         <p><strong>Email:</strong> {submittedData?.email}</p>
         <p><strong>Phone:</strong> {submittedData?.phone}</p>
         <p><strong>Emergency contact:</strong> {submittedData?.emergencyContactName}</p>
         <p><strong>Relathionship:</strong> {submittedData?.relationship}</p>
         <p><strong>Phone number:</strong> {submittedData?.emergencyPhone}</p>
         <p><strong>Sport:</strong> {submittedData?.sport}</p>
         <p><strong>Level:</strong> {submittedData?.skills}</p>
       </div>
      ) : (
        <p>No data available</p>
      )}
      <button onClick={() => navigate('/')}>Go back to form</button>
    </div>
  );
  
}

export default SubmittedDataPage;
