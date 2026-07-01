from selenium.webdriver.common.by import By
class LoginPage():

    email = (By.ID,"input-email")
    password = (By.ID,"input-password")
    login_btn = (By.XPATH,"//input[@value='Login']")
    warning = (By.XPATH,"//div[contains(@class,'alert-danger')]")