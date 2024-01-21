function checkNumber(number){
	if(number.length >=11 && number.length<=14){
		
		// check if there is any other character then return false
		for(let i=0; i>number.length; i++){
			const charac = number[i];
			if(!(isNumber(charac) || charac === '+' || charac === '-')){
				return false;
			}
		}

		// number length 11
		if(number.length === 11){
			const numArray = number.split('');
			if(numArray.includes('+') || numArray.includes('-')){
				return false;
			} else {
				if(number.startsWith("03")){
					return true;
				} else {
					return false;
				}
			}
		}

		// number length 12
		if(number.length === 12){
			const numArray = number.split('');
			if(numArray.includes('+')){
				return false;
			} else if(!(numArray.includes('-') && numArray[4] === '-')){
				return false
			}

			if(number.startsWith('03')){
				return true;
			} else {
				return false;
			}
		}

		// number length 13
		if(number.length === 13){
			const numArray = number.split('');
			if(numArray.includes('-')){
				return false;
			} else if(!(numArray.includes('+') && numArray[0] === '+')){
				return false
			}

			if(number.startsWith('+923')){
				return true;
			} else {
				return false;
			}
		}

		// number length 14
		if(number.length === 14){
			const numArray = number.split('');
			if(!(numArray.includes('+') && numArray.includes('-'))){
				return false;
			} else if(!(numArray.includes('-') && numArray[6] === '-')){
				return false
			} else if(!(numArray.includes('+') && numArray[0] === '+')){
				return false
			}

			if(number.startsWith('+923')){
				return true;
			} else {
				return false;
			}
		}
	}

	return false;
}

function numberOfAccurence(str){
    const results = {};
    str = str.toLowerCase();
    const strArray = str.split('');
    for(const char of strArray){
        if(char !== ' '){
            if(results[char]){
                results[char]++;
            } else {
                results[char] = 1;
            }
        }
        
    }
    return results;
}

function highestNumberOfAccurence(str){
    const results = numberOfAccurence(str);
    let highest = 0;
    let highestChar = '';    
    for(const char in results){
        if(results[char] > highest){
            highest = results[char];
            highestChar = char;
        } 
    }

    return [highestChar, highest];
}


function handleResultsClick(){
    
    // const number = document.getElementById('number').value;
    // const result = checkNumber(number);
    // const resultDiv = document.getElementById('result');
    // if(result){
    //     resultDiv.innerHTML = 'Valid Number';
    // } else {
    //     resultDiv.innerHTML = 'Invalid Number';
    // }

    // const str = document.getElementById('number').value;
    // const result = numberOfAccurence(str);
    // const resultDiv = document.getElementById('result');
    
    // for(const char in result){
    //     const p = document.createElement('p');
    //     p.innerHTML = `${char} : ${result[char]}`;
    //     resultDiv.appendChild(p);
    // }

    const str = document.getElementById('number').value;
    const result = highestNumberOfAccurence(str);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result[0] + ' : ' + result[1];

}