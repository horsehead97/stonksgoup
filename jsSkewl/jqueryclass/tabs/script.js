(function(){
    'use strict';
    $('#tabs>ul>li>a').click(function(){
		$('#tabs>ul>li>a').css({background:'#a2a2a2',color:'#cecece'});
		$(this).css({background:'#eaeaea',color:'#333'});
		const thisTab=$(this).attr('href');
		//alert(thisTab);
		$('#tabs>div:visible').fadeOut(500,function(){
			$(thisTab).fadeIn(500);
		});
	});







})();
