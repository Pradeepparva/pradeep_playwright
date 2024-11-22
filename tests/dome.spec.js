import { test,expect } from "@playwright/test";

test('logic',async({page})=>{
    await page.goto("https://github.com/Pradeepparva?tab=repositories")
})