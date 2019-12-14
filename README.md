# Google Translate website testing

Set of tests of the Google Translate website written in Cypress.

## Requirements

[Node.js](https://nodejs.org/dist/v12.13.1/node-v12.13.1.pkg) has to be installed.  
Run
 ```bash
npm install
 ```

## Usage

```bash
npx cypress run
npx cypress open
```
*run* for running all the test via the command line.  
*open* for opening the Cypress test runner.

Test suite:  
- manual language pick 
- language swap test
- language recognition:
    - spanish
    - german
- manual language change
- document translation
- text deletion test