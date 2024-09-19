import { useEffect, useState } from 'react'
import { Container, Grid2 } from '@mui/material'

import './ProductList.scss'

import ProductItem from './ProductItem'
import { IProduct } from '../../interface'
import Search from './Search'

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    'https://my-json-server.typicode.com/Kanat62/json-data/products'
                )
                const data = await response.json()
                console.log(data)
                setProducts(data)
                setFilteredProducts(data)
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
            }
        }

        fetchProduct()
    }, [])

    return (
        <main className="products-wrapper">
            <Container maxWidth={false} sx={{ maxWidth: '1010px' }}>
                <div className="products-header">
                    <h1 className="products-header__title">Все кроссовки</h1>
                    <Search
                        products={products}
                        setFilteredProducts={setFilteredProducts}
                    />
                </div>
                <Grid2 container spacing={5} columns={4}>
                    {filteredProducts.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </Grid2>
            </Container>
        </main>
    )
}

export default ProductList
