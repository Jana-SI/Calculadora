export function formatarResultado(valor) {

    var numero = parseFloat(valor);
    
    if (Number.isInteger(numero)) {

        return numero.toString();

    } else {

        return numero.toFixed(10).replace(/\.?0+$/, '');

    }
}