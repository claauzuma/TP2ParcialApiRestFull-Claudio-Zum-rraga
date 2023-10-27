import Model from '../model/DAOs/numerosFile.js'
/* import Model from '../model/DAOs/numerosMem.js' */

class ServicioNumeros {

    constructor() {
        this.numerosModel = new Model()
    }

    obtenerNumeros = async () => {
        const numeros = await this.numerosModel.obtenerNumeros()
        const soloNumeros = numeros.map(n=>n.numero)
        return soloNumeros
    }

    obtenerPromedioTotal = async () => {
        const numeros = await this.numerosModel.obtenerNumeros()
        const suma = numeros.map(n => n.numero).reduce((acc, numero) => acc + numero, 0)
        return suma / numeros.length
    }

    obtenerMinMax = async () => {
        const numeros = await this.numerosModel.obtenerNumeros()
        const numeroMin = numeros.sort((a,b) => a.numero - b.numero)[0] 
        const numeroMax = numeros.sort((a,b) => b.numero - a.numero)[0] 
        const numerosMinMax = { "min" : numeroMin.numero, "max" : numeroMax.numero}
        return numerosMinMax
    }


    obtenerCantidadNumeros = async () => {
        const numeros = await this.numerosModel.obtenerNumeros()
        return numeros.length
    }

    guardarNumero = async (numero) => { 
        return await this.numerosModel.guardarNumero(numero) 
    }

  

}

export default ServicioNumeros
