const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
})

function checkInputs(){
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if(usernameValue == 'admin' || usernameValue == 'student1' || usernameValue == 'teacher1'){
    setSuccessFor(username, 'Valid Username');
    if(passwordValue == 'admin' || passwordValue == '1234'){
      if(usernameValue == 'admin' && passwordValue == 'admin'){
        setSuccessFor(password);
        window.location = "admin.html";
      }
      else if(usernameValue == 'teacher1' && passwordValue == '1234'){
        setSuccessFor(password);
        window.location = "teacher.html";
      }
      else if(usernameValue == 'student1' && passwordValue == '1234'){
        setSuccessFor(password);
        window.location = "student.html";
      }
    }else {
        setErrorFor(password, 'Incorrect password. Please enter again.');
      }
  } else {
        setErrorFor(username, 'Incorrect username. Please enter again.');
        setErrorFor(password, 'Incorrect password. Please enter again.');
  }

}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
