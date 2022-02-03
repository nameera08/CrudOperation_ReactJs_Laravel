 
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class Editemployee extends Component {
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

    async componentDidMount(){
        const emp_id = this.props.match.params.id;
        
        const res = await axios.get(`http://localhost:8000/api/edit-employee/${emp_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                name: res.data.employee.name,
                designation: res.data.employee.designation,
                email: res.data.employee.email,
                phone: res.data.employee.phone,
            });
        }
    }

    updateEmployee = async (e) => {
        e.preventDefault();

        document.getElementById("updatebtn").disabled = true;
        document.getElementById("updatebtn").innerText = "Updating";
        const emp_id = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-employee/${emp_id}`, this.state);
        if(res.data.status === 200)
        {
            //console.log(res.data.message);
            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });
            document.getElementById("updatebtn").disabled = false;
            document.getElementById("updatebtn").innerText = "Update Student"
        }


    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Edit Employee
                                    <Link to={'/'} className='btn btn-primary btn-sm float-end'>BACK</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.updateEmployee}>
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
                                        <button type="submit" id="updatebtn" className='btn btn-primary'>Update</button>
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

export default Editemployee;