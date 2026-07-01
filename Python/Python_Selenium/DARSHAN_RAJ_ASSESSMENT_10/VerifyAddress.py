from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec



print("opening browser")
driver = webdriver.Chrome()
driver.get("https://automationexercise.com/")
driver.maximize_window()
wait = WebDriverWait(driver,15)

homebtn = driver.find_element(By.XPATH,"//div[@class='col-sm-8']/div/ul/child::li[1]")
assert homebtn.is_displayed()
print("Home page loaded")

signinbtn = driver.find_element(By.XPATH,"//div[@class='col-sm-8']/div/ul/child::li[4]")
signinbtn.click()

username = wait.until((ec.visibility_of_element_located(By.NAME,"name")))
username.send_keys("jayapal")

email = driver.find_element(By.XPATH,"//input[@name='name']/following::input[1]")
email.send_keys("jayapal1@gmail.com")

submitbtn = driver.find_element(By.XPATH,"//input[@name='name']/following::button[1]")
submitbtn.click()

    password = driver.find_element(By.ID,"password")
    password.send_keys("jayapal123")

    firstname = driver.find_element(By.ID,"first_name")
    firstname.send_keys("jayapal")

    lastname = driver.find_element(By.ID,"last_name")
    lastname.send_keys("jai")

    address = driver.find_element(By.ID,"address1")
    address.send_keys("10,near bmw car house")

    state = driver.find_element(By.ID,"state")
    state.send_keys("tamil nadu")

    city = driver.find_element(By.ID,"city")
    city.send_keys("salem")

    zipcode = driver.find_element(By.ID,"zipcode")
    zipcode.send_keys("123456")

    mobileno = driver.find_element(By.ID,"mobile_number")
    mobileno.send_keys("1234567890")

    createaccbtn = driver.find_element(By.XPATH,"//input[@name='form_type']/following::button[1]")
    createaccbtn.click()

    successmes = wait.until(ec.visibility_of_element_located((By.XPATH,"//*[@id='form']/div/div[1]/div/h2")))
    successmes.text

    btn = driver.find_element(By.XPATH,"//*[@id='form]/div/div[1]/div/div/a")
    btn.click()

    account = wait.until(ec.visibility_of_element_located((By.XPATH,"//div[@class='col-sm-8']/div/ul/child::li[10]")))
    assert account.is_displayed()
    print("Account Created")
    
    addtocart = driver.find_element(By.XPATH,"//a[@data-product-id='1']")
    driver.execute_script("arguments[0].click;",addtocart)

    continuebtn = wait.until(ec.element_to_be_clickable((By.XPATH,"//*[@id='cartModal']/div/div/div[3]/button")))
    continuebtn.click()

    cart = driver.find_element(By.XPATH,"//div[@class='col-sm-8']/div/ul/child::li[3]")
    cart.click()

    proceedbtn = wait.until(ec.visibility_of_element_located((By.XPATH,"//a[contains(text(),'Proceed To Checkout')]")))
    proceedbtn.click()

    deliveryadd = driver.find_element(By.XPATH,"//ul[@id='address_delivery']/li[4]")
    assert deliveryadd.text == "10,near bmw car house"

    billingadd = driver.find_element(By.XPATH,"//ul[@id='address_invoice']/li[4]")
    assert billingadd.text == "10,near bmw car house"

    delbtn = driver.find_element(By.XPATH,"//div[@class='col-sm-8']/div/ul/child::li[5]")
    delbtn.click()

    delmess = wait.until(ec.visibility_of_element_located((By.XPATH,"//*[@id='form;]/div/div[1]/div/h2")))
    assert delmess.is_displayed()

    btn2 = driver.find_element(By.XPATH,"//*[@id='form']/div/div[1]/div/div/a")
    btn2.click()

    print("Test Passed")










