
const prod = [
    {   
        "id" : '1' ,
        'categoria' : 'Celulares',
        "marca" : "Samsung Galaxy A52s",
        "procesador": "Octa Core 2.4 GHz, 1.8 GHz",
        "ram": "6Gb",
        "pantalla" : "6.5'",
        "almacenamiento" : "128 Gb",
        "precio" : "$125999",
        "img": '../assets/samsung-A52.png',
        "stock": "10"
    },
    {   
        "id" : '2' ,
        'categoria' : 'Celulares', 
        "marca" : "Samsung Galaxy S20 Fan Edition",
        "procesador": "Octa Core 2.8 GHz, 2.4 GHz, 1.8 GHz",
        "ram": "6Gb",
        "pantalla" : "6.5'",
        "almacenamiento" : "128 Gb",
        "precio" : "$110999",
        "img": '../assets/samsung-S20FE.png',
        "stock": "10"

    },
    {
        "id" : '3',
        'categoria' : "Notebooks", 
        "marca" : "Dell Inspiron 3511",
        "procesador": "i7 1165G7",
        "ram": "8Gb",
        "pantalla" : "15.0'",
        "almacenamiento" : "256Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$249990",
        "img" : "../assets/Dell-inspiron.jpg",
        "stock": "10"
    },
    {
        "id" : '4',
        'categoria' : 'Notebooks', 
        "marca" : "Acer Aspire 5",
        "procesador": "i5 1135G7",
        "ram": "8Gb",
        "pantalla" : "15.6'",
        "almacenamiento" : "256Gb SSD",
        "sistema operativo" : "Free",
        "precio" : "$176990",
        "img" : '../assets/Acer-aspire-5.jpg',
        "stock": "10"

    },
    {
        "id" : '5' ,
        'categoria' : 'Tablets', 
        "marca" : "Xiaomi Redmi Pad",
        "procesador": "MediaTek Helio G99 ",
        "ram": "4Gb",
        "pantalla" : "10.6'",
        "almacenamiento" : "128 Gb",
        "precio" : "$119900",
        "img": '../assets/Samsung-tab8.png',
        "stock": "10"

    },
    {
        "id" : '6' ,
        'categoria' : 'Tablets', 
        "marca" : "Samsung Tab A8 Lite",
        "procesador": "Mediatek MT8768T ",
        "ram": "3Gb",
        "pantalla" : "10.5'",
        "almacenamiento" : "32 Gb",
        "precio" : "$78999",
        "img": '../assets/xiaomi.png',
        "stock": "10"
    }
]

export const getProds = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prod)
        },2000)
    })
}

export const getProdByCategory = (categoryId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prod.filter(prod => prod.categoria === categoryId))
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