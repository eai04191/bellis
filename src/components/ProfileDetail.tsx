import React from "react";
import { style } from "typestyle";
import timestamp from "time-stamp";

import { RootObject } from "../api";

const panel = style({
    width: "50em",
    marginTop: "1rem",

    backgroundColor: "#243e25",
    borderTop: "3px solid #45794f",
    borderLeft: "3px solid #3d6242",
    borderBottom: "3px solid #162419",
    borderRight: "3px solid #1d3220",

    boxShadow: "0 0 48px #0002",
    borderRadius: "3px",
    transition: "0.3s opacity, 0.3s transform, 0.3s filter",
    $nest: {
        "&:first-of-type": {
            filter: "brightness(1.2)",
        },
    },
});

const header = style({
    display: "grid",
    width: "100%",
    padding: "1em",

    background: "linear-gradient(to bottom, #334534 0, #212f22 100%)",
    borderBottom: "2px solid #3d6f41",
});

const username = style({
    lineHeight: 1,
    margin: "0",
    // marginTop: ".5em",
    fontSize: "2.25em",
    fontWeight: 900,
    color: "#a1dba6",
});

const scoreContainer = style({
    display: "grid",
    gridTemplateColumns: "50% 50%",
});

const h5 = {
    color: "#b3f4b6",
    fontSize: "3em",
    fontWeight: 700,
    textShadow: "0 2px #90c397, 0 0 16px #fff4",
    margin: "0.15em",
    marginBottom: 0,
};

const rating = style(h5, {
    $nest: {
        span: {
            fontSize: "0.75em",
        },
    },
});

const score40l = style(h5, {
    $nest: {
        span: {
            fontSize: "0.75em",
        },
    },
});

function zeroPadding(num: number, len: number) {
    return (Array(len).join("0") + num).slice(-len);
}

function getmmss(finalTime: number) {
    const mm = Math.floor((finalTime / 60000) % 60);
    const ss = Math.floor((finalTime / 1000) % 60);
    return `${mm}:${zeroPadding(ss, 2)}`;
}

function getfff(finalTime: number) {
    return zeroPadding(Math.round(finalTime) % 1000, 3);
}

type Profile = {
    user: RootObject["user"];
};

export const ProfileDetail: React.FC<Profile> = ({ user }) => {
    const roundRating = Math.round(user.league.rating);
    return (
        <>
            <div className={panel}>
                <div className={header}>
                    <div className={username}>
                        {user.username.toUpperCase()}
                    </div>
                </div>
                <div className={scoreContainer}>
                    <div>
                        {user.league.rating === -1 ? (
                            <p>not rated yet.</p>
                        ) : (
                            <div
                                className={rating}
                                title={`${user.league.rating}TR`}
                            >
                                {roundRating}
                                <span>TR</span>
                            </div>
                        )}
                    </div>
                    <div className={score40l}>
                        {getmmss(
                            user.records["40l"].record.endcontext.finalTime
                        )}
                        <span>
                            .
                            {getfff(
                                user.records["40l"].record.endcontext.finalTime
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
