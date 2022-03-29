// use local storage to manipulate data

function addToDb(id) {
  let shopingCart
  const storedCart = localStorage.getItem('shopping-cart')
  
  if (storedCart) {
    shopingCart = JSON.parse(storedCart)
  } else {
    shopingCart = {}
  }
  
  const quantity = shopingCart[id]
  if (quantity) {
    const newQuantity = quantity + 1
    shopingCart[id] = newQuantity
  } else shopingCart[id] = 1

  localStorage.setItem('shopping-cart', JSON.stringify(shopingCart))
}

function removeFromDb(id) {
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart)
    if (id in shoppingCart) {
      delete shoppingCart[id]
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
}


export { addToDb, removeFromDb }
