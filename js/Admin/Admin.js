var arquivo;
var formData;

window.onload = function(){
    inicia()
}

function inicia() {
    session("sessao/valida_sessao");
    fLocalComunicaServidor("admin/filmesAdmin");
}

function session(arquivo) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/" + arquivo + ".php",
        success: function (retorno) {
            if (retorno.funcao == "valida-sessao") {
                if (retorno.funcao == "valida-sessao") {
                    if (retorno.status == "n") {
                        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/login/";
                    }
                }
            }
        }
    });
}

function carrossel() {
    /*CARROSSEL 0*/
    const fila0 = document.getElementById('conteudoCarrossel0');
    const imagens0 = document.querySelectorAll('#imagens0');

    const flechaEsquerda0 = document.getElementById('flecha-esquerda0');
    const flechaDireita0 = document.getElementById('flecha-direita0');

    /*CARROSSEL 0*/
    /* Rolagem - Flecha direita */
    flechaDireita0.addEventListener('click', () => {
        fila0.scrollLeft += fila0.offsetWidth;

        const indicadorAtivo0 = document.querySelector('#conteudo0 .ativo');
        if (indicadorAtivo0.nextSibling) {
            indicadorAtivo0.nextSibling.classList.add('ativo');
            indicadorAtivo0.classList.remove('ativo');
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

    /*CARROSSEL 0*/
    /* Paginação */
    const numeroPaginas0 = Math.ceil(imagens0.length / 5);
    for (let i = 0; i < numeroPaginas0; i++) {
        const indicador0 = document.createElement('button');

        if (i === 0) {
            indicador0.classList.add('ativo');
        }

        document.querySelector('#conteudo0').appendChild(indicador0);
        indicador0.addEventListener('click', (e0) => {
            fila0.scrollLeft = i * fila0.offsetWidth;
            document.querySelector('#conteudo0 .ativo').classList.remove('ativo');
            e0.target.classList.add('ativo');
        });
    }

    /*CARROSSEL 0*/
    /* Hover */
    imagens0.forEach((imagem0) => {
        imagem0.addEventListener('mouseenter', (e0) => {
            const elemento = e0.currentTarget;
            setTimeout(() => {
                imagens0.forEach(imagens0 => imagens0.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });

    fila0.addEventListener('mouseleave', () => {
        imagens0.forEach(imagens0 => imagens0.classList.remove('hover'));
    });

}

function btnCards() {

    $(".btn-remover").click(function () {
        var id_filme = $(this).attr("id_filmes");
        console.log(id_filme);
        //CHAMA PHP PARA RETIRAR FILME
        return false;
    });

    document.getElementById("btn-addFilme").onclick = function () {
        document.querySelector('.bg-modal').style.display = 'flex';
    }

    document.querySelector('.close').onclick = function () {
        //INPUTS RECEBEM VAZIO

        document.querySelector('.bg-modal').style.display = 'none';
        return false;
    };

    $("#arquivo").change(function () {
        arquivo = document.getElementById("arquivo").files[0];

        formData = new FormData();
        formData.append("file", arquivo);
    });

    document.getElementById("btn-enviarFilme").onclick = function(){
        adicionarFilme();
    }

}

function adicionarFilme() {

    var dados = $("#form-AddFilme").serialize();

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/admin/adicionarFilme.php",
        data: dados,
        success: function(retorno) {

            if(retorno.funcao == "addFilme") {
                if (retorno.status == "s") {
                    uploadImagem(retorno.id_filmes);
                }
            }
        }

    });

}

function uploadImagem(id_filme){
    $.ajax({
        url: "/imagem/php/admin/adicionarImagemFilme.php",
        type: "post",
        data: { id: id_filme, formData},
        contentType: false,
        cache: false,
        processData: false,
        success: function (retorno) {
        }
    });
    return false;
}

function fLocalComunicaServidor(arquivo) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/" + arquivo + ".php",
        success: function (retorno) {
            if (retorno.funcao == "filmesAdmin") {

                var cards = '';

                for (var i = 0; i < retorno.tamanho; i++) {

                    cards += '<div class="imagens" id="imagens0" id_filmes="' + retorno[i].id + '">';
                    cards += '<img id_filmes="' + retorno[i].id + '" class="imgFilmes" src="../../img/posters/pic' + retorno[i].id + '.jpg" width="300">';

                    cards += '<div class="bola btn-minha_lista" id="btn-minha_lista' + retorno[i].id + '" id_filmes="' + retorno[i].id + '">';
                        cards += '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"';
                        cards += 'width="30" height="40"';
                        cards += 'viewBox="0 0 226 226"';
                        cards += 'style=" padding-left:6.9px; padding-top:3.5px; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M127.3833,17.7417c-1.86725,-0.0192 -3.61069,0.932 -4.60514,2.51253l-38.56982,56.24853l-38.56982,-56.24853c-1.01301,-1.52504 -2.73255,-2.42965 -4.56315,-2.40055c-1.99119,0.0348 -3.79998,1.16759 -4.70056,2.94382c-0.90058,1.77623 -0.74537,3.90481 0.40336,5.5316l40.91439,59.6709l-40.91439,59.6709c-1.17682,1.58053 -1.39454,3.67826 -0.56739,5.46677c0.82715,1.78852 2.56658,2.98111 4.53302,3.10794c1.96644,0.12684 3.84466,-0.83242 4.89472,-2.49985l38.56982,-56.24853l38.56982,56.24853c1.05006,1.66743 2.92828,2.62669 4.89472,2.49985c1.96644,-0.12684 3.70587,-1.31943 4.53302,-3.10794c0.82715,-1.78852 0.60943,-3.88625 -0.56739,-5.46677l-40.91439,-59.6709l40.91439,-59.6709c1.20898,-1.62229 1.40466,-3.786 0.50635,-5.59887c-0.89831,-1.81287 -2.73844,-2.9678 -4.76156,-2.98853z"></path></g></g></svg>';
                    cards += '</div>';

                    cards += '</div>';
                }
                document.getElementById('carrossel0').innerHTML = cards;
                carrossel();
                btnCards();

            }
        }
    });
}
