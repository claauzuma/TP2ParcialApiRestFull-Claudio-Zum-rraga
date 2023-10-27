import fs from 'fs'


class ModelFile {
    constructor() {
        this.nombreArchivo = 'numeros.json'
    }

    leerArchivo = async nombre => {
        let numeros = []
        try {
            numeros = JSON.parse(await fs.readFileSync(nombre, 'utf-8'))
        }
        catch {}
        return numeros
    }

     escribirArchivo  = async (nombre, numeros) => {
        await fs.writeFileSync(nombre, JSON.stringify(numeros,null,'\t'))
    }

    obtenerNumeros = async () => {
        try {
            const numeros = await this.leerArchivo(this.nombreArchivo)
            return numeros
        }

        catch {
            return id ? {} : []
        }
    }

    guardarNumero = async numero => {
        try {
            const numeros = await this.leerArchivo(this.nombreArchivo)
            numeros.push(numero)
            await this.escribirArchivo(this.nombreArchivo, numeros)
            return numero
        }
        catch(error) {
            console.log('error en guardarNumero:',error)
            let numero = {}

            return numero
        }
    }
}

export default ModelFile