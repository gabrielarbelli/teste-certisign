$(window).ready(function(){
    lightBoxCenter(1);
    lightBoxOpen(1);

    $('.dropdown select').change( function(){
        var id = $($(this).parents("div")).attr('id');
        var selected = $("#"+id+" select option:selected");
        var value = "";
        if(selected.val() != 0 ){
            if(selected.text().length < 28){
                value = selected.text();
            }else{
                value = truncar(selected.text(),28);
            }
        }
        if(selected.val() == '' ){
            value = '<< Selecione >>';
        }
        $("#"+id+" label").html(value);
    });
    
});

$(window).resize(function(){
    lightBoxCenter(1);
});

function lightBoxCenter(id){
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    
    var altura = $('#light1').height();
    var largura = $('#light1').width();
    
    var lef = (windowWidth - largura)/2;
    var alt = (windowHeight - altura)/2;
    
    $('#light1').css({
        "top":alt,
        "left":lef
    });
}

function lightBoxOpen(id){
    lightBoxCenter(id);
    
    $('#fade'+id).show();
    $('#light'+id).show();
}

function lightBoxClosed(id){
    document.getElementById('light'+id).style.display='none';
    document.getElementById('fade'+id).style.display='none';
}

function ativaMenu(){
    $('.menuTopo').toggleClass('aberto');
}