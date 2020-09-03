import React from "react";
import { style } from "typestyle";

const menuBase = {
    display: "grid",
    width: "100%",
    overflow: "hidden",
    boxShadow: "0 0 8px #000",
    zIndex: 2,
};

const header = style(menuBase, {
    gridArea: "header",
    height: "calc(4.2em + 2px)",
    background: "linear-gradient(to bottom, #334534 0%, #212f22 100%)",
    borderBottom: "2px solid #3d6f41",
    color: "#b8f0bc",
});

const title = style({
    margin: ".5em 0 0 .5em",
    fontFamily: "HUN",
    fontSize: "2.25em",
    fontWeight: 400,
    lineHeight: 1,
});

export const Header: React.FC = () => {
    return (
        <header className={header}>
            <h1 className={title}>BELLIS</h1>
            {/* <button>Add User</button> */}
        </header>
    );
};
