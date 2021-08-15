import React from "react";
import { useEffect, useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Employees.css";

const Employees = () => {
  const [totalEmployees, setTotalEmployees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/allEmployees")
      .then((res) => res.json())
      .then((data) => {
        setTotalEmployees(data);
      });
  }, []);
  return (
    <div>
        <Navbar></Navbar>
      <div className="row justify-content-center">
        <div className="col-md-9 ">
          <h4 className=" ms-2 tomato text-center mt-5 pt-5">Total Employee</h4>
          <div className=" shadow mt-5 ">
            <div className=" mx-3 mt-3">
              
            </div>
            <EmployeeCard totalEmployees={totalEmployees}></EmployeeCard>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Employees;
