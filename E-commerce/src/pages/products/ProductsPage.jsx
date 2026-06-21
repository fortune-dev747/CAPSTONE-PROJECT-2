import React from 'react'
import { NavBar } from '../../components/NavBar'
import { Products } from './Products'


export function ProductsPage() {
    return (
        <>
            <title>Products</title>
            <NavBar />
            <Products />
        </>
    )
}