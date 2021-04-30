
window.onload= function(){
    fLocalComunicaServidor();
}

function fLocalComunicaServidor() {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/dashboard/dashboard.php",
        success: function (retorno) {
            if (retorno.funcao == "card") {
                    var result ='';
                    result += '<div class="close"> + </div>'
                    result += '<div class="trailer">'
                    result += '<iframe width="100%" height="300" src="'+retorno.trailer+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    result += '</div>'

                    result += '<div class="enredo" id="enredo">'
                    result += '<b class="enredo-titulo">' + retorno.titulo+ '</b>'
                    result += '<br> <hr> <br>'
                    result += 'Mesmo com o raciocínio lento, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de pesca de camarão, Forrest inspira a todos com seu otimismo. Mas a pessoa que Forrest mais ama pode ser a mais difícil de salvar: seu amor de infância, a doce e perturbada Jenny.'
                    result += '</div>'

                    result += '<div class="ficha-tecnica">'
                    result += '<font color="white"><i>Gênero: </i></font> Comédia dramática<br>'
                    result += '<font color="white">Direção:</font> Robert Zemeckis <br>'
                    result += '<font color="white"><i>Produção: </i></font> Wendy Finerman, Steve Tisch, Steve Starkey <br>'
                    result += '<font color="white"><i> Roteiro: </i></font>  Eric Roth<br>'
                    result += '<font color="white"><i>Baseado em: </i></font> Forrest Gump, de Winston Groom<br>'
                    result += '<font color="white"><i>Música: </i></font>  Alan Silvestri<br>'
                    result += '<font color="white"><i>Cinematografia:</i></font> Don Burgess<br>'
                    result += '<font color="white"><i>Edição: </i></font>  Arthur Schmidt <br>'
                    result += '<font color="white"><i>Companhia(s) produtora(s): </i></font>  The Tisch Company <br>'
                    result += '<font color="white"><i>Distribuição:</i</font>>Paramount Pictures <br>'
                    result += '</div>'

                    document.getElementById("cardPop").innerHTML = result;
            }
        }

    });

}

const fila = document.querySelector('.conteudo-carrossel');
const imagens = document.querySelectorAll('.imagens');

const flechaEsquerda = document.getElementById('flecha-esquerda');
const flechaDireita = document.getElementById('flecha-direita');

/* Rolagem - Flecha direita */
flechaDireita.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorAtivo = document.querySelector('.conteudo .ativo');
    if(indicadorAtivo.nextSibling){
        indicadorAtivo.nextSibling.classList.add('ativo');
        indicadorAtivo.classList.remove('ativo');
    }
});

//Select * from. Volta um objeto. Cria o card dentro (js).  
// Cria um document.ready chama ajax e php -> para assim o conteúdo do mysql vir. Fazer igual ele fez na aula de hoje 22/04 (onclick).

/* Rolagem - Flecha esquerda */
flechaEsquerda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorAtivo = document.querySelector('.conteudo .ativo');
    if(indicadorAtivo.previousSibling){
        indicadorAtivo.previousSibling.classList.add('ativo');
        indicadorAtivo.classList.remove('ativo');
    }
});

/* Paginação */
const numeroPaginas = Math.ceil(imagens.length / 5);
for(let i  = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('ativo');
    }

    document.querySelector('.conteudo').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.conteudo .ativo').classList.remove('ativo');
        e.target.classList.add('ativo');
    });
}

/* Hover */
imagens.forEach((imagem) => {
    imagem.addEventListener('mouseenter', (e) => {
        const elemento  = e.currentTarget;
        setTimeout(() => {
            imagens.forEach(imagens  => imagens.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);

        cardAberto();

    });
});

function cardAberto() {
    const espaco = document.getElementById("espaco");
    espaco.style.display = "block";
}

fila.addEventListener('mouseleave', () => {
    imagens.forEach(imagens  => imagens.classList.remove('hover'));
    cardFechado();
}); 


function cardFechado(){
    const espaco = document.getElementById("espaco");
    espaco.style.display = "none";
}




/* Modal Pop-up para botão */

document.getElementById('botao').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});
