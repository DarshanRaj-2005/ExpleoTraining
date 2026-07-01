from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec

print("opening browser")
driver = webdriver.Chrome()
driver.get("https://automationexercise.com/")
driver.maximize_window()
wait = WebDriverWait(driver,30)

driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
sub = wait.until(ec.visibility_of_element_located((By.XPATH, "//h2[text()='Subscription']")))
assert sub.is_displayed()
print("Subscription is present")
arrow = driver.find_element(By.ID, "scrollUp")
driver.execute_script("arguments[0].click();",arrow)
text = wait.until(ec.visibility_of_element_located((By.XPATH,"//*[@id='slider-carousel']/div/div[2]/div[1]/h2")))
assert text.is_displayed()
print("Text is present")
print("Test Passed")
driver.quit()