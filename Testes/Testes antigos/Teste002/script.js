function contar() {
    //Definindo as variáveis
    let startVar = document.getElementById('startId'); //Recebe valor inserido no campo "Início"
    let endVar = document.getElementById('endId'); //Recebe valor inserido no campo "Fim"
    let stepVar = document.getElementById('stepId'); //Recebe valor inserido no campo "Passo"
    let res = document.getElementById('res'); //Recebe a div de id "res" para controle

    //Sistema de conta
    if(startVar.value.length == 0 || endVar.value.length == 0 || stepVar.value.length == 0) {
        res.innerHTML = 'Impossível contar! Defina um valor para início, fim e passo.'; //Notifica valores insuficientes
    } else {
        //Convertendo para número
        res.innerHTML = 'Contando: <br>'
        let startVarN = Number(startVar.value);
        let endVarN = Number(endVar.value);
        let stepVarN = Number(stepVar.value);

        //Verificar se passo é válido
        if(stepVarN <= 0) {
            stepVarN = 1;
            alert('Valor de passo é inválido! Considerando passo como 1');
        }

        //Verificando negatividade
        if(startVarN > endVarN) {
            //Contador decrescente
            for(let contadorVar = startVarN;contadorVar >= endVarN;contadorVar -= stepVarN) {
                res.innerHTML += ` ${contadorVar}`; //Faz a contagem
            }
        } else {
            //Contador crescente
            for(let contadorVar = startVarN;contadorVar <= endVarN;contadorVar += stepVarN) {
                res.innerHTML += ` ${contadorVar}`; //Faz a contagem
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}