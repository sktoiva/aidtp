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
	
		//Calculates 1RM according to the formula by Epley: http://athletics.wikia.com/wiki/Epley_Formula
		calculateOneRm: function(){
			this.onerm = (reps * weight / 30) + weight ;
		}
	});

	return Exercise;
});