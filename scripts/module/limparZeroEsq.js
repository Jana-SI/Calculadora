export function limparZerosEsquerda(expr) {
    return expr.replace(/\b0+(\d+)/g, '$1'); 
}