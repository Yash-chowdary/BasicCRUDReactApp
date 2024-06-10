import { useState } from 'react'
import './App.css'
import EmployeePage from './Components/EmployeePage';

function App() {
  const [employeeList, setEmployeeList] = useState<string[]>(['Yash', 'Vinod', 'Kranthi', 'Rushi']);
  const [employee, setEmployee] = useState<string>();

  return (
    <>
      <h1>Welcome to our Organization</h1>
      <div className="card">
        <EmployeePage employeeList={employeeList} setEmployeeList={setEmployeeList}/>
      </div>
    </>
  )
}

export default App
