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
    {name: 'Coffee', calories: 200, cost: .50, category: 'Breakfast'},
    {name: 'Weetabix', calories: 100, cost: .50, category: 'Breakfast'},
    {name: 'Beans on Toast', calories: 400, cost: 1.0, category: 'Breakfast'},
    {name: 'Toast', calories: 400, cost: 1.00, category: 'Breakfast'},
    {name: 'Cheese on Toast', calories: 400, cost: 1.0, category:' Breakfast'},
    {name: 'Bacon Sandwich', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Fruit', calories: 400, cost: 1.50, category: 'Breakfast'},
    {name: 'Yoghurt', calories: 400, cost: 1.50, category: 'Breakfast'}
];

const lunch = [
    { name: 'Chicken Baguette', calories: 500, cost: 3.00, category: 'Lunch'},
    { name: 'Ceaser Salad', calories: 150, cost: 2.50, category: 'Lunch'},
    { name: 'Gyozas', calories: 600, cost: 2.00, category: 'Lunch'},
    { name: 'Hot Dogs', calories: 600, cost: 2.00, category: 'Lunch'}
];

const dinner = [
    { name: 'Steak', calories: 700, cost: 10.00, category: 'Dinner'},
    { name: 'Pizza', calories: 400, cost: 8.00, category: 'Dinner'},
    { name: 'Salmon Donburi', calories: 350, cost: 12.00, category: 'Dinner'}
];

const snacks = [
    { name: 'Chips', calories: 200, cost: 1.00, category:'Snacks'},
    { name: 'Fruit', calories: 100, cost: 0.50, category:'Snacks'},
    { name: 'Lucozade', calories: 250, cost: 1.50, category:'Snacks'}
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

        if (item.name === 'Toast'){
            console.log(`${item.name} ticked`)
        }

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
    });

    // Update the display of currently ticked items
    updateTickedItemsDisplay();
}

// Add event listener to the clear button
document.getElementById('clear-selections').addEventListener('click', clearSelections);



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
