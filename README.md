# Instagram-like API Backend

This project establishes a basic backend server utilizing Express.js to mimic functionalities similar to Instagram. It relies on a `data.json` file to store user information.

## Setup

1. **Installation**: Ensure Node.js is installed on your machine.
2. **Repository Clone**: Clone this repository locally.
3. **Dependencies**: Run `npm install` to install necessary packages.

## Usage

### Starting the Server
Execute `nodemon index.js` or `npm start` to launch the server. It defaults to port `3000`.

### Routes

#### Static Files
- CSS and JavaScript files are served from the `public` directory.

#### Template Engine
- Views are rendered using the EJS template engine.

#### Endpoints
- `GET /:username`: Fetches user data based on the provided `username` parameter.
  - If the user exists in `data.json`, it renders the `insta.ejs` view with the user's data.
  - If the user doesn't exist, it renders the `error.ejs` view.

### `data.json` File
- User information is stored in a JSON format within the `data.json` file.
- Ensure the file structure remains consistent with the expected data format used by the application.

## Contributing
Feel free to fork this repository to make improvements. Pull requests are encouraged and appreciated!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
