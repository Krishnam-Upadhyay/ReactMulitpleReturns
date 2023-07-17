import { useState } from 'react';
const ControledInput = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');

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
    if (!name) {
      return;
    }
    const fakeUser = Date.now();
    const newUser = { id: fakeUser, name };
    const updatedUser = [...user, ...newUser];
    setUser(updatedUser);

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
