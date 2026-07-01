from selenium.webdriver.common.by import By

class RegisterPage():

    firstname = (By.ID,"input-firstname")
    lastname = (By.ID,"input-lastname")
    email = (By.ID,"input-email")
    telephone = (By.ID,"input-telephone")
    password = (By.ID,"input-password")
    confirm = (By.ID,"input-confirm")
    privacy = (By.NAME,"agree")
    continue_btn = (By.XPATH,"//input[@value='Continue']")
    success_msg = (By.XPATH,"//h1")
    

    