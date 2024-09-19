import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'

function App() {
    return (
        <>
            <Header />
            <ProductList />
            <Cart/>
        </>
    )
}

export default App

// json-server --watch db.json
