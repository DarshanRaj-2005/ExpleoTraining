from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_testcase1():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 15)

    driver.get("https://practice.automationtesting.in/shop/")

    html_page = driver.find_element(
        By.XPATH,
        "//div[@id='woocommerce_product_categories-2']/ul/li[2]/a"
    )
    driver.execute_script("arguments[0].click();", html_page)

    html_form = wait.until(
        EC.visibility_of_element_located(
            (By.XPATH, "//*[@id='content']/ul/li[1]/a[1]/h3")
        )
    )
    assert html_form.is_displayed()

    price = wait.until(
        EC.visibility_of_element_located(
            (By.XPATH, "//h3[text()='HTML5 Forms']/following-sibling::span/span")
        )
    ).text

    assert price == "₹280.00"

    print("The price of the 'HTML5 Forms' book is displayed as ₹280.00.")
    print("Test Passed")

    driver.quit()