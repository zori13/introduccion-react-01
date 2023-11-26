import ListaProductosCondicional from "./ListaProductosCondicional"
import TituloEjercicio from "../TituloEjercicio"
import { productosCondicional } from "../../constants/productos"
export default function Ejercicio3() {
    return (
        <section className="caja-ejercicio">
            <TituloEjercicio>Ejercicio 3</TituloEjercicio>
            <ListaProductosCondicional productos={productosCondicional}/>
        </section>
    )
}