import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    console.log("Working");

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const coffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };
    console.log(coffee);

    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item Added Successfully",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleAddCoffee}
        className="max-w-4xl mx-auto p-5 md:p-10 bg-base-200 shadow-md rounded-xl"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-[#d2b48c] font-mono">
          Add New Coffee
        </h1>
        <p className="text-sm mb-10 font-mono">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-[#D2B48C] peer"
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Name
            </label>
          </div>

          {/* Chef */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="chef"
              id="chef"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-[#D2B48C] peer"
            />
            <label
              htmlFor="chef"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Chef
            </label>
          </div>

          {/* Supplier */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="supplier"
              id="supplier"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-[#D2B48C] peer"
            />
            <label
              htmlFor="supplier"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Supplier
            </label>
          </div>

          {/* Taste */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="taste"
              id="taste"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-[#D2B48C] peer"
            />
            <label
              htmlFor="taste"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Taste
            </label>
          </div>

          {/* Category */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="category"
              id="category"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-[#D2B48C] peer"
            />
            <label
              htmlFor="category"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Category
            </label>
          </div>

          {/* Details */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="details"
              id="details"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-[#D2B48C] peer"
            />
            <label
              htmlFor="details"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Details
            </label>
          </div>

          {/* Photo */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-[#D2B48C] peer"
            />
            <label
              htmlFor="photo"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Photo URL
            </label>
          </div>

          {/* Price */}
          <div className="relative z-0 w-full group">
            <input
              type="number"
              name="price"
              id="price"
              placeholder=" "
              required
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-[#D2B48C] peer"
            />
            <label
              htmlFor="price"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Price (USD)
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="btn bg-[#D2B48C] text-base-300 w-full font-mono border-2 border-[#826750]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
