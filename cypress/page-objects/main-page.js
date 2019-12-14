class MainPage {

    clearSourceFieldAndVerify() {
        cy.get('#source')
            .clear()
            .should('be.empty')

        return this
    }

    clickSwap() {
        cy.get('.swap.jfk-button-narrow.jfk-button-standard.jfk-button')
            .click()

        return this
    }

    checkResultIsEmpty() {
        cy.get('.empty-placeholder')
            .should('be.visible')

        return this
    }

    checkMatchesRecognizedLanguage(recognizedLanguage) {
        cy.get('[value="auto"]')
            .should('have.text', 'Rozpoznáno: ' + recognizedLanguage)

        return this
    }

    selectCzechSource() {
        cy.get('.sl-more.tlid-open-source-language-list')
            .click()
        cy.get('#sl_list-search-box')
            .type('čeština')
        cy.get('.outer-wrap > :nth-child(1) > :nth-child(3) > .language_list_item_wrapper-cs')
            .click()

        return this
    }

    selectCzechResult() {
        cy.get('.tl-more')
            .click()
        cy.get('#tl_list-search-box')
            .type('čeština')
        cy.get(':nth-child(2) > :nth-child(3) > .language_list_item_wrapper-cs > .language_list_item')
            .click()

        return this
    }

    selectEnglishResult() {
        cy.get('.tl-more.tlid-open-target-language-list')
            .click()
        cy.get('#tl_list-search-box')
            .type('angličtina')
        cy.get(':nth-child(2) > :nth-child(3) > .language_list_item_wrapper-en > .language_list_item')
            .click()

        return this
    }

    selectGermanResult() {
        cy.get('.tl-more.tlid-open-target-language-list')
            .click()
        cy.get('#tl_list-search-box')
            .type('němčina')
        cy.get(':nth-child(2) > :nth-child(3) > .language_list_item_wrapper-de > .language_list_item')
            .click()

        return this
    }

    selectAutomaticRecognition() {
        cy.get('[value="auto"]')
            .click()
        cy.get('.language_list_item_wrapper-auto > .language_list_item')
            .click()

        return this
    }

    selectDocumentTranslation() {
        cy.get('.tlid-input-button-docs')
            .click()

        return this
    }

    typeSourceText(text) {
        cy.get('#source')
            .type(text)

        return this
    }

    uploadFile(fileName) {
        cy.fixture(fileName).then(fileContent => {
            cy.get('#tlid-file-input').upload({fileContent, fileName, mimeType: 'text/plain'})
        })
        cy.get('.tlid-translate-doc-button')
            .click()

        return this
    }

    verifyResultText(expectedText) {
        cy.get('.tlid-translation').should(($result) => {
            var text = $result.text()
            text = text.toLowerCase()
            expectedText = expectedText.toLowerCase()

            expect(text).to.equal(expectedText)
        })

        return this
    }

    verifySourceText(sourceText) {
        cy.get('.text-dummy').should(($result) => {
            var text = $result.text()
            text = text.toLowerCase()
            sourceText = sourceText.toLowerCase()

            expect(text).to.equal(sourceText)
        })

        return this
    }

    visitAndVerifyTitle() {
        cy.visit('https://translate.google.cz/')
        cy.title()
            .should('contain', 'Google')
    }
}

export default MainPage