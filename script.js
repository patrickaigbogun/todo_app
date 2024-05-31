// Getting references to the input box and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
	if (inputBox.value === "") {
		alert("You must write something!"); // Alert if input is empty
	} else {
		let li = document.createElement("li"); // Create a new list item
		li.innerHTML = inputBox.value; // Set the list item's text to the input value
		listContainer.appendChild(li); // Add the list item to the container
		let span = document.createElement("span"); // Create a span for the delete button
		span.innerHTML = "\u00d7"; // Set the span's text to "×"
		li.appendChild(span); // Add the span to the list item
	}
	inputBox.value = ""; // Clear the input box
	saveData(); // Save the updated list to local storage
}

// Event listener for clicks on the list container
listContainer.addEventListener("click", function (e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked"); // Toggle the checked class on the list item
		saveData(); // Save the updated list to local storage
	} else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove(); // Remove the list item if the delete button is clicked
		saveData(); // Save the updated list to local storage
	}
}, false);

// Function to save the list data to local storage
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML); // Save the innerHTML of the list container
}

// Function to load and display the saved tasks from local storage
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data"); // Load the data from local storage
}
showTask(); // Call the function to display the tasks when the page loads
