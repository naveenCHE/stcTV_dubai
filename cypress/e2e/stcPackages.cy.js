beforeEach(() => {
    cy.visit("/");
})

describe('Stc tv pacakges - Tests', () => {
    it("Validate package for Bahrain Country", () => {
        cy.fixture('stcData').then((res) => {
            cy.selectLanguage(res.lang[0].code, res.lang[0].lan);

            cy.get('.head-links>.country-current').click();
            cy.get('#country-title').contains('Select Your Country').should('be.visible');
            cy.get(`a[id="${res.coun[0].code}"]`).contains(res.coun[0].country).should('be.visible').click();
            cy.url().should('include', 'bh-en');
            cy.get('a[id="country-btn"]').find('span').contains(res.coun[0].country).should('be.visible');

            //Lite title and package amount
            cy.get('#name-lite').contains(res.coun[0].package[0].title).should('be.visible');
            cy.get('#currency-lite').should('contain', `${res.coun[0].package[0].amount} BHD/month`).should('be.visible');

            //Classic title and package amount
            cy.get('#name-classic').contains(res.coun[0].package[1].title).should('be.visible');;
            cy.get('#currency-classic').should('contain', `${res.coun[0].package[1].amount} BHD/month`).should('be.visible');

            //Premium title and package amount
            cy.get('#name-premium').contains(res.coun[0].package[2].title).should('be.visible');
            cy.get('#currency-premium').should('contain', `${res.coun[0].package[2].amount} BHD/month`).should('be.visible');
        });
    });

    it("Validate package for KSA Country", () => {
        cy.fixture('stcData').then((res) => {
            cy.selectLanguage(res.lang[0].code, res.lang[0].lan);

            cy.get('.head-links>.country-current').click();
            cy.get('#country-title').contains('Select Your Country').should('be.visible');
            cy.get(`a[id="${res.coun[1].code}"]`).contains(res.coun[1].country).should('be.visible').click();
            cy.url().should('include', 'sa-en');
            cy.get('a[id="country-btn"]').find('span').contains(res.coun[1].country).should('be.visible');

            //Lite title and package amount
            cy.get('#name-lite').contains(res.coun[1].package[0].title).should('be.visible');
            cy.get('#currency-lite').should('contain', `${res.coun[1].package[0].amount} SAR/month`).should('be.visible');

            //Classic title and package amount
            cy.get('#name-classic').contains(res.coun[1].package[1].title).should('be.visible');
            cy.get('#currency-classic').should('contain', `${res.coun[1].package[1].amount} SAR/month`).should('be.visible');

            //Premium title and package amount
            cy.get('#name-premium').contains(res.coun[1].package[2].title).should('be.visible');
            cy.get('#currency-premium').should('contain', `${res.coun[1].package[2].amount} SAR/month`).should('be.visible');
        });
    });

    it("Validate package for Kuwait Country", () => {
        cy.fixture('stcData').then((res) => {
            cy.selectLanguage(res.lang[0].code, res.lang[0].lan);

            cy.get('.head-links>.country-current').click();
            cy.get('#country-title').contains('Select Your Country').should('be.visible');
            cy.get(`a[id="${res.coun[2].code}"]`).contains(res.coun[2].country).should('be.visible').click();
            cy.url().should('include', 'kw-en');
            cy.get('a[id="country-btn"]').find('span').contains(res.coun[2].country).should('be.visible');

            //Lite title and package amount
            cy.get('#name-lite').contains(res.coun[2].package[0].title).should('be.visible');
            cy.get('#currency-lite').should('contain', `${res.coun[2].package[0].amount} KWD/month`).should('be.visible');

            //Classic title and package amount
            cy.get('#name-classic').contains(res.coun[2].package[1].title).should('be.visible');
            cy.get('#currency-classic').should('contain', `${res.coun[2].package[1].amount} KWD/month`).should('be.visible');

            //Premium title and package amount
            cy.get('#name-premium').contains(res.coun[2].package[2].title).should('be.visible');
            cy.get('#currency-premium').should('contain', `${res.coun[2].package[2].amount} KWD/month`).should('be.visible');
        });
    });
});