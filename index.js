'use strict'

const firstname = document.querySelector('#name')
const email = document.querySelector('#email')
const age = document.querySelector('#number')
const form = document.querySelector('#survey-form')

const firstnameText = document.querySelector('.firstname-text');
const emailText = document.querySelector('.email-text');
const ageText = document.querySelector('.age-text');

const drop = document.querySelector('.drop')
const recommend = document.querySelectorAll('input[name="recommend"]')
const dropdown = document.querySelector('.opt')
const improvementBox = document.querySelector('.improvements-box')
const improvementsCheckboxes = improvementBox.querySelectorAll('input[type="checkbox"]') // (.improvemnts);
// [challenges, xyz, recommend]


// function handleFirstName() {
//     if (firstname.value.length < 6){
//         console.log(`This is too short`)
//     }
// }

// function handleEmail() {
//     console.log({email: email.value })
// }

// function handleAge() {
//     console.log({age: age.value })
// }

// function handleDrop(){
//     console.log ({drop: drop.value})
// }

// function handleInline() {
//     console.log ({radio: radio.value})
// }

// function handleOpt(){
//     console.log ({dropdown: dropdown.value})
// }

// function handleCheckbox(){
//     console.log({checkbox: checkbox.value})
// }

// handleFirstName();
// handleEmail();
// handleAge();
// handleDrop();
// handleInline();
// handleOpt();
// handleCheckbox();



function submitform(e) {
    e.preventDefault();
    
    // firstnameText.innerText = firstname.value;
    // emailText.innerText = email.value;
    // ageText.innerText = age.value;
    
    let div = document.createElement('div');
    let pFirstname = document.createElement('p');
    pFirstname.innerText = firstname.value;
    let pEmail = document.createElement('p');
    pEmail.innerText = email.value;
    let pAge = document.createElement('p');
    pAge.innerText = age.value;

    
    let pDrop = document.createElement('p');
    pDrop.innerText = drop.value;
    let pInline = document.createElement('p');
    let recommendedBy;
    recommend.forEach(item => {
        if (item.checked) {
            recommendedBy = item.value
        }
    })
    pInline.innerText = recommendedBy;
    let pOpt= document.createElement('p');
    pOpt.innerText = dropdown.value;
    let pCheckbox= document.createElement('p');

    let result = '';
    improvementsCheckboxes.forEach(item => {
        if (item.checked) {
            result += `${item.value} ,`
        }
    })
    pCheckbox.innerText = result;
    

    div.append(pFirstname);
    div.append(pEmail);
    div.append(pAge);
    div.append(pDrop);
    div.append(pInline);
    div.append(pOpt);
    div.append(pCheckbox);
    document.querySelector('#printed-result').append(div);
}

form.addEventListener('submit', submitform);