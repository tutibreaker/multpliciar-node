const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola tabla de multiplicar', opts)
    .command('crear', 'crea un archivo de texto tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}