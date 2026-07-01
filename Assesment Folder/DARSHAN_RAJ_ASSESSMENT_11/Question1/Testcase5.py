from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_testcase5():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 15)

    driver.get("https://practice.automationtesting.in/shop/")

    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    subscribe_button = wait.until(
        EC.visibility_of_element_located(
            (By.XPATH, "//input[@type='submit']")
        )
    )

    assert subscribe_button.is_displayed()

    print("The Subscribe button is present and visible at the bottom of the page.")
    print("Test Passed")

    driver.quit()