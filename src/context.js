import React, { Component } from 'react'
import axios from 'axios';

// -Provider -Consumer
const UserContext = React.createContext();

// Creating reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            axios.delete("http://localhost:3004/users/"+action.payload)
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            axios.post("http://localhost:3004/users", action.payload)
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}

export class UserProvider extends Component {
    state = {
        users: [],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    }
    componentDidMount = async () => {
        const response = await axios.get("http://localhost:3004/users");
        this.setState({
            users: response.data
        })
    }
    
    
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;