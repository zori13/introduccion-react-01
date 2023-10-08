# Ejercicios de Introducción a React

Este repositorio contiene ejemplos de código y enunciados detallados para varios ejercicios de React. Cada ejercicio está diseñado para ayudarte a familiarizarte con los conceptos básicos de React y mejorar tus habilidades de desarrollo front-end.

Para empezar, hemos proporcionado un ejemplo inicial del **Ejercicio 1** como punto de partida.

Este proyecto ha sido configurado utilizando Vite, un entorno de desarrollo rápido para aplicaciones web con React.

- Documentación Vite: https://vitejs.dev/guide/

## Cómo empezar

Siga estos pasos para ejecutar el proyecto:

1. Una vez hecho el fork del repositorio original, clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/introduccion-react.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd introduccion-react
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

- Cada ejercicio se encuentra en una carpeta separada con su número correspondiente. Deberás crear un nuevo componente llamado "EjercicioX" (donde X es el número del ejercicio) y desarrollar la solución dentro de esa carpeta. Luego, importa y utiliza el componente en tu archivo principal de la aplicación.

## Ejercicio 1: Saludar

Crea un componente llamado "Saludar" que reciba el prop "nombre" y muestre un mensaje de saludo utilizando ese nombre.

### Instrucciones

1. Crea un nuevo componente llamado "Saludar".
2. Define una prop llamada "nombre" en el componente "Saludar".
3. En el renderizado del componente, muestra un mensaje de saludo que incluya el nombre recibido por props.
4. Utiliza este componente en tu aplicación principal importándolo y pasándole un nombre como prop.

Ejemplo:

1. Creamos el componente Saludar en la carpeta componentes:

- Saludar.jsx

  ```jsx
  export default function Saludar(props) {
    return <h2 className="titulo-ejercicio">Hola {props.nombre}</h2>
  }
  ```

2. Importamos el componente saludar en el componente Ejercicio1 y le pasamos la prop nombre="Juan":

- Ejercicio1.jsx

  ```jsx
  import Saludar from './Saludar'
  import TituloEjercicio from '../TituloEjercicio'

  export default function Ejercicio1() {
    return (
      <section className="caja-ejercicio">
        <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
        <Saludar nombre="Juan" />
      </section>
    )
  }
  ```

3. Importamos el componente Ejercicio1 a nuestro componente App:

- App.jsx

  ```jsx
  import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
  import Footer from './components/Footer'
  import Header from './components/Header'
  import TituloPrincipal from './components/TituloPrincipal'
  import './index.css'

  export default function App() {
    return (
      <>
        <Header />
        <main>
          <TituloPrincipal />
          <Ejercicio1 />
        </main>
        <Footer />
      </>
    )
  }
  ```

## Ejercicio 2: Lista de Productos

Dada una lista de productos ubicada en el archivo de constantes, crea un componente llamado "Lista" que reciba esta lista como prop y la renderice en la pantalla.

### Instrucciones

1. Importa la lista de productos desde el archivo de constantes.
2. Crea un nuevo componente llamado "Lista".
3. Define una prop llamada "productos" en el componente "Lista" para recibir la lista de productos.
4. Dentro del renderizado del componente, itera sobre la lista de productos y muestra cada elemento en una lista o tabla.
5. Utiliza este componente en tu aplicación principal importándolo y pasándole la lista de productos como prop.

## Ejercicio 3: Renderizado Condicional en la Lista

Reutiliza el componente "Lista" que creaste en el ejercicio 2 y añade una funcionalidad de renderizado condicional. Si la longitud de la lista de productos es igual a cero, muestra el mensaje "No hay elementos en la lista".

### Instrucciones

1. Modifica el componente "Lista" para incluir una comprobación de longitud de la lista de productos.
2. Si la longitud es cero, muestra el mensaje "No hay elementos en la lista".
3. Si la longitud no es cero, renderiza la lista de productos como lo hiciste en el ejercicio 2.
4. Utiliza el componente modificado en tu aplicación principal.

## Ejercicio 4: Contador

Crea un contador simple que aumente su valor cada vez que se presiona un botón. Este ejercicio te ayudará a comprender cómo gestionar el estado en React.

### Instrucciones

1. Crea un componente llamado "Contador".
2. En el componente "Contador", define una variable de estado llamada "contador" con un valor inicial de 0.
3. Renderiza el valor del contador en la pantalla.
4. Agrega un botón que, cuando se presiona, incremente el valor del contador en 1.
5. Utiliza este componente en tu aplicación principal.

¡Diviértete practicando React con estos ejercicios! Si tienes alguna pregunta o necesitas ayuda, no dudes en consultar la documentación de React o buscar ayuda en línea. ¡Happy coding!
