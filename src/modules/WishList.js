import { types } from "mobx-state-tree";

const data = {
    "name" : "Chronicles of Narnia Box set - C.S. Lewis",
    "price": 23.42,
    "image": ''
}

export const wishListItem = types.model({
    name: types.string,
    price: types.number,
    image: ''
})

export const WishList = types.model({
    items: types.optional(types.array(wishListItem), [])
})