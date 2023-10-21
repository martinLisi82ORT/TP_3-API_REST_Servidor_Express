import Model from "../model/libros.js"

class Servicio {
    constructor() {
        this.model = new Model()
    }

    obtenerLibro = id => {
        const libros = this.model.obtenerLibro(id)
        return libros
    }

    incorporarLibro = libro => {
        const libroGuardar = this.model.incorporarLibro(libro)
        return libroGuardar
    }

    actualizarLibro = (id, libro) => {
        const libroActualizar = this.model.actualizarLibro(id, libro)
        return libroActualizar
    }

    borrarLibro = id => {
        const libroBorrar = this.model.borrarLibro(id)
        return libroBorrar
    }
}

export default Servicio
