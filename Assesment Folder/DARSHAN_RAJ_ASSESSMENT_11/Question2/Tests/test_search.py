import pytest
from Actions.SearchActions import SearchAction

@pytest.mark.smoke
def test_search_product(setup):

    driver = setup
    SearchAction(driver).search_product("MacBook")
    products = SearchAction(driver).get_products()
    assert any("MacBook" in p for p in products)