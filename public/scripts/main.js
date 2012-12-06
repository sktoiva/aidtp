require.config({
	shim: {
		'spine/spine': {
			exports: 'Spine'
		}
		, 'jquery': {
			exports: '$'
		}

	}
});

require(['jquery'
	    , 'spine/spine'
	    , 'app/controllers/exercises']
	    , function($
	    		, Spine
	    		, Exercises){

	    console.log("Application initialized.");

	    var Exercise = new Exercises({el:$('#body')});

});