import { useState } from "react"
import { FindCandy } from "./FindCandy"
import { Products } from "./Products"

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <FindCandy setterFunction={setSearchTerms} />
        <Products searchTermState={searchTerms} />
    </>
}