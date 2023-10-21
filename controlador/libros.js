import Servicio from '../servicio/libros.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerLibro = (req, res) => {
        const { id } = req.params
        const libros = this.servicio.obtenerLibro(id)
        res.json(libros)
    }

    incorporarLibro = (req, res) => {
        const libro = req.body
        const libroIncorporar = this.servicio.incorporarLibro(libro)
        res.json(libroIncorporar)
    }

    actualizarLibro = (req, res) => {
        const { id } = req.params
        const libro = req.body
        const libroActualizar = this.servicio.actualizarLibro(id, libro)
        res.json(libroActualizar)
    }

    borrarLibro = (req, res) => {
        const { id } = req.params
        const libroBorrar = this.servicio.borrarLibro(id)
        res.json(libroBorrar)
    }   
}

export default Controlador
