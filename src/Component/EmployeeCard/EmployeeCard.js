import React, { useMemo } from "react";
import "./EmployeeCard.css";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import RecruiteForm from "../RecruiteForm/RecruiteForm";
import { useState } from "react";

const EmployeeCard = ({ totalEmployees }) => {
  //single mail send and modal functions
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
  });

  const handleSingleMail = (address) => {
    const newUserInfo = { ...userInfo };
    newUserInfo.address = address.value;
    newUserInfo.name = address.row.cells[0].value;

    setUserInfo(newUserInfo);
    openModal();
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //react-table functions

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => totalEmployees, [totalEmployees]);

  const {
    getTableProps,
    getTableBodyProps,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    headerGroups,
    page,
    pageOptions,
    state,

    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    usePagination
  );
  const { pageIndex } = state;

  //handle selection functions
  const [selection, setSelection] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const handleSelection = (e, email) => {
    const emailAddress = email.row.cells[2].value;
    if (e.target.checked) {
      setSelection(true);
      console.log(emailAddress);
      selectedEmails.push(emailAddress);
    } else {
      const index = selectedEmails.indexOf(emailAddress);
      if (index > -1) {
        selectedEmails.splice(index, 1);
      }
    }
  };

  let finalSelectedEmails = [];

  selectedEmails.map((em) => {
    const final = finalSelectedEmails.indexOf(em);

    if (final === -1) {
      finalSelectedEmails.push(em);
    }

    return console.log(finalSelectedEmails);
  });

  //handle send multipleUser Functions
  const [showCheckBox, setShowCheckBox] = useState(false);

  const [select, setSelect] = useState(false);
  const handleSelect = () => {
    setSelect(true);
  };
  const handleCancel = () => {
    setSelect(false);
    setSelectedEmails([]);
  };

  const handleMultipleUsers = () => {
    console.log("clicked");

    openModal();
  };

  return (
    <div className="row">
      <div className="px-5 py-5">
        {!select && (
          <button
            onClick={handleSelect}
            className="btn text-light mx-2  btn-success text-bold"
          >
            Select
          </button>
        )}

        {select && (
          <button
            onClick={handleCancel}
            className="btn text-light mx-2 btn-secondary text-bold"
          >
            Cancel
          </button>
        )}
        {select && (
          <button
            onClick={handleMultipleUsers}
            className="btn btn-color text-light mx-2 text-bold"
          >
            Send Mail
          </button>
        )}
        <table
          className="table table-borderless h7 rounded"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headergroup) => (
              <tr {...headergroup.getHeaderGroupProps()}>
                {headergroup.headers.map((column) => {
                  return (
                    <th
                      className={`${column.Header} text-secondary`}
                      scope="col"
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
                <th className="text-secondary text-center" scope="col">
                  Mail
                </th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <>
                        <td
                          for="employee"
                          style={{ fontWeight: "bold", color: "#0A0A0A" }}
                          className={`${cell.column.Header} `}
                          {...cell.getCellProps()}
                        >
                          {cell.column.Header === "firstName" && select && (
                            <input
                              type="checkbox"
                              className="me-2"
                              name="checkBox"
                              id="employee"
                              onChange={(e) => handleSelection(e, cell)}
                            />
                          )}

                          {cell.render("Cell")}
                        </td>

                        {cell.column.Header === "email" && (
                          <td className="text-weight-bold text-center">
                            <button
                              style={{ fontWeight: "bold" }}
                              className="btn text-light mailBtn text-center text-bold btn-color"
                              onClick={() => handleSingleMail(cell)}
                            >
                              <span> Send</span>
                            </button>
                          </td>
                        )}
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button
            className="me-2 btn   btn-secondary"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <span className="pageCounter d-flex align-items-center">
            <strong> </strong>
            {pageIndex + 1} of {pageOptions.length} <strong> </strong>
          </span>
          <button
            className="ms-2 btn btn-primary"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </div>
      </div>

      <RecruiteForm
        modalIsOpen={modalIsOpen}
        userInfo={userInfo}
        closeModal={closeModal}
        multipleUser={finalSelectedEmails}
        setSelect={setSelect}
      ></RecruiteForm>
    </div>
  );
};

export default EmployeeCard;
