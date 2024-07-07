import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props)=>{

    //Estado -hooks //useState
    //forma de utilizar el estado
    // usamos const [nombre de la variable, lafuncion] = useState(valorInicial)
    console.log(props)
 
    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick=()=>{
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar);
        
    // }

    return <section className="orgSection">
        <h3 className="title"> Mi organizácion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
      



    </section>
}

export default MiOrg;