In this project, let's build **Reusable Banners** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/resuable-banners-lg-output.png" alt="resuable-banners-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/reusable-banners-sm-output-v2.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/resuable-banners-lg-output.png)

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

- The App is provided with `bannerCardsList`. It consists of a list of bannerCardItem objects with the following properties in each bannerCardItem object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |     id      |  Number   |
  | headerText  |  String   |
  | description |  String   |
  |  className  |  String   |

- The value of the key `id` should be used as a key to the `BannerCardItem` component.
- The value of the key `className` should be used as a className for the HTML list item in the `BannerCardItem` component.

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/App.css`
- `src/components/BannerCardItem/index.js`
- `src/components/BannerCardItem/index.css`
</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #cbced2; width: 150px; padding: 10px; color: black">Hex: #cbced2</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #326a9d; width: 150px; padding: 10px; color: white">Hex: #326a9d</div>

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
