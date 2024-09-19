import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
    id: string
    name: string
    img: string
    price: number
}

interface CartState {
    cart: CartItem[]
    isOpen: boolean
}

const initialState: CartState = {
    cart: [],
    isOpen: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const itemExists = state.cart.some(
                (item) => item.id === action.payload.id
            )
            if (!itemExists) {
                state.cart.push(action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            )
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
    },
})

export const { addItem, removeItem, toggleCart } = cartSlice.actions
export default cartSlice.reducer
