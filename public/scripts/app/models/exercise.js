define([ 'spine/spine'
	   , 'spine/local'
	   , 'app/models/exercise_types']
	   , function(Spine, Local, ExerciseTypes) {

	var Exercise = Spine.Model.sub();
	Exercise.configure("Exercise", "sets", "reps", "weight", "date", "type");
	Exercise.extend(Spine.Model.Local);

	Exercise.include({
		validate: function(){
			if( !this.sets ){
				return "Sets are required";
			}else if( !this.reps ){
				return "Reps are required";
			}else if( !this.weight ){
				return "Weight is required";
			}else if( !this.type ){
				return "Type is required";
			}else if( ExerciseTypes.types.indexOf(this.type) == -1 ){
				return "Invalid type";
			}else if( !this.date ){
				return "Date is required"
			}
			//should check if date is valid
		},

		getMonth: function(){
			return Exercise.parseMonth(this.date);
		}
	});

	Exercise.extend({
		//Calculates 1RM (in kg) according to the formula by Epley: http://athletics.wikia.com/wiki/Epley_Formula
		//Rounds to closest multiple of 1.25 kg 
		calculateOneRm: function(exercise){
			return 1.25*(Math.round(((exercise.reps * exercise.weight / 30) + exercise.weight)/1.25));
		}

		//parses month from date and returns it as int
		, parseMonth: function(date){
			var dateArr = date.split('.')
			return parseInt(dateArr[1]);
		}

		, fetchAllByDate: function(date){
			return Exercise.select(function(exercise){
				return date === exercise.date; 
			});
		}
	});


	return Exercise;

});