define(["app/models/exercise"], function(Exercise){
	describe("models/Exercise", function(){
		it("should calculate 1RM", function(){
			var exercise = new Exercise();
			expect(exercise.onerm).not.toBeNull();
			expect(exercise.onerm).not.toBeUndefined(); 
		});
	});
});