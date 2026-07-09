// Esse código foi criado por Luan Palares Santos para o curso gratuito e introdutório de JavaScript do Curso em Vídeo.
const resVar = document.getElementById('res'); // Quando busco um elemento pelo Id, prefiro usar esse método em vez de querySelector.
const imgVar = document.createElement('img');
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
            // Masculino
            if(age <= 13) {
                imgVar.src = 'img/boy.jpg'; // Criança
                genderVar = 'um garoto';
            } else if (age <= 20) {
                imgVar.src = 'img/youngman.jpg'; // Jovem
                genderVar = 'um jovem';
            } else if(age <= 49) {
                imgVar.src = 'img/man.jpg'; // Adulto
                genderVar = 'um homem';
            } else {
                imgVar.src = 'img/old man.jpg'; // Idoso
                genderVar = 'um senhor';
            }
        } else if(genderVar == 'fem') {
            // Feminino
            if(age <= 13) {
                imgVar.src = 'img/girl.jpg'; // Criança
                genderVar = 'uma garota';
            } else if(age <= 20) {
                imgVar.src = 'img/youngfem.jpg'; // Jovem
                genderVar = 'uma jovem';
            } else if(age <= 49) {
                imgVar.src = 'img/woman.jpg'; // Adulta
                genderVar = 'uma mulher';
            } else {
                imgVar.src = 'img/old woman.jpg'; // Idosa
                genderVar = 'uma senhora';
            }
        }
        // Resultado
        resVar.style.textAlign = 'center';
        resVar.innerHTML = `Detectamos ${genderVar} de ${age} anos!`;
        resVar.appendChild(imgVar);
    }
}