import React from "react";
import axios from "axios";
import "./App.css";

import UserTable from "./UserTable";

import users from "./users.json";
console.log(users);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users,
            userProfiles: null,
        };

        this.getProfiles(users);
    }

    getProfiles = async (users) => {
        try {
            const ids = users.map((user) => user.id);
            const result = await axios
                .get(
                    `https://tetrio-profile-wrapper.eai.now.sh/profile?ids=${ids.join(
                        ","
                    )}`
                )
                .then((response) => response.data);
            this.setState({ userProfiles: result });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="App">
                {this.state.userProfiles ? (
                    <UserTable userProfiles={this.state.userProfiles} />
                ) : (
                    <p>fetching data...</p>
                )}
            </div>
        );
    }
}

// function App() {

//     return (
//     );
// }

export default App;
