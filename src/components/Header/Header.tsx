import { Container } from '@mui/material'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/cartSlice'
import { RootState } from '../../store/store'
import logoIcon from '../../assets/imgs/logo.png'
import cartIcon from '../../assets/imgs/cart.svg'
import userIcon from '../../assets/imgs/user.svg'
import favoriteIcon from '../../assets/imgs/favorite.svg'

const Header = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state: RootState) => state.cart)

    const totalSum = cart.reduce((acum, product) => {
        return acum + product.price
    }, 0)

    return (
        <header className="header">
            <Container
                maxWidth={false}
                sx={{ maxWidth: '1010px' }}
                className="header-container"
            >
                <div className="logo-wrapper">
                    <img src={logoIcon} className="logo-img" alt="logo" />
                    <div className="logo-box">
                        <h1 className="logo-title">KROSS STORE</h1>
                        <p className="logo-subtitle">
                            Магазин лучших кроссовок
                        </p>
                    </div>
                </div>
                <ul className="nav-list">
                    <li
                        className="nav-link"
                        onClick={() => dispatch(toggleCart())}
                    >
                        <img
                            src={cartIcon}
                            className="nav-link__img"
                            alt="Kорзина"
                        />
                        <p className="nav-link__text">{totalSum} руб.</p>
                    </li>
                    <li className="nav-link">
                        <img
                            src={favoriteIcon}
                            className="nav-link__img"
                            alt="Закладки"
                        />
                        <p className="nav-link__text">Закладки</p>
                    </li>
                    <li className="nav-link">
                        <img
                            src={userIcon}
                            className="nav-link__img"
                            alt="Профиль"
                        />
                        <p className="nav-link__text">Профиль</p>
                    </li>
                </ul>
            </Container>
        </header>
    )
}

export default Header
