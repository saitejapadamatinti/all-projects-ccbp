In this project, let's build **Authentication Functionality** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-output-v2.gif" alt="authentication-functionality-desktop-output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Login Route](https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-lg-login-output.png)
- [Home Route](https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-lg-home-output-v2.png)
- [About Route](https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-lg-about-output-v2.png)
- [Not Found Route](https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-lg-not-found-output.png)

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

- When an unauthenticated user tries to access the Home Route or About Route, then the page should be navigated to the Login Route
- When an authenticated user tries to access the Home Route, or About Route, then the page should be navigated to the respective route
- When an authenticated user tries to access the Login Route, then the page should be redirected to Home Route
- When the **Logout** button is clicked then the page should be navigated to the Login Route
- When a random path is provided in the URL then the page should be navigated to the Not Found Route
</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**loginApiUrl**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-login-home-component-structure.png" alt="authentication functionality login and home components structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-about-not-found-component-structure.png" alt="authentication functionality about and not found components structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Login/index.js`
- `src/components/Login/index.css`
- `src/components/Header/index.js`
- `src/components/Header/index.css`
- `src/components/Home/index.js`
- `src/components/Home/index.css`
- `src/components/About/index.js`
- `src/components/About/index.css`
- `src/components/LogoutButton/index.js`
- `src/components/LogoutButton/index.css`
- `src/components/NotFound/index.js`
- `src/components/NotFound/index.css`
- `src/components/ProtectedRoute/index.js`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `Login` route should consist of `/login` in the URL path
- `About` route should consist of `/about` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`
- As this project is mainly designed for Authentication Functionality and does not contain any input fields, use the below sample user credentials to login

  - User credentials

    ```text
    username: rahul
    password: rahul@2021
    ```

</details>

### Resources

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
