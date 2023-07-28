import blackxsshe from '../assets/black-xs-femme-edp.jpg'
import blackxshe from '../assets/black-xs-men-edt.jpg'
import fame from '../assets/fame-femme-edp.webp'
import phantom from '../assets/phantom-men-edt.png'
import olympea from '../assets/olympea-femme-edp.png'
import invictus from '../assets/invictus-men-edt.jpg'
import ladymillion from '../assets/lady-million-femme-edp.jpg'
import onemillion from '../assets/one-million-men-edt.webp'
import purexsshe from '../assets/pure-xs-femme-edp.webp'
import purexshe from '../assets/pure-xs-men-edt.jpg'
import blossomme from '../assets/blossomme-unisex.webp'
import crazyme from '../assets/crazyme-unisex.jpg'
import dandyme from '../assets/dandyme-unisex.webp'
import dangerousme from '../assets/dangerousme-unisex.jpg'
import eroticme from '../assets/eroticme-unisex.webp'
import fabulousme from '../assets/fabulousme-unisex.webp'
import geniusme from '../assets/geniusme-unisex.webp'
import majorme from '../assets/majorme-unisex.webp'
import strongme from '../assets/strongme-unisex.webp'

const productos = [
        {
            title: "Black xs",
            id: 1,
            stock: 10,
            description: "EDP",
            img: blackxsshe,
            price: 51800,
            category: "femme"
        },
        {
            title: "Black xs",
            id: 2,
            stock: 10,
            description: "EDT",
            img: blackxshe,
            price: 53578,
            category: "men"
        },
        {
            title: "Fame",
            id: 3,
            stock: 6,
            description: "EDP",
            img: fame,
            price: 65550,
            category: "femme"
        },
        {
            title: "Phantom",
            id: 4,
            stock: 6,
            description: "EDT",
            img: phantom,
            price: 54650,
            category: "men"
        },
        {
            title: "Olympea",
            id: 5,
            stock: 12,
            description: "EDP",
            img: olympea,
            price: 50520,
            category: "femme"
        },
        {
            title: "Invictus",
            id: 6,
            stock: 12,
            description: "EDT",
            img: invictus,
            price: 52550,
            category: "men"
        },
        {
            title: "Lady Million",
            id: 7,
            stock: 12,
            description: "EDP",
            img: ladymillion,
            price: 63150,
            category: "femme"
        },
        {
            title: "One Million",
            id: 8,
            stock: 12,
            description: "EDT",
            img: onemillion,
            price: 53601,
            category: "men"
        },
        {
            title: "Pure xs",
            id: 9,
            stock: 8,
            description: "EDP",
            img: purexsshe,
            price: 51800,
            category: "femme"
        },
        {
            title: "Pure xs",
            id: 10,
            stock: 8,
            description: "EDT",
            img: purexshe, 
            price: 44650,
            category: "men"
        },
        {
            title: "Blossom Me",
            id: 11,
            stock: 5,
            description: "EDP",
            img: blossomme, 
            price: 62150,
            category: "unisex"
        },
        {
            title: "Crazy Me",
            id: 12,
            stock: 5,
            description: "EDP",
            img: crazyme, 
            price: 64050,
            category: "unisex"
        },
        {
            title: "Dandy Me",
            id: 13,
            stock: 5,
            description: "EDP",
            img: dandyme, 
            price: 62900,
            category: "unisex"
        },
        {
            title: "Dangerous Me",
            id: 14,
            stock: 5,
            description: "EDP",
            img: dangerousme, 
            price: 63250,
            category: "unisex"
        },
        {
            title: "Erotic Me",
            id: 15,
            stock: 5,
            description: "EDP",
            img: eroticme, 
            price: 64650,
            category: "unisex"
        },
        {
            title: "Fabulous Me",
            id: 16,
            stock: 5,
            description: "EDP",
            img: fabulousme, 
            price: 63500,
            category: "unisex"
        },
        {
            title: "Genius Me",
            id: 17,
            stock: 5,
            description: "EDP",
            img: geniusme, 
            price: 61100,
            category: "unisex"
        },
        {
            title: "Major Me",
            id: 18,
            stock: 5,
            description: "EDP",
            img: majorme, 
            price: 63250,
            category: "unisex"
        },
        {
            title: "Strong Me",
            id: 19,
            stock: 5,
            description: "EDP",
            img: strongme, 
            price: 64300,
            category: "unisex"
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