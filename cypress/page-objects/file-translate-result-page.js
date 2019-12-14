class FileTranslateResultPage {

    verifyResult(result) {
        cy.get('pre').contains(result)

        return this
    }
}

export default FileTranslateResultPage