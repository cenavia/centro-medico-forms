import { useRef } from 'react';

export const Formulario = () => {
    
	// Inicializamos nuestra referencia usando el Hook useRef
    const form = useRef(null)

      // sendData se mantendrá como nuestra función que simula mandar data
    const sendData = (nombreMascota) => {
        console.log(nombreMascota)
    }

    // Nuestro handleSubmit hace toda la magia
    const handleSubmit = () => {

        // Instanciamos a la clase FormData con el nodo de form para acceder
        // a los valores de los input
        const formData = new FormData(form.current);


        // Creamos un objeto que va a guardar los valores
		// Que a su vez obtenemos mediante el FormData
        const registroPaciente = Object.fromEntries(formData)

        // Aquí es donde simulamos mandar nuestra data
        sendData(
            registroPaciente
        )
        // limpiar campos RETO

    } 
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            {/* Titulo de la seccion del formulario*/}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            {/* descripcion de la seccion formulario*/}
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            {/* formulario */}
            {/*   
                Es importante que nuestra referencia este dentro el nodo de form
                Para así poder acceder a los valores con el handleSubmit 
            */}
            <form
                ref={form}
                // onSubmit={handleSubmit} eliminamos el evento 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        required
                        type="text"
                        placeholder="Nombre de la Mascota"
                        name="nombreMascota" // agregamos este atributo
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        //value={nombreMascota} ya no se usa este atributo eliminar
                        //onChange={ (e) => setNombreMascota(e.target.value) } ya no se usa este atributo eliminar
                    />  
                </div>
                <button 
                type="button"
                    onClick={handleSubmit} // agregamos la funcion en el input boton usando el evento onClick
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                >
                    Agregar Paciente
                </button>
            </form>
        </div>
    );
  };