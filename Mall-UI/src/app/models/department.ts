import { Category, MenuCategory } from "./category"

export interface Department {
    id: number
    name: string
}

export interface MenuDepartment {
    id: number
    name: string
    categories: MenuCategory[]
}