

const addNote = document.getElementById('add-note');
const delNote = document.getElementById('delete-btn');
const sideNote = document.getElementById('note-save');
const note = document.getElementById('note');
const sideContent = document.querySelectorAll('.note-side');

// putting in whats the content of the note.
let noted = [];
const color = []
// Mehods
 

// EventListener
addNote.addEventListener('click', (e) => {
    if(e.target !== this) return;
    console.log('clicked')
});

sideContent.forEach((item) => {
    const noteContent = sideNote.value;
    // sideContent's EventListener
    item.addEventListener('click', (e) => {
       if(e.target == sideNote){
        // e.target.parentNode
       }    
    //    console.log(noteContent);
    });
});
