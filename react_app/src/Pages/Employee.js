
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';

class Employee extends Component {

    state = {
        employees: [],
        loading: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/employees');
        if(res.data.status === 200)
        {
            this.setState({
                employees: res.data.employees,
                loading: false,
            });
        }
    }

    deleteEmployee = async (e, id) => {

        const thisClickedFunda = e.currentTarget;
        thisClickedFunda.innerText = "Deleting";

        const res = await axios.delete(`http://localhost:8000/api/delete-employee/${id}`);
        if(res.data.status === 200)
        { 
            thisClickedFunda.closest("tr").remove();
            //console.log(res.data.message);
            swal({
                title: "Deleted!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });
        }
    }

    render() {

        var employee_HTMLTABLE = "";
        if(this.state.loading)
        {
            employee_HTMLTABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>
        }
        else
        {
            employee_HTMLTABLE = 
            this.state.employees.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.designation}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Link to={`edit-employee/${item.id}`} className='btn btn-success btn-sm'>Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => this.deleteEmployee(e, item.id)} className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                    </tr>
                );
            });
        }
 

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Employees Data
                                    <Link to={'add-employee'} className='btn btn-primary btn-sm float-end'>Add Employee</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Designation</th>
                                            <th>Email Id</th>
                                            <th>Phone No.</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employee_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employee;