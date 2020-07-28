import React from "react";
import timestamp from "time-stamp";
import { Global, jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import { RootObject } from "../api";

const Panel = styled.div`
    width: 50em;
    margin-top: 1rem;
    padding: 1em;

    background-color: #243e25;
    border-top: 3px solid #45794f;
    border-left: 3px solid #3d6242;
    border-bottom: 3px solid #162419;
    border-right: 3px solid #1d3220;
    box-shadow: 0 0 48px #0002;
    border-radius: 3px;
    transition: 0.3s opacity, 0.3s transform, 0.3s filter;
`;

const Username = styled.h2`
    margin: 0;
    font-size: 2.5rem;
    font-weight: 900;
    color: #a1dba6;
`;

const h5 = css`
    color: #b3f4b6;
    font-size: 3em;
    text-shadow: 0 2px #90c397, 0 0 16px #fff4;
    margin: 0.15em;
    margin-bottom: 0;
`;

const Rating = styled.h5`
    ${h5};
    span {
        font-size: 0.75em;
    }
`;

const Score40l = styled.h5`
    ${h5};
    span {
        font-size: 0.75em;
    }
`;

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
    return (
        <>
            <Panel>
                <Username>{user.username.toUpperCase()}</Username>
                <Rating title={`${user.league.rating}TR`}>
                    {Math.floor(user.league.rating)}
                    <span>TR</span>
                </Rating>
                <Score40l>
                    {getmmss(user.records["40l"].record.endcontext.finalTime)}
                    <span>
                        .
                        {getfff(
                            user.records["40l"].record.endcontext.finalTime
                        )}
                    </span>
                </Score40l>
            </Panel>
        </>
    );
};
