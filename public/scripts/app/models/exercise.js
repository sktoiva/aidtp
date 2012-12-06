define(['spine/spine'], function(Spine) {
	console.log(Spine);
	var Exercise = Spine.Model.sub();
	Exercise.configure("sets, reps, weight");
});