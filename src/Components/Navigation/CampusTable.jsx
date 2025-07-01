import React, { useMemo } from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from "@tanstack/react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navigation/CampusTable.css";

const columnHelper = createColumnHelper();

const CampusTable = ({ onUpdate }) => {
    const data = useMemo(
        () =>
            Array(12).fill({
                applicationFrom: "257164054",
                applicationTo: "257164500",
                campaignArea: "447",
                campusName: "Full Name",
                issueName: "Campus",
                action: ""
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
            header: "APPLICATION FROM NO",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("applicationTo", {
            header: "APPLICATION TO NO",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("campaignArea", {
            header: "CAMPAIGN AREA",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("campusName", {
            header: "CAMPUS NAME",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("issueName", {
            header: "ISSUED NAME",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("action", {
            header: "ACTION", // Set the header to display "ACTION"
            id: "update",
            cell: (context) => (
                <button
                    className="btn btn-light border rounded-pill px-3"
                    onClick={() => onUpdate(context.row.original)}
                >
                    Update
                </button>
            ),
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

export default CampusTable;