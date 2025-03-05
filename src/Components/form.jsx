import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../index.css"

function Form() {
  const navigate = useNavigate(); 
  // State variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [sport, setSport] = useState('');
  const [skills, setSkills] = useState('');

  const [submittedData, setSubmittedData] = useState(null);
  
 

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a user object with all form data
    const userData = {
      firstName,
      lastName,
      dob,
      gender,
      email,
      phone,
      emergencyContactName,
      relationship,
      emergencyPhone,
      sport,
      skills,
    };
  
    // Send POST request to the backend server
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      navigate('/submitted', { state: { submittedData: userData } });
      
   
      
      if (response.ok) {
    
        alert('Form submitted successfully');

        setSubmittedData(data);

        setFirstName('');
        setLastName('');
        setDOB('');
        setGender('');
        setEmail('');
        setPhone('');
        setEmergencyContactName('');
        setRelationship('');
        setEmergencyPhone('');
        setSport('');
        setSkills('');

      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

    return(
        <div className="form-container">
            <h1>Sport Registration Form - EHT Atletics</h1>
            <div className="subtitle">
              <h3>Participant Information:</h3>
            </div>
        
            <form onSubmit={handleSubmit}>
              <div className="info-container">
                <div className = "row">
                <div className="first-name">
                  <label>First Name:</label>
                  <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      />
                </div>

                <div className="last-name">
                  <label>Last Name:</label>
                  <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      />
                </div>
                </div>
                <div className = "row">
                <div className="DOB">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dob"
                        value={dob}
                        
                        onChange={(e) =>setDOB(e.target.value)}
                        required
                    />
                    console.log(e.target.value); 
                    </div>
                    
                    <div className="gender">
                      <label>Gender:</label>
                      <div className="gender-input">
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={gender === 'Male'}
                            onChange={(e) => setGender(e.target.value)}
                            required
                          />
                        Male
                      </label>
                      <label className="gender-input">
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={gender === 'Female'}
                          onChange={(e) => setGender(e.target.value)}
                          required
                        />
                        Female
                      </label>
                      </div>
                    </div>
                </div>
               <div className="row"> 
                 <div className="email">
                <label>Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="phone-number">
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$" // Optional regex for phone number validation
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              </div> 
            
            </div>
        <div className="subtitle">
           <h3>Emergency Contact</h3>
        </div>
        <div className = "row">
        <div className="emergency-contact-name">
          <label>Emergency Contact Name</label>
          <input
              type="text"
              name="emergencyContactName"
              value={emergencyContactName}
              onChange={(e) => setEmergencyContactName(e.target.value)}
              >
          </input>
        </div>
        </div>
        <div className = "row">
          <div className="emergency-contact-relationship">
          <label>Relationship to Participant</label>
          <input
              type="text"
              name="relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              >
          </input>
          </div>
          <div className="emergency-contact-number">
         <label>Emergency Contact Number</label>
        <input
            type="emergency-tel"
            name="emergency-phone"
            value={emergencyPhone}
            onChange={(e) => setEmergencyPhone(e.target.value)}
           pattern="^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$" // Optional regex for phone number validation
           placeholder="+1 (609) 123-4567"
           required >
        </input> 
        </div>
        </div>
        <div className="subtitle">
        <h3>Sports Information</h3>
        </div>
        <div className="row">
        <div className="sport-information">
        <label>Sport Interest In:</label>
        <div className="sport-option">
        <div>
          <input
                  type="radio"
                  name="sport"
                  value="soccer"
                  checked={sport === 'soccer'}
                  onChange={(e) => setSport(e.target.value)}
                  required
          ></input>
        Soccer
        </div>
        <div>
          <input
                  type="radio"
                  name="sport"
                  value="tennis"
                  checked={sport === 'tennis'}
                  onChange={(e) => setSport(e.target.value)}
                  required
          ></input>
          Tennis
        </div>
        <div>
          <input
                  type="radio"
                  name="sport"
                  value="basketball"
                  checked={sport === 'basketball'}
                  onChange={(e) => setSport(e.target.value)}
                  required
          ></input>
           Basketball
        </div>
        <div>
          <input
                  type="radio"
                  name="sport"
                  value="football"
                  checked={sport === 'football'}
                  onChange={(e) => setSport(e.target.value)}
                  required
          ></input>
          Football
        </div>
        <div>
          <input
                  type="radio"
                  name="sport"
                  value="lacross"
                  checked={sport === 'lacross'}
                  onChange={(e) => setSport(e.target.value)}
                  required
          ></input>
          Lacross
        </div>
        <div>
          <input
                  type="radio"
                  name="sport"
                  value="track"
                  checked={sport === 'track'}
                  onChange={(e) => setSport(e.target.value)}
                  required
          ></input>
          Track
        </div>
        <div>
          <input
                  type="radio"
                  name="sport"
                  value="volleyball"
                  checked={sport === 'volleyball'}
                  onChange={(e) => setSport(e.target.value)}
                  required
          ></input>
          Volleyball
        </div>
        <div>
            <input
                    type="radio"
                    name="sport"
                    value="crew"
                    checked={sport === 'crew'}
                    onChange={(e) => setSport(e.target.value)}
                    required
            ></input>
            Crew 
        </div>
        </div>
       </div>
       </div>
       <div className="row">
       <div className="sport-information">
          <label>Skill Level:</label>
      <div className="sport-option">
        <div>
          <input
                    type="radio"
                    name="skills"
                    value="begginer"
                    checked={skills === 'begginer'}
                    onChange={(e) => setSkills(e.target.value)}
                    required
            ></input>
            Begginer
        </div>
        <div>
        <input
                type="radio"
                name="skills"
                value="intermediate"
                checked={skills === 'intermediate'}
                onChange={(e) => setSkills(e.target.value)}
                required
        ></input>
        Intermediate
        </div>
        <div>
        <input
                type="radio"
                name="skills"
                value="advanced"
                checked={skills === 'advanced'}
                onChange={(e) => setSkills(e.target.value)}
                required
        ></input>
        Advanced
        </div>
        </div>
       </div>
      </div>
        <div className="button">
            <button type="submit">Submit</button>
        </div>
                    
      </form>
        
    
      {submittedData && (
        <div>
          <h2>Submitted User Data:</h2>
          <p><strong>Name:</strong> {submittedData.user.firstName} {submittedData.user.lastName}</p>
          <p><strong>Date of Birth:</strong> {submittedData.user.DOb}</p>
          <p><strong>Gender:</strong> {submittedData.user.gender}</p>
          <p><strong>Email:</strong> {submittedData.user.email}</p>
          <p><strong>Phone:</strong> {submittedData.user.phone}</p>
          <p><strong>Emergency contact:</strong> {submittedData.user.emergencyContactName}</p>
          <p><strong>Relathionship:</strong> {submittedData.user.relationship}</p>
          <p><strong>Phone number:</strong> {submittedData.user.emergencyPhone}</p>
          <p><strong>Sport:</strong> {submittedData.user.sport}</p>
          <p><strong>Level:</strong> {submittedData.user.skills}</p>
        </div>
      )}
    </div>
  );
}
export default Form;