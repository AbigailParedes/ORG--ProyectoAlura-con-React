
import "./listaOpciones.css"

//en React se recorren los arreglos con el metodo map
const ListaOpciones = (props) => {

  

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    console.log(props.equipos)
    return <div className="lista-opciones">

        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value=""disabled defaultValue="" hidden>Seleccionar Equipo</option>
           {props.equipos.map((equipo, index)=><option key={index}>{equipo}</option> )}
        </select>
    </div>
}

export default ListaOpciones;