import { Formik } from 'formik';
import './FormHabitaciones.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardRoom from '../cardRoom/CardRoom';


function FormHabitaciones() {

    const disableDate = new Date().toISOString().slice(0, 10);

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "https://app-hotelia3.herokuapp.com/habitaciones";

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. UseState para guardar la respuesta de la petición*/
    const [list, setList] = useState([]);
    const [filtro, setFiltro] = useState([]);
    /*5.Crear otro estado para refrescar el listado despues de eliminar*/
    const [upList, setUplist] = useState([false]);

    /*4.Hook useEfect ejecuta funciones cada vez que renderizamos un componente*/
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])

    const [input, setInput] = useState({
        numadultos: '',
        numninos: ''
    });

    const ultimoValor = e => {
        const { target } = e;
        const { name, value } = target;

        const newValue = {
            ...input,
            [name]: value,
        }
        setInput(newValue);
    }

    const [search, setSearch] = useState("");


    const handleChange1 = e => {
        e.preventDefault();
        const numadultos = parseInt(input.numadultos);
        const numninos = parseInt(input.numninos);
        const totalPersonas = parseInt(numadultos + numninos);
        const fechaEntrada = document.getElementById('entrada').value;
        const fechaSalida = document.getElementById('salida').value;
        console.log('fecha entrada', fechaEntrada);
        console.log('fecha salida', fechaSalida);
        setSearch(totalPersonas);
        filtrar(totalPersonas);
        //disponibilidad();
        //fechad(fechaEntrada.value);
    }

    /*const filtrar = (totalPersonas) => {
        var resfiltro = list.filter(hab => hab.estado === "Disponible" && hab.capacidad <= totalPersonas)
        console.log(resfiltro);
    }*/

    /*const disponibilidad = () => {
        var resfiltro = list.filter(est => est.estado === "Disponible")
        console.log(resfiltro);
    }*/

    const filtrar = (search1) => {
        var res = list.filter(li => li.capacidad === search1);
        setFiltro(res);
        console.log(res);
    }

    //const fechas = url.reservas.filter(f => f.fentrada);

    /*const fechad = (fecha1) => {
        var resf = list.filter(f => f.reservas.fentrada === fecha1);
        setFiltro(resf);
        console.log(resf);
    }*/


    return (

        <div className='cont-habitaciones'>
            <div>
                <div className='title-room'>
                    <h4>Busqueda de Habitaciones</h4>
                </div>
                <div className='box-form'>
                    {/*<Formik

                        initialValues={{
                            numadultos: '',
                            numninos: ''
                        }}

                        validate={(valores) => {
                            let errores = {};

                            //Validación cantidad adultos
                            if (!/^[0-9]{1,2}$/.test(valores.numadultos)) {
                                errores.numadultos = 'Ingrese la cantidad adultos'
                            }
                            else if (!/^[0-9]{1,2}$/.test(valores.numninos)) {
                                errores.numninos = 'Ingrese la cantidad de niños'
                            } else if (valores.numadultos > 10) {
                                errores.numadultos = 'Elige la cantidad entre 1 a 10 adultos'
                            } else if (valores.numninos > 10) {
                                errores.numninos = 'Elige la cantidad entre 1 a 10 niños'
                            }
                            return errores;
                        }
                        }

                        onSubmit={() => {
                            console.log("enviado");
                        }}



                    >
                    {({ values, errors, handleSubmit, handleChange, handleBlur }) => (*/}

                    <form className='cont-form-room'>

                        {/*<div>
                                    <input type='text'
                                        value={search}
                                        placeholder="Busqueda de habitaciones"
                                        onChange={''} />
                        </div>*/}
                        <div className='cont-entrada'>
                            <label htmlFor='entrada'>Entrada: </label>
                            <input
                                id='entrada'
                                name='entrada'
                                type='date'
                                min={disableDate}
                            />
                        </div>
                        <div className='cont-salida'>
                            <label htmlFor='salida'>Salida: </label>
                            <input
                                id='salida'
                                name='salida'
                                type='date'
                                min={disableDate}
                            />
                        </div>

                        <div className='input-adultos'>
                            <label htmlFor='numadultos'>Adultos: </label>
                            <input
                                name='numadultos'
                                type='number'
                                //value={values.numadultos}
                                value={input.numadultos}
                                //onChange={handleChange}
                                onChange={ultimoValor}
                                //onBlur={handleBlur}
                                max="10"
                            />

                            {/*{errors.numadultos && <div className='error message-validate'>{errors.numadultos}</div>}*/}

                        </div>
                        <div className='input-ninos'>
                            <label htmlFor='numninos'>Niños: </label>
                            <input
                                name='numninos'
                                type='number'
                                //value={values.numninos}
                                value={input.numninos}
                                //onChange={handleChange}
                                onChange={ultimoValor}
                                //onBlur={handleBlur}
                                max="10"
                            />

                            {/*{errors.numninos && <div className='error message-validate'>{errors.numninos}</div>}*/}

                        </div>
                        <button type='button' value={search} onClick={handleChange1} className='item-ver'>
                            Ver habitaciones disponibles
                        </button>
                    </form>
                    {/*  )}
                    </Formik>*/}
                </div>
            </div>

            <div className='cont-cards'>
                {
                    filtro.map((es, index) => (
                        <CardRoom
                            key={index}
                            habitaciones={es}
                            setUplist={setUplist}
                            upList={upList}
                        />
                    ))
                }


            </div>

        </div >
    );
}

export default FormHabitaciones;