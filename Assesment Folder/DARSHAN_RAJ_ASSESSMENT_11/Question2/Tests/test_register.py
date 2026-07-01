import pytest

from Actions.RegisterAction import RegisterAction

@pytest.mark.smoke
def test_registration(setup):
    driver = setup
    reg = RegisterAction(driver)
    reg.open_register()
    reg.register_user("darshan","raj","mess10","9876543210","messi10")

    assert "Your Account Has Been Created!" in reg.get_success_message()