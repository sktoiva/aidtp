define(["app/models/exercise"], function(Exercise){

	describe("models/Exercise", function(){
		var ex;

		beforeEach(function(){
			ex = new Exercise({sets: 3, reps: 5, weight: 100});
		});

		it("should require reps", function(){
			var test = new Exercise({sets: 4, weight: 100});
			expect(test.validate()).toBe("Reps are required");
			expect(test.isValid()).toBe(false);
		});

		it("should require sets" ,function(){
			var test = new Exercise({reps: 5, weight: 100});
			expect(test.validate()).toBe("Sets are required");
			expect(test.isValid()).toBe(false);
		});

		it("should require weight", function(){
			var test = new Exercise({reps: 5, sets: 3});
			expect(test.validate()).toBe("Weight is required");
			expect(test.isValid()).toBe(false);
		});

		it("should calculate 1RM according to Epley formula", function(){
			//should round values to multiples of 1.25 to ease use in gym (1.25 minimum weights)
			expect(Exercise.calculateOneRm(ex)).toEqual(116.25);
			expect(Exercise.calculateOneRm(new Exercise({reps: 5, sets: 3, weight: 120}))).toEqual(140);
		});
	});
});