import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetting = {
    databaseURL: "https://quote-unquote-ec289-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetting);
const database = getDatabase(app);
const endorsementListInDB = ref(database, "endorsementList");


const btnPublish = document.getElementById("btn-publish");
const endorsementInput = document.getElementById("input-endorsement");
const endorsementList = document.getElementById("endorsement-list");

btnPublish.addEventListener("click", function() {
    endorsementList.innerHTML += `<li>${endorsementInput.value}</li>`

    clearInputField();
})

function clearInputField() {
    endorsementInput.value = "";
}