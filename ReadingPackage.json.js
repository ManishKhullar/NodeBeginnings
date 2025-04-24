import {createRequire} from 'module';
const requiree = createRequire(import.meta.url);
const PACKAGE = requiree('./package.json');

console.log(PACKAGE);

//for running ECMAmodules (coding style shown above) set the following settings in Package.json
//"type": "module"
//OR
//set the file extension to ".mjs"

//in some cases the package could also be required to be set as CommonJS 
//"type": "commonJS"
//OR
//set the file extension to ".cjs"