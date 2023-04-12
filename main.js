function getFormValues(){
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let occupation = document.getElementById("occupation").value;
  let country = document.getElementById("country").value;


  console.log(`
    name: ${name}\n
    surname: ${surname} \n
    email: ${email} \n
    occupation: ${occupation}\n
    country: ${country} \n

  `)
}

