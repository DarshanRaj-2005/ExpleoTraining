# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testcase3.test.ts >> Invalid Login
- Location: tests\Testcase3.test.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[normalize-space()=\'Login\']')
    - locator resolved to <button type="submit" data-qa="login-button" class="btn btn-default">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic: nhne6rFmgCN2sMQ1l17zI7iqALY6yG5Rr2OoE6SlhzgqtwToQLrzq72Y5OTabEdp
        - textbox "Email Address" [ref=e44]: messi1234567890@gmail.com
        - textbox "Password" [active] [ref=e45]: messi
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: nhne6rFmgCN2sMQ1l17zI7iqALY6yG5Rr2OoE6SlhzgqtwToQLrzq72Y5OTabEdp
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - generic: signup
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f42e1]:
        - generic [active]:
          - generic [ref=f43e1]:
            - generic [ref=f43e2]:
              - generic:
                - img [ref=f43e6] [cursor=pointer]
                - button [ref=f43e8] [cursor=pointer]:
                  - img [ref=f43e9]
            - insertion [ref=f43e17]:
              - generic [ref=f43e18]:
                - link "Click Here" [ref=f43e19]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CeIT-bmU9arqtEL-QssUPrJGMuA29_fLggQHG7o3_oBWHtPyf3AIQASD9tJ6VAWDlgoCA2A6gAYviiqAByAEJqAMByAObBKoEgAJP0H7B0UB3Lic4Gkx3mZDxNXlj6O7BzaRv4Bqoyg1Fo-GUhVsSS6e9cO-QFn7cx-3ax15W8zZAh9W0WA3A9YxHF4n13itZx5nva24q0IFVKwX-Ot-xXviXhJWlyl7KvTK3EEiM-nInOabMbRxlrdpgKiaWRoKFR3_iCa-aeOmi8xkZCBF9xYsPGqQoL4QWANhGIQwOTG-n0R9LPfJ4prJBs6NDw__KZgsELHqEpnq_Vld9hh7bFaqyd-TD4b8HvtM99IMdknEnpTcdIIMnjFZvlqy-ZwG5iZfvC1FnyFrPDZ7wdlN5sGa2h7cK5w7i3iPJw6gQIPXRk2S0W4e8q0J9wATst5qUpQXgBAOIBZH4qpdUkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYyPfWp_WilQNgAYAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAklO6g0TCLmi16f1opUDFT-IrAIdrAgD1_ANAYgOCbATkNj4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRIC6FgYTSIBANAZAQ&ae=1&num=1&cid=CAQSoAIAEQoqgXHyK9YuVliC4OaCr7zf7XPa27ILtq30HTyZwbaX94Gfm7gsN-tBjgI5txIv_hRiEc_nqOZOcFVVQvkhqIFmjY68aG5yXtYVIxBLpsKwvMQTy2bzdGHYN-LLI_cgCRpNab9ppHMELVqp7ZrJV2YHXmFVxjPUSK4cOPEjSmJY_wdIjCtP0ln1ssio3_WDIODmjH1j63mXd4n5ENsIrQud5a37_DphbQemfKV7qa_bCQrtdkF_uUxJPnvHCZJR0WJE_DW7ymEwzCMUp-Cd4aZfOAI137v6R3XDOCXAxMlqBdC496SymOOpe5vKTufhFE_BdjIyKlCMPj0BfYjSjSZH0lKjpBeBQ6M4fURlD--uW11GWs4BYdX89kdNw0gYAQ&sig=AOD64_0Mdq88K26hU83j_raF7lCWMMF5QQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-BwG0PFyp9uBORoVHmLTocbd0ORU83SAMXkXsxXIdBIi6S3aD06AL4EmpECg5yVyE5WUUpCqWmSvTvF68Csj3jScjquTq9WDH_TAJlAiSZghDEWhGSg351n_he1xWpyPHW3yWJjhRuw0aeJnnHjm3d0J1Aq37fcBQ-5U0Iw613klVJAIme9QK9kyPzaP6FeQgZ8_n7Z7tD4aVFx6cVxIN9bCiJmR175Y7Mv29H9a6XiKZHJ1zzsuZJf-X2n1byu6M9rKuSzaNLZUJO3ZX8l_osHRj1qjOZqhsvcaTRHz0zjHXR7nO0&cry=1&dbm_d=AKAmf-DqKM18xELKaDXEOMnMDgT_iEXDa9yI7tLTzsPKT8DafvjD-dSoBk0HTF6zKHQrvTBqN-XCqdCHEI-ZRTgbKLYY1fky663Tu-KfWO2SearxbrYc57XR_kR-x3AiHTIBq3l_QoUkSO1mNP63-D7rY39RNWloO7JsdVr1uyET198TS-82DmoOZxKYOIlSEJPCEGzYFLxnP5Wnzn6BuDXbacKG64qMzukwgjkKBxAypkDqA5sQbCVBKUFp_2EP5ZSO4o48dPrKabVrmn9f7tA43wKJOaODHtqYGTOho1HW1u8LD_CH-tQZZow4nMZ7P9kfV_w7Me81Py60Nofb0MDlV_EvnQfPKBjAurGQ6CLFLylQ9fOTUDjjPY-5XKwVcdhDdqzBzF_w7l-O_GCcmmNe4-yLYMM9SnXtBH1iwn19oN5svTB3UjzDvfoMmc1_ZJt34U71m_EyRQ2tuUn4lJg4kLlUYt6CwQFwJsAjIQsXu_MAZF6FN_rItZ4nmGTd4T1fNCYwy1NJV-u875Rn5A9aOgXXDujdbN9bD0pk04udqznVe5FtruP_h9sru3Ef-v31WKGI95qjmYIjALquro59j4d0XjxYc4jI0qRTk7sJbY7rZiGbUZPYTXtVJMAhvKnZuDlN5BEvyAUsGjPpISfmaIy_GOysIvFlVS5gxQUH_FJM8RJof9PSYq2uK6uV7jut0TJ8SOHvutbg4j11m3-vxuINgOG_5Q&adurl=https://servedby.flashtalking.com/click/7/296969;10263004;4947499;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0g5EHhJ91QS62z9IGtdNQzN&ft_impID=A36EE628-BD25-E066-952D-97CE54C0030C&ft_section=22597516305&g=67507940EFB7B0&random=523532.4144278785&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f43e20]
                - link "AdChoices arrow" [ref=f43e22]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f43e23]
          - iframe
          - img [ref=f43e25]
```

# Test source

```ts
  1  | import { test,expect} from '@playwright/test';
  2  | 
  3  | test("Invalid Login",async({page})=>{
  4  |     await page.goto("https://automationexercise.com/")
  5  |     await page.click("//a[normalize-space()='Signup / Login']");
  6  |     await expect(page.locator("//h2[normalize-space()='Login to your account']")).toContainText("Login to your account")
  7  |     await page.fill("//input[@data-qa='login-email']","messi1234567890@gmail.com")
  8  |     await page.fill("//input[@placeholder='Password']","messi")
> 9  |     await page.click("//button[normalize-space()='Login']")
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  10 |     await expect(page.locator("//p[normalize-space()='Your email or password is incorrect!']")).toContainText("incorrect")
  11 | });
```