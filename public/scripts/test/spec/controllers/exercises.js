define(['spine/spine'
		, 'app/controllers/exercises'
		, 'app/models/exercise']
		, function(Spine
				   , ExercisesController
				   , ExerciseModel){
	//var exercisesController;

	beforeEach(function(){
		//exercisesController = new ExercisesController();

		//Stubbing Spines Local storage implementation for testing purposes
		Spine.Model.Local = {};
	});

	describe('controllers/Exercises', function(){
		xit("should show form for recording exercises", function(){
			ExercisesController.extend( { bind: jasmine.createSpy ("refresh") } );

		});

		xit("should create and save exercises", function(){
			var exerciseController = new ExercisesController;
			console.log(exerciseController.render);
			expect(ExerciseModel.bind).toHaveBeenCalledWith("refresh", exerciseController.proxy(exerciseController.render));
		});
	});
});