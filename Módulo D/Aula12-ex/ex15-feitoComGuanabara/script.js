function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('Verifique os dados e tente novamente!');
    } else {
        var fSex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fSex[0].checked) {
            genero = 'Homem';
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/boy.png');
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/youngman.png');
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/man.png');
            } else {
                // Idoso
                img.setAttribute('src', 'img/old man.png');
            }
        } else if(fSex[1].checked) {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/girl.png');
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/youngfem.png');
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/woman.png');
            } else {
                // Idoso
                img.setAttribute('src', 'img/old woman.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}