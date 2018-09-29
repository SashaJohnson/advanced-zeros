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
	
// getting list of possible values:    
	
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

var multipliers = calculate(base);
var finallist = [];

//building final list:

if (multipliers.length == 1) {
    finallist.push(getTempCount(number, multipliers[0]));
    } else {
        for (i = 1; i < multipliers.length; i++) {
            if (multipliers[i] % 2 != 0) {
                finallist.push(getTempCount(number, multipliers[i]))
                //console.log(multipliers[i]); <-- used for analysis
            }
        }
    }
    
    //sorting final list:
    
if (finallist.length == 1) {
    return finallist;
    } else {return finallist[1];}
    
}
