import React from 'react'
import { NavBar } from '../../components/NavBar'
import { Products } from './Products'


export function ProductsPage() {
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
            <title>Products</title>
            <NavBar />
            <Products />
        </>
    )
}