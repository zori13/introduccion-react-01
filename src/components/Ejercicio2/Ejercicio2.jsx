import ListaProductos from "./lista";
import TituloEjercicio from "../TituloEjercicio";
import { productos } from "../../constants/productos";
export default function Ejercicio2(){
    return(
        <section className="caja-ejercicio ">
            <TituloEjercicio>Ejercicio 2</TituloEjercicio>
            <ListaProductos productos={productos}/>
        </section>
    )
}