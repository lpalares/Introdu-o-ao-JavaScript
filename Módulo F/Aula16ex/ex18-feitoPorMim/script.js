// Definindo algumas variáveis
const num = document.getElementById('fnum');
const list = document.getElementById('flist');
const res = document.getElementById('res');
const btnAdd = document.getElementById('btn-add');
const btnFin = document.getElementById('btn-fin');
let values = [];
// Adicionando número na lista
btnAdd.addEventListener('click', add);
function add() {
    if(num.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let number = Number(num.value);
        if(values.indexOf(number) != -1 || number < 1 || number > 100) {
            alert('Número inválido ou repetido. Digite um número entre 1 e 100.');
        } else {
            const option = document.createElement('option');
            values.push(number);
            option.text = `Número ${number} adicionado!`;
            option.value = `addNum${number}`;
            list.appendChild(option);
            num.value = '';
            res.innerHTML = '';
        }
    }
    num.focus();
}
// Resultado
btnFin.addEventListener('click', result);
function result() {
    if(values.length == 0) {
        alert('Adicione algum número antes de finalizar!');
        return;
    }
    res.innerHTML = '';
    // Calculando valores
    let smaller = values[0];
    let bigger = values[0];
    let total = 0;
    for(let c in values) {
        if(values[c] < smaller) {
            smaller = values[c];
        }
        if(values[c] > bigger) {
            bigger = values[c];
        }
        total += values[c];
    }
    // Exibindo resultado
    res.innerHTML += `<p>Ao todo, temos ${values.length} números cadastrados!</p>`;
    res.innerHTML += `<p>O <strong>maior</strong> valor informado foi ${bigger}.</p>`;
    res.innerHTML += `<p>O <strong>menor</strong> valor informado foi ${smaller}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${total}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${Number((total / values.length).toFixed(2))}.</p>`;
}