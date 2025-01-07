import { createContext } from "react"
import { Product } from "../types/productTypes"



type ProductContextType = {
    products : Product[]
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined)



