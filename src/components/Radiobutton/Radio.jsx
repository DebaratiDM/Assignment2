import React from "react";

const Radio = () => {
  return (
    <div>
      <input type="radio" name="men" value="men" />
      <label for="radio">men</label>
      <br/>

      <input type="radio" name="women" value="women" />
      <label for="contactChoice2">women</label>
    </div>
  );
};

export default Radio;
