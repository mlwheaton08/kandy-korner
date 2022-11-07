import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    const navigate = useNavigate()

    const [employee, update] = useState({
        name: "",
        email: "",
        storeId: 1,
        startDate: "",
        payRate: ""
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
        const userToSendToAPI = {
            name: employee.name,
            email: employee.email,
            isStaff: true
        }

        const employeeToSendToAPI = {
            storeId: employee.storeId,
            startDate: employee.startDate,
            payRate: employee.payRate
        }

        const getNewUserId = async () => {
            const usersFetch = await fetch('http://localhost:8088/users?_sort=id&_order=desc')
            const users = await usersFetch.json()
            return users[0].id
        }
        
        const sendUserData = async () => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userToSendToAPI)
            }
            const response = await fetch('http://localhost:8088/users', options)
            await response.json()
        }

        const sendEmployeeData = async () => {
            employeeToSendToAPI.userId = await getNewUserId()

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employeeToSendToAPI)
            }
            const response = await fetch('http://localhost:8088/employees', options)
            await response.json()
            navigate("/employees")
        }

        const sendData = async () => {
            await sendUserData()
            await sendEmployeeData()
        }
        sendData()
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={employee.name}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={employee.email}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.email = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="store">Store</label>
                        <select
                            value={employee.storeId}
                            onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.storeId = parseInt(evt.target.value)
                                update(copy)
                            }}>
                            <option value="1">101 Road Street</option>
                            <option value="2">202 Main Avenue</option>
                            <option value="3">303 Second Drive"</option>
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={employee.startDate}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.startDate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">Pay Rate:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        value={employee.payRate}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.payRate = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}