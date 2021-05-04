///<reference types ="cypress"/>

let url = 'http://localhost/cypress%20sign%20up/';

describe("Test sign up page from localhost", ()=>{


// test1
it("should be able to sucessfully display admin page when all fields are filled,valid email and password  and admin is selected",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("Dembouz1#");
    cy.get('#conPass').type("Dembouz1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#admin').click();
    cy.get('button').click();
})

// test2
it("should be able to sucessfully display customer page when all fields are filled, valid email and password and customer is selected",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("Dembouz1#");
    cy.get('#conPass').type("Dembouz1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#customer').click();
    cy.get('button').click();
})

// test3
it("should not be able to display customer page when password is longer than 12 characters. alert message should pop up",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("leonelDembouz1#");
    cy.get('#conPass').type("leonelDembouz1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#customer').click();
    cy.get('button').click();
})

// test4
it("should not be able to display customer page when password is less than 6 characters. alert message should pop up",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("Le1#");
    cy.get('#conPass').type("Le1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#customer').click();
    cy.get('button').click();
})

// test5
it("should not be able to display customer page when password does not contain a special character.",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("dembouz1");
    cy.get('#conPass').type("dembouz1");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#customer').click();
    cy.get('button').click();
})

// test6
it("should not be able to display customer page when password does not contain atleast one upperCase.",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("dembouz1");
    cy.get('#conPass').type("dembouz1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#customer').click();
    cy.get('button').click();
})


// test7
it("should not be able to display customer page when password does not match confirm password.",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("Dembouz1#");
    cy.get('#conPass').type("Fembouz1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#customer').click();
    cy.get('button').click();
})

// test8
it("should not be able to display customer page when invalid email is entered",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("Dembouz1#");
    cy.get('#conPass').type("Dembouz1#");
    cy.get('#email').type("gerardpique.com");
    cy.get('#customer').click();
    cy.get('button').click();
})

// test9
it("should not be able to display customer page when all fields are blank",()=>{
    cy.visit(url);
    cy.get('button').click();
})

// test10
it("should not be able to display admin page when all fields are blank and type of account is selected ",()=>{
    cy.visit(url);
    cy.get('#admin').click();
    cy.get('button').click();
})

//test11
it("should not be able to display admin page when all fields are blank except username  and type of account is selected ",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#admin').click();
    cy.get('button').click();
})

//test12
it("should not be able to display admin page when user name field is blank",()=>{
    cy.visit(url);
    cy.get('#pass').type("Dembouz1#");
    cy.get('#conPass').type("Dembouz1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#admin').click();
    cy.get('button').click();
})

//test13
it("should not be able to display admin page when confirm password is blank ",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("Dembouz1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('#admin').click();
    cy.get('button').click();
})

//test14
it("should not be able to display admin page when confirm password and email are blank",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("Dembouz1#");
    cy.get('#admin').click();
    cy.get('button').click();
})

//test15
it("should not be able to display admin page when password, confirm password and email are blank",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#admin').click();
    cy.get('button').click();
})

//test16
it("should not be able to display admin page when password does not contain special character and email is invalid",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("dembouz1#");
    cy.get('#conPass').type("dembouz1#");
    cy.get('#email').type("gerardpiquegmail.com");
    cy.get('#admin').click();
    cy.get('button').click();
})

//test17
it("should not be able to display admin page when account type is not selected",()=>{
    cy.visit(url);
    cy.get('#userName').type("Ousmane Dembele");
    cy.get('#pass').type("Dembouz1#");
    cy.get('#conPass').type("Dembouz1#");
    cy.get('#email').type("gerardpique@gmail.com");
    cy.get('button').click();
})

})