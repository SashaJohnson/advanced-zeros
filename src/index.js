
module.exports = function getZerosCount(number, base) {

//getting multipliers from base:
  
function calculate(base) {
	var answer = [];
	for (var i = 1; i <= base; i++) {
		if (base % i == 0) {
				answer.push(i);
		}
	}
	return(answer);
}
	
	
function getTempCount(number, passedMultiplier) {
  
  var divider = passedMultiplier;
  var pieces = [];
  
  while (number / divider > 1) {
      
      fragment = number / divider;
      divider = divider * passedMultiplier;
      pieces.push(Math.floor(fragment));
  
}

var sum = 0;
for (var i = 0; i < pieces.length; i++) {
 
    sum = sum + pieces[i];
}
	return sum;

}
  
/////////////////////
	
var multipliers = calculate(base);

var finallist = [];

for (i = 1; i < multipliers.length -1; i++) {
	
	finallist.push(getTempCount(number, multipliers[i]))
}

	console.log(finallist);
}