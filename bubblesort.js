function bubbleSort(array) { // [8, 6, 10]
	if(array.length === 0) return array;
	do{
		var looped = 0;
		var endLength = 1;

		for(let i = 0; i < array.length -endLength; i++){
			if(array[i] > array[i+1]){
				swapCount();
				looped++;
				var tempNum = array[i];
				array[i] = array[i + 1];
				array[i + 1] = tempNum;
			}
		}
		endLength++;
	} while(looped);

	return array;
}

function swapCount(){
	return;
}