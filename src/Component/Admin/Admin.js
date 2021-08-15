import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import person from "../../Photos/add-user (1).png"
import people from "../../Photos/add-group.png"
import ServiceCard from "../ServiceCard/ServiceCard";

const Admin = () => {
  const recruitment = [
    {
      _id: "60928d61f77998484ce0da2a",
      title: "Add Single Employee",
      description:
        "Add an employee with their firstName, lastName and Email",
      img: person,
      file:false
    },
    {
      _id: "60928ee6f77998484ce0da2b",
      title: "Add With CSV",
      description:
        "Add Multiple employee with a CSV file.",
      img: people,
      file:true
    }
    
  ];
  return (
    <div>
      <Navbar></Navbar>

      <div className="container">
        <h1 className="tomato text-center mb-5 mt-5 pt-5">
          Recruiting Employees
        </h1>

        <div className="row justify-content-center">
        {recruitment.map((addEmployee) => (
              <ServiceCard key={addEmployee._id} addEmployee={addEmployee}></ServiceCard>
            ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Admin;
