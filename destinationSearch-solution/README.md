In this project, let's build a **Destination Search** app by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/destination-search-output-v2.gif" alt="destination search output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/destination-search-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/destination-search-lg-output-v2.png)

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

- Initially, all destinations in the `destinationsList` should be displayed
- When a value is provided in the search input, only the destinations whose names contain the value provided in the search input should be displayed irrespective of the case
- The `DestinationSearch` component receives the `destinationsList` as a prop. It consists of a list of destination objects with the following properties in each destination object

  |  Key   | Data Type |
  | :----: | :-------: |
  |   id   |  Number   |
  |  name  |  String   |
  | imgUrl |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/destination-search-component-structure-v2-img.png" alt="destination search component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/DestinationSearch/index.js`
- `src/components/DestinationSearch/index.css`
- `src/components/DestinationItem/index.js`
- `src/components/DestinationItem/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The search for the destination should be case insensitive. You can use the `toLowerCase` method to convert a string into lower case letters.

  ```js
  const text = 'Learn JavaScript'
  console.log(text.toLowerCase()); // learn javascript
  ```

- Each `DestinationItem` should have an HTML image element with `alt` attribute value as the value of the key **name** in `destinationsList`

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png](https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png) alt should be **search icon**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #252627; width: 150px; padding: 10px; color: white">Hex: #252627</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
- Open Sans

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
