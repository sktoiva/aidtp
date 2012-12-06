define(['spine/spine']
	    , function(Spine) {
	var Exercise = Spine.Model.sub();
	Exercise.configure("sets, reps, weight");

	return Exercise;
});