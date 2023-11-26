export default function ListaProductos(props){
    return(
        <div>
            <h2>Productos</h2>
            {props.productos.length===0?(
            <p>La lista está vacía</p>) :(
            <ol>
                {props.productos.map((producto,index)=>(
                    <li key={index}> {producto} </li>))}
            </ol>
            )}
        </div> 
    )
}