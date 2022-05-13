class HomePage {

getcookieBanner()
 {
 return cy.xpath("//a[contains(text(),'Akzeptieren')]")
}
  getZip() {
    return cy.get("[name='c24api_ac_zipcity']");
  }

  getStreet() {
    return cy.get("[name='c24api_ac_street']");
  }
  getStreetNo() {
    return cy.get("[name='c24api_ac_streetnumber']");
  }
 
  getCtype()
  {
return cy.xpath("//input[@name='c24api_customertype']/following-sibling::label[contains(text(),'Nein')]")
  }

  getTariff() {
  return cy.xpath("//span[contains(text(),'nur Internet')]");
  }

  getRouter() {
   return cy.xpath("//label[contains(text(),'WLAN Router')]");
    }

    getMobile() {
     return cy.get("[name=phoneMobile]")
      }
      getButton () {
        return cy.get("button[type='submit']")
         }

      
    
  

}

export default HomePage;
