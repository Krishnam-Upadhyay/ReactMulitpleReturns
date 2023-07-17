import './app.css';
import { useState } from 'react';
const ControledInput = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmitChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };
  const handleSSubmitChange = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form className="form" onSubmit={handleSSubmitChange}>
      <h4>Controled Input</h4>
      <div className="form-row">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          id="Name"
          value={user.name}
          onChange={handleSubmitChange}
          placeholder="Your Name"
          name="name"
        />
        <br />

        <label htmlFor="password" className="form-label">
          password:
        </label>
        <input
          type="password"
          className="form-input"
          id="password"
          value={user.password}
          onChange={handleSubmitChange}
          placeholder="abc@gmail.com"
          name="password"
        />
        <br />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={user.email}
          onChange={handleSubmitChange}
          placeholder="abc@gmail.com"
          name="email"
        />
        <br />
        <button type="submit" className="form-button">
          Submit
        </button>
      </div>
    </form>
  );
};
export default ControledInput;
