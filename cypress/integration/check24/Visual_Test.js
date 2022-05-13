/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>
import Homepage from "../../support/pageObjects/HomePage";

const execution_type = "chrome";
const TestName = "Test Details are being validated"
const HomePage = new Homepage();

describe("Check 24 details ", function () {
  before(function () {
    cy.eyes_setup(TestName, execution_type);
    cy.visit(Cypress.env("url"));
  });

  it("Check 24 details", function () {
    cy.makeScreenshot("Check 24 with cookie");
  });

  it("Screenshot after cookie accept", function () {
    HomePage.getcookieBanner().click()
    cy.makeScreenshot("Cookie disappears and page displays");
  });

  it("Screenshot for validation messages", function () {
    HomePage.getButton().click()
    cy.makeScreenshot("Validation Messages are displayed");
  });

  after(function () {
    cy.eyesClose();
  });
});
