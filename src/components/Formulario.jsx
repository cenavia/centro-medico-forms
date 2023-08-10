
export const Formulario = () => {
    
    // sendData va a simular ser solo una función que hace algo con la data
    const sendData = (nombreMascota) => {
        console.log(nombreMascota)
      }

    const handleSubmit = (e) => {
    // Vamos a capturar el evento y vamos a prevenir que siga el comportamiento
        e.preventDefault();
    // Desde el evento que capturamos("e"), podemos acceder a los valores de los
	// inputs con los nombres que definimos ()
        sendData(e.target.nombreMascota.value)
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
            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="nombreMascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        name="nombreMascota"
                       // value={nombre}  se elimian esta propiedad
                       // onChange={ (e) => setNombre(e.target.value) } se elimian esta propiedad
                    />  
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={  'Agregar Paciente' }
                />
            </form>
        </div>
    );
  };