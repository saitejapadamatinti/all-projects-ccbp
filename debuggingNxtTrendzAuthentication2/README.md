In this project, let's fix the **Nxt Trendz Authentication** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-output-v2.gif" alt="nxt trendz authentication output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be fixed</summary>
<br/>

Fix the given code to have the following functionality

- When an unauthenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the Login Route
- When an authenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the respective route
- When an authenticated user tries to access the Login Route, then the page should be navigated to the Home Route
- When the **Logout** button is clicked, then the page should be navigated to the Login Route
- When a random path is provided in the URL, then the page should be navigated to the Not Found Route

</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- There are `8` bugs to be fixed to achieve the functionality and the UI that is expected

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- User credentials

  ```text
   username: rahul
   password: rahul@2021
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png) alt should be **clothes that get you noticed**

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
