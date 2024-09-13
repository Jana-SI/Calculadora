export function atualizarDisplay({expressao, resultado, displayExpressao, displayResultado}) {

    displayExpressao.textContent = expressao.length > 0 ? expressao.join('') : '0';
    displayResultado.textContent = resultado.length > 0 ? resultado.join('') : '0';

    resultado.length > 0 ? displayResultado.classList.remove('hidden') : displayResultado.classList.add('hidden');

}