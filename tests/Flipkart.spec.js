import { test,expect } from "@playwright/test";
// to fetch the price or product names displayed in the page
// www.flipkart.com

test('Fetch product list and price',async({page})=>{

    //Launching the Application and validating whether right page is opened.
    await page.goto("https://www.flipkart.com/")
    await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")

    await page.fill('[name="q"]',"iphone 14 5g")
    await page.keyboard.press("Enter")

    await page.waitForSelector("//div['container']/div[@class='KzDlHZ']")
    let products=await page.$$("//div['container']/div[@class='KzDlHZ']")
    let men=[]
    for(let product of products){
        let load=await product.textContent()
        men.push(load)
    }
    await page.waitForSelector("//div['container']/div[@class='Nx9bqj _4b5DiR']")
    let prices=await page.$$("//div['container']/div[@class='Nx9bqj _4b5DiR']")
    let women=[]
    for(let price of prices){
        let pox=await price.textContent()
        women.push(pox)
    }
    console.log(men)
    console.log(women)
})

//to show the dynamic brand which we choose (dynamic xpath)
// www.amazon.com
test('dynamic X-path',async({page})=>{
    await page.goto("https://www.flipkart.com/")
    // await expect(page).toHaveTitle("")
})


