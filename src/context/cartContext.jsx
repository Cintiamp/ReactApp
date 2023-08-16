import { createContext, useState } from "react"

const cartContext = createContext({ cart: [] })

function CartContextProvider(props) {
  const [ cart, setCart ] = useState([])
  const prueba = 'otra prueba'

  function addToCart(product, count) {
    const newCart = [...cart]
    if (isInCart(product.id)){
      const indexUpdate = cart.findIndex( item => item.id === product.id)
      newCart[indexUpdate].count += count
      setCart(newCart)
    } else {
      setCart( [...cart, { ...product, count}] )
    }
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id)
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id)
  }

  function removeItem(id) {
    return null
  }

  function clearCart() {
    return null
  }

  function getTotalItemsInCart() {
    let total = 0
    cart.forEach((item) => {
      total += item.count
    })
    return total
  }
  
  function getTotalPriceInCart() {
    let total = 0
    cart.forEach((item) => {
      total += item.count * item.price
    })
    return total
  }

  return (
    <cartContext.Provider value={{ 
      getItemInCart,
      cart, 
      prueba, 
      addToCart, 
      removeItem, 
      clearCart, 
      getTotalItemsInCart, 
      getTotalPriceInCart,
      }}>
      {props.children}
    </cartContext.Provider>
  )
}

export { cartContext, CartContextProvider}