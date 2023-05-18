import { getShoppingCart } from "../../utilities/fakedb";

const loadCart = async () => {
    const storedCart = getShoppingCart()
    const ids = Object.keys(storedCart)
    // console.log(ids);
    const res = await fetch('http://localhost:4000/productsByIds',{
        method :'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(ids)
    });
    const data = await res.json()

    const saveCart = [];
    for (const id in storedCart) {
        const addeddCart = data.find(pd => pd._id === id)
        // console.log(addeddCart)
        const quantity = storedCart[id]
        addeddCart.quantity = quantity;
        // console.log(quantity)
        saveCart.push(addeddCart)
    }

    return saveCart
}

export default loadCart; 