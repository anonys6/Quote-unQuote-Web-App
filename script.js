// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// const appSetting = {
//     databaseURL: "https://quote-unquote-ec289-default-rtdb.asia-southeast1.firebasedatabase.app/"
// }

// const app = initializeApp(appSetting);
// const database = getDatabase(app);
// const endorsementListInDB = ref(database, "endorsementList");
// const fromListInDB = ref(database, "fromList");


// const btnPublish = document.getElementById("btn-publish");
// const endorsementInput = document.getElementById("input-endorsement");
// const endorsementList = document.getElementById("endorsement-list");
// const fromInput = document.getElementById("from-input");

// btnPublish.addEventListener("click", function () {
//     let endorsementValue = endorsementInput.value;
//     let fromValue = fromInput.value;

//     if (endorsementValue == "" && fromValue == "") {
//         return;
//     }

//     push(endorsementListInDB, endorsementValue);

//     clearFields();
// })

// onValue(endorsementListInDB, function (snapshot) {
//     if (snapshot.exists()) {
//         let endorsementArray = Object.entries(snapshot.val());

//         clearEndorsementList();

//         for (let i = endorsementArray.length - 1; i >= 0; i--) {
//             let currentEndorsement = endorsementArray[i];

//             appendEndorsementToEndorsementList(currentEndorsement);
//         }
//     } else {
//         endorsementList.innerHTML = "No endorsement here yet...";
//     }
// })

// function clearFields() {
//     endorsementInput.value = "";
//     fromInput.value = "";
// }

// function clearEndorsementList() {
//     endorsementList.innerHTML = "";
// }

// function appendEndorsementToEndorsementList(endorsement, from) {
//     let endorsementID = endorsement[0];
//     let endorsementValue = endorsement[1];

//     let newLi = document.createElement("li");
//     newLi.textContent = endorsementValue;

//     newLi.addEventListener("click", function () {
//         let exactLocationOfEndorsementInDB = ref(database, `endorsementList/${endorsementID}`);

//         remove(exactLocationOfEndorsementInDB);
//     })

//     endorsementList.append(newLi);
// }

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetting = {
    databaseURL: "https://quote-unquote-ec289-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetting);
const database = getDatabase(app);
const listInDB = ref(database, "fromList");


const btnPublish = document.getElementById("btn-publish");
const endorsementInput = document.getElementById("input-endorsement");
const endorsementList = document.getElementById("endorsement-list");
const fromInput = document.getElementById("from-input");
const toInput = document.getElementById("to-input");

btnPublish.addEventListener("click", function () {
    let endorsementValue = endorsementInput.value;
    let fromValue = fromInput.value;
    let toValue = toInput.value;

    if (endorsementValue == "") {
        return;
    }

    let endorsementObject = {
        endorsementText: endorsementValue,
        endorsementFrom: fromValue,
        endorsementTo: toValue
    };

    push(listInDB, endorsementObject);

    clearFields();
})

onValue(listInDB, function (snapshot) {
    if (snapshot.exists()) {
        let endorsementArray = Object.entries(snapshot.val());


        clearEndorsementList();

        for (let i = endorsementArray.length - 1; i >= 0; i--) {
            let currentEndorsement = endorsementArray[i];

            appendEndorsementToEndorsementList(currentEndorsement);
        }
    } else {
        endorsementList.innerHTML = "No endorsement here yet...";
    }
})

function clearFields() {
    endorsementInput.value = "";
    fromInput.value = "";
    toInput.value = "";
}

function clearEndorsementList() {
    endorsementList.innerHTML = "";
}

function appendEndorsementToEndorsementList(endorsement) {
    // let endorsementID = endorsement[0];
    // let endorsementValue = endorsement[1];
    let endorsementID = endorsement[0];
    let endorsementObject = endorsement[1]
    // let endorsementText = endorsementID[endorsementValue];
    // let endorsementFrom = endorsementID[fromValue];
    // let endorsementTo = endorsementID[toValue];
    let endorsementText = endorsementObject.endorsementText;
    let endorsementFrom = endorsementObject.endorsementFrom;
    let endorsementTo = endorsementObject.endorsementTo;

    // console.log(endorsementText, endorsementFrom, endorsementTo);
    console.log(endorsementObject)


    let newLi = document.createElement("li");
    newLi.innerHTML = `<span class="list-from">To ${endorsementFrom}</span><br>
        ${endorsementText}<br>
        <span class="list-to">From ${endorsementTo}</span>`;

    newLi.addEventListener("click", function () {
        let exactLocationOfEndorsementInDB = ref(database, `fromList/${endorsementID}`);

        remove(exactLocationOfEndorsementInDB);
    })

    endorsementList.append(newLi);
}
