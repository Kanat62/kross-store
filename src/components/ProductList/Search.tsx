import React, { useState } from 'react'
import { IProduct } from '../../interface'

type Props = {
    products: IProduct[]
    setFilteredProducts: any
}

const Search: React.FC<Props> = ({ products, setFilteredProducts }: Props) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value
        setSearchTerm(value)

        if (value === '') {
            setFilteredProducts(products)
        } else {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase())
            )
            setFilteredProducts(filtered)
        }
    }
    return (
        <div className="products-header__search">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                className="search"
                placeholder="Поиск..."
            />
        </div>
    )
}

export default Search
