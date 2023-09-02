$(document).ready(function() {
    $('#btnCancelar').click(function() {
        console.log('Botão Cancelar clicado.');
    });
    $('#btnCancelar').click(function() {
        $('form').slideUp();
    });

    $("#btnNovaImagem").click(function() {
        $('form').slideDown();
    })

    $("form").on("submit", function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>').hide();
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_black" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereco-imagem-nova').val('')

    })
})

