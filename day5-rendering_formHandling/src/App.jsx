import React, { useState } from "react";

const App = () => {
  let [formData, setFormData] = useState({});
  console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      <input
        name="name"
        onChange={handleChange}
        className="border-2 p-3"
        type="text"
        placeholder="Enter your name"
      />
      <input
        name="email"
        onChange={handleChange}
        className="border-2 p-3"
        type="text"
        placeholder="Enter your email"
      />
      <input
        name="password"
        onChange={handleChange}
        className="border-2 p-3"
        type="text"
        placeholder="Enter your password"
      />
        <input
        name="contact"
        onChange={(e)=>{console.log(e)}}
        className="border-2 p-3"
        type="text"
        placeholder="Enter your password"
      />
      <button className="p-2 bg-blue-500 text-white">Submit</button>
      <h1>{formData.name}</h1>
      <h1>{formData.email}</h1>
      <h1>{formData.password}</h1>
    </div>
  );
};

export default App;
