const {test,expect}=require("@playwright/test")

test('keyboard action',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/keyboard?sublist=0")
    await page.locator("//input[@name='handleInput']").press('Enter')
    await page.pause(3000);
    
})