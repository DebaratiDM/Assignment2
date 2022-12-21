import React from "react";

const Checkbox = () => {
  return (
    <div>
      <input type="checkbox" name="men" value="men" />
      <label for="checkbox">dresses</label>
      <br />

      <input type="checkbox" name="women" value="women" />
      <label for="checkbox">ethnic dresses</label>
    </div>
  );
};

export default Checkbox;
