from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def waitForElement(locator):
    return wait.until(EC.visibility_of_element_located(locator))

def waitForClickable(locator):
    return wait.until(EC.element_to_be_clickable(locator))

def jsClick(element):
    driver.execute_script("arguments[0].click();", element)

def sendKeys(locator, value):
    waitForElement(locator).send_keys(value)

def waitForElements(locator):
    return wait.until(EC.presence_of_all_elements_located(locator))

driver=webdriver.Chrome()
driver.maximize_window()

wait=WebDriverWait(driver, 15)

driver.get("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC")

username=waitForElement((By.NAME, "username"))
password=waitForElement((By.NAME, "password"))

username.send_keys("darshanraj")
password.send_keys("darshanraj10")

loginButton=waitForClickable((By.XPATH, "//input[@value='Log In']"))
jsClick(loginButton)

billPay=waitForClickable((By.LINK_TEXT,"Bill Pay"))
jsClick(billPay)

sendKeys((By.NAME,"payee.name"),"darshan")
sendKeys((By.NAME,"payee.address.street"),"car street")
sendKeys((By.NAME,"payee.address.city"),"Salem")
sendKeys((By.NAME,"payee.address.state"),"tamilnadu")
sendKeys((By.NAME,"payee.address.zipCode"),"637504")
sendKeys((By.NAME,"payee.phoneNumber"),"6381047815")
sendKeys((By.NAME,"payee.accountNumber"),"14453")
sendKeys((By.NAME,"verifyAccount"),"14453")
sendKeys((By.NAME,"amount"),"100")

payButton=waitForClickable((By.XPATH,"//input[@value='Send Payment']"))
jsClick(payButton)
successMessage=waitForElement((By.XPATH, "//h1[@class='title' or contains(text(),'Bill Payment')]"))
assert successMessage.is_displayed(), "Bill payment failed"
print("Bill Pay Success")

accountsOverview=waitForClickable((By.LINK_TEXT,"Accounts Overview"))
jsClick(accountsOverview)
balances=waitForElements((By.XPATH,"//table[@id='accountTable']//td[2]"))

total=0.0
for balance in balances:
    try:
        print(balance.text,end="\n")
        total+=float(balance.text.replace("$", "").replace(",", "").strip())
    except:
        pass
print("Total Balance : ",total)
print("Test passed")
driver.quit()