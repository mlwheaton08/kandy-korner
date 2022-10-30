import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Customer } from './Customer'
import './Customers.css'

export const CustomerList = () => {
    const navigate = useNavigate()

    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch('http://localhost:8088/users?isStaff=false')
                const customerArray = await response.json()
                setCustomers(customerArray)
            }
            fetchData()
        },
        []
    )

    return <>
        <h3>Current Customers</h3>
        <article className="customers">
            {
                customers.map(customer => <Customer key={`customer--${customer.id}`}
                    id={customer.id}
                    name={customer.name}
                    email={customer.email} />)
            }
        </article>
    </>
}