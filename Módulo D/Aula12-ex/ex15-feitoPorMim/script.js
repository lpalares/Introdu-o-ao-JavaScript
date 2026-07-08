// Esse código foi criado por Luan Palares Santos para o curso gratuito e introdutório de JavaScript do Curso em Vídeo.
const resVar = document.getElementById('res'); // Quando busco um elemento pelo Id, prefiro usar esse método em vez de querySelector.
function check() {
    // Verificando ano de nascimento
    let now = new Date();
    let year = now.getFullYear();
    let birthVar = document.getElementById('birth');
    if(birthVar.value.length == 0) {
        alert('Informe um ano de nascimento!');
        birthVar.focus(); // Aprendi isso fora do curso introdutório de JavaScript do Curso em Vídeo.
    } else if(birthVar.value > year) {
        alert('Informe um ano de nascimento válido!');
        birthVar.value = '';
        birthVar.focus();
    } else {
        // Calculando idade
        let age = year - birthVar.value;
        // Verificando gênero
        let genderVar = document.querySelector('input[name="gender"]:checked').value;
        if(genderVar == 'masc') {
            genderVar = 'Homem';
        } else if(genderVar == 'fem') {
            genderVar = 'Mulher';
        } else {
            resVar.innerHTML = 'Houve um erro! Verifique o console.';
            console.log('Houve um erro ao selecionar o gênero!');
        }
        // Resultado
        resVar.innerHTML = '';
        resVar.innerHTML = `Detectamos ${genderVar} de ${age} anos!`;
        // Lembrete: Colocar imagem.
        // Lembrete 2: Mudar o fundo dependendo do resultado (opcional).
        // Lembrete 3: Melhorar responsividade do "site" (opcional).
        // Olá. Você está lendo isso? Agradeço por ler o código de um amador como eu! <3
    }
}