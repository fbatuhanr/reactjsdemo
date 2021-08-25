import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }

        this.onHideUser = this.onHideUser.bind(this);
        // this.onDeleteUser = this.onDeleteUser.bind(this);
    }
    // static defaultProps = {
    //     name: <i className="fa fa-spinner fa-spin"></i>,
    //     surname: "Bilinmiyor"
    // }
    
    onHideUser = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }
    onDeleteUser = (dispatch, e) => {
        const {id} = this.props;
        dispatch({type: "DELETE_USER", payload: id});
    }

    componentWillUnmount() {
        console.log("Component Will Unmount!!!");
    }
    render() {
        // Destructing
        const {name, surname, position, salary} = this.props;
        const {isVisible} = this.state;

        return (

            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8 offset-md-2 mb-4">
                                <div className="card" style={isVisible ? {backgroundColor:"#3e3838", color:"#f1f1f1"} : null}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline">
                                            <i class="fa fa-user" aria-hidden="true"></i> {name} {surname}
                                        </h4>
                                        <div style={{fontSize: '24px', cursor: 'pointer'}}>
                                            <i onClick={this.onHideUser} class={"mr-3 fa " + (isVisible ? "fa-eye-slash" : "fa-eye")} aria-hidden="true"></i>
                                            <i onClick={this.onDeleteUser.bind(this, dispatch)} class="fa fa-trash-o" aria-hidden="true"></i>
                                        </div>  
                                    </div>
                                    { isVisible 
                                    ? <div className="card-body d-flex">
                                        <h6 className="d-inline text-left">
                                            Position: {position} 
                                            <br/> <hr/>  
                                            Salary: {salary}
                                        </h6>
                                      </div>
                                    : null 
                                    }
                                </div>
                                <hr/>
                            </div>
                        )
                    }
                }

            </UserConsumer>

        )
    }
}
User.propTypes = {

    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}

export default User;