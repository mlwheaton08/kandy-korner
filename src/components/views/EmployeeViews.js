import { Outlet, Route, Routes } from "react-router-dom"
import { Stores } from "../stores/Stores.js"
import { Products } from "../products/Products.js"
import { ProductForm } from "../products/ProductForm.js"
import { EmployeeList } from "../employees/EmployeeList.js"
import { EmployeeDetails } from "../employees/EmployeeDetails.js"
import { EmployeeForm } from "../employees/EmployeeForm.js"
import { CustomerList } from "../customers/CustomerList.js"
import { CustomerDetails } from "../customers/CustomerDetails.js"

export const EmployeeViews = () => {
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
			<Route path="products" element={ <Products /> } />
            <Route path="product/create" element={ <ProductForm /> } />
            <Route path="employees" element={ <EmployeeList /> } />
            <Route path="employees/:employeeId" element={ <EmployeeDetails /> } />
            <Route path="employee/add" element={ <EmployeeForm /> } />
            <Route path="customers" element={ <CustomerList /> } />
            <Route path="customers/:customerId" element={ <CustomerDetails /> } />
                
            </Route>
        </Routes>
    )
}