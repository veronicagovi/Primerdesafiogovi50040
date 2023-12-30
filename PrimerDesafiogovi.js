class ProductManager {
    static products = {};
    static currentId = 1;

    constructor() {
        this.currentId = ProductManager.currentId++;
    }

    addProduct(model, description, price, image, stock, code) {
        if (stock <= 0 || typeof stock !== 'number') {
            console.error('Debe ingresar una cantidad real');
            return;
        }

        if (Object.values(ProductManager.products).some(product => product.code === code)) {
            console.error('El código no debe repetirse');
            return;
        }

        const newProduct = {
            id: this.currentId,
            model,
            description,
            price,
            image,
            stock,
            code,
        };

        ProductManager.products[this.currentId] = newProduct;

        console.log(`Producto agregado satisfactoriamente con el id ${this.currentId}`);
    }

    static getProducts() {
        if (Object.keys(ProductManager.products).length > 0) {
            return ProductManager.products;
        } else {
            console.error('No se encontraron productos');
            return {};
        }
    }

    static getProductById(id = null) {
        const product = ProductManager.products[id];
        if (!product) {
            console.error(`No existe un producto con el código ${id}`);
        }
        return product || null;
    }
}

const moto1 = new ProductManager();
moto1.addProduct('Honda CB500X', 'Moto de aventura', 8500, 'honda_cb500x.jpg', 10, 'honda001');

const moto2 = new ProductManager();
moto2.addProduct('Yamaha MT-07', 'Moto deportiva', 9000, 'yamaha_mt07.jpg', 8, 'yamaha002');

const moto3 = new ProductManager();
moto3.addProduct('Kawasaki Ninja 650', 'Moto deportiva/turismo', 9500, 'kawasaki_ninja650.jpg', 5, 'kawasaki003');

const moto4 = new ProductManager();
moto4.addProduct('BMW R1250GS', 'Moto de aventura premium', 18000, 'bmw_r1250gs.jpg', 3, 'bmw004');

console.log(ProductManager.getProducts());


console.log(ProductManager.getProductById(2));
