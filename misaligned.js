const {expect} = require('chai')

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let i = 0;
    let j = 0;
    let longestStringLength = getLongestString(majorColors);
    for (i = 0; i < majorColors.length; i++) {
        for (j = 0; j < minorColors.length; j++) {
            if (i * 5 + j+1 < 10) {
                console.log(`${i * 5 + j+1} | ${majorColors[i].padEnd(longestStringLength+1)}| ${minorColors[j]}`);
            } else {
                console.log(`${i * 5 + j+1}| ${majorColors[i].padEnd(longestStringLength)} | ${minorColors[j]}`);
            } 
        }
    }
    return i * j;
}
function getLongestString(majorColors) {
    let longestString = "";
    for (i = 0; i < majorColors.length; i++) {
        if (longestString.length <= majorColors[i].length) {
            longestString = majorColors[i];
        }
    }
    return longestString.length;
}

result = print_color_map();
expect(result).equals(25);
console.log('All is well (maybe!)');
