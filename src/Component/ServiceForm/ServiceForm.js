import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import lock from "../../Photos/closed.svg";
import CSVToJSON from "csvtojson";
import "./ServiceForm.css";

const ServiceForm = ({
  modalIsOpen,
  closeModal,
  name,
  description,
  img,
  file,
}) => {
  const closeIcon = <img style={{ height: "40px" }} src={lock} alt="" />;
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleFocus = (e) => {
    e.target.value = "";
   

  };

  const onSubmit = (data) => {
    console.log(data)
    

    const url = `http://localhost:4000/addEmployee`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result)
      if (result) {
        closeModal();
        alert("An Employee added successfully");
      }
    });
  };

  let csvFile;

  const handleDragOver = (e) => {
    console.log("file dragged");
    e.preventDefault();
    setOn(true);
  };
  const handleDragLeave = (e) => {
    console.log("file leave");
    setOn(false);
    e.preventDefault();
  };
  const handleDrop = (e) => {
    console.log("file drop");
    e.preventDefault();
    setUpload(true);

    csvFile = e.dataTransfer.files[0];
    let fileType = file.type;
    const fileReader = new FileReader();

    fileReader.readAsText(csvFile);

    fileReader.onload = function () {
      const dataset = fileReader.result;

      CSVToJSON()
        .fromString(dataset)
        .then((res) => console.log(res));
      // console.log(jsonArray)
    };

    let ValidExtension = ["image/jpeg", "image/jpg", "image/png"];
    if (ValidExtension.includes(fileType)) {
      console.log("this is an image file");
    } else {
      console.log("this is not an image file");
    }
  };

  const [on, setOn] = useState(false);

  const [upload, setUpload] = useState(false);

  return (
    <div>
      <Modal
        closeIcon={closeIcon}
        open={modalIsOpen}
        onClose={closeModal}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <div className="shadow p-3">
          <h4 className="text-color text-center">{name}</h4>

          {!file ? (
            <form
              className=" mt-5 border-0 form-control"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-color mb-2 text-bold" htmlFor="">
                Employee information:
              </label>
              <input
                onFocus={handleFocus}
                className="form-control mt-3   form-group"
                placeholder="First name"
                required
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span className="mb-3 text-danger">This field is required</span>}

              <input
                onFocus={handleFocus}
                className="form-control mt-3  form-group"
                placeholder="Last name"
                required
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <span className="mb-3 text-danger">This field is required</span>}

              <input
                onFocus={handleFocus}
                type="email"
                className="form-control mt-3 mb-3 form-group"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                id=""
              />
              {errors.email && <span className="mb-3 text-danger">This field is required</span>}

              <input
                className="d-flex justify-content-center ms-auto mb-3 btn text-light text-bold font-weight-bold btn-color form-group"
                type="submit"
              />
            </form>
          ) : (
            <div
              onDragOver={(e) => handleDragOver(e)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e)}
              className="d-flex justify-content-center dropBox p-5 "
            >
              {!upload ? (
                <h1 className="Drop-content">
                  {on ? "Release here" : "Drop here"}
                </h1>
              ) : (
                <h1 className="Drop-content text-success">File uploaded</h1>
              )}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ServiceForm;
