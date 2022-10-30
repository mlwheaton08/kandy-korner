import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
    const {employeeId} = useParams()
    const [employee, updateEmployee] = useState()

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/employees?_expand=store&_expand=user&userId=${employeeId}`)
                const singleEmployee = await response.json()
                updateEmployee(singleEmployee[0])
            }
            fetchData()
        },
        [employeeId]
    )

    return <section className="employee">
        <header className="employee_header">{employee?.user?.name}</header>
        <div>Location: {employee?.store?.address}</div>
        <div>Start Date: {employee?.startDate}</div>
        <div>Pay Rate: ${employee?.payRate}/hr</div>
    </section>
}