import './app.css';
import { useState } from 'react';
const framworks = ['react', 'angular', 'view', 'svelte'];
const ControledInput = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');

  const handleSubmitChange = (e) => {
    e.preventDefault();
    let data = { check: shipping, framework: framework };
    console.log(data);
  };
  const handleShipping = (e) => {
    e.preventDefault();
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handleFramwork = (e) => {
    e.preventDefault();

    setFramework(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmitChange}>
      <h4>Controled Input</h4>
      <div className="form-row">
        <label htmlFor="Shipping" className="form-label">
          free Shipping
        </label>
        <input
          type="checkbox"
          className="form-input"
          id="Shipping"
          name="shipping"
          checked={shipping}
          onChange={handleShipping}
        />
        <br />

        <label htmlFor="framework" className="form-label">
          framwork:
        </label>
        <select
          name="framework"
          id="framework"
          value={framework}
          onChange={handleFramwork}
        >
          {framworks.map((framwork) => {
            return <option key={framwork}>{framwork}</option>;
          })}
        </select>

        <br />

        <button type="submit" className="form-button">
          Submit
        </button>
      </div>
    </form>
  );
};
export default ControledInput;
