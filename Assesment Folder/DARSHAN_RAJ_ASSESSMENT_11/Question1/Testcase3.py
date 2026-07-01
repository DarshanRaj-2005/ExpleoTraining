from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_testcase3():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 15)

    driver.get("https://practice.automationtesting.in/shop/")

    html_page = driver.find_element(
        By.XPATH,
        "//div[@id='woocommerce_product_categories-2']/ul/li[2]/a"
    )
    driver.execute_script("arguments[0].click();", html_page)

    wait.until(
        EC.visibility_of_element_located(
            (By.XPATH, "//*[@id='content']/ul")
        )
    )

    book_num = driver.find_element(
        By.XPATH,
        "//*[@id='woocommerce_product_categories-2']/ul/li[2]/span"
    )

    print(
        "The number of books displayed after filtering equals the count specified in the category label is",
        book_num.text.replace("(", "").replace(")", "")
    )
    print("Test Passed")

    driver.quit()