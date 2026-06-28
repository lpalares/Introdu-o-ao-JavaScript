//Definindo variáveis
var backOneVar = document.getElementById('b1');
var backTwoVar = document.getElementById('b2');
var backThreeVar = document.getElementById('b3');
var conOneVar = document.getElementById('c1');
var conTwoVar = document.getElementById('c2');
var conThreeVar = document.getElementById('c3');
var imgRes = document.getElementById('imgRes');
var backKey = 0;
var conKey = 0;

//Esperando ação
backOneVar.addEventListener('click', backOne);
backTwoVar.addEventListener('click', backTwo);
backThreeVar.addEventListener('click', backThree);
conOneVar.addEventListener('click', conOne);
conTwoVar.addEventListener('click', conTwo);
conThreeVar.addEventListener('click', conThree);

//Selecionando fundo
//Fundo 01
function backOne() {
    backKey = 1; //Chave do botão
    backFunction();
}

//Fundo 02
function backTwo() {
    backKey = 2; //Chave do botão
    backFunction();
}

//Fundo 03
function backThree() {
    backKey = 3; //Chave do botão
    backFunction();
}

function backFunction() {
    if(backKey == 1) {
        backOneVar.innerText = 'Selecionado';
        backTwoVar.innerText = 'Fundo 02';
        backThreeVar.innerText = 'Fundo 03';

        //Colocando fundo
        imgRes.innerHTML = ''; //Remove a mensagem "Esperando..."
        imgRes.style.backgroundImage = 'url(img/background_001.jpg)'; //Muda o fundo
        imgRes.style.height = '700px'; //Muda a altura do local da imagem
    } 
    
    if(backKey == 2) {
        backTwoVar.innerText = 'Selecionado';
        backOneVar.innerText = 'Fundo 01';
        backThreeVar.innerText = 'Fundo 03';

        //Colocando fundo
        imgRes.innerHTML = ''; //Remove a mensagem "Esperando..."
        imgRes.style.backgroundImage = 'url(img/background_002.jpg)'; //Muda o fundo
        imgRes.style.height = '700px'; //Muda a altura do local da imagem
    } 
    
    if(backKey == 3) {
        backThreeVar.innerText = 'Selecionado';
        backOneVar.innerText = 'Fundo 01';
        backTwoVar.innerText = 'Fundo 02';

        //Colocando fundo
        imgRes.innerHTML = ''; //Remove a mensagem "Esperando..."
        imgRes.style.backgroundImage = 'url(img/background_003.jpg)'; //Muda o fundo
        imgRes.style.height = '700px'; //Muda a altura do local da imagem
    }
}

//Selecionando conteúdo
//Conteúdo 01
function conOne() {
    conKey = 1;
    conFunction();
}

//Conteúdo 02
function conTwo() {
    conKey = 2;
    conFunction();
}

//Conteúdo 03
function conThree() {
    conKey = 3;
    conFunction();
}

function conFunction() {
    let imgVar = document.createElement('img');

    if(conKey == 1) {
        conOneVar.innerText = 'Selecionado';
        conTwoVar.innerText = 'Conteúdo 02';
        conThreeVar.innerText = 'Conteúdo 03';

        //Colocando conteúdo
        imgRes.innerHTML = ''; //Remove a mensagem "Esperando..."
        imgRes.style.height = '700px'; //Muda a altura do local da imagem
        imgVar.setAttribute('src', 'img/content_001(original).png');
    }

    if(conKey == 2) {
        conOneVar.innerText = 'Conteúdo 01';
        conTwoVar.innerText = 'Selecionado';
        conThreeVar.innerText = 'Conteúdo 03';

        //Colocando conteúdo
        imgRes.innerHTML = ''; //Remove a mensagem "Esperando..."
        imgRes.style.height = '700px'; //Muda a altura do local da imagem
        imgVar.setAttribute('src', 'img/content_002.png');
    }

    if(conKey == 3) {
        conOneVar.innerText = 'Conteúdo 01';
        conTwoVar.innerText = 'Conteúdo 02';
        conThreeVar.innerText = 'Selecionado';

        //Colocando conteúdo
        imgRes.innerHTML = ''; //Remove a mensagem "Esperando..."
        imgRes.style.height = '700px'; //Muda a altura do local da imagem
        imgVar.setAttribute('src', 'img/content_003.png');
    }

    imgRes.appendChild(imgVar)
}