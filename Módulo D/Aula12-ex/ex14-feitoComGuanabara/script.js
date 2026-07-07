function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/morning.png';
        document.body.style.background = '#8bb614';
    } else if(hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'img/afternoon.png';
        document.body.style.background = '#ff8800';
    } else {
        // Boa noite
        img.src = 'img/night.png';
        document.body.style.background = '#464175';
    }
}