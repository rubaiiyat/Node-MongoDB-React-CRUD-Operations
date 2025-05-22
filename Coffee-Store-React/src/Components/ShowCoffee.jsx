import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ShowCoffee = ({ coffee, onDelete }) => {
  const { _id, name, taste, category, photo, price } = coffee;

  return (
    <div className="card md:flex-row flex-col bg-base-200 shadow-lg">
      {/* Image */}
      <figure className="md:w-1/3 w-full">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover rounded-t-md md:rounded-t-none md:rounded-l-md"
        />
      </figure>

      {/* Content */}
      <div className="card-body md:flex-row flex-col justify-between items-start md:items-center w-full gap-4">
        {/* Info */}
        <div className="text-start space-y-2 md:w-9/12 w-full">
          <h2 className="card-title text-xl font-bold">{name}</h2>
          <p>
            <span className="font-semibold">Taste: </span>
            <span className="text-gray-300">{taste}</span>
          </p>
          <p>
            <span className="font-semibold">Category: </span>
            <span className="text-gray-300">{category}</span>
          </p>
          <p>
            <span className="font-semibold">Price: </span>
            <span className="text-gray-300">${price}</span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex md:flex-col flex-row gap-2 items-center">
          <button className="btn  bg-[#D2B48C] text-white text-lg">
            <FaEye />
          </button>
          <button className="btn bg-[#3C393B] text-white text-lg">
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(_id)}
            className="btn  btn-error text-white text-lg"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCoffee;
