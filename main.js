#!/usr/bin/env bash
// Wait for the user to click the Extract Data button
document.getElementById("extractBtn").addEventListener("click", function () {
    // Get the input text from the textarea
    var inputText = document.getElementById("textInput").value;

    // Define Regular Expressions for extracting different types of data
    var phoneRegex = /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/gm; // Matches various phone number formats
    var creditCardRegex = /\b\d{4}[-.\s]?\d{4}[-.\s]?\d{4}[-.\s]?\d{4}\b/gm; // Matches credit card numbers format
    var emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/gm; // Matches email addresses format
    var hashtagRegex = /#\w+/gmi; // Matches hashtags format

    // Store the matched results in an object named results
    var results = {
        "Phone Numbers": inputText.match(phoneRegex) || [], // Extract phone numbers
        "Credit Cards": inputText.match(creditCardRegex) || [], // Extract credit card numbers
        "Emails": inputText.match(emailRegex) || [], // Extract email addresses
        "Hashtags": inputText.match(hashtagRegex) || [] // Extract hashtags
    };

    // Get the output div
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous results

    // Loop through the extracted data and display it
    for (let key in results) {
        if (results[key].length > 0) {
            outputDiv.innerHTML += `<strong>${key}:</strong> ${results[key].join(", ")}<br>`;
        }
    }

    // If no data was found, display a message
    if (outputDiv.innerHTML === "") {
        outputDiv.innerHTML = "<em>No valid data found.</em>";
    }
});

