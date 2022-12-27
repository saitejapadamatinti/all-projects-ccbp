The goal of this coding exam is to quickly get you off the ground with **Lists and Keys** in React JS.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/visit-countries-output.gif" alt="visit countries" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/visit-countries-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Visited Countries View](https://assets.ccbp.in/frontend/content/react-js/visit-countries-no-visited-countries-lg-output.png)

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

- Initially, the list of given countries should be displayed.
  - If the country is not visited, it should be displayed with the **Visit** button.
  - If the country is visited, it should be displayed with the text **Visited** and also should be displayed in the visited countries.
- When a **Visit** button of the country is clicked,
  - The country should be added in the visited countries.
  - The **Visit** button of a respective country should be replaced with the text **Visited**.
- When a **Remove** button in one of the visited countries is clicked,
  - The respective visited country should be removed from the visited countries.
  - The **Visited** text of a respective visited country should be replaced with a **Visit** button.
- When all the visited countries are removed, then [No Visited Countries View](https://assets.ccbp.in/frontend/content/react-js/visit-countries-no-visited-countries-lg-output.png) should be displayed.
- The `App` component consists of the `initialCountriesList`. It consists of a list of countries with the following properties in each country object.

  |    key    | DataType |
  | :-------: | :------: |
  |    id     |  String  |
  |   name    |  String  |
  | imageUrl  |  String  |
  | isVisited | Boolean  |

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instruction is required for the tests to pass**

- The image of each visited country should have the `alt` attribute value as **thumbnail**.

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #161624; width: 150px; padding: 10px; color: white">Hex: #161624</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #1f1f2f; width: 150px; padding: 10px; color: white">Hex: #1f1f2f</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: black">Hex: #3b82f6</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: white">Hex: #94a3b8</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>

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
