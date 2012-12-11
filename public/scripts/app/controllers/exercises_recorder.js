define([ 'jquery'
       , 'spine/spine'
       , '../models/exercise'
       , '../models/exercise_types'
       , 'bootstrap.min'
       , 'bootstrap-datepicker'
       , 'jquery.tmpl.min']

       , function(  $
                  , Spine
                  , ExerciseModel
                  , ExerciseTypes){

        var ExercisesRecorder = Spine.Controller.sub({
            events: {
                  "submit form.record_exercise" : "create"
                , "changeDate #datepicker": "updateDate"
            }

            , render: function(){
                console.log("Rendering ExercisesRecorder");
                console.log(ExerciseModel.add);
                this.template();
            }

            , template: function(){
                //add a datepicker
                $("#datepicker").attr('value', this.parseDateString(new Date()));
                this.append($("#datepicker").datepicker());

                for(var i = 0; i < ExerciseTypes.types.length; i++){
                    var type = ExerciseTypes.types[i];
                    this.append($('#exercise_record_template').tmpl({ "name": ExerciseTypes.getName(type)
                                                                    , "type": type 
                                                                    , "date": this.parseDateString(new Date())}));
                }
            }

            , updateDate: function(e){
                console.log(e);
                $("#datepicker").datepicker('hide');
                $("input[name=date]").attr('value', this.parseDateString(e.date));
            }

            , create: function(e){
                console.log("Saving exercise")
                e.preventDefault();
                var ex = ExerciseModel.fromForm(e.target);
                ex.save();    
            }

            , parseDateString: function(date){
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                return dateString = day + '.' + month + '.' + year;
            }
        });

    return ExercisesRecorder;
});