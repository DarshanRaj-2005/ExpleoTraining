from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
import pytest

@pytest.fixture()
def setupAndteardown(request):
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.implicitly_wait(5)
    driver.get("https://tutorialsninja.com/demo/")
    wait = WebDriverWait(driver, 30)
    request.cls.driver = driver
    request.cls.wait = wait
    yield 
    driver.quit()


    
