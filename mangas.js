const comment = { name:null, email:null,message:null,date:null };
const valuesForm = [];



function addComment() {
    const email = document.getElementById('email').value;
    comment.email = email;    
    valuesForm.push(comment);
    console.log(valuesForm);
}
