import { WishList,  wishListItem } from "./WishList";


it('can create instance of model', () => {
    const item = wishListItem.create({
        "name" : "Chronicles of Narnia Box set - C.S. Lewis",
        "price": 23.42,
        "image": ''
    })

    expect(item.price).toBe(23.42)
    expect(item.image).toBe('')
})

it('can create a wishList', () => {
    const list =  WishList.create({
        items: [
            {
                "name" : "Chronicles of Narnia Box set - C.S. Lewis",
                "price": 23.42,
            }   
        ]
    })
    expect(list.items.length).toBe(1)
    expect(list.items[0].price).toBe(23.42)
})