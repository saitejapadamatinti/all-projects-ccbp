In this project, let's build a **Gradient Generator** app by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/gradient-generator-output-v0.gif" alt="gradient-generator" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/gradient-generator-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/gradient-generator-lg-output-v0.png)

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

- Initially, the selected gradient direction should be the first value in the given `gradientDirectionsList`
- The initial values for the HTML input elements with type color should be **#8ae323** and **#014f7b** respectively
- When the values are provided for both the input elements with type color, then provided values should be the text content for the respective paragraph elements
- When the **Generate** button is clicked after selecting the direction and picking the colors, the background of the app should have a linear gradient with the selected direction and colors provided

- The `GradientGenerator` component will consist `gradientDirectionsList`. It consists of a list of gradient directions objects with the following properties in each gradient directions object

  |    Key      | Data Type |
  | :--------:  | :-------: |
  | directionId |  String   |
  |    value    |  String   |
  | displayText |  string   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/gradient-generator-component-breakdown-structure.png" alt="gradetient-generator-component-breakdown-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/GradientGenerator/index.js`
- `src/components/GradientGenerator/styledComponents.js`
- `src/components/GradientDirectionItem/index.js`
- `src/components/GradientDirectionItem/styledComponents.js`
</details>

### Quick Tips

<details close>
<summary>Click to view</summary>
<br>

- The HTML input element with the type **color** is designed for the user to select the **color** from a color picker.

  ```jsx
  <input type="color" />
  ```

- You can use the CSS **opacity** property to set the degree of transparency of an element. It has a value in the range of 0 to 1 inclusive.

  ```
   opacity: 0.5;
  ```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The HTML container element for the linear gradient values are applied should have `data-testid` as **gradientGenerator**
- When a gradient direction button is active then the button should have the CSS property opacity with the value **1**
- When a gradient direction button is inactive then the button should have the CSS property opacity with the value **0.5**

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #8ae323; width: 150px; padding: 10px; color: black">Hex: #8ae323</div>
<div style="background-color: #014f7b; width: 150px; padding: 10px; color: white">Hex: #014f7b</div>
<div style="background-color: #ededed; width: 150px; padding: 10px; color: black">Hex: #ededed</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #ffffff79; width: 150px; padding: 10px; color: black">Hex: #ffffff79</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #00c9b7; width: 150px; padding: 10px; color: black">Hex: #00c9b7</div>

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
