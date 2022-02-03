
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'; 


class Addemployee extends Component {
    state = {
        name: '',
        designation: '',
        email: '',
        phone: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveEmployee = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/add-employee', this.state);
        if(res.data.status === 200)
        {
            //console.log(res.data.message);
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });

            this.setState({
                name: '',
                designation: '',
                email: '',
                phone: '',
            });
        }


    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Add Employee
                                    <Link to={'/'} className='btn btn-primary btn-sm float-end'>BACK</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.saveEmployee}>
                                    <div className='form-group mb-3'>
                                        <label>Full Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className='form-control'/>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label>Designation</label>
                                        <input type="text" name="designation" onChange={this.handleInput} value={this.state.designation} className='form-control'/>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label>Email ID</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className='form-control'/>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className='form-control'/>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <button type="submit" className='btn btn-primary'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addemployee;