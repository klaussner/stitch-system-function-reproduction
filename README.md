**Reproduction steps:**

1. Clone this repository and change into its root directory.

2. Run `stitch-cli import --path stitch`.
The application uses the email/password authentication provider and contains a system function called `systemFunction`, which returns data from the `context` variable.

3. Open the Stitch UI and create a user with email "user@example.com" and password "example".

4. Change the "APP_ID" placeholder in `index.html` (line 13) to the app ID of the new application.


**Running the system function:**

Open `index.html` in a browser to run the system function as "user@example.com".
The following result is shown in the console:

```js
{
  user: { id: "5e231b2d…", type: "normal", data: { email: "user@example.com" }, … },
  runningAsSystem: true
}
```

Run the function with the Stitch UI function editor after changing the user to "user@example.com".
Result:

```js
{
  user: { id: "5e231b2d…", type: "normal", data: { email: "user@example.com" }, … },
  runningAsSystem: false
}
```

Run the function with the Stitch UI function editor as a system user.
Result:

```js
{
  user: { id: "", type: "system", data: {} },
  runningAsSystem: true
}
```
