function count() {
    // Definindo variáveis
    const start = document.getElementById('start');
    const end = document.getElementById('end');
    const step = document.getElementById('step');
    const res = document.getElementById('res');
    let startValue = Number(start.value);
    let endValue = Number(end.value);
    let stepValue = Number(step.value);
    // Verificando campos
    if(start.value.length == 0) {
        alert('Preencha todos os campos.');
        start.focus();
        return;
    } else if(end.value.length == 0) {
        alert('Preencha todos os campos.');
        end.focus();
        return;
    } else if(step.value.length == 0 || stepValue <= 0) {
        alert('Valor de passo inválido ou não preenchido. Considerando passo 1.');
        step.value = '1';
        stepValue = 1;
    }
    // Contagem
    res.innerHTML = 'Contando:<br>';
    if(startValue <= endValue) {
        for(let count = startValue;count <= endValue;count += stepValue) {
            res.innerHTML += ` ${count} \u{1F449}`;
        }
    } else {
        for(let count = startValue;count >= endValue;count -= stepValue) {
            res.innerHTML += ` ${count} \u{1F449}`;
        }
    }
    res.innerHTML += ` \u{1F3C1}`;
}