import { useEffect, useState } from "react"
import { Product } from "../types/productTypes"

const API_URL = import.meta.env.VITE_PRODUCT_FETCHING_API

const useProduct = (id : string) => {
    const [product, setproduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string|null>(null)

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`)
                if(!response.ok){
                    throw new Error ('Product not found')
                }
                const data = await response.json()
                setproduct(data)
            } catch (error : unknown) {
                if(error instanceof Error){
                    setError(error.message)
                }else{
                    setError("An unknown error occurred")
                }
            }finally{
                setLoading(false)
            }
        }
    fetchProduct()
    },[id])

    return {product, loading, error}
}

export default useProduct