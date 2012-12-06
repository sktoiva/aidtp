define(["app/models/exercise"], function(exercise){

	describe("models/Exercise", function(){
		var ex;

		beforeEach(function(){
			ex = new exercise({sets: 3, reps: 5, weight: 100});
		});

		it("should require reps", function(){
			var test = new exercise({sets: 4, weight: 100});
			expect(test.validate()).toBe("Reps are required");
			expect(test.isValid()).toBe(false);
		});

		it("should require sets" ,function(){
			var test = new exercise({reps: 5, weight: 100});
			expect(test.validate()).toBe("Sets are required");
			expect(test.isValid()).toBe(false);
		});

		it("should require weight", function(){
			var test = new exercise({reps: 5, sets: 3});
			expect(test.validate()).toBe("Weight is required");
			expect(test.isValid()).toBe(false);
		});

		it("should calculate 1RM", function(){
			expect(ex.onerm).not.toBeNull();
			expect(ex.onerm).not.toBeUndefined(); 
			expect(ex.isValid()).toBe(true);
		});
	});
});