*Exporting in CommonJS modules*

 `utils.js`

 ```const sum = (a, b) => a + b;
 module.exports = sum;
 
 const sum = require('./utils');
 console.log(sum(1,2)); 
 //3```
 
# Exporting in ES6 Modules

 `utils.js`
 
 ```export const sum = (a,b) => a + b;
 
 //app.js
 import { sum } from './utils';
 console.log(sum(1, 2)); //3```
 
# Syntax for a closure
 ```(function (){
     //...all vars and function are in this scope only
     //still maintains access to all globals
 }());```

 - () at the end creates a function expression of the anonymous function created before it
 - JS jas a feture known as implied globals. WHen a name is used, the interpreter walks the scope chain backwards looking for a var statement for that name.  - If none is found, that variable is assumed to be globa. If its used in an assignment, the global is created if it doesn't already exixt. This means that using or creating global variables in an anonymous closure is easy. Unfortunately, this leads to hard-to-manage code, as it's not obvious (to humans) which variables are global in a given file.
 - Luckily, our anonymous function provides an easy alternative. By passing globals as parameters to our anonymous functions, we import them into our code, which is both clearer and faster than implied globals. Here's an example:

 ```(function($, LINUX){
     //now have access to globals jQuery (as $) and  LINUX in this code
 }(jQuery, LINUX));```

*Augmentation*
 - One limitation of the module pattern so far is that entire module must be in one file. Anyone who has worked in a large code-base understands the value of splitting among multiple files. Luckily, we have a nice solution to augment modules. First, we import the module, then we add properties, then we export it. Here's an example, augmenting our MODULE from above:
  ```var MODULE = (function (my) {
    my.anotherMethod = function () {
        // added method...
    };

    return my;
  }(MODULE));```

 - We use var keyword again for consistency, even though it's not necessary. After this code has run, our module will have gained a new public method named MODULE.anotherMethod. This augmentation file will also maintain its own private internal state and imports

 *Loose Augmentation*

  - While our example above requires our initial module creation to be first and the augmentation to happen second, that isn't always necessary. One of the best things a JavaScript application can do for performance is to load scripts asynchronously. We can create flexible multi-part modules that can load themselves in any order with loose augmentation. Each file should have the following structure:

   ```var MODULE = (function (my){
        //add capabilities...

        return my;
   }(MODULE || {}))```

    - In this pattern, the var statement is always necessary. Note that the import will create the module if it does not already exist. This means you can use a tool like (LABjs)[https://www.labjs.com] and load all of your module files in parallel, without needing to block.

    *Tight Augmentation*

     - While loose augmentation is great, it does place some limitation on your module. Most importantly, you cannot override module properties safely. You also cannot use module properties from other files during initialisation ( but you can at run-time after initialisation ). Tight augmentation implies a set loading order, but allows overrides. Here is a simple example ( augmentating our orignal MODULE):

     ```var MODULE = (function (my) {
        var old_moduleMethod = my.moduleMethod;

        my.moduleMethod = function () {
            // method override, has access to old through old_moduleMethod...
        };
        
        return my;
     }(MODULE));```

     Here we 've overridden MODULE.moduleMethod, but maintain a reference to the orignal method, if needed.

     *Cloning and Inheritance*

    ```var MODULE_TWO = (function (old){
       var my = {},
        key;

       for (key in old){
            if(old.hasOwnProperty(key)){
                my[key] = old[key];
            }
        }

       var super_moduleMethod = old.moduleMethod;
       my.moduleMethod = function () {
            // override method on the clone, access to super through super_moduleMethod...
       };

       return my;
    }(MODULE));```

    This pattern is perhaps the least flexible option. It does allow some neat compositions, but that comes at the expense of flexibility. As I 've written it, properties which are objects or functions will not be duplicated, they will exist as one object with two references. Changing one will change the other. This could be fixed for objects with a recursive cloning process, but probably cannot be fixed for functions, 