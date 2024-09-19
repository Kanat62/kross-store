import { Button } from '@mui/material'

import './Cart.scss'
import arrowLeftIcon from '../../assets/imgs/arrow-left.svg'
import empty from '../../assets/imgs/empty.png'

export const CartEmpty = () => {
    return (
        <div className="cart-empty">
            <div className="cart-empty__img">
                <img src={empty} alt="" />
            </div>
            <div className="cart-empty__title">Корзина пустая</div>
            <p className="cart-empty__text">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <Button
                variant="contained"
                href="/"
                sx={{
                    width: '100%',
                    height: '55px',
                    backgroundColor: '#9dd458',
                    color: '#fff',
                    borderRadius: '18px',
                    fontSize: '14px',
                    fontWeight: 600,
                }}
                startIcon={
                    <img
                        src={arrowLeftIcon}
                        alt=""
                        style={{ marginRight: 10 }}
                    />
                }
            >
                Вернуться назад
            </Button>
        </div>
    )
}
