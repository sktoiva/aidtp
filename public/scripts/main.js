require.config({
	shim: {
		'spine/spine': {
			exports: 'Spine'
		}
		, 'jquery': {
			exports: '$'
		}
        , 'spine/manager':{
            deps: ['spine/spine']
        }
        , 'spine/local':{
            deps: ['spine/spine']
        }

	}
});

require([ 'jquery'
        , 'app/controllers/AidtpApp'	]
	    , function($, AidtpApp){
	    
        console.log("Application initialized.");

        $(document).ready(function(){
            new AidtpApp({el: $(".main")}).render();
        });

});