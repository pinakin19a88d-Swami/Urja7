$(function() {
  
    // Setup form validation on the #register-form element
    $("#careers-form").validate({
    
        // Specify the validation rules
        rules: {
            inputPost: "required",
            inputName: "required",
            inputEdu: "required",
            inputExpertise: "required",
            inputExp: "required",
            inputAddrs: "required",
            inputPhone: {
                required: true,
                digits: true,
                minlength: 8
            },
            inputEmail: {
                required: true,
                email: true
            },
            inputSalary: {
                required: true,
                number: true,
                minlength: 4
            },
            inputResume: "required"
        },
        
        // Specify the validation error messages
        messages: {
            inputPost: "Please enter the Post you are applying for",
            inputName: "Please enter your full name",
            inputEdu: "Please enter your educational qualification",
            inputExpertise: "Please enter your area of expertise",
            inputExp: "Please enter your total experience",
            inputAddrs: "Please enter a valid address",
            inputPhone: "Please enter a valid telephone/mobile number",
            inputEmail: "Please enter a valid email address",
            inputSalary: "Please enter a valid salary in numbers only",
            inputResume: "Please enter your resume in valid format"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });