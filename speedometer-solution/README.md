In this project, let's build a **Speedometer** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/speedometer-ouput.gif" alt="speedometer output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/speedometer-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/speedometer-lg-output.png)

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

- The speed should initially be 0mph

  > Here mph means Miles per hour

- When Accelerate button is clicked,
  - If the speed is less than 200mph, the speed should be increased by 10mph
  - If the speed is equal to 200mph, the speed should not be increased
- When Apply Brake button is clicked
  - If the speed is greater than 0mph, then the speed should be decreased by 10mph
  - If the speed is equal to 0mph, the speed should not be decreased

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Speedometer/index.js`
- `src/components/Speedometer/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the below cursor CSS property for buttons to set the type of mouse cursor, to show when the mouse pointer is over an element,

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below outline CSS property for buttons and input elements to remove the highlighting when the elements are clicked,

  ```
    outline: none;
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/speedometer-img.png](https://assets.ccbp.in/frontend/react-js/speedometer-img.png) alt should be **speedometer**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #07080c ; width: 150px; padding: 10px; color: white">Hex: #07080c</div>
<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #cbd5e1 ; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #0b69ff ; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #94a3b8 ; width: 150px; padding: 10px; color: white">Hex: #94a3b8</div>

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
