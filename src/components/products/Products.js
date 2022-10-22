import { useEffect, useState } from "react"


export const Products = () => {

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

    return <>


        <h1>List of Products</h1>

        <button onClick={ () => {setTopPriced(true)}}>Top Priced</button>

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
}