export interface Product {
    id: number
    name: string
    image: string
    categoryId: number
    categoryName: string
    departmentId: number
    departmentName: string
}

export interface MenuProduct {
    id: number
    name: string
}

export interface ProductCreationDTO {
    name: string
    image: File
    categoryId: number
    departmentId: number
}