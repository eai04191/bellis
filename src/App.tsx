import React, { useState, useEffect } from "react";
import { Introduction } from "./components/Introduction";
import { ProfileDetail } from "./components/ProfileDetail";
import { fetchProfile, RootObject } from "./api";

export const App: React.FC = () => {
    const ids = new URLSearchParams(document.location.search).get("ids");
    if (!ids) return <Introduction />;
    const idArr = ids.split(",");

    type response = null | RootObject[];
    const [users, setUsers] = useState<response>(null);

    useEffect(
        () => {
            (async () => {
                const result = await Promise.all(idArr.map(fetchProfile));
                setUsers(result);
            })();
        }, // 1回だけ実行するため []
        []
    );

    return (
        <>
            {users !== null ? (
                users.map((user) => (
                    <ProfileDetail user={user.user} key={user.user._id} />
                ))
            ) : (
                <p>loading...</p>
            )}
        </>
    );
};
