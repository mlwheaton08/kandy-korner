import { Outlet, Route, Routes } from "react-router-dom"
import { Stores } from "../stores/Stores.js"

export const ApplicationViews = () => {
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

                
            </Route>
        </Routes>
    )
}

