/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>

import Homepage from "../../support/pageObjects/HomePage";
const HomePage = new Homepage();

describe("To Go to the compare page", function () {
  before(function () {
    cy.fixture("details.json").then(function (data) {
      this.data = data;
    });
    cy.visit(Cypress.env("url"));
    HomePage.getcookieBanner().click()
  });

  /* GIVEN user lands on the Dashboard
   AND Clicks on "Comparison" Button */

   

  it("Details Submission", function () {
   
    HomePage.getZip().click().type(this.data.zip)
    HomePage.getStreet().click().type(this.data.Street)
    HomePage.getStreetNo().click().type(this.data.Sno)
    HomePage.getCtype().click()
    HomePage.getTariff().click()
    HomePage.getRouter().click()
    HomePage.getMobile().click().type(this.data.Mobile)
    HomePage.getButton().click()
    cy.url().should('include',this.data.aftersubmiturl)
    cy.title().should('eq', this.data.pagetitle)


  });




  
  
 
});
