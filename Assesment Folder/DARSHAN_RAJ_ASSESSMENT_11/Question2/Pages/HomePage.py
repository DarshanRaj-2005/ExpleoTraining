from selenium.webdriver.common.by import By

class HomePage():

    my_account = (By.XPATH,"//span[text()='My Account']")
    register = (By.LINK_TEXT,"Register")
    login = (By.LINK_TEXT,"Login")
    search_box = (By.NAME,"search")
    search_btn = (By.XPATH,"//button[@class='btn btn-default btn-lg']")

    

    