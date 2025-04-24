var MODULE = (function (my){
    my.message = `inside the module invoked from ${my.message}`;
    console.log(my);
    return my;
}(MODULE || {}));

module.exports = MODULE;