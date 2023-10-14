// Adicione o JavaScript personalizado para ativar o dropdown no evento hover.
  $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').addClass('show');
  }, function() {
      $(this).find('.dropdown-menu').removeClass('show');
  });
