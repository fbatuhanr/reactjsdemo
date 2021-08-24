import React, { Component } from 'react'
import { motion } from 'framer-motion';
import uniqid from 'uniqid';
import UserConsumer from '../context';

class AddUser extends Component {
    state = {
        visibleNow: false,

        nameInput: "",
        surnameInput: "",
        positionInput: "",
        salaryInput: ""
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

        const {nameInput, surnameInput, positionInput, salaryInput} = this.state;
        const formValues = {
            id:uniqid(),
            name: nameInput,
            surname: surnameInput,
            position: positionInput,
            salary: salaryInput
            //nameInput,surnameInput,positionInput,salaryInput
        }
        dispatch({type: "ADD_USER", payload: formValues});
    }

    render() {

        const {visibleNow, nameInput, surnameInput, positionInput, salaryInput} = this.state;
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
                                                name="nameInput" 
                                                id="name" 
                                                placeholder="Enter name"
                                                className="form-control"
                                                value={nameInput}
                                                onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="surname">Surname</label>
                                            <input 
                                                type="text" 
                                                name="surnameInput" 
                                                id="surname" 
                                                placeholder="Enter surname"
                                                className="form-control"
                                                value={surnameInput}
                                                onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="position">Position</label>
                                            <input 
                                                type="text" 
                                                name="positionInput" 
                                                id="position" 
                                                placeholder="Enter position"
                                                className="form-control"
                                                value={positionInput}
                                                onChange={this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="salary">Salary</label>
                                            <input 
                                                type="text" 
                                                name="salaryInput" 
                                                id="salary" 
                                                placeholder="Enter salary"
                                                className="form-control"
                                                value={salaryInput}
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