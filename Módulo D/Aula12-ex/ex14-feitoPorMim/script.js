/* Observação:
No código a seguir utilizei métodos que não foram ensinados no curso introdutório de JavaScript do Curso em Vídeo.
O intervalo e transformação de número para string com dois caracteres foram aprendidos por conta própria.
Agradeço por ler isso. ;)
*/

// Criando variáveis
let hourInfoVar = document.querySelector('div#hourInfo'); // Utilizei querySelector por ser mais moderno, mas prefiro getElementById.
let resVar = document.getElementById('res');
let imgVar = document.createElement('img');
// Clock
function clock() {
    let now = new Date();
    let hour = String(now.getHours()).padStart(2, '0'); // Garante que haverá dois caracteres na hora, substituíndo o espaço vazio por 0.
    let minute = String(now.getMinutes()).padStart(2, '0'); // Garante que haverá dois caracteres no minuto, substituíndo o espaço vazio por 0.
    hourInfoVar.innerHTML = `Agora são ${hour}:${minute}.`; // Exibe o horário.
    // Mudando imagem de acordo com horário
    if(hour > 5 && hour < 12) {
        imgVar.src = 'img/morning.jpg'; // Manhã
        document.body.style.background = '#6db135';
    } else if(hour >= 12 && hour < 18) {
        imgVar.src = 'img/sunset.jpg'; // Tarde
        document.body.style.background = '#e98616';
    } else if(hour >= 18 && hour <= 23) {
        imgVar.src = 'img/night.jpg'; // Noite
        document.body.style.background = '#3b344d';
    } else if(hour >= 0 && hour < 6) {
        imgVar.src = 'img/earlyMorning.jpg'; // Madrugada
        document.body.style.background = 'rgb(72, 66, 80)';
    } else {
        console.log('Houve um erro ao reproduzir a imagem de período.'); // Erro
    }
}
resVar.appendChild(imgVar); // Exibe a imagem na div com id "res".
setInterval(clock, 1000); // A cada 1 segundo a function clock é chamada.
clock(); // Chama a function clock imediatamente para não ficar em branco no primeiro segundo.
