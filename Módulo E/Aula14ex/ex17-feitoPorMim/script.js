// Definindo algumas variáveis
const inputNumber = document.getElementById('input-number');
const mTable = document.getElementById('mtable');
// Criei essas variáveis antes da function por não ver a necessidade de criá-las toda hora que for ativada. Estou errado?
// Esperando evento
const btnMTable = document.getElementById('btn-mtable');
btnMTable.addEventListener('click', createTable);
// Gerando tabuada
function createTable() {
    // Verificando campo
    if(inputNumber.value.length == 0) {
        alert('Por favor, digite um número.');
        inputNumber.focus();
        return;
    }
    // Convertendo valores e resetando select
    const number = Number(inputNumber.value); // Recebe o valor do input (convertido para garantir)
    mTable.innerHTML = ''; // Esvazia o select
    for(let calc = 1;calc <= 10;calc++) {
        let newOption = document.createElement('option');
        newOption.text = `${number} X ${calc} = ${number * calc}`;
        mTable.appendChild(newOption);
    }
    inputNumber.value = '';
    inputNumber.focus();
}