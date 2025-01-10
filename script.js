//Ticked Item Toggle
// Function to update ticked items and toggle visibility
function updateTickedItemsDisplay() {
    const tickedItemsDisplay = document.getElementById('ticked-items');
    const toggleButton = document.getElementById('toggle-ticked-items');

    if (listTickedItems.length > 0) {
        tickedItemsDisplay.innerText = `Currently ticked items: ${listTickedItems.join(', ')} \nCost: £${totalCost.toFixed(2)}`;
        toggleButton.style.display = 'inline'; // Show the toggle button
    } else {
        tickedItemsDisplay.textContent = `Currently ticked items: None`;
        toggleButton.style.display = 'none'; // Hide the toggle button if there are no items
    }
}

// Toggle the display of the ticked items
document.getElementById('toggle-ticked-items').addEventListener('click', function() {
    const tickedItemsDisplay = document.getElementById('ticked-items');
    if (tickedItemsDisplay.style.display === 'none') {
        tickedItemsDisplay.style.display = 'block';
        this.innerText = 'Hide Ticked Items';
    } else {
        tickedItemsDisplay.style.display = 'none';
        this.innerText = 'Show Ticked Items';
    }
});

// Breakfast List
const breakfast = [
    {name: 'Coffee Supplies', calories: 200, cost: .50, category: 'Breakfast'},
    {name: 'Weetabix', calories: 100, cost: .50, category: 'Breakfast'},
    {name: 'Beans on Toast', calories: 400, cost: 1.0, category: 'Breakfast'},
    {name: 'Toast', calories: 400, cost: 1.00, category: 'Breakfast',
        topping: ['Cheese','Blue Cheese', 'Marmite', 'Beans', 'Scrambled Egg']
    },
    {name: 'Cheese on Toast', calories: 400, cost: 1.0, category:' Breakfast'},    
    {name: 'Blue Cheese on Toast', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Bacon & Toast', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Bacon Roll', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Fruit', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Pancakes', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Salmon Cream Cheese Bagel', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Cheese Toastie', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Scrambled Egg on Toast', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Porridge', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Crumpets', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Overnight Oats', calories: 400, cost: 1.50, category: 'Breakfast'},
];

const lunch = [
    { name: 'Seaweed Salad', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Chicken Baguette', calories: 500, cost: 3.00, category: 'Lunch'},
    { name: 'Ceaser Salad', calories: 150, cost: 2.50, category: 'Lunch'},
    { name: 'Gyozas', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Fried Chicken Wrap', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Bruschetta', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Roasted Courgette', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Ciabatta Steak Sandwich', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Ramen', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Pot Noodle', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Crispy Kale', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Bao Buns', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'French Vinegarette Salad', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Crisp Sandwich', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Antipasto', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Raw Veg & Dip', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Chicken & Chip Box', calories: 800, cost: 2.00, category: 'Lunch'},
];

const dinner = [
    { name: 'Steak', calories: 700, cost: 10.00, category: 'Dinner',
        topping:['Lamb','Red Wine','Peppercorn']
    },
    { name: 'Pizza', calories: 400, cost: 8.00, category: 'Dinner',
        topping:['Homemade','Tesco Deal']
    },
    { name: 'Salmon Donburi', calories: 350, cost: 12.00, category: 'Dinner'},
    { name: 'Bolognese', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Lasagna', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Stew', calories: 400, cost: 8.00, category: 'Dinner',
        topping:['Chicken','Beef', 'Lamb', 'Veg']
    },
    { name: 'Burger & Sides', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Puff Pastry Cottage Pie', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Roast Dinner', calories: 400, cost: 8.00, category: 'Dinner',
        topping:['Chicken','Beef', 'Lamb']
    },
    { name: 'Chillie Con Carne', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Katsu Curry', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Honey & Soy Chicken', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Ceaser Salad', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Tikka Masala', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Chicken Supreme', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Wine Chicken', calories: 400, cost: 8.00, category: 'Dinner',
        topping:['Red','White']
    },
    { name: 'Jerk Chicken', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Kebabs', calories: 400, cost: 8.00, category: 'Dinner',
        topping: ['Chicken', 'Lamb', 'Beef', 'Chorizo & Halloumi']
    },
    { name: 'Chicken & Gravy', calories: 400, cost: 8.00, category: 'Dinner',
        topping:['Rice', 'Veg']
    },
    { name: 'Chicken Satay', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Chicken Wings', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Honey Mustard Chicken', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Mushroom Pasta', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Carbonara', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Garlic Tomato Pasta', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'White Fish', calories: 400, cost: 8.00, category: 'Dinner',
        topping:['White Sauce', 'Breaded']
    },
    { name: 'Salmon', calories: 400, cost: 8.00, category: 'Dinner',
        topping:['Donburi', 'Glazed']
    },
    { name: 'No Mash Shepherds Pie', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Toad in the Hole', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Pork Belly', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Pork Chops', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Mushroom Soup', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Duck', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Stir Fry Noodles', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Stir Fry Rice', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Chicken & Chip Box', calories: 800, cost: 2.00, category: 'Dinner'},
];

const snacks = [
    { name: 'Creme Brulee', calories: 200, cost: 1.00, category:'Snacks'},
    { name: 'Brownies', calories: 100, cost: 0.50, category:'Snacks'},
    { name: 'Lucozade', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Assorted Fruit', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Sticky Toffee Pudding', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Apple Crumble', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Pepperami', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Protein Yoghurt', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Crab Sticks', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Veg & Dip', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Smoked Mackrel', calories: 250, cost: 1.50, category:'Snacks'},
    { name: 'Apple & Lemonade', calories: 250, cost: 1.50, category:'Snacks'},
];

//Automatically generate the checkboxes
// Get the menu container
let item;
const menuContainer = document.getElementById('menu');

function createCheckboxes(categoryArray, categoryName) {
    const container = document.getElementById(`${categoryName}-checkboxes`); // Get the correct container for checkboxes
    categoryArray.forEach((item, index) => {
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('flex-items'); // Use your existing flex class

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.dataset.index = index; // Store index in data attribute
        checkbox.dataset.category = categoryName; // Store category name
        checkboxContainer.appendChild(checkbox);
        checkbox.name = item.name.replace(/\s+/g, '-').toLowerCase();

        const label = document.createElement('label');
        label.className = 'custom-label';
        label.appendChild(document.createTextNode(item.name)); // Add item name as label
        checkboxContainer.appendChild(label);

        container.appendChild(checkboxContainer);
    });
}

// Create checkboxes for all categories
createCheckboxes(breakfast, 'breakfast');
createCheckboxes(lunch, 'lunch');
createCheckboxes(dinner, 'dinner');
createCheckboxes(snacks, 'snacks');


// Update the display of ticked items
let listTickedItems = [];
let amountTickedItems = 0;
let totalCost = 0;

function addCheckBox(changeEvent) {
    const index = changeEvent.target.dataset.index; // Get the index from the data attribute
    const category = changeEvent.target.dataset.category; // Get the category from data attribute


    // Determine which array to use based on the category
    switch (category) {
        case 'breakfast':
            item = breakfast[index];
            break;
        case 'lunch':
            item = lunch[index];
            break;
        case 'dinner':
            item = dinner[index];
            break;
        case 'snacks':
            item = snacks[index];
            break;
    }

    if (changeEvent.target.checked) {

        // if (item.name === 'Toast'){
        //     console.log(`${item.name} ticked`)
        // }

        // if (item.topping) {
        //     alert(`${item.name} selected with the following toppings: ${item.topping.join(', ')}`);
        // } else {
        //     alert(`${item.name} selected with no toppings.`);
        // }


        // Add item to listTickedItems array if not there already 
        if (!listTickedItems.includes(item.name)) {
            listTickedItems.push(item.name);
            amountTickedItems += 1;
            totalCost += item.cost; // Add the cost of the ticked item
        }

    } else {
        // Remove item from listTickedItems array
        const itemIndex = listTickedItems.indexOf(item.name);
        if (itemIndex > -1) {
            listTickedItems.splice(itemIndex, 1); // Remove by index
            amountTickedItems -= 1;
            totalCost -= item.cost; // Subtract the cost of the unticked item
        }
    }
    // Update the display of currently ticked items
    updateTickedItemsDisplay();
}

// Update the display of ticked items
function updateTickedItemsDisplay() {
    const tickedItemsDisplay = document.getElementById('ticked-items');
    if (listTickedItems.length > 0) {
        tickedItemsDisplay.innerText = `Currently ticked items: ${listTickedItems.join(', ')} \nCost: £${totalCost.toFixed(2)}`;
    } else {
        tickedItemsDisplay.textContent = `Currently ticked items: None`;
    }
}

// Checkbox logic
const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', addCheckBox);
});

// Function to clear all selections
function clearSelections() {
    // Reset the list of ticked items and the count
    listTickedItems = [];
    amountTickedItems = 0;
    totalCost = 0;

    // Uncheck all checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false; // Uncheck each checkbox
        checkbox.parentElement.style.backgroundColor = '';
        checkbox.parentElement.style.padding = '';
        checkbox.parentElement.style.borderRadius = '';
        checkbox.parentElement.style.border = '';
    });

    // Update the display of currently ticked items
    updateTickedItemsDisplay();
}

// Add event listener to the clear button
document.getElementById('clear-selections').addEventListener('click', clearSelections);

//Item Search
function logItemTopping(itemName) {
    // Search through all categories
    const item = [...breakfast, ...lunch, ...dinner, ...snacks].find(dish => dish.name === itemName);

    if (item) {
        if (item.topping) {
            console.log(`${itemName} toppings: ${item.topping.join(', ')}`);
        } else {
            console.log(`${itemName} has no toppings.`);
        }
    } else {
        console.log(`${itemName} not found.`);
    }
}


//STYLE CHECKBOXES
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.style.backgroundColor = 'rgb(28, 29, 88)';
            this.parentElement.style.padding = '5px';
            this.parentElement.style.borderRadius = '5px';
            this.parentElement.style.border = 'rgb(28, 29, 88) 3px solid';
        } else {
            this.parentElement.style.backgroundColor = '';
            this.parentElement.style.padding = '';
            this.parentElement.style.borderRadius = '';
            this.parentElement.style.border = '';
        }
    });
});












//EXPORT
function exportToCSV() {
    // Create a mapping of categories to their ticked items
    const groupedItems = {};

    // Iterate through listTickedItems to categorize them
    listTickedItems.forEach(itemName => {
        // Find the item in all categories
        const foundItem = [...breakfast, ...lunch, ...dinner, ...snacks].find(item => item.name === itemName);
        if (foundItem) {
            // Use the category as the key
            if (!groupedItems[foundItem.category]) {
                groupedItems[foundItem.category] = []; // Initialize the array for this category
            }
            groupedItems[foundItem.category].push(foundItem.name); // Add the item name to the category array
        }
    });

    // Prepare CSV content
    let csvContent = "data:text/csv;charset=utf-8,";

    // Add each category and its items to the CSV content
    for (const category in groupedItems) {
        csvContent += `${category}\n`; // Write category name
        csvContent += groupedItems[category].join(", ") + "\n\n"; // Write items under the category
    }

    // Create a downloadable link for the CSV
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ticked_items_by_category.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // Trigger the download
}
document.getElementById('export-csv').addEventListener('click', exportToCSV);

// Function to send ticked items to Discord Webhook
function sendToDiscord() {
    // Create a mapping of categories to their ticked items
    const groupedItems = {};

    // Iterate through listTickedItems to categorize them
    listTickedItems.forEach(itemName => {
        // Find the item in all categories
        const foundItem = [...breakfast, ...lunch, ...dinner, ...snacks].find(item => item.name === itemName);
        if (foundItem) {
            // Use the category as the key
            if (!groupedItems[foundItem.category]) {
                groupedItems[foundItem.category] = []; // Initialize the array for this category
            }
            groupedItems[foundItem.category].push(foundItem.name); // Add the item name to the category array
        }
    });

    // Construct the message to send to Discord
    let message = "Here are the ticked items sorted by category:\n\n";
    for (const category in groupedItems) {
        message += `**${category}**:\n`; // Bold category name
        message += groupedItems[category].join(", ") + "\n\n"; // Join items under the category
    }
        message += `Estimated Cost: £${totalCost.toFixed(2)}\n`; //add estimated cost

    // Send the message to Discord webhook
    const webhookUrl = 'https://discord.com/api/webhooks/1294707485025894472/ID5Kczg5Ucw0MxuX94SQcaNSxPlwM9-s0wLMfcCtsZq0YPasBoHsyIprJaqbuXE76fO5'; // Replace with your actual webhook URL
    const payload = {
        content: message
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        console.log('Message sent successfully!');
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Replace the CSV export button with the Discord export button
document.getElementById('export-discord').addEventListener('click', sendToDiscord);
