import { useState } from 'react';
import './app.css';
const ControledInput = () => {
  const [value, setValue] = useState(0);

  const handleSubmitChange = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    // console.log(formData.get('email'));

    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
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
          placeholder="Your Name"
          name="name"
        />
        <br />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
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
