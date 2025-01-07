import { Product } from "../types/productTypes"

const API_URL = import.meta.env.VITE_PRODUCT_FETCHING_API

export const fetchProducts = async (): Promise<Product [] | null> => {
    try {
        const response = await fetch(API_URL)
        if(!response.ok){
            throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error fetching products : ', error);
        throw error
    }
}