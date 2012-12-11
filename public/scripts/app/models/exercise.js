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

        , fetchAllByMonth: function(month){
            return Exercise.select(function(exercise){
                return month === exercise.getMonth(); 
            });
        }

        , compare: function(exA, exB){
            if(a.date > b.date){
                return -1;
            }else if(a.date < b.date){
                return 1
            }else{
                return 0;
            }
        }

        //Combines exercises by date in an exercise array
        //Data format: [{date: '26.12.2012', exercises: [{type: "squat", reps: 5, sets: 3, weight: 150}]}]
        , combineExercisesByDate: function(exercises){ 
      
            if(!exercises || exercises.length === 0){
                return []; //return an empty array if called with undefined or empty array
            }

            //sort exercises on descending order (newest first)
            exercises.sort(Exercise.compare);
            
            var currDate = exercises[0].date; //take first date for comparison in for loop
            var entries = [{date: currDate, entries: []}]; //create entries for storing 

            var entriesIdx = 0;
            for(var i = 0; i < exercises.length; i++){

                //take the first logEntry
                var logEntry = {  type: exercises[i].type
                                , reps: exercises[i].reps
                                , sets: exercises[i].sets
                                , weight: exercises[i].weight };

                //if date is the same as currentdate, no need to create new date entry to entries, just push the data to current index
                if(currDate === exercises[i].date){
                    entries[entriesIdx].entries.push({ exercise: logEntry })
    
                }else{
                    currDate = exercises[i].date;
                    entries[++entriesIdx] = {date: currDate, entries: [{ exercise: logEntry }]};
                
                }
            }

            return entries;
        }
    
    });


    return Exercise;

});