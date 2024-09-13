import { atualizarDisplay } from "./module/atualizarDisplay.js";
import { formatarResultado } from "./module/formatarResultado.js";
import { limparZerosEsquerda } from "./module/limparZeroEsq.js";

document.addEventListener('DOMContentLoaded', () => {
    const displayExpressao = document.getElementById('display-expressao');
    const displayResultado = document.getElementById('display-resultado');
    let expressao = [];
    let resultado = [];

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {

            const valor = button.value;

            if (valor === 'ac') {

                expressao = [];
                resultado = [];

                displayResultado.classList.add('hidden');

            } else if (valor === 'ce') {

                expressao.pop();

            } else if (valor === '=') {

                try {
                    
                    let expressaoStr = expressao.join('');

                    expressaoStr = limparZerosEsquerda(expressaoStr);

                    const resultadoCalc = formatarResultado(eval(expressaoStr));

                    resultado = [resultadoCalc]

                    displayResultado.classList.remove('hidden');
                    
                } catch (e) {

                    resultado = [`Erro ao tentar calcular: ${expressao.join('')}`];
                    displayResultado.classList.remove('hidden');

                }

                expressao = [];
                resultado[0].toLowerCase().includes("erro") ? expressao.push(0) : expressao.push(resultado[0]);

            } else {
                
                expressao.push(valor);
                displayResultado.classList.add('hidden');
            }

            const dadosDisplay = {expressao, resultado, displayExpressao, displayResultado}
            atualizarDisplay(dadosDisplay);

        });
    });

    const dadosDisplay = {expressao, resultado, displayExpressao, displayResultado}
    atualizarDisplay(dadosDisplay);

});
