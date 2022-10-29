import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const Products = ({searchTermState}) => {

    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPriced, setTopPriced] = useState(false)

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch('http://localhost:8088/products?_expand=productTypes&_sort=name&_order=asc')
                const productsArray = await response.json()
                setProducts(productsArray)
            }
            fetchData()
            console.log('Initial state of products', products)
        },
        []
    )

    useEffect(
        () => {setFilteredProducts(products)},
        [products]
    )

    useEffect(
        () => {
            if (topPriced) {
            const topPricedProductsArray = products.filter(product => {return product.price > 2})
            setFilteredProducts(topPricedProductsArray)
            } else {
            setFilteredProducts(products)
            }
        },
        [topPriced]
    )

    useEffect(
        () => {
            const searchedProducts = products.filter(product => {
                return product.name.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFilteredProducts(searchedProducts)
        },
        [searchTermState]
    )

    return <>



        {
            // IF USER IS STAFF -----------------
            kandyUserObject.isStaff
            ? <>
                <h1>List of Products</h1>
                <button onClick={() => navigate("/product/create")}>Add Product</button>
                <button onClick={ () => {setTopPriced(true)}}>Top Priced</button>
                <button onClick={ () => {setTopPriced(false)}}>Show All</button>
                <article className="products">
                    {
                        filteredProducts.map(
                            (product) => {
                                return <section key={product.id} className="product">
                                    <p>{product.name}: ${product.price.toFixed(2)} ({product.productTypes.type})</p>
                                </section>
                            }
                        )
                    }
                </article>
            </>
            // IF USER IS CUSTOMER ----------------
            : <article className="products">
                    {
                        searchTermState !== ""
                        ? filteredProducts.map(
                            (product) => {
                                return <section key={product.id} className="product">
                                    <p>{product.name}: ${product.price.toFixed(2)}</p>
                                </section>
                            }
                        )
                        : ""
                    }
            </article>
        }

    </>
}