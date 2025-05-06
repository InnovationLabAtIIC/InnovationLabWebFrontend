# Project Innovation Lab

This is a Next.js project for building a web application for InnovationLab. This README provides setup instructions, along with guidance on how to mock the API using Prism and view the OpenAPI specification.

## Table of Contents

- [Installation](#installation)
- [Run the Application](#run-the-application)
- [Mock the API with Prism](#mock-the-api-with-prism)
- [View API Specification](#view-api-specification)

## Installation

1. Clone the repository:

   https:

   ```bash
   git clone https://github.com/InnovationLabAtIIC/InnovationLabWebFrontend.git
   ```

   ssh:

   ```bash
   git clone git@github.com:InnovationLabAtIIC/InnovationLabWebFrontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd InnovationLabWebFrontend/
   ```
3. Install the required dependencies:
   ```bash
   npm install
   # or
   npm i
   ```

## Run the Application

1. To run the Next.js application locally, use the following command:
   ```bash
   npm run dev
   ```
2. Visit http://localhost:3000 in your browser to see the running application.

## Mock the API with prism

To mock the API based on the OpenAPI specification (openapi.yaml), we can use Prism.

### Install Prism (if not installed globally)

If you don't have Prism installed globally, you can install it using npm:

```bash
    npm install -g @stoplight/prism-cli
```

### Run the mock prism server

1. Make sure you have your OpenAPI specification file (openapi.yaml) ready. By default, it should be located at src/specs/openapi.yaml.
2. Run the Prism mock server with the following command:

```bash
prism mock src/specs/openapi.yaml
```

3. The server will start running at http://127.0.0.1:4010.
   ![Image Description](https://imgur.com/MmTW0sc.png)
4. You can now interact with the mocked API at the specified base URL (http://127.0.0.1:4010).

   **For example:**

   - http://127.0.0.1:4010/api/v1/testimonials (or http://localhost:4010/api/v1/testimonials)

   (here is the response from postman. you can hit this endpoint in Next.js and get response like below)

   ![Image Description](https://i.imgur.com/PsVwNQc.png)

   - http://127.0.0.1:4010/api/v1/banners (or http://localhost:4010/api/v1/banners)

     (when auth required pass Bearer token attach Bearer with random string )
     ![Image Description](https://imgur.com/Ax10sll.png)

   - Mock POST request - http://127.0.0.1:4010/api/v1/faqs

     ![Image Description](https://imgur.com/wUU9rX3.png)

## View API Specification

To view the OpenAPI specification (openapi.yaml) interactively:

1. Copy the content of the openapi.yaml file (located in src/specs/).

2. Visit [Swagger Editor](https://editor.swagger.io/).

3. Paste the content into the editor.

4. The Swagger UI will display all available endpoints defined in the openapi.yaml file, and you can interact with them.

Alternatively, you can also use Swagger UI or Redoc to generate documentation for the OpenAPI specification. Instructions for setting these up are in the project setup section above.
