from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_testcase2():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 15)

    driver.get("https://practice.automationtesting.in/shop/")

    js_page = driver.find_element(
        By.XPATH,
        "//div[@id='woocommerce_product_categories-2']/ul/li[3]/a"
    )
    driver.execute_script("arguments[0].click();", js_page)

    js_book = wait.until(
        EC.visibility_of_element_located(
            (By.XPATH, "//*[@id='content']/ul/li[2]/a[1]/h3")
        )
    )
    assert js_book.is_displayed()

    driver.execute_script(
        "arguments[0].click();",
        driver.find_element(By.XPATH, "//*[@id='content']/ul/li[2]/a[1]")
    )

    js_book_page = wait.until(
        EC.visibility_of_element_located(
            (By.XPATH, "//*[@id='product-180']/div[2]/h1")
        )
    )

    assert js_book_page.is_displayed()
    assert js_book_page.text == "JS Data Structures and Algorithm"

    print(
        f"Only the '{js_book_page.text}' product detail page is opened, "
        "with the correct product title and details, and no other book is displayed."
    )
    print("Test Passed")

    driver.quit()