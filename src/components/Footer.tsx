import React from "react";
import { style } from "typestyle";

const menuBase = {
    display: "grid",
    width: "100%",
    overflow: "hidden",
    boxShadow: "0 0 8px #000",
    zIndex: 2,
};

const footer = style(menuBase, {
    gridArea: "footer",
    background: "linear-gradient(to bottom,#1a1b1f 0,#2a2c32 100%)",
    borderTop: "2px solid #25262f",
    color: "#898fa2",
});

const text = style({
    margin: ".5em 0 .35em .5em",
    fontFamily: "HUN",
    fontSize: "1.75em",
    lineHeight: 1,
});

export const Footer: React.FC = () => {
    return (
        <div className={footer}>
            <div className={text}>made by EAI</div>
        </div>
    );
};
