var minhaVar = 'minha variavel';
// Transpiler - Vai compilar em jasvascript puro
// http://es6-features.org/#Constants
function MinhaFunc(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
//numeros.map(function(valor){
//    return valor * 2;
//});
// Este codigo é a mesma coisa do que o codigo comentado acima
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'teste';
n1 = "4";
