import React from "react";

export const Introduction: React.FC = () => {
    return (
        <>
            <p>idsパラメータを付けてねカードがもえるよ</p>
            <p>
                <a href="?ids=5e5a13218609a424c602d2e9,5ea7dba8325d7d6e3b8ce57b,5e5eef987eeb367ac83246f4,5eaae46f13f49635e4c728ef,5eab9fa338f9d64265d09d47,5eab94f00d4b04426bff93ec">
                    サンプル
                </a>
            </p>
            <h2>詳しい説明</h2>
            <p>idsパラメータはカンマ区切りのtetrioのidの配列です。</p>
            <p>
                tetrioのusernameからidを取得するには、
                <a
                    href="https://tetrio-api-wrapper.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://tetrio-api-wrapper.vercel.app/
                </a>
                が使えます。
            </p>
            <p>
                bellis上で直接名前からidを取得、リストに追加する機能は実装予定です。
            </p>
        </>
    );
};
