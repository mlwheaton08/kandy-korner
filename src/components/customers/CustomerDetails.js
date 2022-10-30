import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState()

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
                const singleCustomer = await response.json()
                updateCustomer(singleCustomer[0])
            }
            fetchData()
        },
        [customerId]
    )

    return <section className="customer">
        <header className="customer_header">{customer?.user?.name}</header>
        <div>Email: {customer?.user?.email}</div>
        <div>Loyalty Number: {customer?.loyaltyNumber}</div>
    </section>
}