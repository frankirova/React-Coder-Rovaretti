import imgA52 from "./img/samsung-A52.png";
import imgS20FE from './img/samsung-S20FE.png';
import imgDellInspiron from "./img/Dell-inspiron.jpg"
import imgAcerAspire from './img/Acer-aspire-5.jpg'
import imgSmsTab8 from './img/Samsung-tab8.png';
import imgxiaomi from './img/xiaomi.png';
const prod = [
    {   
        "id" : 1 ,
        "marca" : "Samsung Galaxy A52s",
        "procesador": "Octa Core 2.4 GHz, 1.8 GHz",
        "ram": "6Gb",
        "pantalla" : "6.5'",
        "almacenamiento" : "128 Gb",
        "precio" : "$125999",
        "img": imgA52
    },
    {   
        "id" : 2 ,
        "marca" : "Samsung Galaxy S20 Fan Edition",
        "procesador": "Octa Core 2.8 GHz, 2.4 GHz, 1.8 GHz",
        "ram": "6Gb",
        "pantalla" : "6.5'",
        "almacenamiento" : "128 Gb",
        "precio" : "$110999",
        "img": imgS20FE
    },
    {
        "id" : 3,
        "marca" : "Dell Inspiron 3511",
        "procesador": "i7 1165G7",
        "ram": "8Gb",
        "pantalla" : "15.0'",
        "almacenamiento" : "256Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$249990",
        "img" : imgDellInspiron
    },
    {
        "id" : 4,
        "marca" : "Acer Aspire 5",
        "procesador": "i5 1135G7",
        "ram": "8Gb",
        "pantalla" : "15.6'",
        "almacenamiento" : "256Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$176990",
        "img" : imgAcerAspire
    },
    {
        "id" : 5 ,
        "marca" : "Xiaomi Redmi Pad",
        "procesador": "MediaTek Helio G99 ",
        "ram": "4Gb",
        "pantalla" : "10.6'",
        "almacenamiento" : "128 Gb",
        "precio" : "$119900",
        "img": imgxiaomi
    },
    {
        "id" : 6 ,
        "marca" : "Samsung Tab A8 Lite",
        "procesador": "Mediatek MT8768T ",
        "ram": "3Gb",
        "pantalla" : "10.5'",
        "almacenamiento" : "32 Gb",
        "precio" : "$78999",
        "img": imgSmsTab8
    }
]

export const getProds = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prod)
        },2000)
    })
}



export const getProdById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prod.find(prod => prod.id === id))
        },2000)
    })
}