class NumerosMem {

    constructor() {
        this.numeros = [
      
        ]
    }

   
    obtenerNumeros = async () => {
        try {
            return this.numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros', error)
            return []
        }
    }

    guardarNumero = async numero => {
        try {
            this.numeros.push(numero)
            return numero
        }
        catch(error) {
            console.log('error en guardarNumero:',error)
            let numero = {}
            return numero
        }
    }
}

export default NumerosMem