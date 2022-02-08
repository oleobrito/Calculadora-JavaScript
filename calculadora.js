function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - subtração (-)\n 3 - multipicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%) \n 6- Potenciação(**) '));
    console.log(operacao)

    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {

        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro !!! Insira valores númericos')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOpcao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOpcao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOpcao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOpcao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(` O resto da divisão entre: ${n1} e ${n2} é igual a: ${resultado}`)
                novaOpcao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a:  ${resultado}`)
                novaOpcao();
            }

        }
        function novaOpcao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2- Não');
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Obrigado por utilizar a calculadora JavaScript! Até mais!')
            } else {
                alert('Opção não encontrada!')
                novaOpcao();
            }
        }

        /*      if (operacao == 1) {
                 soma(resultado);
             } else if (operacao == 2) {
                 subtracao();
             } else if (operacao == 3) {
                 multiplicacao();
             } else if (operacao == 4) {
                 divisaoReal();
             } else if (operacao == 5) {
                 divisaoInteira();
             } else if (operacao == 6) {
                 potenciacao();
             } */
        switch (operacao) {
            case 1:
                soma();
                break
            case 2:
                subtracao();
                break
            case 3:
                multiplicacao();
                break
            case 4:
                divisaoReal();
                break
            case 5:
                divisaoInteira();
            case 6:
                potenciacao();

        }
    }

}

calculadora();
