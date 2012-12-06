define(['spine/spine']
	    , function(Spine) {
	var Exercise = Spine.Model.sub();
	Exercise.configure("Exercise", "sets", "reps", "weight", "onerm");

	Exercise.include({
		validate: function(){
			if( !this.sets ){
				return "Sets are required"
			}else if( !this.reps ){
				return "Reps are required"
			}else if( !this.weight ){
				return "Weight is required"
			}
		},
	
		calculateOneRm: function(){
			this.onerm = sets * weight / 30 + weight ;
		}
	});

	return Exercise;
});