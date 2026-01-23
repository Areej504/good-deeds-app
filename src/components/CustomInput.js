import React, { useState } from "react";

function CustomInput({ value, setValue, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Enter a good deed you did today :)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">I did this!</button>
    </form>
  );
}

export default CustomInput;
