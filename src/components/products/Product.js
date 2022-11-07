export const Product = ({ customers, currentUser, productObject }) => {

const userCustomer = customers.find(customer => customer.userId === currentUser.id)

return <section key={productObject.id} className="product">
    <div>
        {productObject.name}: ${productObject.price.toFixed(2)}
        <button
            onClick={() => {
                const sendData = async () => {
                    const options = {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                            customerId: userCustomer.id,
                            productId: productObject.id
                        })
                    }
                    await fetch('http://localhost:8088/purchases', options)
                    alert(`You've purchased: ${productObject.name}`)
                }
                sendData()
            }}
        >Purchase</button>
    </div>
</section>
}