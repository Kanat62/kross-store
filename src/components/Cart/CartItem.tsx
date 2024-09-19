import { ListItem } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../store/cartSlice'
import './Cart.scss'
import deleteIcon from '../../assets/imgs/delete.svg'
import { IProduct } from '../../interface'

type Props = {
    item: IProduct
}
const CartItem = ({ item }: Props) => {
    const dispatch = useDispatch()
    return (
        <ListItem key={item.id} className="cart-item">
            <div className="cart-item__img">
                <img src={item.img} alt={item.name} />
            </div>
            <div className="">
                <div className="cart-item__name">{item.name}</div>
                <div className="cart-item__price">{item.price} руб.</div>
            </div>
            <div
                onClick={() => dispatch(removeItem(item.id))}
                className="cart-item__delete"
            >
                <img src={deleteIcon} alt="delete" />
            </div>
        </ListItem>
    )
}

export default CartItem
