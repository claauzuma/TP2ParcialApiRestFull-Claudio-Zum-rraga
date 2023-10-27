import ServicioNumeros from '../servicio/numeros.js'

class ControladorNumeros {

    constructor() {
        this.servicioNumeros = new ServicioNumeros()
    }


    obtenerNumeros = async (req,res) => {
        try {
            const numeros = await this.servicioNumeros.obtenerNumeros()
            res.json({numeros})
        }
        catch(error) {
            console.log('error obtenerNumeros', error)
        }
    }

    obtenerPromedioTotal = async (req,res) => {
        try {
            const promedio = await this.servicioNumeros.obtenerPromedioTotal()
            res.json({promedio})
        }
        catch(error) {
            console.log('error obtenerPromedioTotal', error)
        }
    }

    obtenerMinMax = async (req, res) => {
        try {
            const minMax = await this.servicioNumeros.obtenerMinMax()
            res.json(minMax)
        }
        catch (error) {
            console.log('error obtenerMinMax', error)
        }
    }

    obtenerCantidadNumeros = async (req,res) => {
        try {
            const cantidad = await this.servicioNumeros.obtenerCantidadNumeros()
            res.json({cantidad})
        }
        catch(error) {
            console.log('error obtenerCantidadNumeros', error)
        }
    }

    guardarNumero = async (req,res) => {
        try {
            const numero = req.body
            let numeroGuardado = await this.servicioNumeros.guardarNumero(numero)
            res.json(numeroGuardado)
        }
        catch(error) {
            console.log('error obtenerNotas', error)
        }
    }


}

export default ControladorNumeros
