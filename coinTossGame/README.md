In this project, let's build a **Coin Toss Game** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-output.gif" alt="coin toss game output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-lg-output.png)

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

- Initially, the app should have heads image and total, heads, tails counts as **0**
- When the **Toss Coin** button is clicked, then the toss result should be generated using the below expression

  ```
  const tossResult = Math.floor(Math.random() * 2)
  ```

- If the number generated from the given expression is `0` then the result should be `heads` or else the result should be `tails`
- When the **Toss Coin** is clicked, and the result is `heads` then
  - The heads image should be displayed
  - The heads count should be incremented by one
  - The total should be incremented by one
- When the **Toss Coin** is clicked, and the result is `tails` then
  - The tails image should be displayed
  - The tails count should be incremented by one
  - The total should be incremented by one

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/CoinToss/index.js`
- `src/components/CoinToss/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The toss result image should have the alt attribute value as **toss result**

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/heads-img.png](https://assets.ccbp.in/frontend/react-js/heads-img.png)
- [https://assets.ccbp.in/frontend/react-js/tails-img.png](https://assets.ccbp.in/frontend/react-js/tails-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #e2a139; width: 150px; padding: 10px; color: white">Hex: #e2a139</div>
<div style="background-color: #f9d423; width: 150px; padding: 10px; color: black">Hex: #f9d423</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #a35200; width: 150px; padding: 10px; color: white">Hex: #a35200</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>

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
