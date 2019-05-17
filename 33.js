var arr = [], count = 0, element;
while (element = prompt ("Vvedite chislovoi element masiva")) {
    arr.push(element);
    count++;
}
alert("Dlya masiva " + arr + " srednee arifmiticheskoe  " + average(arr));
 
function average(arr) {
    var
        x, correctFactor = 0,
        sum = 0
    ;
    for (x = 0; x < arr.length; x++) {
        arr[x] = +arr[x];
        if (!isNaN(arr[x])) {
            sum += arr[x];
        } else {
            correctFactor++;
        }
		if x > 0;
		{
		}
		else {
			
		}
    }
    return (sum / (arr.length - correctFactor)).toFixed(2);
}