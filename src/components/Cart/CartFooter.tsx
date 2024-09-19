import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Button } from '@mui/material'
import './Cart.scss'
import arrowRightIcon from '../../assets/imgs/arrow-right.svg'

const CartFooter = () => {
    const { cart } = useSelector((state: RootState) => state.cart)

    const totalSum = cart.reduce((acum, product) => {
        return acum + product.price
    }, 0)
    const tax = Math.trunc((totalSum * 5) / 100)
    return (
        <div className="cart-footer">
            <div className="cart-footer__total">
                <div className="text">Итого:</div>
                <div className="border-bottom"></div>
                <div className="total">{totalSum} руб.</div>
            </div>
            <div className="cart-footer__total">
                <div className="text-tax">Налог 5%: </div>
                <div className="border-bottom"></div>
                <div className="total">{tax} руб.</div>
            </div>

            <Button
                variant="contained"
                sx={{
                    width: '100%',
                    height: '55px',
                    backgroundColor: '#9dd458',
                    color: '#fff',
                    borderRadius: '18px',
                    fontSize: '14px',
                    fontWeight: 600,
                }}
                endIcon={
                    <img
                        src={arrowRightIcon}
                        alt=""
                        style={{ marginLeft: 40 }}
                    />
                }
            >
                Оформить заказ
            </Button>
        </div>
    )
}

export default CartFooter
