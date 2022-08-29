'use strict'

const firstname = document.querySelector('#name')
const email = document.querySelector('#email')
const age = document.querySelector('#number')
const form = document.querySelector('#survey-form')

const firstnameText = document.querySelector('.firstname-text');
const emailText = document.querySelector('.email-text');
const ageText = document.querySelector('.age-text');

const drop = document.querySelector('.drop')
const radio = document.querySelector('.inline')
const dropdown = document.querySelector('.opt')
const checkbox = document.querySelector('.checkbox')




function handleFirstName() {
    if (firstname.value.length < 6){
        console.log(`This is too short`)
    }
}

function handleEmail() {
    console.log({email: email.value })
}

function handleAge() {
    console.log({age: age.value })
}

function handleDrop(){
    console.log ({drop: drop.value})
}

function handleInline() {
    console.log ({radio: radio.value})
}

function handleOpt(){
    console.log ({dropdown: dropdown.value})
}

function handleCheckbox(){
    console.log({checkbox: checkbox.value})
}

handleFirstName();
handleEmail();
handleAge();
handleDrop();
handleInline();
handleOpt();
handleCheckbox();



function submitform(e) {
    e.preventDefault();
    
    // firstnameText.innerText = firstname.value;
    // emailText.innerText = email.value;
    // ageText.innerText = age.value;
    
    let div = document.createElement('div');
    let pFirstname = document.createElement('p');
    pFirstname.innerText = firstname.value;
    let pEmail = document.createElement('p');
    pEmail.innerHTML = email.value;
    let pAge = document.createElement('p');
    pAge.innerHTML = age.value;

    
    let pDrop = document.createElement('p');
    pDrop.innerText = drop.value;
    let pInline = document.createElement('p');
    pInline.innerText = radio.value;
    let pOpt= document.createElement('p');
    pOpt.innerText = dropdown.value;
    let pCheckbox= document.createElement('p');
    pCheckbox.innerText = checkbox.value;
    

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