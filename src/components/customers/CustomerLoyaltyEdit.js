import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const CustomerLoyaltyEdit = () => {
    const navigate = useNavigate()

    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({
        loyaltyNumber: ""
    })

    // fetch clicked on customer
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

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const customerToSendToAPI = {
            userId: customer.userId,
            loyaltyNumber: customer.loyaltyNumber
        }

        const sendData = async () => {
            const options = {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(customerToSendToAPI)
            }
            await fetch(`http://localhost:8088/customers/${customerId}`, options)
            navigate("/customers")
        }
        sendData()
    }

    return (
        <form className="customerForm">
            <h2 className="customerForm__title">{customer?.user?.name}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="editLoyaltyNumber">Edit Loyalty Number:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={customer.loyaltyNumber}
                        onChange={
                            (evt) => {
                                const copy = {...customer}
                                copy.loyaltyNumber = evt.target.value
                                updateCustomer(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Update
            </button>
        </form>
    )
}