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
export function unsuccessfulToast(swal, image) {
    swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 100000,
        timerProgressBar: true,
        html:
            `<p class="unsuccessful"><img src="${image}" >کد وارد شده صحیح نمیباشد</p>`,
    })
}
