In this project, let's build a **Random Number Generator** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/random-number-generator-output-v2.gif" alt="random-no-generator" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/random-number-generator-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/random-number-generator-lg-output-v2.png)

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

- Initially, the number displayed should be **0**
- When **Generate** button is clicked, a random number should be generated in the range of 0 to 100 and displayed
</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/RandomNumberGenerator/index.js`
- `src/components/RandomNumberGenerator/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use `Math.random()` function to get a random number (float value) in range 0 to less than 1 (`0 <= randomNumber < 1`)

  ```
   Math.random()
  ```

- You can use `Math.ceil()` function to round a **number up to the next largest integer**

  ```js
  console.log(Math.ceil(95.906698007537561)); // 96
  ```

- You can use the `box-shadow` CSS property to apply the box-shadow effect to containers

  ```
    box-shadow: 0px 4px 16px 0px #bfbfbf;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/box-shadow-img.png" alt="box shadow" style="width:200px" />

- You can use the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/random-no-generator-bg.png](https://assets.ccbp.in/frontend/react-js/random-no-generator-bg.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #e4ebf3; width: 150px; padding: 10px; color: black">Hex: #e4ebf3</div>
<div style="background-color: #eaebed; width: 150px; padding: 10px; color: black">Hex: #eaebed</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #333333; width: 150px; padding: 10px; color: white">Hex: #333333</div>

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
