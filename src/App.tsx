import React, { useState, useEffect } from "react";
import { style } from "typestyle";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { ProfileDetail } from "./components/ProfileDetail";
import { fetchProfile, RootObject } from "./api";

export const App: React.FC = () => {
    const ids = new URLSearchParams(document.location.search).get("ids");

    const [users, setUsers] = useState<null | RootObject[]>(null);

    // usersをratingでソートする
    const sortByRating = () => {
        if (!users) return;
        const sortedUsers = [...users].sort((a, b) => {
            const aRate = a.user.league.rating;
            const bRate = b.user.league.rating;
            return aRate < bRate ? 1 : -1;
        });
        setUsers(sortedUsers);
    };

    // usersを40lの時間でソートする
    const sortBy40l = () => {
        if (!users) return;
        const sortedUsers = [...users].sort((a, b) => {
            const aTime = a.user.records["40l"].record.endcontext.finalTime;
            const bTime = b.user.records["40l"].record.endcontext.finalTime;
            return aTime > bTime ? 1 : -1;
        });
        setUsers(sortedUsers);
    };

    // idがある場合、プロフィールをfetchしてusersにセットする
    if (ids) {
        useEffect(
            () => {
                (async () => {
                    setUsers(
                        await Promise.all(ids.split(",").map(fetchProfile))
                    );
                })();
            },
            // 1回だけ実行するための空の配列
            // https://ja.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
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
                    <>
                        <button onClick={sortByRating}>sort by rating</button>
                        <button onClick={sortBy40l}>
                            sort by 40lines time
                        </button>
                        {users.map((user) => (
                            <ProfileDetail
                                user={user.user}
                                key={user.user._id}
                            />
                        ))}
                    </>
                ) : (
                    <p>fetching user data...</p>
                )}
            </main>
            <Footer />
        </div>
    );
};
