define([], function(){
    var ExerciseTypes = { 
         types: ["squat", "opress", "bench", "pclean", "deadlift"]

        , getName: function(type){
            switch(type){
                case "squat":
                    return "Squat";
                case "opress":
                    return "Overhead press";
                case "bench":
                    return "Bench press";
                case "pclean":
                    return "Power clean";
                case "deadlift":
                    return "Deadlift";
                default:
                    throw "Not a valid type.";
            }
        } 

     };

    return ExerciseTypes;
});
