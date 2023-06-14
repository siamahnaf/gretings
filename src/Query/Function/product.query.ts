//Get Trending Movies
import { GetProductsData, SingleProductData } from "../Types/product.types";

export const headers = {
    "x-sharefox-shop-domain": "fsfsdfsdfsdfsf.shop.mysharefox.com",
    "locale": "no",
    "origin": "1"
}

export const GET_PRODUCTS = async (): Promise<GetProductsData[]> => await (await fetch(`https://api.sharefox.co/products/`, { headers }).then(res => res.json()));


export const GET_SINGLE_PRODUCT = async (id: string): Promise<SingleProductData> => await (await fetch(`https://api.sharefox.co/products/${id}`, { headers }).then(res => res.json()));