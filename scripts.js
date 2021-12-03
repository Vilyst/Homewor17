var domNode_editButton = document.querySelector('.EditPageButton'),
    domNode_editPeople = document.querySelector('.EditPeopleWrapper');

domNode_editButton.addEventListener('click', onEditButtonClicked);

function onEditButtonClicked(){
    if(domNode_editButton.innerHTML ==='Edit'){
        domNode_editButton.innerHTML = 'Stop editing';
    }else {
        domNode_editButton.innerHTML = 'Edit';
    }

    domNode_editButton.classList.toggle('active');
    domNode_editPeople.classList.toggle('expanded');
}

var domNode_editPeopleInput = document.querySelectorAll('.EditPeopleInput'),
    domNode_buttonAddPerson = document.getElementById('AddOnePerson'),
    domNode_cardsContainer  = document.querySelector('.PeopleCardsContainer'),
    domNode_cardsWrapper = document.querySelector('.PeopleCardWrapper');

domNode_buttonAddPerson.addEventListener('click',peopleInputSaved);

function peopleInputSaved(){
    domNode_cardsContainer.hidden = true;
    
    var namePerson,
        job,
        email,
        phone;

    for(var i=0; i<domNode_editPeopleInput.length; i++){
        namePerson = domNode_editPeopleInput[0].value;
        job = domNode_editPeopleInput[1].value;
        email = domNode_editPeopleInput[2].value;
        phone = domNode_editPeopleInput[3].value;   
    }
    
    var personCard = document.createElement('div');
    personCard.classList.add('PersonCard');
    personCard.innerHTML = 
        '<div class="PersonImage"></div>'; 
    domNode_cardsWrapper.appendChild(personCard);

    var domNode_PersonName = document.createElement('div');
    domNode_PersonName.innerHTML = namePerson;
    personCard.appendChild(domNode_PersonName);
    domNode_PersonName.classList.add('PersonName');
    
    var domNode_job = document.createElement('div');
    domNode_job.innerHTML = job;
    personCard.appendChild(domNode_job);
    domNode_job.classList.add('personJobTitle');

    var domNode_email = document.createElement('div');
    domNode_email.innerHTML = email;
    personCard.appendChild(domNode_email);

    var domNode_phone = document.createElement('div');
    domNode_phone.innerHTML = phone;
    personCard.appendChild(domNode_phone);  

    personCard.addEventListener('click', EditFunction);

    function EditFunction(){
        for(var i=0; i<domNode_editPeopleInput.length; i++){
            domNode_editPeopleInput[0].value = namePerson; 
            domNode_editPeopleInput[1].value = job; 
            domNode_editPeopleInput[2].value = email;
            domNode_editPeopleInput[3].value = phone; 
        }
    }
}  

