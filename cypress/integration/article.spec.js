/// <reference types="cypress" />

context("Article Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/article/[heading]");
    });

    it("Should fine results", () => {
        cy.get('h4').should('not.be.empty');
        cy.get('p').should('not.be.empty');
    });
})