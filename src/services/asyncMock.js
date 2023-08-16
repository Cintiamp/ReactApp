

function getData() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}

export function getProductData(idURL) {
    return new Promise ( (resolve, reject) => {
        const productRequested = productos.find( (item) => item.id === parseInt(idURL))
        setTimeout( () => {
            resolve(productRequested)
        }, 2000)
    })
}

export function getCategoryData(categoryURL) {

    return new Promise ( (resolve, reject) => {
        const categoryRequested = productos.filter( item => {
            return (item.category.toLowerCase() === categoryURL.toLowerCase())
        })

        setTimeout( () => {
            resolve(categoryRequested)
        }, 2000)
    })
}

export default getData