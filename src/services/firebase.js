//Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc, setDoc, writeBatch } from 'firebase/firestore'
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

const firebaseConfig = {
    apiKey: "AIzaSyA2U_n3pd1xDikynHJChVMCAhDBg98vfDY",
    authDomain: "react-app-ecommerce-3e439.firebaseapp.com",
    projectId: "react-app-ecommerce-3e439",
    storageBucket: "react-app-ecommerce-3e439.appspot.com",
    messagingSenderId: "758361676383",
    appId: "1:758361676383:web:8fbcb71a3bc553d27259ea"
  };
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

async function getData() {
const productsRef = collection(db, 'products')
const documentsSnapshot = await getDocs(productsRef)
const documents = documentsSnapshot.docs
const docsData = documents.map((item) => { return {...item.data(), id: item.id }})
return(docsData)
}

async function getProductData(id) {
    const docRef = doc(db, "products", id)
    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
        return {...docSnapshot.data(), id: docSnapshot.id}
    } else {
        throw new Error('No encontramos ese producto')
    }
}

async function getCategoryData() {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", "EDP"))
    const documentsSnapshot = await getDocs(q)
    const documents = documentsSnapshot.docs
    const docsData = documents.map((item) => { return {...item.data(), id: item.id }})
    return(docsData)
}

async function createOrder(orderData) {
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)
    return(docCreated.id)
}

async function getOrder(id) {
    const docRef = doc(db, "orders", id)
    const docSnapshot = await getDoc(docRef)
    return { ...docSnapshot.data(), id: docSnapshot.id}
}

async function _exportProductsWithBatch() {
    const productos = [
        {
            title: "Black xs",
            id: 1,
            stock: 10,
            description: "EDP",
            img: blackxsshe,
            price: 51800,
            category: "femme",
            data: 'Black XS for Her de Paco Rabanne es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres. Black XS for Her se lanzó en 2007. Black XS for Her fue creada por Emilie Bevierre-Coppermann y Mark Buxton. Las Notas de Salida son arándano, pimienta rosa y tamarindo; las Notas de Corazón son cacao, rosa y violeta negra; las Notas de Fondo son vainilla, pachulí y madera de massoia.'
        },
        {
            title: "Black xs",
            id: 2,
            stock: 10,
            description: "EDT",
            img: blackxshe,
            price: 53578,
            category: "men", 
            data: 'Black XS (2018) de Paco Rabanne es una fragancia de la familia olfativa Ámbar Amaderada para Hombres. Black XS (2018) se lanzó en 2018. Black XS (2018) fue creada por Olivier Cresp y Rosendo Mateu. Las Notas de Salida son cítricos, limón (lima ácida), cempasúchil (tagete, clavelón) y salvia; las Notas de Corazón son praliné, canela, bálsamo de Tolú y cardamomo negro; las Notas de Fondo son pachulí, ámbar negro, árbol de ébano y palisandro.'
        },
        {
            title: "Fame",
            id: 3,
            stock: 6,
            description: "EDP",
            img: fame,
            price: 65550,
            category: "femme", 
            data: 'Fame de Paco Rabanne es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres. Esta fragrancia es nueva. Fame se lanzó en 2022. Fame fue creada por Dora Baghriche, Marie Salamagne, Alberto Morillas y Fabrice Pellegrin. Las Notas de Salida son mango y bergamota; las Notas de Corazón son jazmín y incienso de olíbano (franquincienso); las Notas de Fondo son vainilla y sándalo.'
        },
        {
            title: "Phantom",
            id: 4,
            stock: 6,
            description: "EDT",
            img: phantom,
            price: 54650,
            category: "men",
            data: 'Phantom de Paco Rabanne es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Phantom se lanzó en 2021. Phantom fue creada por Anne Flipo, Dominique Ropion, Loc Dong y Juliette Karagueuzoglou. Las Notas de Salida son lavanda, Entusiasmo de limón y limón de Amalfi (lima de Amalfi); las Notas de Corazón son lavanda, Notas terrosas, Humo, manzana y pachulí; las Notas de Fondo son vainilla, lavanda y vetiver.'
        },
        {
            title: "Olympea",
            id: 5,
            stock: 12,
            description: "EDP",
            img: olympea,
            price: 50520,
            category: "femme",
            data: 'Olympéa de Paco Rabanne es una fragancia de la familia olfativa Ámbar Floral para Mujeres. Olympéa se lanzó en 2015. Olympéa fue creada por Loc Dong, Anne Flipo y Dominique Ropion. Las Notas de Salida son jazmín de agua, mandarina verde y flor de jengibre; las Notas de Corazón son vainilla y sal; las Notas de Fondo son ámbar gris, madera de cachemira y sándalo.'
        },
        {
            title: "Invictus",
            id: 6,
            stock: 12,
            description: "EDT",
            img: invictus,
            price: 52550,
            category: "men",
            data: 'Invictus de Paco Rabanne es una fragancia de la familia olfativa Amaderada Acuática para Hombres. Invictus se lanzó en 2013. Invictus fue creada por Veronique Nyberg, Anne Flipo, Olivier Polge y Dominique Ropion. Las Notas de Salida son notas marinas, toronja (pomelo) y mandarina; las Notas de Corazón son hoja de laurel y jazmín; las Notas de Fondo son ámbar gris, madera de gaiac, musgo de roble y pachulí.'
        },
        {
            title: "Lady Million",
            id: 7,
            stock: 12,
            description: "EDP",
            img: ladymillion,
            price: 63150,
            category: "femme",
            data: 'Lady Million de Paco Rabanne es una fragancia de la familia olfativa Floral Frutal para Mujeres. Lady Million se lanzó en 2010. Lady Million fue creada por Anne Flipo, Beatrice Piquet, Dominique Ropion y Bruno Jovanovic. Las Notas de Salida son frambuesa, neroli y limón de Amalfi (lima de Amalfi); las Notas de Corazón son jazmín, flor del naranjo africano y gardenia; las Notas de Fondo son miel blanca, pachulí y ámbar.'
        },
        {
            title: "One Million",
            id: 8,
            stock: 12,
            description: "EDT",
            img: onemillion,
            price: 53601,
            category: "men",
            data: '1 Million de Paco Rabanne es una fragancia de la familia olfativa Amaderada Especiada para Hombres. 1 Million se lanzó en 2008. 1 Million fue creada por Christophe Raynaud, Olivier Pescheux, Michel Girard y Christian Dussoulier. Las Notas de Salida son mandarina roja, toronja (pomelo) y menta; las Notas de Corazón son canela, notas especiadas y rosa; las Notas de Fondo son ámbar, cuero, notas amaderadas y pachulí hindú.'
        },
        {
            title: "Pure xs",
            id: 9,
            stock: 8,
            description: "EDP",
            img: purexsshe,
            price: 51800,
            category: "femme",
            data: 'Pure XS For Her de Paco Rabanne es una fragancia de la familia olfativa Ámbar Floral para Mujeres. Pure XS For Her se lanzó en 2018. La Nariz detrás de esta fragrancia es Quentin Bisch. Una luminosa flor de ylang ylang de facetas frescas y solares. El narcotico calor de vainilla libera su instinto carnal. Una explosión de palomitas crujientes, que hacen de ella una fragrancia sensual. Un resultado magnético'
        },
        {
            title: "Pure xs",
            id: 10,
            stock: 8,
            description: "EDT",
            img: purexshe, 
            price: 44650,
            category: "men",
            data: 'Pure XS de Paco Rabanne es una fragancia de la familia olfativa Aromática Especiada para Hombres. Pure XS se lanzó en 2017. Pure XS fue creada por Anne Flipo, Caroline Dumur y Bruno Jovanovic. Las Notas de Salida son jengibre, tomillo, toronja (pomelo), bergamota y acordes verdes; las Notas de Corazón son vainilla, Licor, canela, cuero y manzana; las Notas de Fondo son mirra, azúcar, cedro, notas amaderadas, cachemira y pachulí.'
        },
        {
            title: "Blossom Me",
            id: 11,
            stock: 5,
            description: "EDP",
            img: blossomme, 
            price: 62150,
            category: "unisex",
            data: 'Tenerlo todo. En exceso. Intensamente indiferente. Las chicas caen bajosu hechizo. La tensión aumenta, es hip, hipnótico y caliente. Ahora esel momento de relajarse, jugar con fuego. Perder el control. Pure XS, dePaco Rabanne. Un oriental indómito, obsesivamente caliente y fresco.Exceso en estado puro. Notas aromáticas: ginger, white thyme ,cinnamon, vanilla y myrrh. Aroma oriental.'
        },
        {
            title: "Crazy Me",
            id: 12,
            stock: 5,
            description: "EDP",
            img: crazyme, 
            price: 64050,
            category: "unisex",
            data: 'Crazy Me de Paco Rabanne es una fragancia de la familia olfativa Ámbar Floral para Hombres y Mujeres. Crazy Me se lanzó en 2019. La Nariz detrás de esta fragrancia es Alienor Massenet. La Nota de Salida es wasabi; la Nota de Corazón es mimosa; las Notas de Fondo son sándalo y especias.'
        },
        {
            title: "Dandy Me",
            id: 13,
            stock: 5,
            description: "EDP",
            img: dandyme, 
            price: 62900,
            category: "unisex",
            data: 'Dandy Me de Paco Rabanne es una fragancia de la familia olfativa Amaderada Especiada para Hombres y Mujeres. Dandy Me se lanzó en 2021. Dandy Me fue creada por Jérôme di Marino y Aurelien Guichard. Las Notas de Salida son canela, azafrán y toronja (pomelo); las Notas de Corazón son rosa de mayo y geranio; las Notas de Fondo son sándalo, madera de oud y vainillla.'
        },
        {
            title: "Dangerous Me",
            id: 14,
            stock: 5,
            description: "EDP",
            img: dangerousme, 
            price: 63250,
            category: "unisex",
            data: 'Dangerous Me de Paco Rabanne es una fragancia de la familia olfativa Ámbar Especiada para Hombres y Mujeres. Dangerous Me se lanzó en 2019. La Nariz detrás de esta fragrancia es Marie Salamagne.'
        },
        {
            title: "Erotic Me",
            id: 15,
            stock: 5,
            description: "EDP",
            img: eroticme, 
            price: 64650,
            category: "unisex",
            data: 'Erotic Me de Paco Rabanne es una fragancia de la familia olfativa Cuero para Hombres y Mujeres. Erotic Me se lanzó en 2019. La Nariz detrás de esta fragrancia es Quentin Bisch.'
        },
        {
            title: "Fabulous Me",
            id: 16,
            stock: 5,
            description: "EDP",
            img: fabulousme, 
            price: 63500,
            category: "unisex",
            data: 'Fabulous Me de Paco Rabanne es una fragancia de la familia olfativa Aromática Frutal para Hombres y Mujeres. Fabulous Me se lanzó en 2019. La Nariz detrás de esta fragrancia es Alienor Massenet. La Nota de Salida es calabaza; la Nota de Corazón es ruibarbo; la Nota de Fondo es sándalo.'
        },
        {
            title: "Genius Me",
            id: 17,
            stock: 5,
            description: "EDP",
            img: geniusme, 
            price: 61100,
            category: "unisex",
            data: 'Genius Me de Paco Rabanne es una fragancia de la familia olfativa Aromática para Hombres y Mujeres. Genius Me se lanzó en 2019. La Nariz detrás de esta fragrancia es Dominique Ropion. La Nota de Salida es cáscara de naranja; la Nota de Corazón es romero; las Notas de Fondo son notas metálicas y musgo.'
        },
        {
            title: "Major Me",
            id: 18,
            stock: 5,
            description: "EDP",
            img: majorme, 
            price: 63250,
            category: "unisex",
            data: 'Major Me de Paco Rabanne es una fragancia de la familia olfativa Amaderada Especiada para Hombres y Mujeres. Major Me se lanzó en 2021. La Nariz detrás de esta fragrancia es Emilie Bevierre-Coppermann. Las Notas de Salida son cereza y pimienta; las Notas de Corazón son incienso, pachulí y madera de oud; las Notas de Fondo son benjuí y musgo.'
        },
        {
            title: "Strong Me",
            id: 19,
            stock: 5,
            description: "EDP",
            img: strongme, 
            price: 64300,
            category: "unisex",
            data: 'Strong Me de Paco Rabanne es una fragancia de la familia olfativa Ámbar Vainilla para Hombres y Mujeres. Strong Me se lanzó en 2019. La Nariz detrás de esta fragrancia es Fabrice Pellegrin. Las Notas de Salida son ciruela y Licor; las Notas de Corazón son notas metálicas y Davana; las Notas de Fondo son vainilla y Amberwood.'
        },
    ] 

    const batch = writeBatch(db) 
    productos.forEach( producto => {
        const newId = producto.id
        delete producto.id
        const newDoc = doc(db, "products", '${newId}')
        batch.set(newDoc, producto)
    })

    await batch.commit()
    console.log("Listo!")
}

export { getData, getOrder, getProductData, getCategoryData, createOrder, _exportProductsWithBatch }