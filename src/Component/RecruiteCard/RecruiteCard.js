import React from "react";


import RecruiteForm from "../RecruiteForm/RecruiteForm";

const RecruiteCard = ({ addEmployee }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 col-10 mx-2 mb-5 rounded shadow p-3 text-center ">
      <img
        style={{ height: "60px" }}
        className="img-fluid mb-3"
        src={addEmployee.img}
        alt="img"
      />
      <h3 className="text-color mb-2">{addEmployee.title}</h3>
      <p className="mb-2" style={{ color: "#3A4256", fontWeight: "bold" }}>
        {addEmployee.description}
      </p>

      <br />
      <button
        onClick={openModal}
        style={{ fontWeight: "bold" }}
        className="btn text-light btn-color mb-2 mt-2"
      >
        Add Employee
      </button>

      <RecruiteForm
        modalIsOpen={modalIsOpen}
        name={addEmployee.title}
        description={addEmployee.description}
        file={addEmployee.file}
        img={addEmployee.img}
        closeModal={closeModal}
      ></RecruiteForm>
    </div>
  );
};

export default RecruiteCard;
