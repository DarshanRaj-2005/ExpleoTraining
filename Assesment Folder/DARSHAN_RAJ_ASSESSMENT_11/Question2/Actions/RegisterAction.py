from Pages.RegisterPage import RegisterPage
from Pages.HomePage import HomePage
from Actions.BaseActions import BaseActions

class RegisterAction(BaseActions):

    def __init__(self,driver):
        self.driver = driver
    
    def open_register(self):
        self.click(HomePage.my_account)
        self.click(HomePage.register)
    
    def register_user(self,fname,lname,email,phone,passw):

        self.enter_text(RegisterPage.firstname,fname)
        self.enter_text(RegisterPage.lastname,lname)
        self.enter_text(RegisterPage.email,email)
        self.enter_text(RegisterPage.telephone,phone)
        self.enter_text(RegisterPage.password,passw)
        self.enter_text(RegisterPage.confirm,passw)
        self.click(RegisterPage.privacy)
        self.click(RegisterPage.continue_btn)

    def get_success_message(self):
        return self.get_text(RegisterPage.success_msg)
        
    


    