import React, { useState, useEffect } from "react";
import { style } from "typestyle";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { ProfileDetail } from "./components/ProfileDetail";
import { fetchProfile, RootObject } from "./api";

export const App: React.FC = () => {
    const ids = new URLSearchParams(document.location.search).get("ids");

    type response = null | RootObject[];
    const [users, setUsers] = useState<response>(null);

    if (ids) {
        useEffect(
            () => {
                (async () => {
                    setUsers(
                        await Promise.all(ids.split(",").map(fetchProfile))
                    );
                })();
            }, // 1回だけ実行するため []
            []
        );
    }

    const appStyle = style({
        height: "calc(var(--vh, 1vh) * 100)",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateAreas: "'header' 'main' 'footer'",
    });

    return (
        <div className={appStyle}>
            <Header />
            <main
                className={style({
                    gridArea: "main",
                    padding: "1em 1rem 5rem 1rem",
                    overflow: "auto",
                })}
            >
                {!ids ? (
                    <Introduction />
                ) : users !== null ? (
                    users.map((user) => (
                        <ProfileDetail user={user.user} key={user.user._id} />
                    ))
                ) : (
                    <p>loading...</p>
                )}
            </main>
            <Footer />
        </div>
    );
};
