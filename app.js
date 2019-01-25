const argv = require('./config/yargs').argv;
const colors = require('colors');

const { creararchivo, listartabla } = require('./multiplicar/multiplicar.js');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;
    case 'crear':
        creararchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}




//let argv2 = process.argv;

//console.log('limite', argv.limite);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(base);
//console.log(process.argv);

//let argv = process.argv;
//let parametro = argv[2]

//88888888888888