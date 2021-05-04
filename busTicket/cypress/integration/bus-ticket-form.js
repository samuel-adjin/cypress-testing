///<reference types ="cypress"/>
let url ='http://localhost/cypress%20test/';


describe("Test bus ticket form using localhost", ()=>{


     // test 1
    it("Should be able to submit a successful submission when all fields are filled(specified trip is one way", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('#number').type("3")
        cy.get('#date').type("2021-05-16");
        cy.get('[for="oneWay"]').click();
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )
    // test 2
    it("Should be able to submit a successful submission when the comment field is not filled but the rest are filled", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('#number').type("3")
        cy.get('#date').type("2021-05-16");
        cy.get('[for="oneWay"]').click();
        cy.get('button').click();
    }
    )
             // test 3
    it("Should be able to submit a successful submission when all fields are filled (specified trip is round trip", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('#number').type("3")
        cy.get('#date').type("2021-05-16");
        cy.get('#round').click();
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

    // test 4
    it("Should be able to submit a successful submission when the comment field is not filled but the rest are filled (specified trip is round trip)", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('#number').type("3")
        cy.get('#date').type("2021-05-16");
        cy.get('#round').click();
        cy.get('button').click();
    }
    )

     // test 5
     it("Should fail and take us to the failed page when all other fields are filled except user name field", ()=>{
        cy.visit(url);
        cy.get('#number').type("3")
        cy.get('#date').type("2021-05-16");
        cy.get('[for="oneWay"]').click();
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

     // test 6
     it("Should fail and take us to the failed page when all other fields are filled except number of people's field", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('#date').type("2021-05-16");
        cy.get('[for="oneWay"]').click();
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

     // test 7
     it("Should fail and take us to the failed page when all other fields are filled except choose date field", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('#number').type("3");
        cy.get('[for="oneWay"]').click();
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

     // test 8
     it("Should fail and take us to the failed page when type of trip is not selected", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('#number').type("3");
        cy.get('#date').type("2021-05-16");
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

   // test 9
    it("Should fail and take us to the failed page when type of trip is not selected and user name field is also blank", ()=>{
        cy.visit(url);
        cy.get('#number').type("3");
        cy.get('#date').type("2021-05-16");
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

     // test 10
     it("Should fail and take us to the failed page when number of people's field and user name field is blank", ()=>{
        cy.visit(url);
        cy.get('#date').type("2021-05-16");
        cy.get('[for="oneWay"]').click();
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

    // test 11
    it("Should fail and take us to the failed page when  type of trip is not selected and number of people's field and user name field is blank", ()=>{
        cy.visit(url);
        cy.get('#date').type("2021-05-16");
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )


     // test 12
     it("Should fail and take us to the failed page when all fields are blank", ()=>{
        cy.visit(url);
        cy.get('button').click();
    }
    )

     // test 13
     it("Should fail and take us to the failed page when only comment field is filled", ()=>{
        cy.visit(url);
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

    // test 14
    it("Should fail and take us to the failed page when only comment and user name fields are filled", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )


     // test 15
     it("Should fail and take us to the failed page when only comment and number of people's fields are filled", ()=>{
        cy.visit(url);
        cy.get('#number').type("3");
        cy.get('textarea').type("I will need a place for my luggage");
        cy.get('button').click();
    }
    )

    // test 16
    it("Should fail and take us to the failed page when only choose date and number of people's fields are filled", ()=>{
        cy.visit(url);
        cy.get('#number').type("3");
        cy.get('#date').type("2021-05-16");

        cy.get('button').click();
    }
    )

    // test 17
    it("Should fail and take us to the failed page when only choose date and user name fields are filled", ()=>{
        cy.visit(url);
        cy.get('#userName').type("Samuel Adams Adjin");
        cy.get('#date').type("2021-05-16");
        cy.get('button').click();
    }
    )

     // test 18
     it("Should fail and take us to the failed page when only choose date and type of trip is selected fields are filled", ()=>{
        cy.visit(url);
        cy.get('#date').type("2021-05-16");
        cy.get('#round').click();
        cy.get('button').click();
    }
    )




})