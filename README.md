# Endorsement List Application

This is a simple web application that allows users to publish endorsements. The endorsements are stored in a Firebase real-time database and are displayed in real-time on the page.

## Technologies Used

- HTML
- CSS
- JavaScript
- Firebase

## How to Use

1. Write your endorsement in the text area.
2. Fill in the "From" and "To" fields.
3. Click the "Publish" button to publish your endorsement.
4. Your endorsement will appear in the "Endorsements" list below the button.
5. Click on an endorsement in the list to remove it.

## Project Structure

- `index.html`: This file contains the HTML structure of the application. It includes a text area for the endorsement, input fields for the "From" and "To" fields, a "Publish" button, and a list for the endorsements.
- `style.css`: This file contains the CSS styles for the application. It styles the text area, input fields, button, and list.
- `script.js`: This file contains the JavaScript code for the application. It handles the click event for the "Publish" button, pushes the endorsement to the Firebase database, and updates the endorsements list whenever the database changes.

## Setup

To run this project, you will need to add your Firebase configuration to the `script.js` file. Replace the `firebaseConfig` object with your own configuration object from the Firebase console.

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};