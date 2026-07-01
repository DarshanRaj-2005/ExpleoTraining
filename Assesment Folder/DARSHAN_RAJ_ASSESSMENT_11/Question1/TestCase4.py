from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC


def test_testcase4():
    driver = webdriver.Chrome()
    driver.maximize_window()
    wait = WebDriverWait(driver, 15)

    driver.get("https://practice.automationtesting.in/shop/")

    select_price = driver.find_element(By.XPATH, "//*[@id='content']/form/select")
    select = Select(select_price)
    select.select_by_visible_text("Sort by price: low to high")

    prices = wait.until(
        EC.visibility_of_all_elements_located(
            (By.XPATH, "//span[@class='woocommerce-Price-amount amount']")
        )
    )

    flag = True

    for i in range(1, len(prices)):
        print(float(prices[i - 1].text[1:]))

        if float(prices[i - 1].text[1:]) > float(prices[i].text[1:]):
            flag = False

    assert flag

    print("The books are rearranged and displayed in ascending order of price.")
    print("Test Passed")

    driver.quit()