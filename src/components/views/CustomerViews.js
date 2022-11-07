import { Outlet, Route, Routes } from "react-router-dom"
import { Stores } from "../stores/Stores.js"
import { ProductContainer } from "../products/ProductContainer.js"
import { Orders } from "../products/Orders.js"

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
			<Route path="orders" element={ <Orders /> } />
                
            </Route>
        </Routes>
    )
}