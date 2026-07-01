from Pages.LoginPage import LoginPage

class LoginAction:

    def __init__(self,driver):
        self.driver = driver
    
    def open_login(self):
        self.click(self.my_account)
        self.click(self.login)
    
    def login(self,user,passw):
        self.enter_text(LoginPage.email,user)
        self.enter_text(LoginPage.password,passw)
        self.click(LoginPage.login_btn)
    def get_error(self):
        return self.get_text(LoginPage.warning)
    
    

   