// const signinPage = require("../pages/signin.page");
//POM
   
   describe('Zoopla homepage sign in', () => {
    it('should open the main url', () => {
    browser.url('http://zoopla.co.uk/'); 
   });
    
  

    it('should verify cookies overlay exist', () =>{
      const cookieOverlay = $('ui-form ui-cookie-consent');
      cookieOverlay.isExisting(); 
        //verify that cookie overlay exists.
    });
     

    it('should click accept all cookies button', () =>{
      const cookieBtn = $$('button.ui-button-primary')[1];
      cookieBtn.click();
    });
      

    it('should click sign in button',() =>{
      const signInButton = $('li:nth-child(4) a.css-18j99f0.e11d441i1');
      signInButton.click();   
    });



    it('should verify successful redirect to sign in page',() =>{
    browser.url('/signin'); 
     
    });
    
  
  
    it('should input username',() =>{
      const emailField = $('#signin_email');
      emailField.addValue('michaelalabi82@gmail.com'); 
      // Input Email address
    });
    


    it('should input password',() =>{
       const passwordField = $('#signin_password');
       passwordField.addValue('Makaveli01'); 
      //Input Password

    });
    

      it('should submit sign in form', () =>{
        const loginSubmitButton = $('#signin_submit');
        loginSubmitButton.click();
        browser.pause('3000');
      
    });
    
    
   
   });

  

  
