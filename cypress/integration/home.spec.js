/// <reference types="cypress" />

context("Home Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Should fine results", () => {
        cy.get('h6').contains("Most popular articles")
    });
})