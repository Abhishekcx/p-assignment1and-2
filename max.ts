

	function largest(arr) {
		let i;
	

		let max = arr[0];

	
		for (i = 1; i < arr.length; i++) {
			if (arr[i] > max)
				max = arr[i];
		}
		
	return max;
}
	
	// Driver code
	let arr = [10, 324, 45, 90, 9808];
	console.log("Largest in given array is " + largest(arr));
	


