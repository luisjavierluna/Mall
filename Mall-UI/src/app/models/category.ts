import { MenuProduct, Product } from "./product"

export interface Category {
    id: number
    name: string
    image: string
    departmentId: number
    departmentName: string
}

export interface MenuCategory {
    id: number
    name: string
    products: MenuProduct[]
}

export interface CategoryCreationDTO {
    name: string
    image: File
    departmentId: number
}