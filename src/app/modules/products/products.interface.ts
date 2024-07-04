export interface Tvariant {
  type: string
  value: string
}

export interface Tinventory {
  quantity: number
  inStock: boolean
}

export interface Tproduct {
  name: string
  description: string
  price: number
  category: string
  tags: string[]
  variants: Tvariant
  inventory: Tinventory
}
