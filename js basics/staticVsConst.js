   //The static variable is stored into the data segment of the memory and its value is shared among all the objects / instances created in that particular class
   // To declare a VARIABLE / FUNCTION as static we use the static keyword. In the case of static variables, its value is set at the runtime itself and its a global value that can be used by the instance of the class.
   class Z{
       static staticMethod(){
           return "Displaying Static method " + "string invoked from a class directly";
        }
    }
    document.write(Z.staticMethod());
    
