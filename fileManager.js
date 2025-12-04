import fs from 'fs'//Biblioteca responsavel por interagir com as pastas

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, { recursive: true }, (err) => { //cria pasta
            if (err) {
                reject(err)
            } else {
                resolve(`Diretory '${dirPath}' created sucessfully`)
            }
        })
    })
}

function createFile(filePath, content = '') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => { //cria arquivo
            if (err) {
                reject(err)
            } else {
                resolve(`File '${filePath}' created sucessfully`)
            }

        })
    })
}

function listFiles(dirPath) {
    //Retorna uma promise que resolve com a lista de arquivos
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err) //erro
            } else {
                resolve(files) //resolve a promese com a lista de arquivos
            }
        }
        )
    })
}

function readFile(filePath){
    //Retorna uma promise contendo o conteudo do arquivo
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err) //erro
            } else {
                resolve(data) //
            }
        })
    })
}

function writeFile(filePath, content){
    //Retorna uma promise que resolve quando o arquivo e escrito
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
             if (err) {
                reject(err) //erro
            } else {
                resolve('File written successfully') //
            }
        })
    })
}

function deleteFile(filePath){
    //
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
             if (err) {
                reject(err) //erro
            } else {
                resolve('File delete successfully') //
            }
        })
    })
}
export default { createDirectory, createFile, listFiles, readFile, writeFile, deleteFile }