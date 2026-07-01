import pytest
from Actions.LoginAction import LoginAction

@pytest.mark.regression
@pytest.mark.parametrize("email,password,expected",[("messi1@gmail.com","messi","success")])
def test_login(setup,email,password,expected):
    driver = setup
    login = LoginAction(driver)
    login.login(email,password)
    if expected == "success":
        assert "account/account" in driver.current_url
    else:
        assert "Warning" in login.get_error()