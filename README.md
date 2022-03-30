# Web service for managing notes

## Project objective

- Strict separation of the application into front-end and back-end;
- Creating an API on the back-end side and using DRF and Graphml for this purpose;
- Creating a front-end using React;
- Building a project in Docker

## Installation

Used libraries for working with the project. Everything is written in the file requirements.txt

- **Django**. Is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
- **Django Rest Framework**. Is a powerful and flexible toolkit for building Web APIs.
- **Django-filter**. Is a generic, reusable application to alleviate writing some of the more mundane bits of view code.
- **Django-rest-auth**. A set of REST API endpoints to handle User Registration and Authentication tasks
- **Cross-Origin Resource Sharing**. Adding CORS headers allows your resources to be accessed on other domains.
- **drf-yasg**. We don't need to create a schema and template separately to use Swagger. There are third-party libraries
  that allow you to do this quickly and conveniently.

1. cd to the directory where requirements.txt is located.
2. activate your virtualenv.
3. run: ```pip install -r requirements.txt``` in your shell.

## Apps

### authapp

An application with the user model. User is inherited from Django AbstractUser. API version control is available

### frontend

todo update

### mainapp

The main application. There are models for Project and ToDo. Filtering and pagination have been developed for them. When
deleting a ToDo note, it changes its value to ```is_active = False```

## Tests

In testing, we checked how it works with user authorization. As well as **GET**, **POST**, **PUT** requests.

# Add GraphQL
