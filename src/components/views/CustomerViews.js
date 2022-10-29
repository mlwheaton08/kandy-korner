import { Outlet, Route, Routes } from "react-router-dom"
import { Stores } from "../stores/Stores.js"
import { FindCandy } from "../products/FindCandy.js"
import { Products } from "../products/Products.js"
import { ProductContainer } from "../products/ProductContainer.js"

export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Sweets galore!</div>

                    <Outlet />
                </>
            }>

			<Route path="stores" element={ <Stores /> } />
			<Route path="findCandy" element={ <ProductContainer /> } />
                
            </Route>
        </Routes>
    )
}