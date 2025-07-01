import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navigation/DGMTable.css";

const columnHelper = createColumnHelper();

const DGMTable = ({ onUpdate }) => {
  const data = useMemo(
    () =>
      Array(12).fill({
        applicationFrom: "257164054",
        applicationTo: "257164500",
        NoOfApplications: "447",
       
        issuedName: "Full Name",
        CampusName: "Campus",
      }),
    []
  );

  const columns = [
    columnHelper.display({
      id: "select",
      size: 50,
      cell: () => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <input type="checkbox" />
      </div>
    ),
      header: () => null,
    }),
    columnHelper.accessor("applicationFrom", {
      header: "APPLICATION FROM",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("applicationTo", {
      header: "APPLICATION TO NO",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("NoOfApplications", {
      header: "NO OF APP",
      cell: (info) => info.getValue(),
    }),
   
    columnHelper.accessor("issuedName", {
      header: "ISSUED NAME",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("CampusName", {
      header: "CAMPUS NAME",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "update",
      cell: (context) => (
        <button
          className="btn btn-light border rounded-pill px-3"
          onClick={() => onUpdate(context.row.original)}
        >
          Update
        </button>
      ),
      header: () => null,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container-fluid py-2" style={{ width: "100%", paddingLeft: '0px', paddingRight: '0px' }}>
      <div className="table-scroll-container">
        <table className="table table-hover align-middle zone-table" style={{ width: "100%" }}>
          <thead className="table-light">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} style={{ width: header.column.columnDef.size ? `${header.column.columnDef.size}px` : 'auto' }}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={{ width: cell.column.columnDef.size ? `${cell.column.columnDef.size}px` : 'auto' }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DGMTable;