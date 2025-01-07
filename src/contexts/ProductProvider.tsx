import { ReactNode, useEffect, useState } from "react"
import { fetchProducts } from "../services/productFetch"
import { Product } from "../types/productTypes"
import { ProductContext } from "./ProductContext"

type ProductProviderProps = {
    children : ReactNode
}

export const ProductProvider : React.FC<ProductProviderProps> = ({children}) => {
    const [products, setProducts] = useState<Product []>([])

    useEffect(() =>{
        const getProducts = async () => {
            const data: Product[] | null = await fetchProducts()
            setProducts(data ?? [])
        }
        getProducts()
    },[])

    return (
        <ProductContext.Provider value={{products}} >
            {children}
        </ProductContext.Provider>
    )
}