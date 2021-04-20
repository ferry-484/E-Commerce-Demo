import React, { useState } from "react";

const details = ["address", "payment"];
const CheckOut = () => {
    const [status, setStatus] = useState(0);
  return (
    <>
      <div>
        {details.map((value) => (
          <li></li>
        ))}
      </div>
    </>
  );
};

export default CheckOut;
