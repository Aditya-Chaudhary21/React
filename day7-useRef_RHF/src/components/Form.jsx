import React  from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  let {
    handleSubmit,
    register,
    reset,
    formState: errors,
  } = useForm();
  

  return (
    <div className=" h-screen bg-gray-400 p-3">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
        className="flex bg-white flex-col gap-3 w-2xs h-20px p-3 rounded-2xl"
      >
        <input
          className="p-2 rounded-2xl border-2"
          type="text"
          placeholder="Product Name"
          {...register("productName", { required: true })}
        />
        <input
          {...register("price", { required: true })}
          className="p-2 rounded-2xl border-2"
          type="text"
          placeholder="Price"
        />
        <label htmlFor="file">Select Category</label>
        <select
          {...register("category", { required: true })}
          className="p-2 rounded-2xl border-2"
          name="file"
          id="file"
        >
          <option className="p-2 rounded-2xl border-2">Mens</option>
          <option className="p-2 rounded-2xl border-2">Women</option>
          <option className="p-2 rounded-2xl border-2">Kids</option>
        </select>
        <input
          {...register("image", { required: true })}
          className="p-2 rounded-2xl border-2"
          type="url"
          placeholder="Image URL"
        />
        <button className="p-2 bg-blue-600 text-white rounded-2xl">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Form;
