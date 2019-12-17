import React from 'react';

function FormContainer() {
  return (
    <div className="form-container">
      <form>
        <input type="text" className="input-form"></input>
        <input type="submit" value="submit" className="submit-button"></input>
      </form>
    </div>
  );
}

export default FormContainer;