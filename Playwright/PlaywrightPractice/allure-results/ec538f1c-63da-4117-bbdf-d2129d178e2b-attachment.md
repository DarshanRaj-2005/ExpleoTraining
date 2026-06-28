# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: IframePractice.test.ts >> Select Dropdown
- Location: tests\IframePractice.test.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//*[@id=\'root\']/div/div/div[2]/iframe').contentFrame().locator('//*[@id=\'root\']/div/div/div/input')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Frame
          - heading "Frame" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]: Let's go for a frame practice 😉
            - iframe [active] [ref=e51]:
              - generic [ref=f1e1]:
                - generic [ref=f1e4]:
                  - heading "Enter Details" [level=1] [ref=f1e5]
                  - generic [ref=f1e6]:
                    - generic [ref=f1e7]:
                      - generic [ref=f1e8]: First Name
                      - textbox "Enter name" [ref=f1e9]: Darshan
                    - generic [ref=f1e10]:
                      - generic [ref=f1e11]: Last Name
                      - textbox "Enter email" [active] [ref=f1e12]: raj
                  - paragraph [ref=f1e14]: You have entered Darshan raj
                  - iframe [ref=f1e16]:
                    - generic [active] [ref=f6e1]:
                      - generic [ref=f6e5]:
                        - generic [ref=f6e6]: Email
                        - textbox "Enter email" [ref=f6e7]
                      - insertion [ref=f6e9]:
                        - generic [ref=f6e12]:
                          - heading "These are topics related to the article that might interest you" [level=2] [ref=f6e14]: Discover more
                          - link "Automation Interview Prep" [ref=f6e15] [cursor=pointer]:
                            - generic "Automation Interview Prep" [ref=f6e16]
                            - img [ref=f6e18]
                          - link "Playwright Quiz Application" [ref=f6e20] [cursor=pointer]:
                            - generic "Playwright Quiz Application" [ref=f6e21]
                            - img [ref=f6e23]
                - insertion [ref=f1e18]:
                  - generic [ref=f1e21]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e23]: Discover more
                    - link "Web Browsers" [ref=f1e24] [cursor=pointer]:
                      - generic "Web Browsers" [ref=f1e25]
                      - img [ref=f1e27]
                    - link "Automation Strategy Consulting" [ref=f1e29] [cursor=pointer]:
                      - generic "Automation Strategy Consulting" [ref=f1e30]
                      - img [ref=f1e32]
                    - link "Learning Platform Access" [ref=f1e34] [cursor=pointer]:
                      - generic "Learning Platform Access" [ref=f1e35]
                      - img [ref=f1e37]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - img [ref=e55]
              - heading "Learning Points" [level=3] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - img [ref=e61]
                - generic [ref=e64]: Target Locator
              - listitem [ref=e65]:
                - img [ref=e66]
                - generic [ref=e69]: switchTo()
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e74]: defaultContent()
              - listitem [ref=e75]:
                - img [ref=e76]
                - generic [ref=e79]: parentFrame()
              - listitem [ref=e80]:
                - img [ref=e81]
                - generic [ref=e84]: Overloading concept - JAVA
            - generic [ref=e85]:
              - link "Watch Tutorial" [ref=e86] [cursor=pointer]:
                - /url: /video/frame
                - img [ref=e87]
                - generic [ref=e89]: Watch Tutorial
              - generic [ref=e90]:
                - text: "Practice ID:"
                - code [ref=e91]: frame
          - generic [ref=e92]:
            - generic:
              - generic:
                - insertion
        - generic:
          - generic:
            - generic:
              - insertion
    - contentinfo [ref=e93]:
      - generic [ref=e94]:
        - paragraph [ref=e95]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e96] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e97] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e98]:
          - link "GitHub" [ref=e99] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e100]
          - link "YouTube" [ref=e103] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e104]
          - link "LinkedIn" [ref=e107] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e108]
          - link "Contact" [ref=e113] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e114] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e116]:
    - generic [ref=e119]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e121]: Discover more
      - link "Open Source" [ref=e122] [cursor=pointer]:
        - generic "Open Source" [ref=e123]
        - img [ref=e125]
      - link "Educational Course Development" [ref=e127] [cursor=pointer]:
        - generic "Educational Course Development" [ref=e128]
        - img [ref=e130]
      - link "Online Learning Modules" [ref=e132] [cursor=pointer]:
        - generic "Online Learning Modules" [ref=e133]
        - img [ref=e135]
  - insertion [ref=e137]:
    - iframe [ref=e140]:
      - generic [ref=f7e3]:
        - button [ref=f7e4]:
          - img [ref=f7e5]
        - generic [ref=f7e7]:
          - button "Replay" [ref=f7e15]:
            - img [ref=f7e17] [cursor=pointer]
          - button "Learn more" [ref=f7e24] [cursor=pointer]
  - generic [ref=e141]:
    - generic [ref=e142] [cursor=pointer]:
      - img [ref=e144]
      - link "Go to shopping options for Online Learning Modules" [ref=e146]: Online Learning Modules
    - button "Close shopping anchor" [ref=e147]
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | test('Select Dropdown', async({page}) => {
  4  | 
  5  |     await page.goto("https://letcode.in/frame")
  6  |     let tot = await page.frames()
  7  |     console.log("Total frames:",tot.length)
  8  | 
  9  |     let myFrame = page.frame("firstFr")
  10 | 
  11 |     await myFrame?.fill("input[name = 'fname']","Darshan")
  12 |     await myFrame?.fill("input[name ='lname']","raj")
  13 | 
  14 |     let frame = page.frameLocator("#firstFr")
  15 | 
  16 |     await expect(frame.locator("//*[@id='root']/div/div/div[1]/p")).toContainText("Darshan")
  17 | 
  18 |     let innerframe = page.frameLocator("//*[@id='root']/div/div/div[2]/iframe")
> 19 |     await innerframe.locator("//*[@id='root']/div/div/div/input").fill("darshan@gmail.com")
     |                                                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  20 |     await expect(innerframe.locator("//*[@id='root']/div/div/div/input")).toHaveValue("darshan@gmail.com")
  21 | })
```