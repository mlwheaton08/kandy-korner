import { useEffect, useState } from "react"

export const Orders = () => {
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const [customerOrders, setCustomerOrders] = useState([])

    useEffect(
        () => {
            const findUserCustomerId = async () => {
                const response = await fetch(`http://localhost:8088/customers`)
                const customerArray = await response.json()
                const currentCustomerObject = customerArray.find(customer => customer.userId === kandyUserObject.id)
                return currentCustomerObject.id
            }
            
            const fetchOrders = async () => {
                const currentCustomerId = await findUserCustomerId()
                const response = await fetch(`http://localhost:8088/purchases?customerId=${currentCustomerId}&_expand=product&_expand=customer`)
                const ordersArray = await response.json()
                setCustomerOrders(ordersArray)
            }
            fetchOrders()
        },
        []
    )

    return (
        <>
            <h2>My Orders</h2>
            {
                customerOrders.map(
                    (order) => {
                        return <section key={`order--${order.id}`}>{order?.product?.name}</section>
                    }
                )
            }
        </>
    )
}