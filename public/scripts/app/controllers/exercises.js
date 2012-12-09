define([ 'spine/spine'
       , 'spine/manager'
       , 'app/controllers/exercises_recorder']
       , function(  Spine
                  , Manager
                  , ExercisesRecorder ){
   
    var Exercises = Spine.Stack.sub({
        controllers: {
            edit: ExercisesRecorder
        }
    });

    return Exercises;
});