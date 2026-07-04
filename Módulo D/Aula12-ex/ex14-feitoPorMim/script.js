/* Observação:
No código a seguir utilizei métodos que não foram ensinados no curso introdutório de JavaScript do Curso em Vídeo.
O intervalo e transformação de número para string com dois caracteres foram aprendidos por conta próprio.
Agradeço por ler isso. ;)
*/
let hourInfoVar = document.querySelector('div#hourInfo'); //Utilizei querySelector por ser mais moderno, mas prefiro getElementById.
// Clock
function clock() {
    let now = new Date();
    let hour = String(now.getHours()).padStart(2, '0'); //Garante que haverá dois caracteres na hora, substituíndo o espaço vazio por 0.
    let minute = String(now.getMinutes()).padStart(2, '0'); //Garante que haverá dois caracteres no minuto, substituíndo o espaço vazio por 0.
    hourInfoVar.innerHTML = `Agora são ${hour}:${minute}.`;
}
setInterval(clock, 1000); //A cada 1 segundo a function clock é chamada.
clock(); //Chama a function clock imediatamente para não ficar em branco no primeiro segundo.
