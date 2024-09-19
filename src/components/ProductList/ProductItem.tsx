import { Grid2 } from '@mui/material'
import React from 'react'
import { IProduct } from '../../interface'
import { useDispatch, useSelector } from 'react-redux'
import btn from '../../assets/imgs/btn.svg'
import btnActive from '../../assets/imgs/btn-active.svg'
import { addItem } from '../../store/cartSlice'
import { RootState } from '../../store/store'

type Props = {
    product: IProduct
}

const ProductItem: React.FC<Props> = ({ product }: Props) => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state: RootState) => state.cart)

    const handleAddItem = (item: IProduct) => {
        dispatch(addItem(item))
    }
    const isInCart = cart.some((item) => item.id === product.id)
    return (
        <Grid2 size={1}>
            <div className="product-item">
                <div className="product-item__img">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="product-item__name">{product.name}</div>
                <div className="product-item__box">
                    <div className="product-item__price">
                        ЦЕНА: <br /> <span>{product.price}</span>
                    </div>
                    <div
                        className="product-item__btn"
                        onClick={() => handleAddItem(product)}
                    >
                        {isInCart ? (
                            <img src={btnActive} alt="" />
                        ) : (
                            <img src={btn} alt="" />
                        )}
                    </div>
                </div>
            </div>
        </Grid2>
    )
}

export default ProductItem
