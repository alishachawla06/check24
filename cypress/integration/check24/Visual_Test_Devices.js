/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>
import Homepage from "../../support/pageObjects/HomePage";

const execution_type = "iphone";
const TestName = "Test Details are being validated on iphone"
const HomePage = new Homepage();

describe("Check 24 details on iphone", function () {
  before(function () {
    cy.eyes_setup(TestName, execution_type);
    cy.viewport("iphone-x");
    cy.visit(Cypress.env("url"));
  });
  
  beforeEach(function () {
    cy.viewport("iphone-x");  
  });

  it("Check 24 details", function () {
    cy.makeScreenshot("Check 24 with cookie");
  });

  it("Screenshot after cookie accept", function () {
    HomePage.getcookieBanner().click({force:true})
    cy.makeScreenshot("Cookie disappears and page displays");
  });

  it("Screenshot for validation messages", function () {
    HomePage.getButton().click({force:true})
    cy.makeScreenshot("Validation Messages are displayed");
  });

  after(function () {
    cy.eyesClose();
  });
});
