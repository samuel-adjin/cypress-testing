///<reference types ="cypress"/>
let url = 'youtube.com'
describe("test cases for click events", ()=>{
    it("should open a pop up",()=>{
        cy.visit(url);
    })
})