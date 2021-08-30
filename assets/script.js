// First, tell us your name
let yourName = "Jack Roehrig" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb++;
    total++;
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = total;
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0) {
        gb--;
        total--;
    }
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = total;
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc++;
    total++;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = total;
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc > 0) {
        cc--;
        total--;
    }
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = total;
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++;
    total++;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = total;
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar > 0) {
        sugar--;
        total--;
    }
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = total;
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons