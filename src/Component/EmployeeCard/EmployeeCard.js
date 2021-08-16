import React, { useMemo } from "react";
import "./EmployeeCard.css";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns";

const EmployeeCard = ({ totalEmployees }) => {
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

  return (
    <div className="row">
      <div className="px-5 py-5">
        <table
          className="table table-borderless h7 rounded"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headergroup) => (
              <tr {...headergroup.getHeaderGroupProps()}>
                {headergroup.headers.map((column) => (
                  <th
                    className="text-secondary "
                    scope="col"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
                <th className="text-secondary " scope="col">
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
                      <td
                        style={{ fontWeight: "bold", color: "#0A0A0A" }}
                        className="text-weight-bold "
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
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
              );
            })}
          </tbody>
        </table>
        <div className="text-center">
          
          <button className="me-2 btn btn-primary" onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <span>
            <strong>{' '}</strong>
            {pageIndex + 1} of {pageOptions.length}  <strong>{' '}</strong>
          </span>
          <button className="ms-2 btn btn-secondary" onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
