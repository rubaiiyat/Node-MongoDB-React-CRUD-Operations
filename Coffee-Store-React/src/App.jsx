import { useLoaderData } from "react-router";
import "./App.css";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { GiCoffeeMug } from "react-icons/gi";
import ShowCoffee from "./Components/ShowCoffee";

function App() {
  const coffees = useLoaderData();

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

      <button className="btn bg-[#E2B577] text-xm text-black font-mono mt-5">
        Add Coffee{" "}
        <span className="text-[#180e01] text-xl">
          <GiCoffeeMug />
        </span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 py-8">
        {coffees.map((coffee) => (
          <ShowCoffee key={coffee._id} coffee={coffee}></ShowCoffee>
        ))}
      </div>
    </div>
  );
}

export default App;
