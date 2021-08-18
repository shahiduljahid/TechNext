import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import person from "../../Photos/add-user (1).png";
import people from "../../Photos/add-group.png";
import RecruiteCard from "../RecruiteCard/RecruiteCard";

const Admin = () => {
  const recruitment = [
    {
      _id: "60928d61f77998484ce0da2a",
      title: "Add Single Employee",
      description: "single employee ; every employee must need firstName,lastName and email",
      img: person,
      file: false,
    },
    {
      _id: "60928ee6f77998484ce0da2b",
      title: "Add Employee  With CSV",
      description: "Add with a CSV file; every employee must need firstName,lastName and email",
      img: people,
      file: true,
    },
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
            <RecruiteCard
              key={addEmployee._id}
              addEmployee={addEmployee}
            ></RecruiteCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Admin;
