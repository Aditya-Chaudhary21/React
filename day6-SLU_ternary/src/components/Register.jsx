import React, { useState } from "react";

const Register = ({ setUsers, users }) => {
  let [formData, setFormData] = useState({
    name: "aa",
    email: "a@agmail.com",
    password: "123",
    image : "https://images.unsplash.com/photo-1773332598414-44a45e364d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
  });

  console.log(users);
   
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users , formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      image:""
    });
  }

  return (
    <div className="bg-gray-300 p-4 rounded-2xl flex flex-col gap-4">
      <h1 className="text-xl font-bold self-center ">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center justify-center ">
        <input
        value={formData.name}
        required
        name="name"
          onChange={handleChange}
          className="border-2 border-gray-200 rounded-2xl w-full p-2 text-base"
          type="text"
          placeholder="Name"
        />
        <input
        required
        value={formData.email}
        name="email"
          onChange={handleChange}
          className="border-2 border-gray-200 rounded-2xl w-full p-2 text-base"
          type="text"
          placeholder="Email"
        />
        <input
        required
        value={formData.password}
        name="password"
          onChange={handleChange}
          className="border-2 border-gray-200 rounded-2xl w-full p-2 text-base"
          type="password"
          placeholder="Password"
        />
         <input
        required
        value={formData.image}
        name="image"
          onChange={handleChange}
          className="border-2 border-gray-200 rounded-2xl w-full p-2 text-base"
          type="url"
          placeholder="Image URL"
        />
        <button className="text-white w-full rounded-2xl p-3 bg-blue-600 cursor-pointer">
          Register
        </button>
      </form>
      <p>
        Already have account ?{" "}
        <span
          
          className="text-blue-600 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
