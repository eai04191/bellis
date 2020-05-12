import React from "react";
import { useTable, useSortBy } from "react-table";

const makeData = (userProfiles) => {
    let data = [];
    userProfiles.forEach((profile) => {
        let dataRow = {};
        dataRow.username = profile.username;
        dataRow.xp = profile.xp;
        dataRow["40l"] =
            profile.records["40l"].record?.endcontext.finalTime || null;
        dataRow.britz = profile.records.blitz.record?.endcontext.score || null;
        data.push(dataRow);
    });
    return data;
};

const msToTime = (duration) => {
    let milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};

export default function UserTable({ userProfiles }) {
    const columns = [
        { Header: "username", accessor: "username" },
        { Header: "xp", accessor: "xp", sortType: "basic" },
        { Header: "40l", accessor: "40l", sortType: "basic" },
        { Header: "britz", accessor: "britz", sortType: "basic" },
    ];
    const data = makeData(userProfiles);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: [
                    {
                        id: "40l",
                        desc: false,
                    },
                ],
            },
        },
        useSortBy
    );

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                )}
                            >
                                {column.render("Header")}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? " 🔽"
                                            : " 🔼"
                                        : ""}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
