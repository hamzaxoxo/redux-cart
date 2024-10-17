import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { item } from '../../types/types'
import { RootState } from '../store'

interface CartItem extends item {
    quantity: number;
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += action.payload.quantity || 1;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        resetCart: (state) => {
            state.items = []
        },
        updateQuantity: (
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) => {
            const item = state.items.find((item: any) => item.id === action.payload.id);
            if (item && action.payload.quantity > 0) {
                item.quantity = action.payload.quantity;
            } else {
                state.items = state.items.filter((item: any) => item.id !== action.payload.id);
            }
        },
    },
})


export const cartItems = (state: RootState) => state.cart.items
export const { addToCart, removeFromCart, resetCart, updateQuantity } = cartSlice.actions;
export default cartSlice.actions;
