import {When, Then} from "@cucumber/cucumber"
import { CustomWorld } from "../world/CustomWorld";
import {expect} from "@playwright/test"

When('User sorts products by {string}', async function (this:CustomWorld,option:string) {
    await this.logger.info("User sorting products by "+option)
    await this.homePage.sortProductsBy(option)
});

Then('products should be sorted in {string} order by {string}', async function (this:CustomWorld,order:string,field:string) {

    if(field==="name"){
        const names=await this.homePage.getProductNames()
        let isSorted=true

        for(let i=0;i<names.length-1;i++){
            if(order==="ascending"){
                if(names[i]!>names[i+1]!){
                    isSorted=false
                }
            }
            else if(order==="descending"){
                if(names[i]!<names[i+1]!){
                    isSorted=false
                }
            }
        }

        await this.logger.info("Products sorted by name in "+order+" order : "+isSorted)
        expect(isSorted).toBeTruthy()
    }
    else if(field==="price"){
        const prices=await this.homePage.getProductPrices()
        let isSorted=true

        for(let i=0;i<prices.length-1;i++){
            if(order==="ascending"){
                if(prices[i]!>prices[i+1]!){
                    isSorted=false
                }
            }
            else if(order==="descending"){
                if(prices[i]!<prices[i+1]!){
                    isSorted=false
                }
            }
        }

        await this.logger.info("Products sorted by price in "+order+" order : "+isSorted)
        expect(isSorted).toBeTruthy()
    }
});
