let agora = new Date();
let hora = agora.getHours();
let minuto = agora.getMinutes();
console.log(`Agora são exatamente ${hora}:${minuto} horas.`);
if (hora < 12 && hora > 5) {
    console.log('Bom dia!');
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!');
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Boa madrugada!');
}