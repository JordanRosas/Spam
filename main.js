/*From that array, extract just the customers' contact email addresses and store them in a new array. You will need a nested array method - meaning one iteration inside another one - since you need to iterate the entire array of customers, and then iterate the array of emails for each one.*/
let emailArray = customers.map(email =>{
  let customerEmails = email.contacts.email
  console.log(customerEmails)
  customerEmails.forEach(customerEmail =>{
    console.table(customerEmail.customerEmails)
  }) 
})

