import 'cypress-file-upload'
import MainPage from '../page-objects/main-page'
import FileTranslateResultPage from '../page-objects/file-translate-result-page'

describe('Google Translate page', function () {

    const mainPage = new MainPage
    const fileTranslateResultPage = new FileTranslateResultPage

    const fileName = 'test.txt'
    const czechWord = 'Ahoj'
    const englishWord = 'Hello'
    const germanWord = 'Hallo'
    const spanishWord = 'Hola'

    beforeEach(function () {
        mainPage.visitAndVerifyTitle()
    })

    it('pick language manually', function () {
        mainPage.selectCzechSource()
            .typeSourceText(czechWord)
            .selectEnglishResult()
            .verifyResultText(englishWord)
    })
    it('swap languages', function () {
        mainPage.selectCzechSource()
            .typeSourceText(czechWord)
            .selectEnglishResult()
            .verifyResultText(englishWord)
            .clickSwap()
            .verifySourceText(englishWord)
            .verifyResultText(czechWord)
    })
    it('recognize language automatically - spanish', function () {
        mainPage.selectAutomaticRecognition()
            .typeSourceText(spanishWord)
            .checkMatchesRecognizedLanguage('španělština')
            .selectCzechResult()
            .verifyResultText(czechWord)
    })
    it('recognize language automatically - german', function () {
        mainPage.selectAutomaticRecognition()
            .typeSourceText(germanWord)
            .checkMatchesRecognizedLanguage('němčina')
            .selectCzechResult()
            .verifyResultText(czechWord)
    })
    it('change languages', function () {
        mainPage.selectCzechSource()
            .typeSourceText(czechWord)
            .selectEnglishResult()
            .verifyResultText(englishWord)
            .selectGermanResult()
            .verifyResultText('Hi')
    })
    it('translate document', function () {
        mainPage.selectDocumentTranslation()
            .selectEnglishResult()
            .uploadFile(fileName)
        fileTranslateResultPage.verifyResult(englishWord)
    })
    it('delete typed text', function () {
        mainPage.selectCzechSource()
            .typeSourceText(czechWord)
            .selectEnglishResult()
            .verifyResultText(englishWord)
            .clearSourceFieldAndVerify()
            .checkResultIsEmpty()
    })
})