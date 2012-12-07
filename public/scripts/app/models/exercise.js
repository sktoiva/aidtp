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
	});

	Exercise.extend({
		//Calculates 1RM (in kg) according to the formula by Epley: http://athletics.wikia.com/wiki/Epley_Formula
		//Rounds to closest multiple of 1.25 kg 
		calculateOneRm: function(exercise){
			return 1.25*(Math.round(((exercise.reps * exercise.weight / 30) + exercise.weight)/1.25)) ;
		}
	});

	return Exercise;
});