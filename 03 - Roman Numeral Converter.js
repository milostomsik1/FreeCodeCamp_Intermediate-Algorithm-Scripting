function convertToRoman(num) {
	var romanArr;
	romanArr = num.toString().split("").reverse();

	romanArr.forEach(function(e, i) {
		switch (i) {
			case 0:
				switch (Number(e)) {
					case 0:
						romanArr[i] = "";
						break;
					case 1:
						romanArr[i] = "I";
						break;
					case 2:
						romanArr[i] = "II";
						break;
					case 3:
						romanArr[i] = "III";
						break;
					case 4:
						romanArr[i] = "IV";
						break;
					case 5:
						romanArr[i] = "V";
						break;
					case 6:
						romanArr[i] = "VI";
						break;
					case 7:
						romanArr[i] = "VII";
						break;
					case 8:
						romanArr[i] = "VIII";
						break;
					case 9:
						romanArr[i] = "IX";
						break;
				}
				break;
			case 1:
				switch (Number(e)) {
					case 0:
						romanArr[i] = "";
						break;
					case 1:
						romanArr[i] = "X";
						break;
					case 2:
						romanArr[i] = "XX";
						break;
					case 3:
						romanArr[i] = "XXX";
						break;
					case 4:
						romanArr[i] = "XL";
						break;
					case 5:
						romanArr[i] = "L";
						break;
					case 6:
						romanArr[i] = "LX";
						break;
					case 7:
						romanArr[i] = "LXX";
						break;
					case 8:
						romanArr[i] = "LXXX";
						break;
					case 9:
						romanArr[i] = "XC";
						break;
				}
				break;
			case 2:
				switch (Number(e)) {
					case 0:
						romanArr[i] = "";
						break;
					case 1:
						romanArr[i] = "C";
						break;
					case 2:
						romanArr[i] = "CC";
						break;
					case 3:
						romanArr[i] = "CCC";
						break;
					case 4:
						romanArr[i] = "CD";
						break;
					case 5:
						romanArr[i] = "D";
						break;
					case 6:
						romanArr[i] = "DC";
						break;
					case 7:
						romanArr[i] = "DCC";
						break;
					case 8:
						romanArr[i] = "DCCC";
						break;
					case 9:
						romanArr[i] = "CM";
						break;
				}
				break;
			case 3:
				for(var x = 0, temp = ""; x < Number(e); x++) {
					temp += "M";
				}
				romanArr[i] = temp;
				break;
		}
	});
	console.log(num);
	console.log(romanArr.reverse().join(""));
}

convertToRoman(2362);
