import { Link, useLoaderData } from "react-router";
import "./App.css";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { GiCoffeeMug } from "react-icons/gi";
import ShowCoffee from "./Components/ShowCoffee";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this coffee?",
      text: "This brew will be gone forever. Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6f4e37",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
                confirmButtonColor: "#6f4e37",
              });

              const updatedCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(updatedCoffees);
            } else {
              Swal.fire({
                icon: "error",
                title: "Delete Failed",
                text: "The coffee could not be deleted from server.",
                confirmButtonColor: "#6f4e37",
              });
            }
          });
      } else {
        Swal.fire({
          icon: "info",
          title: "Cancelled",
          text: "Your coffee is safe.",
          confirmButtonColor: "#6f4e37",
        });
      }
    });
  };

  return (
    <div>
      <p className="font-mono"> --- Sip & Savor --- </p>
      <h1 className="text-xl md:text-4xl font-bold font-mono text-[#E2B577] flex justify-center items-center mt-2">
        <BiSolidCoffeeTogo />
        Our Popular Coffees
      </h1>
      <p className="mt-2 mb-2 font-mono">
        These are the coffees our community can’t stop sipping — maybe your next
        favorite is here!
      </p>

      <Link to={"/addcoffee"}>
        <button className="btn bg-[#E2B577] text-xm text-black font-mono mt-5">
          Add Coffee{" "}
          <span className="text-[#180e01] text-xl">
            <GiCoffeeMug />
          </span>
        </button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 py-8">
        {coffees.map((coffee) => (
          <ShowCoffee
            key={coffee._id}
            coffee={coffee}
            onDelete={handleDelete}
          ></ShowCoffee>
        ))}
      </div>
    </div>
  );
}

export default App;
