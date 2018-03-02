var pContainerHeight = $('.bird-box').height();

$(window).scroll(function () {

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    // efeito para diminuir as áreas
    $('.logo').css({
      'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.back-bird').css({
      'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.fore-bird').css({
      'transform': 'translate(0px, -' + wScroll / 40 + '%)'
    });
  }


  // efeito para as miniaturas de imagens
  // o efeito começa a executar o efeito quando quando estamos na metade da página
  if (wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function (i) {
      setTimeout(function () {
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0, 14))) - 700);
    });
  }

  // Holofote vai dando opacidade ao aparecer na tela do zero ate o máximo
  if (wScroll > $('.large-window').offset().top - $(window).height()) {

    $('.large-window').css({
      'background-position': 'center ' + (wScroll -
        $('.large-window').offset().top) + 'px'
    });

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5)

    $('.window-tint').css({
      'opacity': opacity
    });
  }

  // Elementos Flutuantes chegou em 350 da altura
  if (wScroll > $('.blog-posts').offset().top - $(window).height()) {

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350)).toFixed();

    $('.post-1').css({
      'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'
    });

    $('.post-3').css({
      'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'
    });

  }

}); //geral