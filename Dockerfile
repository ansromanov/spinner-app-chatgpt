# Use an official Python runtime as the base image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the container
COPY requirements.txt .

# Install the required packages
RUN pip install -r requirements.txt

# Copy the rest of the application files to the container
COPY app .

# Set the environment variable to run the Flask app
ENV FLASK_APP=wheel.py

# Set the environment variable to run the Flask app in development mode
ENV FLASK_ENV=development

# Expose port 5000 for the Flask app to listen on
EXPOSE 5000

# Command to run the Flask app
CMD ["flask", "run", "--host=0.0.0.0"]
