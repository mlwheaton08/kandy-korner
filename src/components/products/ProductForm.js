import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const ProductForm = () => {

    const navigate = useNavigate()

    const [product, update] = useState({
        name: "",
        productTypesId: 1,
        price: 1
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const productToSendToAPI = {
            name: product.name,
            productTypesId: product.productTypesId,
            price: product.price
        }

        const sendData = async () => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productToSendToAPI)
            }
            const response = await fetch("http://localhost:8088/products", options)
            await response.json()
            navigate("/products")
        }
        sendData()
        console.log(productToSendToAPI)
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Product</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                        <select
                            value={product.productTypesId}
                            onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.productTypesId = parseInt(evt.target.value)
                                update(copy)
                            }}>
                            <option value="1">Gummy</option>
                            <option value="2">Chocolate</option>
                            <option value="3">Caramel</option>
                            <option value="4">Taffy</option>
                        </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price ($)</label>
                    <input type="number"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.price = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )
}