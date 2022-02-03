<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{

    public function index()
    {
        $employees = Employee::all();
        return response()->json([
            'status'=>200,
            'employees'=>$employees,
        ]);
    }

    public function store(Request $request) 
    {
        $employee = new Employee;
        $employee->name = $request->input('name');
        $employee->designation = $request->input('designation');
        $employee->email = $request->input('email');
        $employee->phone = $request->input('phone');
        $employee->save();

        return response()->json([
            'status'=> 200,
            'message' => 'Employee Added Successfully',
        ]);
    }

    public function edit($id)
    {
        $employee = Employee::find($id);
        return response()->json([
            'status'=>200,
            'employee'=>$employee,
        ]);
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::find($id);
        $employee->name = $request->input('name');
        $employee->designation = $request->input('designation');
        $employee->email = $request->input('email');
        $employee->phone = $request->input('phone');
        $employee->update();

        return response()->json([
            'status'=> 200,
            'message' => 'Employee Updated Successfully',
        ]);
    }

    public function destroy($id)
    {
        $employee = Employee::find($id);
        if($employee)
        {
            $employee->delete();
            return response()->json([
                'status'=> 200,
                'message'=>'Student Deleted Successfully',
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'No Student ID Found',
            ]);
        }
    }
}
