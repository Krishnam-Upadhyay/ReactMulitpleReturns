import { useState } from 'react';

const ControledInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitChange = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
  };
  return (
    <form className="form" onSubmit={handleSubmitChange}>
      <h4>Multiple Inputs</h4>

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
      </div>
      <br />
      <div className="form-row">
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
      </div>
      <div className="form-row">
        <label htmlFor="Password" className="form-label">
          Email:
        </label>
        <input
          type="password"
          className="form-input"
          id="Password"
          value={password}
          onChange={handleEmailChange}
          placeholder="abc@gmail.com"
        />
      </div>
      <br />
      <div className="form-row">
        <button type="submit" className="form-button">
          Submit
        </button>
      </div>
      <br />
    </form>
  );
};
export default ControledInput;
