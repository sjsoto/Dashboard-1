
$(function(){
    $('#header').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop()>0)
    {
        if($('#header').data('size')=='big')
        {
            $('#header').data('size','small');
            $('#header').stop().animate({height:'60px'},{duration:600,queue:false});
			$('#dark').stop().animate({width:'150px'},600);
			$('#settingsicon').stop().animate({right:'170px'},600);
			$('#refreshicon').stop().animate({right:'210px'},600);
			$('#time').animate({fontSize:"45"}, {duration:600,queue:false});
			$('#time').animate({top:"-10px"},{duration:600,queue:false});
			$("#date").stop().fadeOut(200);
			
        }
    }
    else
    {
        if($('#header').data('size') == 'small')
        {
            $('#header').data('size','big');
            $('#header').stop().animate({height:'180px'},{duration:600,queue:false});
			$('#dark').stop().animate({width:'340px'},600);
			$('#settingsicon').stop().animate({right:'360px'},600);
			$('#refreshicon').stop().animate({right:'400px'},600);
			$('#time').animate({fontSize:"112"},{duration:600,queue:false});
			$('#time').animate({top:"-20px"},{duration:600,queue:false});
			$("#date").stop().delay(400).fadeIn(200);
        }  
    }
});


$(document).ready(function() {
    var colors = ["#ffd600","#64dd17","#ff6d00","#03a9f4","#e51c23","#aa00ff","#39e9be","#304ffe","#c6ff00","#ff3d00","#00e5ff","#795548","651fff","#37474f"];
    var selectedColor = colors[Math.floor(Math.random()*colors.length)];
    var header = $("div#header");
    header.css("background-color", selectedColor);
	var totalCount = 192;
	var two = Math.ceil( Math.random() * totalCount );
	document.getElementById('bottom').style.backgroundImage="url(images/backgrounds/"+two+".jpg)";
});