
window.onload = function () {
    inicia();

    document.getElementById("pTitulo").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/dashboard/";
        return false;
    }
    document.getElementById("iconHeader").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/myAccount/";
        return false;
    }
    document.getElementById("pMinhaLista").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/minha_lista/";
        return false;
    }
}

function inicia() {
    session("sessao/valida_sessao");
    fLocalComunicaServidor("dashboard/filmes_lista");
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

function btnCards() {
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
        window.location.reload();
        return false;
    });


    document.querySelector('.close').onclick = function () {
        document.getElementById("conteudoTitulo").innerText = "";
        document.getElementById("conteudoAno").innerText = "";
        document.getElementById("conteudoGenero").innerText = "";
        document.getElementById("conteudoSinopse").innerText = "";
        document.getElementById("conteudoDuracao").innerText = "";
        document.getElementById("conteudoDiretor").innerText = "";
        document.getElementById("conteudoProducao").innerText = "";
        document.getElementById("conteudoRoteiro").innerText = "";
        document.getElementById("conteudoEdicao").innerText = "";
        document.getElementById("conteudoDistribuicao").innerText = "";
        document.getElementById("conteudoTrailer").innerText = "";

        document.querySelector('.bg-modal').style.display = 'none';
        return false;
    };
}

function conteudoModal(id_filme) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/dashboard/ficha_tecnica.php",
        data: { id: id_filme },
        success: function (retorno) {

            if (retorno.funcao == "conteudo_ficha_tecnica") {
                if (retorno.status == "s") {

                    document.getElementById("conteudoTitulo").innerText = retorno.filme.titulo;
                    document.getElementById("conteudoAno").innerText = retorno.filme.ano;
                    document.getElementById("conteudoGenero").innerText = retorno.filme.genero;
                    document.getElementById("conteudoSinopse").innerText = retorno.filme.sinopse;
                    document.getElementById("conteudoDuracao").innerText = retorno.filme.duracao;
                    document.getElementById("conteudoDiretor").innerText = retorno.filme.diretor;
                    document.getElementById("conteudoProducao").innerText = retorno.filme.producao;
                    document.getElementById("conteudoRoteiro").innerText = retorno.filme.roteiro;
                    document.getElementById("conteudoEdicao").innerText = retorno.filme.edicao;
                    document.getElementById("conteudoDistribuicao").innerText = retorno.filme.distribuicao;
                    document.getElementById("conteudoTrailer").innerHTML = '<iframe width="100%" height="300" src="' + retorno.filme.trailer + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                }
                else {
                    //ERRO MODAL
                }
            }
        }
    });
}


function addMinhaLista(id_filme) {
    var code = "";

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/dashboard/minha_lista.php",
        data: { id: id_filme },
        success: function (retorno) {
            if (retorno.funcao == "minha_lista") {
                if (retorno.simbolo == "x") {
                    code += '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"';
                    code += 'width="30" height="40"';
                    code += 'viewBox="0 0 226 226"';
                    code += 'style=" padding-left:6.9px; padding-top:3.5px; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M127.3833,17.7417c-1.86725,-0.0192 -3.61069,0.932 -4.60514,2.51253l-38.56982,56.24853l-38.56982,-56.24853c-1.01301,-1.52504 -2.73255,-2.42965 -4.56315,-2.40055c-1.99119,0.0348 -3.79998,1.16759 -4.70056,2.94382c-0.90058,1.77623 -0.74537,3.90481 0.40336,5.5316l40.91439,59.6709l-40.91439,59.6709c-1.17682,1.58053 -1.39454,3.67826 -0.56739,5.46677c0.82715,1.78852 2.56658,2.98111 4.53302,3.10794c1.96644,0.12684 3.84466,-0.83242 4.89472,-2.49985l38.56982,-56.24853l38.56982,56.24853c1.05006,1.66743 2.92828,2.62669 4.89472,2.49985c1.96644,-0.12684 3.70587,-1.31943 4.53302,-3.10794c0.82715,-1.78852 0.60943,-3.88625 -0.56739,-5.46677l-40.91439,-59.6709l40.91439,-59.6709c1.20898,-1.62229 1.40466,-3.786 0.50635,-5.59887c-0.89831,-1.81287 -2.73844,-2.9678 -4.76156,-2.98853z"></path></g></g></svg>';

                    document.getElementById("btn-minha_lista" + id_filme).innerHTML = "";
                    document.getElementById("btn-minha_lista" + id_filme).innerHTML = code;
                } else {
                    code += '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="40" viewBox="0 0 226 226"';
                    code += '                    style=" fill:#000000;">';
                    code += '                    <g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"';
                    code += '                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"';
                    code += '                        font-size="none" text-anchor="none" style="mix-blend-mode: normal">';
                    code += '                        <path d="M0,226v-226h226v226z" fill="none" fill-rule="nonzero"></path>';
                    code += '                        <g fill="#ffffff" fill-rule="evenodd">';
                    code += '                            <path';
                    code += '                                d="M103.58333,18.83333v84.75h-84.75v18.83333h84.75v84.75h18.83333v-84.75h84.75v-18.83333h-84.75v-84.75z">';
                    code += '                            </path>';
                    code += '                        </g>';
                    code += '                    </g>';
                    code += '                </svg>';

                    document.getElementById("btn-minha_lista" + id_filme).innerHTML = "";
                    document.getElementById("btn-minha_lista" + id_filme).innerHTML = code;
                }
            }

        }
    });
}

function fLocalComunicaServidor(arquivo) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/" + arquivo + ".php",
        success: function (retorno) {
            if (retorno.funcao == "minha_lista") {

                var cards = '';

                for (var i = 0; i < retorno.tamanho; i++) {

                    cards += '<div class="imagens imagensMinhaLista" id_filmes="' + retorno[i].id + '">';
                    cards += '<img id_filmes="' + retorno[i].id + '" class="imgFilmes" src="../../img/posters/pic' + retorno[i].id + '.jpg" width="300">';

                    cards += '    <div class="espaco" id="espaco">';
                    cards += '            <div class="bol">';
                    cards += '                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 226 226"';
                    cards += '                    style=" fill:#000000;">';
                    cards += '                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"';
                    cards += '                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"';
                    cards += '                        font-family="none" font-weight="none" font-size="none" text-anchor="none"';
                    cards += '                        style="mix-blend-mode: normal">';
                    cards += '                        <path d="M0,226v-226h226v226z" fill="none"></path>';
                    cards += '                        <g fill="#ff9100">';
                    cards += '                            <path';
                    cards += '                                d="M113,18.83333c-51.9235,0 -94.16667,42.24317 -94.16667,94.16667c0,51.9235 42.24317,94.16667 94.16667,94.16667c51.9235,0 94.16667,-42.24317 94.16667,-94.16667c0,-51.9235 -42.24317,-94.16667 -94.16667,-94.16667zM94.16667,145.61933v-65.23867l56.5,32.61933z">';
                    cards += '                            </path>';
                    cards += '                        </g>';
                    cards += '                    </g>';
                    cards += '                </svg>';
                    cards += '            </div>';

                    cards += '<div class="bola btn-minha_lista" id="btn-minha_lista' + retorno[i].id + '" id_filmes="' + retorno[i].id + '">';

                        cards += '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"';
                        cards += 'width="30" height="40"';
                        cards += 'viewBox="0 0 226 226"';
                        cards += 'style=" padding-left:6.9px; padding-top:3.5px; fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M127.3833,17.7417c-1.86725,-0.0192 -3.61069,0.932 -4.60514,2.51253l-38.56982,56.24853l-38.56982,-56.24853c-1.01301,-1.52504 -2.73255,-2.42965 -4.56315,-2.40055c-1.99119,0.0348 -3.79998,1.16759 -4.70056,2.94382c-0.90058,1.77623 -0.74537,3.90481 0.40336,5.5316l40.91439,59.6709l-40.91439,59.6709c-1.17682,1.58053 -1.39454,3.67826 -0.56739,5.46677c0.82715,1.78852 2.56658,2.98111 4.53302,3.10794c1.96644,0.12684 3.84466,-0.83242 4.89472,-2.49985l38.56982,-56.24853l38.56982,56.24853c1.05006,1.66743 2.92828,2.62669 4.89472,2.49985c1.96644,-0.12684 3.70587,-1.31943 4.53302,-3.10794c0.82715,-1.78852 0.60943,-3.88625 -0.56739,-5.46677l-40.91439,-59.6709l40.91439,-59.6709c1.20898,-1.62229 1.40466,-3.786 0.50635,-5.59887c-0.89831,-1.81287 -2.73844,-2.9678 -4.76156,-2.98853z"></path></g></g></svg>';
            
                    cards += '</div>';

                    cards += '            <div class="bola btn-info" id="btn-info" id_filmes="' + retorno[i].id + '">';
                    cards += '                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="41" viewBox="0 0 226 226"';
                    cards += '                    style=" fill:#000000;">';
                    cards += '                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"';
                    cards += '                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"';
                    cards += '                        font-family="none" font-weight="none" font-size="none" text-anchor="none"';
                    cards += '                        style="mix-blend-mode: normal">';
                    cards += '                        <path d="M0,226v-226h226v226z" fill="none"></path>';
                    cards += '                        <g fill="#ffffff">';
                    cards += '                            <path d="M28.25,75.33333v37.66667l84.75,56.5l84.75,-56.5v-37.66667l-84.75,56.5z"></path>';
                    cards += '                        </g>';
                    cards += '                    </g>';
                    cards += '                </svg>';
                    cards += '            </div>';
                    cards += '        </div>';

                    cards += '</div>';
                }
                document.getElementById('minhaListaFilmes').innerHTML = cards;


                btnCards();

            }
        }
    });
}