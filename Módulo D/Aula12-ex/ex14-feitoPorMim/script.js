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
    hourInfoVar.innerHTML = `Agora são ${hour}:${minute}.`;
    // Mudando imagem de acordo com horário
    if(hour > 5 && hour < 12) {
        imgVar.src = 'img/morning - original - 250x250.jpg';
    } else if(hour >= 12 && hour < 18) {
        imgVar.src = 'img/sunset - original - 250x250.jpg';
    } else if(hour >= 18 && hour <= 23) {
        imgVar.src = 'img/night - original - 250x250.jpg';
    } else if(hour >= 0 && hour < 6) {
        imgVar.src = 'img/earlyEvening - original - 250x250.jpg';
    } else {
        console.log('Houve um erro ao reproduzir a imagem de período.');
    }
    resVar.appendChild(imgVar);
}
setInterval(clock, 1000); // A cada 1 segundo a function clock é chamada.
clock(); // Chama a function clock imediatamente para não ficar em branco no primeiro segundo.
