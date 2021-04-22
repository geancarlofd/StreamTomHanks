
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
imagens.forEach((imagens) => {
    peliculas.addEventListener('moussenter', (e) => {
        const elemento  = e.currentTarget;
        setTimeout(() => {
            imagens.forEach(imagens  => imagens.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    imagens.forEach(imagens  => imagens.classList.remove('hover'));
});