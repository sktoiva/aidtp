// Am I doing the program? App

define([ 'spine/spine'
       , 'app/controllers/exercises_recorder'
       , 'app/controllers/exercises_table'
       , 'app/models/exercise'
       ], function( Spine
                  , ExercisesRecorder
                  , ExercisesTable
                  , Exercise){

    var AidtpApp = Spine.Controller.sub({
        init: function(){

        }

        , elements: {
              "#exercise_recorder": "recorder"
            , "#exercise_table": "table"
            , "#exercise_charts": "charts"
        }

        , render: function(){
            new ExercisesRecorder({el: "#exercise_recorder"}).render();
            new ExercisesTable({el: "tbody"});

            //Fetch all exercises from local storage
            Exercise.fetch();
        }
    });

    return AidtpApp;
});