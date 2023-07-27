const productos = [
        {
            title: "Black xs - femme",
            id: 1,
            stock: 10,
            description: "EDP",
            img: "../../assets/images/black-xs-femme-edp.jpg",
            price: 51800
        },
        {
            title: "Black xs - men",
            id: 2,
            stock: 10,
            description: "EDT",
            img: "../../assets/images/black-xs-men-edt.jpg",
            price: 53578
        },
        {
            title: "Fame - femme",
            id: 3,
            stock: 6,
            description: "EDP",
            img: "../../assets/images/fame-femme-edp.webp",
            price: 65550
        },
        {
            title: "Phantom - men",
            id: 4,
            stock: 6,
            description: "EDT",
            img: "../../assets/images/phantom-men-edt.png",
            price: 54650
        },
        {
            title: "Olympea - femme",
            id: 5,
            stock: 12,
            description: "EDP",
            img: "../../assets/images/olympea-femme-edp.png",
            price: 50520
        },
        {
            title: "Invictus - men",
            id: 6,
            stock: 12,
            description: "EDT",
            img: "../../assets/images/invictus-men-edt.jpg",
            price: 52550
        },
        {
            title: "Lady Million - femme",
            id: 7,
            stock: 12,
            description: "EDP",
            img: "../../assets/images/lady-million-femme-edp.jpg",
            price: 63150
        },
        {
            title: "One Million - men",
            id: 8,
            stock: 12,
            description: "EDT",
            img: "../../assets/images/one-million-men-edt.webp",
            price: 53601
        },
        {
            title: "Pure xs - femme",
            id: 9,
            stock: 8,
            description: "EDP",
            img: "../../assets/images/pure-xs-femme-edp.jpg",
            price: 51800
        },
        {
            title: "Pure xs - men",
            id: 10,
            stock: 8,
            description: "EDT",
            img: "../../assets/images/pure-xs-men-edt.jpg", 
            price: 44650
        },
    ] 


function getData() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}

export function getProductData() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(productos[3])
        }, 2000)
    })
}

export default getData