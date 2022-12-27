In this project, let's build a **Digital Timer App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/digital-timer-output.gif" alt="digital timer output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)" />
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/digital-timer-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/digital-timer-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- The default timer limit value should be 25 minutes
- When the **Start** button is clicked,
  - The **Start** text should change to **Pause** text
  - The **play icon** should be replaced by **pause icon**
  - The **Timer** status should change to **Running**
  - The **Timer** should start running backwards from the timer limit value set
  - If the **Timer** has been paused after starting, it should resume from where it was paused
  - Both the **Plus** and **Minus** buttons should be disabled
- When the **Pause** button is clicked,
  - The **Pause** text should change to **Start** text
  - The **pause icon** should be replaced by **play icon**
  - The **Timer** should stop running backwards
  - The **Timer** status should change to **Paused**
  - Both the **Plus** and **Minus** buttons should be disabled
- When the button with the **Plus** symbol is clicked,
  - The timer limit value should be incremented by one minute
  - The **Timer** should display time with the increased timer limit value
- When the button with the **Minus** symbol is clicked,
  - The timer limit value should be decremented by one minute
  - The **Timer** should display time with the decreased timer limit value
- When the timer limit value is modified by clicking the **Plus** or **Minus** button and the **Start** button is clicked, then the **Timer** should start with the modified timer value
- When the **Timer** ends (displays **00:00**)
  - The **Pause** text should change to **Start** text
  - The **pause icon** should be replaced by **play icon**
  - The **Timer** should stop running backwards
  - The **Timer** status should change to **Paused**
- After completion of **Timer**, when the **Start** button is clicked,
  - The **Start** text should change to **Pause** text
  - The **play icon** should be replaced by **pause icon**
  - The **Timer** should start running backwards from the current timer limit value.
  - The **Timer** status should change to **Running**
- When the **Reset** button is clicked, then
  - The **Pause** text should change to **Start** text
  - The **pause icon** should be replaced by **play icon**
  - The **Timer** should stop running backwards
  - The **Timer** status should change to **Paused**
  - Initial **Timer** limit value should be displayed
  - Both the **Plus** and **Minus** buttons should be enabled

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/DigitalTimer/index.js`
- `src/components/DigitalTimer/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the `box-shadow` CSS property to apply the box-shadow effect to containers

  ```
    box-shadow: 0px 4px 16px 0px #bfbfbf;
  ```

  <br/>
  <img src="https://assets.ccbp.in/frontend/content/react-js/box-shadow-img.png" alt="box shadow" style="width:200px" />

- You can use `Math.floor()` function that returns the **largest integer less than or equal to a given number**

  ```js
  console.log(Math.floor(5.95)); // output: 5
  ```

- You can use the `background-position` CSS property to set the starting position of a background image
  ```
  background-position: center;
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png](https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png)
- [https://assets.ccbp.in/frontend/react-js/play-icon-img.png](https://assets.ccbp.in/frontend/react-js/play-icon-img.png) alt should be **play icon**
- [https://assets.ccbp.in/frontend/react-js/pause-icon-img.png](https://assets.ccbp.in/frontend/react-js/pause-icon-img.png) alt should be **pause icon**
- [https://assets.ccbp.in/frontend/react-js/reset-icon-img.png](https://assets.ccbp.in/frontend/react-js/reset-icon-img.png) alt should be **reset icon**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #cffcf1 ; width: 150px; padding: 10px; color: black">Hex: #cffcf1</div>
<div style="background-color: #1e293b ; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #0f172a ; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #defafe ; width: 150px; padding: 10px; color: black">Hex: #defafe</div>
<div style="background-color: #00d9f5 ; width: 150px; padding: 10px; color: white">Hex: #00d9f5</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
