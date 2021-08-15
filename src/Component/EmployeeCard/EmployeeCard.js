import React from 'react';
import "./EmployeeCard.css"

const EmployeeCard = ({totalEmployees}) => {
    return (
        <div className="row">
        <div className="px-5">
          <table className="table table-borderless h7 rounded">
            <thead className=" p-1 ">
              <tr>
                <th className="text-secondary serial-number " scope="col">
                  sr.no
                </th>
                <th className="text-secondary firstName" scope="col">
                  FirstName 
                </th>
                <th className="text-secondary lastName" scope="col">
                  Last Name
                </th>
                <th className="text-secondary email" scope="col">
                  Email
                </th>
                <th className="text-secondary " scope="col">
                  Send Mail
                </th>
               
              </tr>
            </thead>
            {totalEmployees.map((apm, index) => {
              return (
                <tbody>
                  <tr>
                    <td
                      style={{ fontWeight: "bold", color: "#0A0A0A" }}
                      className="text-weight-bold serial-number"
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{ fontWeight: "bold", color: "#0A0A0A" }}
                      className="text-weight-bold firstName "
                    >
                      {apm.firstName}
                    </td>
                    <td
                      style={{ fontWeight: "bold", color: "#0A0A0A" }}
                      className="text-weight-bold lastName"
                    >
                      {apm.lastName}
                    </td>
  
                    <td
                      style={{ fontWeight: "bold", color: "#0A0A0A" }}
                      className="text-weight-bold email"
                    >
                      {apm.email}
                    </td>
                    
                    <td className="text-weight-bold">
                      {" "}
                      <button
                        style={{ fontWeight: "bold" }}
                        className="btn text-light mailBtn text-bold btn-color"
                      >
                       Send
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
};

export default EmployeeCard;