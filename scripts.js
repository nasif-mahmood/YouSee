$(document).ready(function() {
    var x = $('.dropdown').width();
    console.log(x);
    $('.dropdown-content').css('width', x);
})