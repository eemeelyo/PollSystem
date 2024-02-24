const choices = [
    {id:"choice1", text:"JavaScript", votes:0},
    {id:"choice2", text:"Python", votes:0},
    {id:"choice3", text:"Java", votes:0},
    {id:"choice4", text:"C++", votes:0},
];

function submitVote() {
    const selectedChoice = document.querySelector('input[name=choice]:checked');

    if(!selectedChoice) {
        alert('Please select a choice!');
        return;
    }

    
}