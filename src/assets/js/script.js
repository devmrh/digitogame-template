export function formatPrice(price) {
    let mPrice = ''
    for (let index = price.length - 1; index >= 0; index--) {
        if (index % 3 == 0 && index != 0) {
            mPrice += price[price.length - 1 - index] + ","

        } else {
            mPrice += price[price.length - 1 - index]
        }
    }
    return mPrice
}
