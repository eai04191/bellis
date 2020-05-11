import React, { Component } from "react";
import UserTableRow from "./UserTableRow";

export default class UserTable extends Component {
    render() {
        const { userProfiles } = this.props;
        console.log(userProfiles);
        const rows = [];

        userProfiles.forEach((profile) => {
            rows.push(<UserTableRow profile={profile} />);
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>xp</th>
                        <th>40l</th>
                        <th>britz</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
