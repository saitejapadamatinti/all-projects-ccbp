The goal of this coding exam is to quickly get you off the ground with **Lists and Keys**.

### Refer to the image below:

<br>
<div style="text-align: center;">
  <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/my-tasks-output.mp4" type="video/mp4">
    
  </video>
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Tasks View](https://assets.ccbp.in/frontend/content/react-js/my-tasks-output-no-tasks-view.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/my-tasks-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Filter View](https://assets.ccbp.in/frontend/content/react-js/my-tasks-output-filter-view.png)

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

- Initially, the list of tasks and `Task` input should be empty and the active option in the `Tags` select element should be the first item of the given tagsList.
- When non-empty values are provided for Tasks, Tags and the **Add Task** button is clicked,
  - A new task should be added to the list of tasks.
  - The value inside the `Task` input and `Tag` select elements should be updated to their initial values.
- When a single tag is clicked it should be changed to an active state and filtered tasks should be displayed accordingly.
- When no tag in the list of tags is active, then all the tasks should be displayed.
- The `App` component consists of the `tagsList`. It consists of a list of tag details objects with the following properties in each object.

  |     key     | DataType |
  | :---------: | :------: |
  |  optionId   |  String  |
  | displayText |  String  |

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instruction is required for the tests to pass**

- Use the `uuid` package to generate the unique id.

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #131213; width: 150px; padding: 10px; color: white">Hex: #131213</div>
<div style="background-color: #f3aa4e; width: 150px; padding: 10px; color: black">Hex: #f3aa4e</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: black">Hex: #64748b</div>
<div style="background-color: #f8f8f8; width: 150px; padding: 10px; color: black">Hex: #f8f8f8</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: black">Hex: #475569</div>
<div style="background-color: #323f4b; width: 150px; padding: 10px; color: white">Hex: #323f4b</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #1a171d; width: 150px; padding: 10px; color: white">Hex: #1a171d</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
