import { useEffect, useState } from "react"


export const Stores = () => {
    const [stores, setStores] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch('http://localhost:8088/stores')
                const storesArray = await response.json()
                setStores(storesArray)
            }
            fetchData()
            console.log('Initial state of stores', stores)
        },
        []
    )

    return <>
        <h1>List of Stores</h1>

        <article className="stores">
            {
                stores.map(
                    (store) => {
                        return <section key={store.id} className="store">
                            <p>{store.address} - {store.sqFootage} square feet</p>
                        </section>
                    }
                )
            }
        </article>
    </>
}