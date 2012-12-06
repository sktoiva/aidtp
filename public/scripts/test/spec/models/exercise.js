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

		it("should calculate 1RM", function(){
			expect(ex.onerm).not.toBeNull();
			expect(ex.onerm).not.toBeUndefined(); 
			expect(ex.isValid()).toBe(true);
			expect(ex.onerm).toEqual(117);

			//create new exercise record, and test if the 1RM is calculated correctly
			//Two random numbers for calculating weight: 50..149, sets: 1..5
			var weight = (Math.floor(Math.random()*100)) + 50;
			var reps = (Math.ceil(Math.random()*5));

			var ex2 = new Exercise({seps: 3, reps: reps, weight: weight});
			expect(ex2.onerm).toEqual(Math.floor((weight * reps)/30 + weight));
		});
	});
});