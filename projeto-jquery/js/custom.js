// intancia jquery e evita conflitos //
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let items = $('.featured-item') // class

    let destaques = $('#featured') // id

    console.log(titulos.first());

})