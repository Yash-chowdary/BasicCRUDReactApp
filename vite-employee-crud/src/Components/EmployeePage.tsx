import React, { SetStateAction, useState} from 'react';
import "./EmployeePage.css";

interface EmployeeProps{
    employeeList: string[];
    setEmployeeList: React.Dispatch<SetStateAction<string[]>>;
}

const EmployeePage : React.FC<EmployeeProps> = (EmployeeProps) => {

    const [newEmployee, setNewEmployee] = useState<string>('');
    const handleAddNewEmployee =() => {
        if(newEmployee === '' || newEmployee){
            alert('Name is invalid');
            return;
        }
        EmployeeProps.setEmployeeList((employeeList) => [...employeeList, newEmployee]);
        setNewEmployee('');
    } 

    function handleRemoveEmployee(removeAtIndex: number) {
        EmployeeProps.setEmployeeList(EmployeeProps.employeeList.filter((employee, index) => index !== removeAtIndex));
    }

    function handleEditEmployee(changeAtIndex: number) {
        const currentRow = EmployeeProps.employeeList.find((employee, index) => index === changeAtIndex);
        if (currentRow) {
            const newName = prompt('Enter new name:', currentRow);
            if (newName !== null && newName !== currentRow) {
              EmployeeProps.setEmployeeList(EmployeeProps.employeeList.map(
                (employee, index) => {
                    if(index === changeAtIndex){
                        return newName;
                    }
                    return employee;
              }))
            }
        }
    }

    return (<>
                <table>
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Employee Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {EmployeeProps.employeeList.map(
                            (employeeName, index) => {
                                return <tr>
                                            <td>{index + 1}</td>
                                            <td>{employeeName}</td>
                                            <td className="actions">
                                            <button className = 'EditBtn' onClick={()=>{handleEditEmployee(index)}}>Edit</button>
                                            <button className = 'DeleteBtn' onClick={()=>{handleRemoveEmployee(index)}}>Delete</button>
                                            </td>
                                        </tr>
                        })}
                        <tr>
                            <td>New Employee</td>
                            <td><input type="text" onChange={(e)=> {setNewEmployee(e.target.value)}} ></input></td>
                            <td className="actions">
                                <button className = 'AddBtn' onClick={handleAddNewEmployee}>Add new employee</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>);
};

export default EmployeePage;