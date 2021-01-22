const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signBtn () {return $('ul .signin')}
    get inputUsername () { return $('input.i1')}
    get inputPassword () { return $('input.has-eye')}
    get btnSubmit () { return $('li.buttonsi:nth-child(3)')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.signBtn.click();
        this.inputUsername.setValue('michael@thortful.com');
        this.inputPassword.setValue('ChangeMe123');
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
