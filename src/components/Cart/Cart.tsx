import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { toggleCart } from '../../store/cartSlice'
import { Drawer, List, Box } from '@mui/material'

import './Cart.scss'
import { CartEmpty } from './CartEmpty'
import CartFooter from './CartFooter'
import CartItem from './CartItem'

const Cart: React.FC = () => {
    const dispatch = useDispatch()
    const { cart, isOpen } = useSelector((state: RootState) => state.cart)

    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={() => dispatch(toggleCart())}
        >
            <Box
                sx={{ width: 385 }}
                role="presentation"
                className="cart-content"
            >
                <h2 className="cart-title">Корзина</h2>

                {cart.length < 1 ? (
                    <CartEmpty />
                ) : (
                    <>
                        <List className="cart-list">
                            {cart.map((item) => (
                                <CartItem item={item} key={item.id} />
                            ))}
                        </List>

                        <CartFooter />
                    </>
                )}
            </Box>
        </Drawer>
    )
}

export default Cart
