module.exports = function toReadable (number) {
	let ed = "";
	let teen = "";
	let des = "";
	let cent = "";

	// 1-10 start
	if (number < 10) {
  switch (number) {
  	case 0 : 
  	ed = "zero";
  	break;
  	case 1 : 
  	ed = "one";
  	break;
  	case 2 : 
  	ed = "two";
  	break;
  	case 3 : 
  	ed = "three";
  	break;
  	case 4 : 
  	ed = "four";
  	break;
  	case 5 : 
  	ed = "five";
  	break;
  	case 6 : 
  	ed = "six";
  	break;
  	case 7 : 
  	ed = "seven";
  	break;
  	case 8 : 
  	ed = "eight";
  	break;
  	case 9 : 
  	ed = "nine";
  	break;
  	

	  }
	  return ed;
	}
// 1-10 end


// 10-20 start
	if (number >= 10 && number < 20) {
		switch (number) {
	case 10 : 
  	teen = "ten";
  	break;
  	case 11 : 
  	teen = "eleven";
  	break;
  	case 12 : 
  	teen = "twelve";
  	break;
  	case 13 : 
  	teen = "thirteen";
  	break;
  	case 14 : 
  	teen = "fourteen";
  	break;
  	case 15 : 
  	teen = "fifteen";
  	break;
  	case 16 : 
  	teen = "sixteen";
  	break;
  	case 17 : 
  	teen = "seventeen";
  	break;
  	case 18 : 
  	teen = "eighteen";
  	break;
  	case 19 : 
  	teen = "nineteen";
  	break;
  	 
	}
	return teen;
}
// 10-20 end


if (number >=20 && number <100) {
	switch (Math.floor(number/10)) {
		case 2 :
		des = "twenty";
  		break;
  		case 3 :
		des = "thirty";
  		break;
  		case 4 :
		des = "forty";
  		break;
  		case 5 :
		des = "fifty";
  		break;
  		case 6 :
		des = "sixty";
  		break;
  		case 7 :
		des = "seventy";
  		break;
  		case 8 :
		des = "eighty";
  		break;
  		case 9 :
		des = "ninety";
  		break;
  		
	}
	
   if (number%10) {
   	switch (number%10) {
  	
  	case 1 : 
  	ed = "one";
  	break;
  	case 2 : 
  	ed = "two";
  	break;
  	case 3 : 
  	ed = "three";
  	break;
  	case 4 : 
  	ed = "four";
  	break;
  	case 5 : 
  	ed = "five";
  	break;
  	case 6 : 
  	ed = "six";
  	break;
  	case 7 : 
  	ed = "seven";
  	break;
  	case 8 : 
  	ed = "eight";
  	break;
  	case 9 : 
  	ed = "nine";
  	break;
	  }
	 
   	 des += " " + ed;
   }
   return des;
}


if (number > 99) {
	
	switch (Math.floor(number/100)) {
		case 1 : 
	  	cent = "one";
	  	break;
	  	case 2 : 
	  	cent = "two";
	  	break;
	  	case 3 : 
	  	cent = "three";
	  	break;
	  	case 4 : 
	  	cent = "four";
	  	break;
	  	case 5 : 
	  	cent = "five";
	  	break;
	  	case 6 : 
	  	cent = "six";
	  	break;
	  	case 7 : 
	  	cent = "seven";
	  	break;
	  	case 8 : 
	  	cent = "eight";
	  	break;
	  	case 9 : 
	  	cent = "nine";
	  	break;
		  }
	cent += " hundred";

	if (!number%100) {
		 return cent;
	}
	else if (number%100 < 10 ) {
			switch (number%100) { //вычисляем остаток  в десятках
				case 1 : 
			  	ed = "one";
			  	break;
			  	case 2 : 
			  	ed = "two";
			  	break;
			  	case 3 : 
			  	ed = "three";
			  	break;
			  	case 4 : 
			  	ed = "four";
			  	break;
			  	case 5 : 
			  	ed = "five";
			  	break;
			  	case 6 : 
			  	ed = "six";
			  	break;
			  	case 7 : 
			  	ed = "seven";
			  	break;
			  	case 8 : 
			  	ed = "eight";
			  	break;
			  	case 9 : 
			  	ed = "nine";
			  	break;
			  }
			  cent += " " +ed;
	}
	else if (number%100 < 20) {
			switch (number%100) {
				case 10 : 
			  	teen = "ten";
			  	break;
			  	case 11 : 
			  	teen = "eleven";
			  	break;
			  	case 12 : 
			  	teen = "twelve";
			  	break;
			  	case 13 : 
			  	teen = "thirteen";
			  	break;
			  	case 14 : 
			  	teen = "fourteen";
			  	break;
			  	case 15 : 
			  	teen = "fifteen";
			  	break;
			  	case 16 : 
			  	teen = "sixteen";
			  	break;
			  	case 17 : 
			  	teen = "seventeen";
			  	break;
			  	case 18 : 
			  	teen = "eighteen";
			  	break;
			  	case 19 : 
			  	teen = "nineteen";
			  	break;
			}
			cent += " " + teen;
	}
	else if (number%100 >= 20) {
			switch (Math.floor((number%100)/10)) {
				case 2 :
				des = "twenty";
		  		break;
		  		case 3 :
				des = "thirty";
		  		break;
		  		case 4 :
				des = "forty";
		  		break;
		  		case 5 :
				des = "fifty";
		  		break;
		  		case 6 :
				des = "sixty";
		  		break;
		  		case 7 :
				des = "seventy";
		  		break;
		  		case 8 :
				des = "eighty";
		  		break;
		  		case 9 :
				des = "ninety";
		  		break;
		}
		cent += " " + des;


		if (number%10) {
			switch (number%10) { 
				case 1 : 
			  	ed = "one";
			  	break;
			  	case 2 : 
			  	ed = "two";
			  	break;
			  	case 3 : 
			  	ed = "three";
			  	break;
			  	case 4 : 
			  	ed = "four";
			  	break;
			  	case 5 : 
			  	ed = "five";
			  	break;
			  	case 6 : 
			  	ed = "six";
			  	break;
			  	case 7 : 
			  	ed = "seven";
			  	break;
			  	case 8 : 
			  	ed = "eight";
			  	break;
			  	case 9 : 
			  	ed = "nine";
			  	break;
			  }
			  cent += " " +ed;
		}
	}

		return cent.trim();
	}

		
}
	
  		
	












