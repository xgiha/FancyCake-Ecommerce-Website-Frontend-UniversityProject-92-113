
const email = document.getElementById("email");
const password = document.getElementById("password");


// Add success class to form-input and show success outline colour.
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form__div success";
}

// Add error class to form-input and show error message.
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form__div error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Email validation
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) 
    {
        showSuccess(input);
    } 

    else 
    {
        showError(input, "Email not valid");
    }
}

function validate()
    {
        var username = document.getElementById("uname");
        var password = document.getElementById("pass");
        
        if(username.value.trim() =="" || password.value.trim()=="")
            {
                alert("No blank valus Allowed. please check username or password");
                return false;
            }
        else
            {
                true;
            }
    }

// Get field name
function getFieldName(input) {
    return input.name;
}

// Check fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) 
    {
        if (input.value.trim() === "") 
        {
            showError(input, `${getFieldName(input)} This Field is required`);
        } 

        else 
        {
            showSuccess(input);
        }
    });
}

// Check length
function checkLength(input, min, max) 
{
    if (input.value.length < min) 
    {
        showError(input, `${getFieldName(input)} Must be atleast ${min} characters`);
    } else if (input.value.length > max) 
    
    {
        showError(input, `${getFieldName(input)} Must be less than ${max} characters`);
    } 

    else 
    {
        showSuccess(input);
    }
}

// Check password confirmation
function checkPasswords(input1, input2) 
{
  if (input1.value !== input2.value) 
  {
    showError(input2, "Passwords do not match");
  }
}

// Event listeners
form.addEventListener("submit", function(e) 
{
  e.preventDefault();
  checkRequired([email, password]);
  checkEmail(email);
  checkLength(password, 8, 20);
  checkPasswords(password, passwordConfirm);
});