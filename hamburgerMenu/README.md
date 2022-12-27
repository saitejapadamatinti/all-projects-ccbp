In this project, let's build a **Hamburger Menu** app by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-output-v0.gif" alt="hamburger menu output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-about-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-home-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - About](https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-about-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Menu](https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-popup-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-not-found-lg-output.png)

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

- Initially, the Home Route should be displayed
- When hamburger icon button in the header is clicked, then the popup should be opened
  <div style="text-align: center;">
      <img src="https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-popup-img.png" alt="popup" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
  </div>
  <br/>
- When the **Home** is clicked, then the page should be navigated to the Home Route
- When the **About** is clicked, then the page should be navigated to the About Route
- When the close button is clicked, then the popup should be closed
- When the website logo in the Header is clicked, then the page should be navigated to the Home Route

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-component-structure-breakdown-home.png" alt="component structure breakdown home" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/hamburger-menu-component-structure-breakdown-about.png" alt="component structure breakdown about" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Header/index.js`
- `src/components/Header/index.css`
- `src/components/Home/index.js`
- `src/components/Home/index.css`
- `src/components/About/index.js`
- `src/components/About/index.css`
- `src/components/NotFound/index.js`
- `src/components/NotFound/index.css`
</details>

### Quick Tips

<details close>
<summary>Click to view</summary>
<br>

To build this project, take a look at the <a href='https://learning.ccbp.in/frontend-development/course?c_id=2f4192f7-7495-49ca-a6ce-6b74005e25f1&s_id=b01fca1c-aa5c-4d79-b81e-0220e7649bd0&t_id=416f0cab-8425-413b-9157-c7b4d4ae4467' target="_blank">React Popup</a> reading material

- To style popup content use `.popup-content` class

```jsx
<Popup
  modal
  trigger={
    //write code here
  }
  className="popup-content"
>
  //write code here
</Popup>
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` Route should consist of `/` in the URL path
- `About` Route should consist of `/about` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`
- The hamburger icon button should have the `testid` as **hamburgerIconButton**
- The close button in the popup should have the `testid` as **closeButton**
- `GiHamburgerMenu` from react-icons should be used for **Hamburger Icon** in the Header
- `IoMdClose` from react-icons should be used for **Close Icon** in the Popup
- `AiFillHome` from react-icons should be used for **Home Icon** in the Popup
- `BsInfoCircleFill` from react-icons should be used for **About Icon** in the Popup

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png](https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png) alt should be **website logo**
- [https://assets.ccbp.in/frontend/react-js/home-sm-img.png](https://assets.ccbp.in/frontend/react-js/home-sm-img.png) alt should be **home**
- [https://assets.ccbp.in/frontend/react-js/home-lg-img.png](https://assets.ccbp.in/frontend/react-js/home-lg-img.png) alt should be **home**
- [https://assets.ccbp.in/frontend/react-js/about-sm-img.png](https://assets.ccbp.in/frontend/react-js/about-sm-img.png) alt should be **about**
- [https://assets.ccbp.in/frontend/react-js/about-lg-img.png](https://assets.ccbp.in/frontend/react-js/about-lg-img.png) alt should be **about**
- [https://assets.ccbp.in/frontend/react-js/not-found-img.png](https://assets.ccbp.in/frontend/react-js/not-found-img.png) alt should be **not found**

</details>

<details>
<summary>Colors</summary>

<br/>
<div style="background-color: #dcdcdc; width: 150px; padding: 10px; color: black">Hex: #dcdcdc</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: black">Hex: #616e7c</div>

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
