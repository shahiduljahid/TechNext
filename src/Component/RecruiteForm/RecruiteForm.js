import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import lock from "../../Photos/closed.svg";
import CSVToJSON from "csvtojson";
import "./RecruiteForm.css";
import Mail from "../Mail/Mail";

const RecruiteForm = ({
  modalIsOpen,
  closeModal,
  name,
  description,
  img,
  file,
  userInfo,
  multipleUser,
  setSelect,
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
    const url = `http://localhost:4000/addEmployee`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((result) => {
      if (result) {
        closeModal();
        alert("Employee added successfully");
      }
    });
  };

  let csvFile;

  const [csvSuccess, setCsvSuccess] = useState({
    success: "",
    failed: "",
  });

  const handleFile = (event) => {
    setUpload(true);
    csvFile = event.target.files[0];

    handleFileValidationAndUploading();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setOn(true);
  };
  const handleDragLeave = (e) => {
    setOn(false);
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();

    csvFile = e.dataTransfer.files[0];
    handleFileValidationAndUploading();
  };

  const handleFileValidationAndUploading = () => {
    let filename = csvFile.name;
    const array = filename.split(".");

    let fileType = array.pop();

    if (fileType === "csv") {
      setUpload(true);

      const fileReader = new FileReader();

      fileReader.readAsText(csvFile);

      fileReader.onload = function () {
        const dataset = fileReader.result;

        CSVToJSON()
          .fromString(dataset)
          .then((res) => {
            const vaildEmployee = res.filter(
              (element) =>
                element.firstName && element.lastName && element.email
            );

            vaildEmployee.map((element) => {
              const url = `http://localhost:4000/addEmployee`;
              fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(element),
              }).then((result) => {});

              return console.log("added Employee by csv");
            });

            const failRate = res.length - vaildEmployee.length;

            const successRate = res.length - failRate;

            const newCsvSuccessRate = { ...csvSuccess };
            newCsvSuccessRate.success = successRate;
            newCsvSuccessRate.failed = failRate;

            setCsvSuccess(newCsvSuccessRate);

            alert(
              `Total ${newCsvSuccessRate.success} employee added .${newCsvSuccessRate.failed} people failed to add . every employee must need firstName,lastName and email
              
              `
            );
            setUpload(false);
            closeModal();
          });
      };
    } else {
      alert("this is not an CSV file");
      setUpload(false);
      closeModal();
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

          {!file && !userInfo ? (
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
              {errors.firstName && (
                <span className="mb-3 text-danger">This field is required</span>
              )}

              <input
                onFocus={handleFocus}
                className="form-control mt-3  form-group"
                placeholder="Last name"
                required
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="mb-3 text-danger">This field is required</span>
              )}

              <input
                onFocus={handleFocus}
                type="email"
                className="form-control mt-3 mb-3 form-group"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                id=""
              />
              {errors.email && (
                <span className="mb-3 text-danger">This field is required</span>
              )}

              <input
                className="d-flex justify-content-center ms-auto mb-3 btn text-light text-bold font-weight-bold btn-color form-group"
                type="submit"
              />
            </form>
          ) : (
            !userInfo && (
              <div
                onDragOver={(e) => handleDragOver(e)}
                onDragLeave={(e) => handleDragLeave(e)}
                onDrop={(e) => handleDrop(e)}
                className="dropBox text-center p-5 "
              >
                {!upload ? (
                  <h1 className="Drop-content">
                    {on
                      ? "Release To Upload  File"
                      : "Drag & Drop To Upload File"}
                  </h1>
                ) : (
                  <h1 className="Drop-content text-success">File uploaded</h1>
                )}
                <label
                  className="btn btn-color browseFileBtn text-bold text-light"
                  htmlFor="csvFile"
                >
                  Browse file
                </label>
                <input
                  type="file"
                  onChange={handleFile}
                  name="file"
                  id="csvFile"
                  hidden
                />
              </div>
            )
          )}

          {userInfo && (
            <Mail
              setSelect={setSelect}
              multipleUser={multipleUser}
              closeModal={closeModal}
              userInfo={userInfo}
            ></Mail>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default RecruiteForm;
