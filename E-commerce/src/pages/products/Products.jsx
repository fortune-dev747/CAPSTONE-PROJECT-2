import { useState, useEffect } from 'react'
import { useCart } from '../checkout/CartContext'
import { SearchBar } from './SearchBar'

export function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [addedIds, setAddedIds] = useState([])
  // add search state:
  const [search, setSearch] = useState('')
  const { addToCart } = useCart()



  // filter products:
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching products:', err)
        setLoading(false)
      })
  }, [])

  const handleAddToCart = (product) => {
    addToCart(product)
    setAddedIds(prev => [...prev, product.id])
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== product.id))
    }, 2000)
  }

  if (loading) {
    return (
      <div style={{ color: '#ffffff', textAlign: 'center', paddingTop: '160px' }}>
        Loading products...
      </div>
    )
  }

  return (
    <>
      <div style={{ backgroundColor: '#0a0a0a', paddingTop: '100px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
          <SearchBar value={search} onChange={setSearch} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
          }}>
            {filteredProducts.map((product) => {
              const isAdded = addedIds.includes(product.id)
              return (
                <div key={product.id} style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}>
                  <img
                    alt={product.title}
                    src={product.images[0]}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    flex: 1,
                  }}>
                    <h3 style={{ fontSize: '14px', color: '#ffffff', fontWeight: '500', margin: 0 }}>
                      {product.title}
                    </h3>
                    <p style={{ fontSize: '18px', fontWeight: '700', color: '#F5A623', margin: 0 }}>
                      ${product.price}
                    </p>

                    {/* Added confirmation */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      height: '24px',
                      opacity: isAdded ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <h2 style={{ color: '#4ade80', fontSize: '13px', fontWeight: '500', margin: 0 }}>Added</h2>
                    </div>

                    <div className='hello' onClick={() => handleAddToCart(product)}>
                      <h2 className='add-to-cart'>Add to Cart</h2>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}