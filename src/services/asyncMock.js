const productos = [
        {
            title: "Black xs",
            id: 1,
            stock: 10,
            description: "EDP",
            img: "../../assets/images/black-xs-femme-edp.jpg",
            price: 51800,
            category: "femme"
        },
        {
            title: "Black xs",
            id: 2,
            stock: 10,
            description: "EDT",
            img: "../../assets/images/black-xs-men-edt.jpg",
            price: 53578,
            category: "men"
        },
        {
            title: "Fame",
            id: 3,
            stock: 6,
            description: "EDP",
            img: "../../assets/images/fame-femme-edp.webp",
            price: 65550,
            category: "femme"
        },
        {
            title: "Phantom",
            id: 4,
            stock: 6,
            description: "EDT",
            img: "../../assets/images/phantom-men-edt.png",
            price: 54650,
            category: "men"
        },
        {
            title: "Olympea",
            id: 5,
            stock: 12,
            description: "EDP",
            img: "../../assets/images/olympea-femme-edp.png",
            price: 50520,
            category: "femme"
        },
        {
            title: "Invictus",
            id: 6,
            stock: 12,
            description: "EDT",
            img: "../../assets/images/invictus-men-edt.jpg",
            price: 52550,
            category: "men"
        },
        {
            title: "Lady Million",
            id: 7,
            stock: 12,
            description: "EDP",
            img: "../../assets/images/lady-million-femme-edp.jpg",
            price: 63150,
            category: "femme"
        },
        {
            title: "One Million",
            id: 8,
            stock: 12,
            description: "EDT",
            img: "../../assets/images/one-million-men-edt.webp",
            price: 53601,
            category: "men"
        },
        {
            title: "Pure xs",
            id: 9,
            stock: 8,
            description: "EDP",
            img: "../../assets/images/pure-xs-femme-edp.jpg",
            price: 51800,
            category: "femme"
        },
        {
            title: "Pure xs",
            id: 10,
            stock: 8,
            description: "EDT",
            img: "../../assets/images/pure-xs-men-edt.jpg", 
            price: 44650,
            category: "men"
        },
    ] 


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