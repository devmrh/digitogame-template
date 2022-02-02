export function formatPrice(price) {
    price = price.toString()
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
export function getOldPrice(price, off) {
    price = price.toString()
    off = off.toString()
    let currentPercent = 100 - off;
    return parseInt((price * 100) / currentPercent);
}
