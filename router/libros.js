import express from 'express'
import Controlador from '../controlador/libros.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }
    start() {
        this.router.get('/:id?', this.controlador.obtenerLibro)
        this.router.post('/', this.controlador.incorporarLibro)
        this.router.put('/:id', this.controlador.actualizarLibro)
        this.router.delete('/:id', this.controlador.borrarLibro)
        return this.router
    }
}

export default Router
