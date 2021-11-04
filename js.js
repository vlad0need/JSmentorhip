const productItemApi = {
    api1() {
        return [
            {
                name: "Iphone",
                price: "500",
                quantity: "20",
                cities: ["Kyiv", "kharkiv", "Lviv"],
                id: 1
            },
            {
                name: "Playstation",
                price: "400",
                quantity: "4",
                cities: ["Kyiv", "Odessa"],
                id: 2
            },
            {
                name: "Air Pods",
                price: "200",
                quantity: "40",
                cities: ["Kyiv", "Kharkiv", "Lviv", "Odessa", "Vinnitsa"],
                id: 3
            },
        ]

    },
    api2() {
        return {
            "Iphone": {
                price: "700",
                quantity: "20",
                cities: ["Kyiv", "Kharkiv", "Lviv"],
                id: 1
            },
            "Playstation": {
                price: "500",
                quantity: "3",
                cities: ["Kyiv", "Odessa"],
                id: 2
            },
            "Air Pods": {
                price: "200",
                quantity: "40",
                cities: ["Kyiv", "Kharkiv", "Lviv", "Odessa", "Vinnitsa"],
                id: 3
            }
        }

    }
}

const products = productItemApi.api1()

/*const showFiltersProducts = ({arr, price, quantity, id}) => {
    let productList = arr
    const filterPrice = () => {
        let updateListProduct = productList.filter(product => {
                return product.price == price
            })
        productList = updateListProduct
    }
    const filterQuantity = () => {
        let updateListProduct = productList.filter(product => {
            return product.quantity >= quantity
        })
        productList = updateListProduct
    }
    const filterId = () => {
        let updateListProduct = productList.filter(product => {
            return product.id == id
        })
        productList = updateListProduct
    }
    if(id){
         filterId()
        return productList
    }
    if(quantity){
        filterQuantity()
    }
    if(price){
        filterPrice()
    }
    console.log(productList.length + ' ' + 'items avaiable')
    return (productList)
}*/ //
const showFiltersProducts = ({arr, price, quantity, id}) => {
    let productList = arr

    const filter = (x) => {
        let updateListProduct = productList.filter(product => {
            switch (x) {
                case price:
                    return product.price == x
                case quantity:
                    return product.quantity >= x
                case id:
                    return product.id == x
            }
        })
        productList = updateListProduct
    }
    if (price) {
        filter(price)
    }
    if (quantity) {
        filter(quantity)
    }
    if (id) {
        filter(id)
    }
    console.log(productList.length + ' ' + 'items avaiable')
    return (productList)
}

const searchProducts = (arr, name) => {
    let productList = arr
    const updateSearchProducts = productList.filter(f => {
        return f.name.toLowerCase().includes(name.toLowerCase())
    })
    productList = updateSearchProducts
    return productList
}

const sortProducts = (field, sort) => {
    function byField() {
        return (a, b) => +a[sort] > +b[sort] ? 1 : -1;
    }
    return field.sort(byField())
}


console.table(showFiltersProducts({arr: products, price: 500, quantity: 4}))
console.table(searchProducts(products, "PlAy"))
console.table(sortProducts(products, "price"))