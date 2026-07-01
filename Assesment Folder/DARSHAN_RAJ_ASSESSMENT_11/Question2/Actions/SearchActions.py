from Pages.SearchPage import SearchPage

class SearchAction:

    def __init__(self,driver):
        self.driver = driver

    def search_product(self, product):
        self.enter_text(self.search_box, product)
        self.click(self.search_btn)

    def get_products(self):
        elements = self.driver.find_elements(*SearchPage.products)
        return [e.text for e in elements]