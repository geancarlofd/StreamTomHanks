
function btnCards() {
    $(".btn-info").click(function () {
        var id_filme = $(this).attr("id_filmes");
        console.log(id_filme);
        document.querySelector('.bg-modal').style.display = 'flex';
        return false;
    });

    document.querySelector('.close').onclick = function () {
        document.querySelector('.bg-modal').style.display = 'none';
        return false;
    };
}