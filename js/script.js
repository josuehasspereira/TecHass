//Add e Remov de Classe 

$(document).ready(function(){
    $(".nav-item .nav-link").on("click", function(){
        $(".nav-item .nav-link").removeClass("line");
        $(this).addClass("line");
    });
})

$().on('mouseover', function(){
    
})