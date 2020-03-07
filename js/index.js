$(document).ready(function(){
    $(".nav-icon").click(function(){
        $("#mobile-menu").collapse('toggle');
        $("#mobile-menu").addClass("animated zoomIn");
    });
});