import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Mail = ({ userInfo, closeModal, multipleUser, setSelect }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    multipleUser.map((em) => {
      data.email = em;
      const url = `http://localhost:4000/send_mail`;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((result) => {});
    });

    alert(
      `congratulation your messaged sent to ${multipleUser.length}  people successfully`
    );
    closeModal();
    setSelect(false);
  };

  const send = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vjg4to4",
        "template_0gz7zck",
        e.target,

        "user_Se0Rdu8pmQynduEs8uokY"
      )
      .then(
        (result) => {
          alert(`congratulation your messaged sent successfully`);
          closeModal();
        },
        (error) => {
          alert(error.text);
          closeModal();
        }
      );
    e.target.reset();
  };

  return !multipleUser.length ? (
    <form className=" mt-5 border-0 form-control" onSubmit={send}>
      <label
        className=" mb-2 justify-content-center d-flex text-bold"
        htmlFor=""
      >
        <span className="tomato me-2">Send mail </span>
      </label>
      <label className=" text-bold ms-2" htmlFor="">
        Name:
      </label>
      <input
        className="form-control mt-1 mb-3   form-group"
        defaultValue={userInfo.name}
        required
        {...register("name", { required: true })}
      />
      {errors.email && (
        <span className="mb-3 text-danger">This field is required</span>
      )}

      <label className=" text-bold ms-2" htmlFor="">
        Recipient:
      </label>
      <input
        className="form-control mt-1 mb-3   form-group"
        defaultValue={userInfo.address}
        required
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="mb-3 text-danger">This field is required</span>
      )}
      <label className=" text-bold ms-2" htmlFor="">
        Subject:
      </label>
      <input
        className="form-control mt-1 mb-3  form-group"
        placeholder="choose a subject"
        required
        {...register("subject", { required: true })}
      />
      {errors.subject && (
        <span className="mb-3 text-danger">This field is required</span>
      )}
      <label className=" text-bold ms-2" htmlFor="">
        Message:
      </label>

      <textarea
        className="form-control mb-3"
        rows="5"
        placeholder="write your message here"
        required
        {...register("mailBody", { required: true })}
      ></textarea>
      {errors.mailBody && <span>This field is required</span>}

      <input
        className="d-flex justify-content-center ms-auto mb-3 btn text-light text-bold font-weight-bold btn-color form-group"
        type="submit"
        value="send Mail"
      />
    </form>
  ) : (
    <form
      className=" mt-5 border-0 form-control"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        className=" mb-2 justify-content-center d-flex text-bold"
        htmlFor=""
      >
        <span className="tomato me-2">Send mail </span>
      </label>

      <label className=" text-bold ms-2" htmlFor="">
        Subject:
      </label>
      <input
        className="form-control mt-1 mb-3  form-group"
        placeholder="choose a subject"
        required
        {...register("subject", { required: true })}
      />
      {errors.subject && (
        <span className="mb-3 text-danger">This field is required</span>
      )}
      <label className=" text-bold ms-2" htmlFor="">
        Message:
      </label>

      <textarea
        className="form-control mb-3"
        rows="5"
        placeholder="write your message here"
        required
        {...register("mailBody", { required: true })}
      ></textarea>
      {errors.mailBody && <span>This field is required</span>}

      <input
        className="d-flex justify-content-center ms-auto mb-3 btn text-light text-bold font-weight-bold btn-color form-group"
        type="submit"
        value="send Mail"
      />
    </form>
  );
};

export default Mail;
