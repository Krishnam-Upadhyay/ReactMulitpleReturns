import './app.css';
import { useState } from 'react';
const ControledInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showemail, setShowEmail] = useState('');
  const [showName, setShowName] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleSubmitChange = (e) => {
    e.preventDefault();
    setShowName(name);
    setShowEmail(email);
  };

  return (
    <form className="form" onSubmit={handleSubmitChange}>
      <h4>Controled Input</h4>
      <div className="form-row">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          id="Name"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
        />
        <br />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="abc@gmail.com"
        />
        <br />
        <button type="submit" className="form-button">
          Submit
        </button>
        <br />
        <h4>{showName}</h4>

        <h4>{showemail}</h4>
      </div>
    </form>
  );
};
export default ControledInput;
