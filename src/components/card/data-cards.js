import Habitacion1 from '../../img/habitaciones/habitacion1.png';
import Habitacion2 from '../../img/habitaciones/habitacion2.png';
import Habitacion3 from '../../img/habitaciones/habitacion3.png';

let habitaciones=[
    {
        id:1,
        name:"Habitación doble",
        price:"128.000",
        number:"402",
        image:Habitacion1,
        category:"",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare dui, ante nisl. Lorem ipsumn",
        photo1: "https://i.postimg.cc/XqtGVqRJ/kirara1.png",
        photo2: "https://i.postimg.cc/brZSckFW/kirara2.png",
        photo3: "https://i.postimg.cc/wvfRG0FD/kirara3.png",
        state: "Activa",
        buttonstate:"Inactivar"
    },

    {
        id:2,
        name:"Habitación doble",
        price:"250.000",
        number:"102",
        image:Habitacion2,
        category:"",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare dui, ante nisl. Lorem ipsumn",
        photo1: "https://i.postimg.cc/XqtGVqRJ/kirara1.png",
        photo2: "https://i.postimg.cc/brZSckFW/kirara2.png",
        photo3: "https://i.postimg.cc/wvfRG0FD/kirara3.png",
        state: "Activa",
        buttonstate:"Inactivar"
    },

    {
        id:3,
        name:"Habitación doble",
        price:"166.000",
        number:"202",
        image:Habitacion3,
        category:"",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ornare dui, ante nisl. Lorem ipsumn",
        photo1: "https://i.postimg.cc/XqtGVqRJ/kirara1.png",
        photo2: "https://i.postimg.cc/brZSckFW/kirara2.png",
        photo3: "https://i.postimg.cc/wvfRG0FD/kirara3.png",
        state: "Inactiva",
        buttonstate:"Activar"
    },

]

export function getAllHabitaciones(){
    return habitaciones;
}

export function getHabitaciones(id){
    return habitaciones.find((habitacion)=> habitacion.id===id)
}