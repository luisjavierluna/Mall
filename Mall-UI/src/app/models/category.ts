import { MenuProduct, Product } from "./product"

export interface Category {
    id: number
    name: string
    departmentId: number
    departmentName: string
}

export interface MenuCategory {
    id: number
    name: string
    products: MenuProduct[]
}