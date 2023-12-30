Nombre: Govi Veronica

Curso: Back End 

Comision: 50040

Entrega de desafio numero 1



# Gestor de Productos

Este proyecto implementa un gestor de productos utilizando JavaScript. Puedes agregar, obtener y buscar productos con este sistema.

## Funcionalidades

1. **Agregar Producto:**
   - Utiliza la clase `ProductManager` para crear instancias de productos como motocicletas.

2. **Obtener Todos los Productos:**
   - Puedes obtener una lista de todos los productos almacenados.

3. **Obtener Producto por ID:**
   - Busca un producto específico por su ID.

## Cómo Usar

1. **Instalación:**
   - Clona este repositorio:
     ```bash
     git clone https://github.com/tu-usuario/gestor-de-productos.git
     cd gestor-de-productos
     ```

2. **Ejecución:**
   - Abre el archivo `index.js` en un entorno que admita la ejecución de JavaScript (p. ej., Node.js):
     ```bash
     node index.js
     ```

3. **Personalización:**
   - Modifica el código en `index.js` para agregar tus propios productos o ajustar las propiedades de los productos existentes.

4. **Uso de la Clase `ProductManager`:**
   - Consulta el código fuente de `ProductManager.js` para entender cómo funciona la gestión de productos.

## Ejemplos

```javascript
// Crear instancias y agregar motos
const moto1 = new ProductManager();
moto1.addProduct('Honda CB500X', 'Moto de aventura', 8500, 'honda_cb500x.jpg', 10, 'honda001');

const moto2 = new ProductManager();
moto2.addProduct('Yamaha MT-07', 'Moto deportiva', 9000, 'yamaha_mt07.jpg', 8, 'yamaha002');

// Obtener todas las motos
console.log(ProductManager.getProducts());

// Obtener una moto por ID
console.log(ProductManager.getProductById(2));
