import { getShoppingCart } from "../../utilities/fakedb";

const loadCart = async () => {
    const res = await fetch('/products.json');
    const data = await res.json()

    const storedCart = getShoppingCart()
    const saveCart = [];
    for (const id in storedCart) {
        const addeddCart = data.find(pd => pd.id === id)
        // console.log(addeddCart)
        const quantity = storedCart[id]
        addeddCart.quantity = quantity;
        // console.log(quantity)
        saveCart.push(addeddCart)
    }

    return saveCart
}

export default loadCart; 