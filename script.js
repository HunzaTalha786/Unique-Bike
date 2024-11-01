const sizeButtons = document.querySelectorAll('.size-btn');
const colorRadios = document.querySelectorAll('input[name="color"]');
const resultDiv = document.getElementById('result');
const priceDisplay = document.getElementById('price');
const weightDisplay = document.getElementById('weight');

let selectedSize = '';
let selectedColor = '';

// Add event listeners to size buttons
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedSize = button.textContent; // Get the selected size
    });
});

// Add event listeners to color radio buttons
colorRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        selectedColor = radio.value; // Get the selected color
    });
});

// Add event listener for the cart button
document.getElementById('cart-btn').addEventListener('click', () => {
    let price = '';
    let weight = '';

    // Determine price and weight based on size and color
    if (selectedSize === 'SMALL') {
        price = '$2000';
        weight = '12.00kg';
    } else if (selectedSize === 'MEDIUM') {
        price = '$2500';
        weight = '14.18kg';
    } else if (selectedSize === 'LARGE') {
        price = '$3000';
        weight = '16.00kg';
    }

    // Show results based on color selection
    if (selectedColor === 'white') {
        price = price; // Same for all colors for simplicity
    } else if (selectedColor === 'grey') {
        price = price; 
    } else if (selectedColor === 'red') {
        price = price; 
    }

    // Display results
    priceDisplay.textContent = price;
    weightDisplay.textContent = weight;
    resultDiv.style.display = 'block'; 
});


// customize slider

const slides = document.querySelector('.slides');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + 1) % (totalSlides - 2); // Show 3 at a time
    const offset = currentIndex * -33.33; // Move left by 1/3 of the slider width
    slides.style.transform = `translateX(${offset}%)`;
});


