import React, { Component } from 'react'
import { motion } from 'framer-motion';
import uniqid from 'uniqid';
import UserConsumer from '../context';

class AddUser extends Component {
    state = {
        visibleNow: false,

        name: "",
        surname: "",
        position: "",
        salary: ""
    }

    changeVisibility = () => {
        this.setState({
            visibleNow: !this.state.visibleNow
        });
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = (dispatch, e) => {
        e.preventDefault();

        const {name, surname, position, salary} = this.state;
        const formValues = {
            id:uniqid(),
            name,surname,position,salary
            // name: name,
            // surname: surname,
            // position: position,
            // salary: salary
        }
        dispatch({type: "ADD_USER", payload: formValues});
    }

    render() {

        const {visibleNow, name, surname, position, salary} = this.state;
        const animVariants = {
            visible: {
              opacity: 1,
              display: "block",
            },
            hidden: {
              opacity: 0,
              transitionEnd: {
                display: "none",
              },
            },
        }
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div>
                        <div className="col-md-8 offset-md-2 mb-4">
                            <button className="btn btn-dark btn-block mb-1" type="button" onClick={this.changeVisibility} >{visibleNow ? "Hide Form" : "Show Form"}</button>
                          
                            <motion.div
                                initial="hidden"
                                animate={visibleNow ? "visible" : "hidden"}
                                transition={{ duration: 1 }}
                                variants={animVariants}
                            >
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add User Form</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                                        <div className="form-group text-left">
                                            <label htmlFor="name">Name</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                id="name" 
                                                placeholder="Enter name"
                                                className="form-control"
                                                value={name}
                                                onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="surname">Surname</label>
                                            <input 
                                                type="text" 
                                                name="surname" 
                                                id="surname" 
                                                placeholder="Enter surname"
                                                className="form-control"
                                                value={surname}
                                                onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="position">Position</label>
                                            <input 
                                                type="text" 
                                                name="position" 
                                                id="position" 
                                                placeholder="Enter position"
                                                className="form-control"
                                                value={position}
                                                onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="salary">Salary</label>
                                            <input 
                                                type="text" 
                                                name="salary" 
                                                id="salary" 
                                                placeholder="Enter salary"
                                                className="form-control"
                                                value={salary}
                                                onChange={this.changeInput}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-danger btn-block">
                                            Add User
                                        </button>
                                    </form>
                                </div>
                            </div>
                            </motion.div>
                        </div>
                        {visibleNow ? <hr/> : null}
                        </div>
                    )
                }
            }
        </UserConsumer>
    }
}
export default AddUser;