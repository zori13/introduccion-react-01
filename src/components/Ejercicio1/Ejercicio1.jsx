import TituloEjercicio from '../TituloEjercicio'
import Saludar from './Saludar'
export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
      <Saludar nombre="Zoraida"/>
    </section>
  )
}
