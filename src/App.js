import { useState } from 'react';
import {v4 as uuid} from 'uuid';

import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([

    {
      id: uuid(),
      nombre: "Harland Lohora",
      puesto: "instructor",
      foto: "https://github.com/harlandlohora.png",
      equipo: "Front-end",
      fav: true
    },

    {
      id: uuid(),
      nombre: "Abigail Paredes",
      puesto: "Pasante",
      foto: "https://github.com/AbigailParedes.png",
      equipo: "Ux y Diseño",
      fav: false
    
    },

    {
      id: uuid(),
      nombre: "JeanMarie",
      puesto :"Instructora en Alura Latam",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      equipo: "Ux y Diseño",
      fav: false
    },

    {
      id: uuid(),
      nombre: "Cristian Velasco",
      puesto: "Head de Alura e Instructor",
      foto: "https://github.com/christianpva.png",
      equipo: "Programación",
      fav: false
    },
    

{       id: uuid(),
      nombre: "José Gonzalez",
      puesto: "Dev Full Satck",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      equipo: "Innovacion y Gestion",
      fav: false
    
    }

  ])
  const [equipos, actualizarEquipos]= useState([
  {
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57C278 ",
    colorSecundario: "#D9F7E9"
  }
  ,
  {
    id: uuid(),
    titulo: "Front-end",
    colorPrimario: "#82CFFA ",
    colorSecundario: "#E8F8FF"
  }


  ,
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  }
  ,
  {
    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  }
  ,
  {
    id: uuid(),
    titulo: "Ux y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  }
  ,
  {
    id: uuid(),
    titulo: "Innovacion y Gestion",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  }

])
console.log(equipos)
  //ternario --> condicion ? semuestra :noseMuestra
  //otra forma de tener el mismo resultadoe s {mostrarformulario && <Formulario/>}

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //registrar colaborador 
  const registrarColaborador = (colaborador) => {

    console.log("Nuevo colaborador", colaborador)

    //spread operator 
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador 

  const eliminarColaborador = (id)=>{
    console.log("eliminar colaborador" , id)
    const nuevosColaboradores= colaboradores.filter((colaborador) =>colaborador.id !== id)

    actualizarColaboradores(nuevosColaboradores)
   
  }

  //ACTUALIZAMOS LOS COLORES DE LOS EQUIPOS 

  const actualizarColor= (color,id) =>{

    console.log("Actualizar: " ,color, id)
    const equiposActualizados = equipos.map((equipo) =>{

      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)


  }

  //Crear Equipos

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);

    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])

    


  }

  //modificar estado de like

  const like =(id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{

      if(colaborador.id ===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  
  // //Lista de equipos con sus colores
  // const equipos = 

  return (
    <div>

      <Header />

      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}

          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}

        />

      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {

        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}

          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador= {eliminarColaborador}
          actualizarColor= {actualizarColor}
          like = {like}
        />
        )

      }

      <Footer />

    </div>

  );
}

export default App;
