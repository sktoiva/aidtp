define([ 'spine/spine'
       , 'app/models/exercise'
       , 'jquery.tmpl.min' ],
        function(Spine, ExerciseModel){

    var ExercisesTable = Spine.Controller.sub({
        init: function(){
            ExerciseModel.bind("refresh change", this.proxy(this.render));
            this.render();
        }

        , template: function(exercises){
            return $("#exercise_table_template").tmpl(exercises);
        }

        , fetch: function(){
            var exercises = ExerciseModel.fetchAllByMonth(12);
            return ExerciseModel.combineExercisesByDate(exercises);
        }

        , render: function(){
            console.log("Rendering ExercisesTable");
            this.html(this.template({'exercises': this.fetch()}));
        }
    });

    return ExercisesTable;
});