//Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
};

function printColorMessage(color: Color): void {
    switch (color) {
        case Color.Red:
            console.log("You Selected Red");
            break;
        case Color.Blue:
            console.log("You Selected Blue");
            break;
        case Color.Green:
            console.log("You Selected Green");
            break;
        default:
            console.log('Unknown Color');
    }
};

const selectedColor: Color = Color.Red;
printColorMessage(selectedColor);