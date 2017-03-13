showArrayValue();
		
function showArrayValue(){
	if(index < length){
		setTimeout(
			function(){
				
				if(index == 0){
					arrayString +=arr[index];
				}else{
					arrayString +=','+arr[index];
				}
				
				console.log(arrayString);
				index++;			
				showArrayValue();
			},1000
		)
		
	}
	

}
	