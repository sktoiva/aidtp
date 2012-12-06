define(['spine/spine'
	   , '../models/exercise'
	   , 'jquery.tmpl.min']
	   
	   , function(Spine
	   			  , Exercise){

	var Exercises = Spine.Controller.sub({
		init: function(){
			console.log(this);
			Exercise.bind("fetch", this.proxy(this.render));
			Exercise.fetch();
		},

		events: {
			"submit form#record_exercise" : "record"
		},

		record: function(e){
			e.preventDefault();
			console.log("Recording!");
		},
		render: function(){
			console.log("Trying to render");
			this.html($("#exerciseTemplate").tmpl());
		}
		
	});

	return Exercises;
});