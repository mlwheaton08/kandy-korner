import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Employee } from './Employee'
import './Employees.css'

export const EmployeeList = () => {
    const navigate = useNavigate()

    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch('http://localhost:8088/users?isStaff=true')
                const employeeArray = await response.json()
                setEmployees(employeeArray)
            }
            fetchData()
        },
        []
    )

    return <>
        <h3>Current Employees</h3>
        <button onClick={() => navigate("/employee/add")}>Add Employee</button>
        <article className="employees">
            {
                employees.map(employee => <Employee key={`employee--${employee.id}`}
                    id={employee.id}
                    name={employee.name}
                    email={employee.email} />)
            }
        </article>
    </>
}