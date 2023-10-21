class Model {
    constructor() {
        this.libros = [
            { id: "1", titulo: 'Fundacion e Imperio', autor: 'Isaac Asimov', anio: 1952 },
            { id: "2", titulo: 'El libro de los Abrazos', autor: 'Eduardo Galeano', anio: 1985 },
            { id: "3", titulo: 'Rayuela', autor: 'Julio Cortazar', anio: 1963 },
        ]
    }

    obtenerLibro = id => {
        if (id) {
            const libro = this.libros.find(libro => libro.id === id)
            return libro || {}
        }
        else {
            return this.libros
        }
    }

    incorporarLibro = libro => {
        libro.id = String(parseInt(this.libros[this.libros.length - 1]?.id || 0) + 1)
        libro.titulo = libro.titulo
        libro.anio = Number(libro.anio)
        this.libros.push(libro)
        return libro
    }

    actualizarLibro = (id, libro) => {
        libro.id = id
        const indice = this.libros.findIndex(libro => libro.id === id)
        if (indice != -1) {
            const ant = this.libros[indice]
            const nuevo = { ...ant, ...libro }
            this.libros.splice(indice, 1, nuevo)
            return nuevo
        }
        else {
            this.libros.push(libro)
            return libro
        }
    }

    borrarLibro = id => {
        let libro = {}
        const indice = this.libros.findIndex(libro => libro.id === id)
        if (indice != -1) {
            libro = this.libros.splice(indice, 1)[0]
        }
        return libro
    }
}

export default Model



// import fs from 'fs'

// class Model {
//     constructor() {
//         this.archivoLibros = 'libros.json'
//     }

//     leerLibro = nombre => {
//         let libros = []
//         try {
//             libros = JSON.parse(fs.readFileSync(nombre, 'utf-8'))
//         }
//         catch { }
//         return libros
//     }

//     escribirLibro = (nombre, libros) => {
//         fs.writeFileSync(nombre, JSON.stringify(libros, null, '\t'))
//     }

//     obtenerLibro = id => {
//         try {
//             const libros = this.leerLibro(this.archivoLibros)
//             if (id) {
//                 const libro = libros.find(libro => libro.id === id)
//                 return libro || {}
//             }
//             else {
//                 return libros
//             }
//         }
//         catch {
//             return id ? {} : []
//         }
//     }

//     incorporarLibro = libro => {
//         const libros = this.leerLibro(this.archivoLibros)
//         libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1)
//         libro.titulo = libro.titulo
//         libro.anio = Number(libro.anio)
//         libros.push(libro)
//         this.escribirLibro(this.archivoLibros, libros)
//         return libro
//     }

//     actualizarLibro = (id, libro) => {
//         libro.id = id
//         const libros = this.leerLibro(this.archivoLibros)
//         const indice = libros.findIndex(libro => libro.id === id)
//         if (indice != -1) {
//             const ant = libros[indice]
//             const nuevo = { ...ant, ...libro }
//             libros.splice(indice, 1, nuevo)
//             this.escribirLibro(this.archivoLibros, libros)
//             return nuevo
//         }
//         else {
//             libros.push(libro)
//             this.escribirLibro(this.archivoLibros, libros)
//             return libro
//         }
//     }

//     borrarLibro = id => {
//         let libro = {}
//         const libros = this.leerLibro(this.archivoLibros)
//         const indice = libros.findIndex(libro => libro.id === id)
//         if (indice != -1) {
//             libro = libros.splice(indice, 1)[0]
//             this.escribirLibro(this.archivoLibros, libros)
//         }
//         return libro
//     }
// }

// export default Model
