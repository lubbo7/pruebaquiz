const express = require ('express');
const app = express();
var resultado;

app.get("/suma", (req, res)=>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
});

app.listen(3000);

 var fun = function(operacion, resultado){
    return `
    $(resultado);
    `
 }