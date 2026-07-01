import {test,expect} from "../fixtures/baseFixtures"


test.describe("Search", ()=> {
    test.beforeEach(async({homepage})=> {
        await homepage.navigation()
    })

    test("Search Macbook @smoke", async({homepage,searchresultpage}) => {
        await homepage.search.fill("MacBook")
        await homepage.searchbtn.click()

        const products = await searchresultpage.productlist.allTextContents();
        console.log(products)

        await expect(products).toContain("MacBook")
        console.log("The Search Results page displays at least one product containing the searched keyword.")
    })
})
