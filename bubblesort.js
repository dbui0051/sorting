function bubbleSort(array) {
	var endLength = 1;

	if(array.length === 0) return array;

	do{
		var looped = 0;
		for(let i = 0; i < array.length -endLength; i++){
			if(array[i] > array[i+1]){
				swapCount();
				looped++;
				[array[i], array[i+1]] = [array[i+1], array[i]]
			}
		}
		endLength++;
	} while(looped);

	return array;
}



function swapCount(){
	return;
}
