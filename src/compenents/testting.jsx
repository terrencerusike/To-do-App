import React from "react";
import { useState } from "react";

const testting = () => {
  const [input, setinput] = useState([]);

  const btnFn = (tag) => {
    if (input.some((index) => index === tag)) {
      const newfilter = input.filter((index) => index !== tag);
      setinput((prev) => {
        return { ...prev, input: newfilter };
      });
    } else {
      setinput((prev) => {
        return { ...prev, input: [...prev.input, tag] };
      });
    }
  };
};

return (
  <div>
    <button type="button" className="" onClick={btnFn}>
      HTML
    </button>
  </div>
);

export default testting;
