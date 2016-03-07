var main=function(){
    var w=$(window).width();
    //alert("window width is"+w);
    //alert("u r in js");
    $('.nav1 li:nth-child(2)').hover(function(){
        $(this).toggleClass('blue');
    });
    $('.nav1 li:nth-child(3)').hover(function(){
        $(this).toggleClass('gray');
    });
    $('.nav1 li:nth-child(4)').hover(function(){
        $(this).toggleClass('yellow');
    });
    $('.nav1 li:nth-child(5)').hover(function(){
        $(this).toggleClass('light_blue');
    });
    $('#hidlist1').hover(function(){
        $(this).toggleClass('blue');
    });
    $('#hidlist2').hover(function(){
        $(this).toggleClass('dark_color');
    });
    $('#hidlist3').hover(function(){
        $(this).toggleClass('dark_color');
    });
    $('.nav3 li').hover(function(){
        $(this).toggleClass('white');
    });
    if(w<800&&w>=700){
        $('#hidlist3').addClass('hidden');  
    }
    if(w<700&&w>=600){
        $('#hidlist3').addClass('hidden');  
        $('#hidlist2').addClass('hidden');  
    }
    if(w<600){  
        $('#hidlist3').addClass('hidden');  
        $('#hidlist2').addClass('hidden'); 
        $('#hidlist1').addClass('hidden');  
    }
    
    $(window).resize(function(){
        w=$(window).width();
        if(w<600){
            $('#hidlist1').addClass('hidden');  
        }
        if(w>=600){
            $('#hidlist1').removeClass('hidden');  
        }
       if(w<700){
           $('#hidlist2').addClass('hidden');  
       }
        if(w>=700){
            $('#hidlist2').removeClass('hidden');  
        }
        if(w<800&&w>700){
            $('#hidlist3').addClass('hidden');  
        }
        if(w>=800){  
            $('#hidlist3').removeClass('hidden');
         
        }
        if(w<1080){
            $('.leftNews4').show();
            $('.rightcontent').hide();
        }else{
            $('.leftNews4').hide();
            $('.rightcontent').show();
        }
    });
    //$('#hiddenElement').removeClass('hidden');
    $('#more').click(function(){
        
	/*	if($('#hiddenElement').hasClass('dropDown')){
			//$('#hiddenElement').removeClass('dropDown');
			$('#hiddenElement').show('slow');
		}else {
			$('#hiddenElement').addClass('dropDown');
			$('#hiddenElement').hide('slow');
		}*/
        //$('#hiddenElement').toggleClass('hidden',8000);
        $('#hiddenElement').slideToggle('slow');
        //$(this).hide();
	});
    
};
$(document).ready(main);