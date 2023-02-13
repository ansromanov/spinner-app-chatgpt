# Spinner App

This is a web-based Spinner app that can be used to randomly select a winner from a list of values.

The application consists of two parts, the frontend and the backend. The frontend is built using HTML, CSS and JavaScript and the backend is built using Flask, a microweb framework written in Python. The frontend communicates with the backend using AJAX calls to get the result of the spin.


## Deployment
To deploy the app, follow the steps below:

Clone the repository to your local machine

```sh
git clone https://github.com/ansromanov/spinner-app-chatgpt.git
```

Navigate to the cloned repository

```sh
cd spinner-wheel-chatgpt
```

Build the Docker image using the following command

```sh
docker-compose build
```

Run the app using the following command

```sh
docker-compose up
```

Open a web browser and go to http://localhost:5000 to access the app.

Stopping the App
To stop the app, press CTRL + C in the terminal where the app is running.

## Note
All code in this repository is written by OpenAI's language model, ChatGPT.