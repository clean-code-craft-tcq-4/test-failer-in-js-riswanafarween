const {expect} = require('chai')

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let i = 0;
    let j = 0;
    for (i = 0; i < majorColors.length; i++) {
        for (j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return i * j;
}

result = print_color_map();
expect(result).equals(25);
console.log('All is well (maybe!)');
