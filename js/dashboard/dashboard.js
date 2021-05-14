var arrayBanco = [];

window.onload= function(){
    inicia();

    document.getElementById("pTitulo").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/dashboard/";
        return false;
    }
    document.getElementById("iconHeader").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/myAccount/";
        return false;
    }

}

function inicia(){
    fLocalComunicaServidor("sessao/valida_sessao");
    fLocalComunicaServidor("dashboard/dashboard");
}

function conteudoModal(id_filme){

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/dashboard/ficha_tecnica.php",
        data: {id:id_filme},
        success: function (retorno) {

            if (retorno.funcao == "conteudo_ficha_tecnica") {
                if (retorno.status == "s") {

                    document.getElementById("conteudoTitulo").innerText = retorno.filme.titulo;
                    document.getElementById("conteudoAno").innerText = retorno.filme.ano;
                    document.getElementById("conteudoGenero").innerText = retorno.filme.genero;
                }
                else {
                    //ERRO MODAL
                }
            }
        }
    });
}

function addMinhaLista(id_filme) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/dashboard/minha_lista.php",
        data: { id: id_filme },
        success: function (retorno) {

        }
    });
}

function carrossel(){
    /*CARROSSEL 0*/
    const fila0 = document.getElementById('conteudoCarrossel0');
    const imagens0 = document.querySelectorAll('#imagens0');

    const flechaEsquerda0 = document.getElementById('flecha-esquerda0');
    const flechaDireita0 = document.getElementById('flecha-direita0');

    /*CARROSSEL 1*/
    const fila1 = document.getElementById('conteudoCarrossel1');
    const imagens1 = document.querySelectorAll('#imagens1');

    const flechaEsquerda1 = document.getElementById('flecha-esquerda1');
    const flechaDireita1 = document.getElementById('flecha-direita1');

    /*CARROSSEL2*/
    const fila2 = document.getElementById('conteudoCarrossel2');
    const imagens2 = document.querySelectorAll('#imagens2');

    const flechaEsquerda2 = document.getElementById('flecha-esquerda2');
    const flechaDireita2 = document.getElementById('flecha-direita2');

    /*CARROSSEL 3*/
    const fila3 = document.getElementById('conteudoCarrossel3');
    const imagens3 = document.querySelectorAll('#imagens3');

    const flechaEsquerda3 = document.getElementById('flecha-esquerda3');
    const flechaDireita3 = document.getElementById('flecha-direita3');

    /*CARROSSEL 0*/
    /* Rolagem - Flecha direita */
    flechaDireita0.addEventListener('click', () => {
        fila0.scrollLeft += fila0.offsetWidth;

        const indicadorAtivo0 = document.querySelector('#conteudo0 .ativo');
        if(indicadorAtivo0.nextSibling){
            indicadorAtivo0.nextSibling.classList.add('ativo');
            indicadorAtivo0.classList.remove('ativo');
        }
    });

    /*CARROSSEL 1*/
    /* Rolagem - Flecha direita */
    flechaDireita1.addEventListener('click', () => {
        fila1.scrollLeft += fila1.offsetWidth;

        const indicadorAtivo1 = document.querySelector('#conteudo1 .ativo');
        if (indicadorAtivo1.nextSibling) {
            indicadorAtivo1.nextSibling.classList.add('ativo');
            indicadorAtivo1.classList.remove('ativo');
        }
    });

    /*CARROSSEL 2*/
    /* Rolagem - Flecha direita */
    flechaDireita2.addEventListener('click', () => {
        fila2.scrollLeft += fila2.offsetWidth;

        const indicadorAtivo2 = document.querySelector('#conteudo2 .ativo');
        if (indicadorAtivo2.nextSibling) {
            indicadorAtivo2.nextSibling.classList.add('ativo');
            indicadorAtivo2.classList.remove('ativo');
        }
    });

    /*CARROSSEL 3*/
    /* Rolagem - Flecha direita */
    flechaDireita3.addEventListener('click', () => {
        fila3.scrollLeft += fila3.offsetWidth;

        const indicadorAtivo3 = document.querySelector('#conteudo3 .ativo');
        if (indicadorAtivo3.nextSibling) {
            indicadorAtivo3.nextSibling.classList.add('ativo');
            indicadorAtivo3.classList.remove('ativo');
        }
    });

    /*CARROSSEL 0*/
    /* Rolagem - Flecha esquerda */
    flechaEsquerda0.addEventListener('click', () => {
        fila0.scrollLeft -= fila0.offsetWidth;

        const indicadorAtivo0 = document.querySelector('#conteudo0 .ativo');
        if (indicadorAtivo0.previousSibling) {
            indicadorAtivo0.previousSibling.classList.add('ativo');
            indicadorAtivo0.classList.remove('ativo');
        }
    });

    /*CARROSSEL 1*/
    /* Rolagem - Flecha esquerda */
    flechaEsquerda1.addEventListener('click', () => {
        fila1.scrollLeft -= fila1.offsetWidth;

        const indicadorAtivo1 = document.querySelector('#conteudo1 .ativo');
        if(indicadorAtivo1.previousSibling){
            indicadorAtivo1.previousSibling.classList.add('ativo');
            indicadorAtivo1.classList.remove('ativo');
        }
    });

    /*CARROSSEL 2*/
    /* Rolagem - Flecha esquerda */
    flechaEsquerda2.addEventListener('click', () => {
        fila2.scrollLeft -= fila2.offsetWidth;

        const indicadorAtivo2 = document.querySelector('#conteudo2 .ativo');
        if (indicadorAtivo2.previousSibling) {
            indicadorAtivo2.previousSibling.classList.add('ativo');
            indicadorAtivo2.classList.remove('ativo');
        }
    });

    /*CARROSSEL 3*/
    /* Rolagem - Flecha esquerda */
    flechaEsquerda3.addEventListener('click', () => {
        fila3.scrollLeft -= fila3.offsetWidth;

        const indicadorAtivo3 = document.querySelector('#conteudo3 .ativo');
        if (indicadorAtivo3.previousSibling) {
            indicadorAtivo3.previousSibling.classList.add('ativo');
            indicadorAtivo3.classList.remove('ativo');
        }
    });

    /*CARROSSEL 0*/
    /* Paginação */
    const numeroPaginas0 = Math.ceil(imagens0.length / 5);
    for(let i = 0; i < numeroPaginas0; i++){
        const indicador0 = document.createElement('button');

        if(i === 0){
            indicador0.classList.add('ativo');
        }

        document.querySelector('#conteudo0').appendChild(indicador0);
        indicador0.addEventListener('click', (e0) => {
            fila0.scrollLeft = i * fila0.offsetWidth;
            document.querySelector('#conteudo0 .ativo').classList.remove('ativo');
            e0.target.classList.add('ativo');
        });
    }

    /*CARROSSEL 1*/
    /* Paginação */
    const numeroPaginas1 = Math.ceil(imagens1.length / 5);
    for (let i = 0; i < numeroPaginas1; i++) {
        const indicador1 = document.createElement('button');

        if (i === 0) {
            indicador1.classList.add('ativo');
        }

        document.querySelector('#conteudo1').appendChild(indicador1);
        indicador1.addEventListener('click', (e1) => {
            fila1.scrollLeft = i * fila1.offsetWidth;
            document.querySelector('#conteudo1 .ativo').classList.remove('ativo');
            e1.target.classList.add('ativo');
        });
    }

    /*CARROSSEL 2*/
    /* Paginação */
    const numeroPaginas2 = Math.ceil(imagens2.length / 5);
    for (let i = 0; i < numeroPaginas2; i++) {
        const indicador2 = document.createElement('button');

        if (i === 0) {
            indicador2.classList.add('ativo');
        }

        document.querySelector('#conteudo2').appendChild(indicador2);
        indicador2.addEventListener('click', (e2) => {
            fila2.scrollLeft = i * fila2.offsetWidth;
            document.querySelector('#conteudo2 .ativo').classList.remove('ativo');
            e2.target.classList.add('ativo');
        });
    }

    /*CARROSSEL 3*/
    /* Paginação */
    const numeroPaginas3 = Math.ceil(imagens3.length / 5);
    for (let i = 0; i < numeroPaginas3; i++) {
        const indicador3 = document.createElement('button');

        if (i === 0) {
            indicador3.classList.add('ativo');
        }

        document.querySelector('#conteudo3').appendChild(indicador3);
        indicador3.addEventListener('click', (e3) => {
            fila3.scrollLeft = i * fila3.offsetWidth;
            document.querySelector('#conteudo3 .ativo').classList.remove('ativo');
            e3.target.classList.add('ativo');
        });
    }



    /*CARROSSEL 0*/
    /* Hover */
    imagens0.forEach((imagem0) => {
        imagem0.addEventListener('mouseenter', (e0) => {
            const elemento  = e0.currentTarget;
            setTimeout(() => {
                imagens0.forEach(imagens0  => imagens0.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });

    /*CARROSSEL 1*/
    /* Hover */
    imagens1.forEach((imagem1) => {
        imagem1.addEventListener('mouseenter', (e1) => {
            const elemento1 = e1.currentTarget;
            setTimeout(() => {
                imagens1.forEach(imagens1 => imagens1.classList.remove('hover'));
                elemento1.classList.add('hover');
            }, 300);
        });
    });

    /*CARROSSEL 2*/
    /* Hover */
    imagens2.forEach((imagem2) => {
        imagem2.addEventListener('mouseenter', (e2) => {
            const elemento2 = e2.currentTarget;
            setTimeout(() => {
                imagens2.forEach(imagens2 => imagens2.classList.remove('hover'));
                elemento2.classList.add('hover');
            }, 300);
        });
    });

    /*CARROSSEL 3*/
    /* Hover */
    imagens3.forEach((imagem3) => {
        imagem3.addEventListener('mouseenter', (e3) => {
            const elemento3 = e3.currentTarget;
            setTimeout(() => {
                imagens3.forEach(imagens3 => imagens3.classList.remove('hover'));
                elemento3.classList.add('hover');
            }, 300);
        });
    });

    fila0.addEventListener('mouseleave', () => {
        imagens0.forEach(imagens0 => imagens0.classList.remove('hover'));
    });

    fila1.addEventListener('mouseleave', () => {
        imagens1.forEach(imagens1 => imagens1.classList.remove('hover'));
    });

    fila2.addEventListener('mouseleave', () => {
        imagens2.forEach(imagens2 => imagens2.classList.remove('hover'));
    });

    fila3.addEventListener('mouseleave', () => {
        imagens3.forEach(imagens3 => imagens3.classList.remove('hover'));
    });
}

function fLocalComunicaServidor(arquivo) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/"+arquivo+".php",
        success: function (retorno) {
            if (retorno.funcao == "conteudo") {
                
                var cards = '';
                
                for(var i = 0; i < 8; i++){

                    cards +='<div class="imagens" id="imagens0" id_filmes="' + retorno[i].id + '">';
                    cards +='<img id_filmes="'+retorno[i].id+'" class="imgFilmes" src="../../img/posters/pic'+retorno[i].id+'.jpg" width="300">';
                    
                    cards +='    <div class="espaco" id="espaco">';
                    cards +='            <div class="bol">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"';
                    cards +='                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"';
                    cards +='                        font-family="none" font-weight="none" font-size="none" text-anchor="none"';
                    cards +='                        style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none"></path>';
                    cards +='                        <g fill="#ff9100">';
                    cards +='                            <path';
                    cards +='                                d="M113,18.83333c-51.9235,0 -94.16667,42.24317 -94.16667,94.16667c0,51.9235 42.24317,94.16667 94.16667,94.16667c51.9235,0 94.16667,-42.24317 94.16667,-94.16667c0,-51.9235 -42.24317,-94.16667 -94.16667,-94.16667zM94.16667,145.61933v-65.23867l56.5,32.61933z">';
                    cards +='                            </path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';
                            
                    cards +='            <div class="bola btn-minha_lista" id_filmes="'+retorno[i].id+'">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="40" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"';
                    cards +='                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"';
                    cards +='                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none" fill-rule="nonzero"></path>';
                    cards +='                        <g fill="#ffffff" fill-rule="evenodd">';
                    cards +='                            <path';
                    cards +='                                d="M103.58333,18.83333v84.75h-84.75v18.83333h84.75v84.75h18.83333v-84.75h84.75v-18.83333h-84.75v-84.75z">';
                    cards +='                            </path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';
                            
                    cards +='            <div class="bola btn-info" id="btn-info" id_filmes="'+retorno[i].id +'">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="41" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"';
                    cards +='                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"';
                    cards +='                        font-family="none" font-weight="none" font-size="none" text-anchor="none"';
                    cards +='                        style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none"></path>';
                    cards +='                        <g fill="#ffffff">';
                    cards +='                            <path d="M28.25,75.33333v37.66667l84.75,56.5l84.75,-56.5v-37.66667l-84.75,56.5z"></path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';
                    cards +='        </div>';
                    
                    cards +='</div>';
                }
                document.getElementById('carrossel0').innerHTML = cards;
                

                cards = '';
                for (var j = 8; j < 15; j++) {
                    cards += '<div class="imagens" id="imagens1" id_filmes="'+retorno[j].id +'"><img id_filmes="'+retorno[j].id+'" class="imgFilmes" src="../../img/posters/pic'+retorno[j].id+'.jpg" width="300">';
                    
                    cards +='    <div class="espaco" id="espaco">';
                    cards +='            <div class="bol">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"';
                    cards +='                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"';
                    cards +='                        font-family="none" font-weight="none" font-size="none" text-anchor="none"';
                    cards +='                        style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none"></path>';
                    cards +='                        <g fill="#ff9100">';
                    cards +='                            <path';
                    cards +='                                d="M113,18.83333c-51.9235,0 -94.16667,42.24317 -94.16667,94.16667c0,51.9235 42.24317,94.16667 94.16667,94.16667c51.9235,0 94.16667,-42.24317 94.16667,-94.16667c0,-51.9235 -42.24317,-94.16667 -94.16667,-94.16667zM94.16667,145.61933v-65.23867l56.5,32.61933z">';
                    cards +='                            </path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';

                    cards +='            <div class="bola btn-minha_lista" id_filmes="' + retorno[j].id + '">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="40" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"';
                    cards +='                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"';
                    cards +='                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none" fill-rule="nonzero"></path>';
                    cards +='                        <g fill="#ffffff" fill-rule="evenodd">';
                    cards +='                            <path';
                    cards +='                                d="M103.58333,18.83333v84.75h-84.75v18.83333h84.75v84.75h18.83333v-84.75h84.75v-18.83333h-84.75v-84.75z">';
                    cards +='                            </path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';

                    cards +='            <div class="bola btn-info" id="btn-info" id_filmes="' + retorno[j].id + '">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="41" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"';
                    cards +='                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"';
                    cards +='                        font-family="none" font-weight="none" font-size="none" text-anchor="none"';
                    cards +='                        style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none"></path>';
                    cards +='                        <g fill="#ffffff">';
                    cards +='                            <path d="M28.25,75.33333v37.66667l84.75,56.5l84.75,-56.5v-37.66667l-84.75,56.5z"></path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';
                    cards +='        </div>';
                    
                    cards +='</div>';
                }
                document.getElementById('carrossel1').innerHTML =cards;
                
                cards ='';
                for (var k =15; k < 18; k++) {
                    cards +='<div class="imagens" id="imagens2" id_filmes="'+retorno[k].id+'">';
                    
                    cards +='<img id_filmes="'+retorno[k].id+'"class="imgFilmes" src="../../img/posters/pic'+retorno[k].id+'.jpg" width="300">';
                    
                    cards +='    <div class="espaco" id="espaco">';
                    cards +='            <div class="bol">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"';
                    cards +='                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"';
                    cards +='                        font-family="none" font-weight="none" font-size="none" text-anchor="none"';
                    cards +='                        style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none"></path>';
                    cards +='                        <g fill="#ff9100">';
                    cards +='                            <path';
                    cards +='                                d="M113,18.83333c-51.9235,0 -94.16667,42.24317 -94.16667,94.16667c0,51.9235 42.24317,94.16667 94.16667,94.16667c51.9235,0 94.16667,-42.24317 94.16667,-94.16667c0,-51.9235 -42.24317,-94.16667 -94.16667,-94.16667zM94.16667,145.61933v-65.23867l56.5,32.61933z">';
                    cards +='                            </path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';

                    cards +='            <div class="bola btn-minha_lista" id_filmes="'+retorno[k].id+'">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="40" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"';
                    cards +='                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"';
                    cards +='                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none" fill-rule="nonzero"></path>';
                    cards +='                        <g fill="#ffffff" fill-rule="evenodd">';
                    cards +='                            <path';
                    cards +='                                d="M103.58333,18.83333v84.75h-84.75v18.83333h84.75v84.75h18.83333v-84.75h84.75v-18.83333h-84.75v-84.75z">';
                    cards +='                            </path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';

                    cards +='            <div class="bola btn-info" id="btn-info" id_filmes="'+retorno[k].id +'">';
                    cards +='                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="41" viewBox="0 0 226 226"';
                    cards +='                    style=" fill:#000000;">';
                    cards +='                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"';
                    cards +='                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"';
                    cards +='                        font-family="none" font-weight="none" font-size="none" text-anchor="none"';
                    cards +='                        style="mix-blend-mode: normal">';
                    cards +='                        <path d="M0,226v-226h226v226z" fill="none"></path>';
                    cards +='                        <g fill="#ffffff">';
                    cards +='                            <path d="M28.25,75.33333v37.66667l84.75,56.5l84.75,-56.5v-37.66667l-84.75,56.5z"></path>';
                    cards +='                        </g>';
                    cards +='                    </g>';
                    cards +='                </svg>';
                    cards +='            </div>';
                    cards +='        </div>';
                    
                    cards +='</div>';
                }
                cards +='<div class="imagens" id="imagens2"><img class="imgFilmes" src="../../img/posters/vazio.png"  width="300"></div>';
                cards +='<div class="imagens" id="imagens2"><img class="imgFilmes" src="../../img/posters/vazio.png"  width="300"></div>';
                document.getElementById('carrossel2').innerHTML = cards;
                


                carrossel();

                $(".btn-info").click(function () {
                    var id_filme = $(this).attr("id_filmes");
                    console.log(id_filme);
                    conteudoModal(id_filme);
                    document.querySelector('.bg-modal').style.display = 'flex';
                    return false;
                });

                $(".btn-minha_lista").click(function () {
                    var id_filme = $(this).attr("id_filmes");
                    console.log(id_filme);
                    addMinhaLista(id_filme);
                    return false;
                });

                document.querySelector('.close').onclick = function () {
                    document.getElementById("conteudoTitulo").innerText = "";
                    document.getElementById("conteudoAno").innerText = "";
                    document.getElementById("conteudoGenero").innerText = "";
                    
                    document.querySelector('.bg-modal').style.display = 'none';
                    return false;
                };

            }
            if (retorno.funcao == "valida-sessao") {
                if (retorno.status == "n") {
                    window.location.href = "/StreamTomHanks/StreamTomHanks/pages/login/";
                }
                else {
                    fLocalComunicaServidor();
                }
            }
        }
    });

}

