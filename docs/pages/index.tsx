import React, { useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

export default function Documentation() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const endpoints = [
  {
    "id": "cmaidto5g0003ys55vrngbf4e",
    "title": "PRODUCT - /api/products",
    "content": "{\n  \"description\": \"Retrieves a list of products.  Allows for filtering and pagination to manage large result sets.  Returns a paginated list of product objects.\",\n  \"params\": [\n    {\n      \"name\": \"page\",\n      \"type\": \"integer\",\n      \"required\": false,\n      \"description\": \"Page number for pagination. Defaults to 1.\"\n    },\n    {\n      \"name\": \"pageSize\",\n      \"type\": \"integer\",\n      \"required\": false,\n      \"description\": \"Number of products per page. Defaults to 20. Maximum value is 100.\"\n    },\n    {\n      \"name\": \"category\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"Filter products by category.  Multiple categories can be specified using comma separation (e.g., 'Electronics,Clothing').\"\n    },\n    {\n      \"name\": \"search\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"Search term to filter products by name or description.\"\n    }\n  ],\n  \"authenticated\": false,\n  \"accessType\": \"public\",\n  \"expectedResponse\": \"{\\\"total\\\": 123, \\\"page\\\": 1, \\\"pageSize\\\": 20, \\\"products\\\": [{\\\"id\\\": \\\"1\\\", \\\"name\\\": \\\"Product 1\\\", \\\"description\\\": \\\"Description of Product 1\\\", \\\"category\\\": \\\"Electronics\\\", \\\"price\\\": 19.99}, {\\\"id\\\": \\\"2\\\", \\\"name\\\": \\\"Product 2\\\", \\\"description\\\": \\\"Description of Product 2\\\", \\\"category\\\": \\\"Clothing\\\", \\\"price\\\": 29.99}]}\",\n  \"group\": \"PRODUCT\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Bad Request\",\n      \"description\": \"Invalid request parameters\"\n    },\n    {\n      \"code\": 404,\n      \"message\": \"Not Found\",\n      \"description\": \"No products found matching the specified criteria\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred on the server\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/productRoutes.js",
    "apiUrl": "/api/products",
    "method": "GET",
    "description": "Retrieves a list of products.  Allows for filtering and pagination to manage large result sets.  Returns a paginated list of product objects.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "page",
        "type": "integer",
        "required": false,
        "description": "Page number for pagination. Defaults to 1."
      },
      {
        "name": "pageSize",
        "type": "integer",
        "required": false,
        "description": "Number of products per page. Defaults to 20. Maximum value is 100."
      },
      {
        "name": "category",
        "type": "string",
        "required": false,
        "description": "Filter products by category.  Multiple categories can be specified using comma separation (e.g., 'Electronics,Clothing')."
      },
      {
        "name": "search",
        "type": "string",
        "required": false,
        "description": "Search term to filter products by name or description."
      }
    ],
    "response": "{\"total\": 123, \"page\": 1, \"pageSize\": 20, \"products\": [{\"id\": \"1\", \"name\": \"Product 1\", \"description\": \"Description of Product 1\", \"category\": \"Electronics\", \"price\": 19.99}, {\"id\": \"2\", \"name\": \"Product 2\", \"description\": \"Description of Product 2\", \"category\": \"Clothing\", \"price\": 29.99}]}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5g0004ys55f443e7ge",
    "title": "PRODUCT - /api/products/:id",
    "content": "{\n  \"description\": \"Retrieves a single product from the database based on the provided product ID.  Returns a detailed representation of the product, including its attributes, description, and potentially related information such as images or reviews.  If the product with the given ID is not found, it returns an appropriate error response.\",\n  \"params\": [\n    {\n      \"name\": \"id\",\n      \"type\": \"integer\",\n      \"required\": true,\n      \"description\": \"The unique identifier for the product to retrieve.\"\n    }\n  ],\n  \"authenticated\": false,\n  \"accessType\": \"public\",\n  \"expectedResponse\": \"{\\\"id\\\": 1, \\\"name\\\": \\\"Example Product\\\", \\\"description\\\": \\\"This is an example product\\\", \\\"price\\\": 29.99, \\\"imageUrl\\\": \\\"example.jpg\\\"}\",\n  \"group\": \"PRODUCT\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Invalid product ID\",\n      \"description\": \"The provided product ID is not a valid integer or is in an incorrect format.\"\n    },\n    {\n      \"code\": 404,\n      \"message\": \"Product not found\",\n      \"description\": \"No product with the given ID exists in the database.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal server error\",\n      \"description\": \"An unexpected error occurred while processing the request.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/productRoutes.js",
    "apiUrl": "/api/products/:id",
    "method": "GET",
    "description": "Retrieves a single product from the database based on the provided product ID.  Returns a detailed representation of the product, including its attributes, description, and potentially related information such as images or reviews.  If the product with the given ID is not found, it returns an appropriate error response.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "id",
        "type": "integer",
        "required": true,
        "description": "The unique identifier for the product to retrieve."
      }
    ],
    "response": "{\"id\": 1, \"name\": \"Example Product\", \"description\": \"This is an example product\", \"price\": 29.99, \"imageUrl\": \"example.jpg\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5g0005ys55tgjclsbc",
    "title": "PRODUCT - /api/products/:id/ratings",
    "content": "{\n  \"description\": \"Adds a new rating for a specific product.  Requires authentication to prevent abuse and ensure only legitimate users can submit ratings. The rating is associated with the product identified by the provided ID. The request body should contain the rating value and optionally a review text.\",\n  \"params\": [\n    {\n      \"name\": \"id\",\n      \"type\": \"integer\",\n      \"required\": true,\n      \"description\": \"The unique identifier for the product being rated.\"\n    },\n    {\n      \"name\": \"rating\",\n      \"type\": \"integer\",\n      \"required\": true,\n      \"description\": \"The rating value.  Should be an integer between 1 and 5 (inclusive).\"\n    },\n    {\n      \"name\": \"review\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"An optional review text accompanying the rating.\"\n    }\n  ],\n  \"authenticated\": true,\n  \"accessType\": \"user\",\n  \"expectedResponse\": \"{\\\"id\\\": 123, \\\"rating\\\": 4, \\\"review\\\": \\\"Great product!\\\", \\\"userId\\\": 456, \\\"productId\\\": 123, \\\"createdAt\\\": \\\"2024-01-26T12:00:00Z\\\"}\",\n  \"group\": \"PRODUCT\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Bad Request\",\n      \"description\": \"The request is malformed or contains invalid data (e.g., rating out of range).\"\n    },\n    {\n      \"code\": 401,\n      \"message\": \"Unauthorized\",\n      \"description\": \"The user is not authenticated.\"\n    },\n    {\n      \"code\": 404,\n      \"message\": \"Not Found\",\n      \"description\": \"The product with the given ID does not exist.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred on the server.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/productRoutes.js",
    "apiUrl": "/api/products/:id/ratings",
    "method": "POST",
    "description": "Adds a new rating for a specific product.  Requires authentication to prevent abuse and ensure only legitimate users can submit ratings. The rating is associated with the product identified by the provided ID. The request body should contain the rating value and optionally a review text.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "id",
        "type": "integer",
        "required": true,
        "description": "The unique identifier for the product being rated."
      },
      {
        "name": "rating",
        "type": "integer",
        "required": true,
        "description": "The rating value.  Should be an integer between 1 and 5 (inclusive)."
      },
      {
        "name": "review",
        "type": "string",
        "required": false,
        "description": "An optional review text accompanying the rating."
      }
    ],
    "response": "{\"id\": 123, \"rating\": 4, \"review\": \"Great product!\", \"userId\": 456, \"productId\": 123, \"createdAt\": \"2024-01-26T12:00:00Z\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5g0006ys559e4lmsh9",
    "title": "PRODUCT - /api/products",
    "content": "{\n  \"description\": \"Creates a new product in the system.  This endpoint allows authorized users to add new product information, including details such as name, description, price, and other relevant attributes.  The request body should contain all necessary product data.\",\n  \"params\": [\n    {\n      \"name\": \"name\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"The name of the product.\"\n    },\n    {\n      \"name\": \"description\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"A detailed description of the product.\"\n    },\n    {\n      \"name\": \"price\",\n      \"type\": \"number\",\n      \"required\": true,\n      \"description\": \"The price of the product.\"\n    },\n    {\n      \"name\": \"category\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"The category the product belongs to.\"\n    },\n    {\n      \"name\": \"imageUrl\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"URL of the product image.\"\n    },\n    {\n      \"name\": \"sku\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"Stock Keeping Unit (SKU) for the product.\"\n    }\n  ],\n  \"authenticated\": true,\n  \"accessType\": \"admin\",\n  \"expectedResponse\": \"{\\\"id\\\": \\\"123\\\", \\\"name\\\": \\\"Example Product\\\", \\\"description\\\": \\\"This is an example product.\\\", \\\"price\\\": 19.99, \\\"category\\\": \\\"Electronics\\\", \\\"imageUrl\\\": \\\"https://example.com/image.jpg\\\", \\\"sku\\\": \\\"ABC-123\\\"}\",\n  \"group\": \"PRODUCT\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Bad Request\",\n      \"description\": \"The request body is missing required fields or contains invalid data.\"\n    },\n    {\n      \"code\": 401,\n      \"message\": \"Unauthorized\",\n      \"description\": \"The user is not authenticated or does not have the necessary permissions.\"\n    },\n    {\n      \"code\": 409,\n      \"message\": \"Conflict\",\n      \"description\": \"A product with the same SKU already exists.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred on the server.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/productRoutes.js",
    "apiUrl": "/api/products",
    "method": "POST",
    "description": "Creates a new product in the system.  This endpoint allows authorized users to add new product information, including details such as name, description, price, and other relevant attributes.  The request body should contain all necessary product data.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "The name of the product."
      },
      {
        "name": "description",
        "type": "string",
        "required": true,
        "description": "A detailed description of the product."
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "The price of the product."
      },
      {
        "name": "category",
        "type": "string",
        "required": true,
        "description": "The category the product belongs to."
      },
      {
        "name": "imageUrl",
        "type": "string",
        "required": false,
        "description": "URL of the product image."
      },
      {
        "name": "sku",
        "type": "string",
        "required": true,
        "description": "Stock Keeping Unit (SKU) for the product."
      }
    ],
    "response": "{\"id\": \"123\", \"name\": \"Example Product\", \"description\": \"This is an example product.\", \"price\": 19.99, \"category\": \"Electronics\", \"imageUrl\": \"https://example.com/image.jpg\", \"sku\": \"ABC-123\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5g0007ys55futfyrys",
    "title": "PRODUCT - /api/products/:id",
    "content": "{\n  \"description\": \"Updates an existing product with the provided information. Only fields provided in the request body will be updated.  If a field is not included, its existing value remains unchanged.\",\n  \"params\": [\n    {\n      \"name\": \"id\",\n      \"type\": \"integer\",\n      \"required\": true,\n      \"description\": \"The unique ID of the product to be updated.\"\n    },\n    {\n      \"name\": \"name\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"The name of the product.\"\n    },\n    {\n      \"name\": \"description\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"A description of the product.\"\n    },\n    {\n      \"name\": \"price\",\n      \"type\": \"number\",\n      \"required\": false,\n      \"description\": \"The price of the product.\"\n    },\n    {\n      \"name\": \"imageUrl\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"URL of the product image.\"\n    },\n    {\n      \"name\": \"category\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"Category of the product.\"\n    }\n  ],\n  \"authenticated\": true,\n  \"accessType\": \"admin\",\n  \"expectedResponse\": \"{\\\"id\\\": 1, \\\"name\\\": \\\"Updated Product Name\\\", \\\"description\\\": \\\"Updated product description.\\\", \\\"price\\\": 29.99, \\\"imageUrl\\\": \\\"updatedImageUrl.jpg\\\", \\\"category\\\": \\\"Electronics\\\"}\",\n  \"group\": \"PRODUCT\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Bad Request\",\n      \"description\": \"The request body is invalid or missing required fields.\"\n    },\n    {\n      \"code\": 401,\n      \"message\": \"Unauthorized\",\n      \"description\": \"The user is not authenticated or does not have the necessary permissions.\"\n    },\n    {\n      \"code\": 404,\n      \"message\": \"Not Found\",\n      \"description\": \"The product with the specified ID does not exist.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred on the server.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/productRoutes.js",
    "apiUrl": "/api/products/:id",
    "method": "PATCH",
    "description": "Updates an existing product with the provided information. Only fields provided in the request body will be updated.  If a field is not included, its existing value remains unchanged.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "id",
        "type": "integer",
        "required": true,
        "description": "The unique ID of the product to be updated."
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "The name of the product."
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "A description of the product."
      },
      {
        "name": "price",
        "type": "number",
        "required": false,
        "description": "The price of the product."
      },
      {
        "name": "imageUrl",
        "type": "string",
        "required": false,
        "description": "URL of the product image."
      },
      {
        "name": "category",
        "type": "string",
        "required": false,
        "description": "Category of the product."
      }
    ],
    "response": "{\"id\": 1, \"name\": \"Updated Product Name\", \"description\": \"Updated product description.\", \"price\": 29.99, \"imageUrl\": \"updatedImageUrl.jpg\", \"category\": \"Electronics\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5g0008ys55kn31pyej",
    "title": "PRODUCT - /api/products/:id",
    "content": "{\n  \"description\": \"Deletes a product from the system by its unique ID.  This endpoint removes the product record and associated data.  It does not handle dependent resources; ensure all related data is removed before calling this endpoint.\",\n  \"params\": [\n    {\n      \"name\": \"id\",\n      \"type\": \"integer\",\n      \"required\": true,\n      \"description\": \"The unique ID of the product to be deleted.\"\n    }\n  ],\n  \"authenticated\": true,\n  \"accessType\": \"admin\",\n  \"expectedResponse\": \"{\\\"message\\\": \\\"Product deleted successfully\\\"}\",\n  \"group\": \"PRODUCT\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Bad Request\",\n      \"description\": \"The request is malformed or contains invalid data.  Check the request body and parameters for errors.\"\n    },\n    {\n      \"code\": 401,\n      \"message\": \"Unauthorized\",\n      \"description\": \"The request is missing valid authentication credentials.\"\n    },\n    {\n      \"code\": 403,\n      \"message\": \"Forbidden\",\n      \"description\": \"The authenticated user does not have permission to delete products.\"\n    },\n    {\n      \"code\": 404,\n      \"message\": \"Not Found\",\n      \"description\": \"A product with the specified ID does not exist.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred on the server.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/productRoutes.js",
    "apiUrl": "/api/products/:id",
    "method": "DELETE",
    "description": "Deletes a product from the system by its unique ID.  This endpoint removes the product record and associated data.  It does not handle dependent resources; ensure all related data is removed before calling this endpoint.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "id",
        "type": "integer",
        "required": true,
        "description": "The unique ID of the product to be deleted."
      }
    ],
    "response": "{\"message\": \"Product deleted successfully\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5g0009ys55klfm0yiy",
    "title": "AUTHENTICATION - /api/users/register",
    "content": "{\n  \"description\": \"Registers a new user in the system.  This endpoint handles the creation of new user accounts, validating the provided information and storing it securely in the database.  Upon successful registration, it returns a user ID and potentially an authentication token.\",\n  \"params\": [\n    {\n      \"name\": \"username\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"The desired username for the new user. Must be unique.\"\n    },\n    {\n      \"name\": \"email\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"The user's email address. Must be unique and valid.\"\n    },\n    {\n      \"name\": \"password\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"The user's password. Should meet specified complexity requirements (e.g., minimum length, special characters).\"\n    },\n    {\n      \"name\": \"confirmPassword\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"Confirmation of the password for verification.\"\n    }\n  ],\n  \"authenticated\": false,\n  \"accessType\": \"public\",\n  \"expectedResponse\": \"{\\\"userId\\\": 123, \\\"token\\\": \\\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\\\"}\",\n  \"group\": \"AUTHENTICATION\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Bad Request\",\n      \"description\": \"One or more parameters are invalid or missing.  Check the request body for errors.\"\n    },\n    {\n      \"code\": 409,\n      \"message\": \"Conflict\",\n      \"description\": \"A user with the given username or email already exists.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred on the server. Please try again later.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/userRoutes.js",
    "apiUrl": "/api/users/register",
    "method": "POST",
    "description": "Registers a new user in the system.  This endpoint handles the creation of new user accounts, validating the provided information and storing it securely in the database.  Upon successful registration, it returns a user ID and potentially an authentication token.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "username",
        "type": "string",
        "required": true,
        "description": "The desired username for the new user. Must be unique."
      },
      {
        "name": "email",
        "type": "string",
        "required": true,
        "description": "The user's email address. Must be unique and valid."
      },
      {
        "name": "password",
        "type": "string",
        "required": true,
        "description": "The user's password. Should meet specified complexity requirements (e.g., minimum length, special characters)."
      },
      {
        "name": "confirmPassword",
        "type": "string",
        "required": true,
        "description": "Confirmation of the password for verification."
      }
    ],
    "response": "{\"userId\": 123, \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5g000ays55fb639ecc",
    "title": "AUTHENTICATION - /api/users/login",
    "content": "{\n  \"description\": \"Logs in an existing user.  Upon successful authentication, it returns an access token that should be used in subsequent requests requiring authentication.\",\n  \"params\": [\n    {\n      \"name\": \"username\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"User's username or email address\"\n    },\n    {\n      \"name\": \"password\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"User's password\"\n    }\n  ],\n  \"authenticated\": false,\n  \"accessType\": \"public\",\n  \"expectedResponse\": \"{\\\"token\\\": \\\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\\\"}\",\n  \"group\": \"AUTHENTICATION\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Bad Request\",\n      \"description\": \"Invalid username or password\"\n    },\n    {\n      \"code\": 401,\n      \"message\": \"Unauthorized\",\n      \"description\": \"Authentication failed\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/userRoutes.js",
    "apiUrl": "/api/users/login",
    "method": "POST",
    "description": "Logs in an existing user.  Upon successful authentication, it returns an access token that should be used in subsequent requests requiring authentication.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "username",
        "type": "string",
        "required": true,
        "description": "User's username or email address"
      },
      {
        "name": "password",
        "type": "string",
        "required": true,
        "description": "User's password"
      }
    ],
    "response": "{\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5g000bys55qg4r9q58",
    "title": "USER - /api/users/profile",
    "content": "{\n  \"description\": \"Retrieves the currently authenticated user's profile information.  This includes basic user details and potentially other profile-specific data.\",\n  \"params\": [\n    {\n      \"name\": \"Authorization\",\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"Bearer token for authentication.  Must be included in the header.\"\n    }\n  ],\n  \"authenticated\": true,\n  \"accessType\": \"user\",\n  \"expectedResponse\": \"{\\\"id\\\": 1, \\\"username\\\": \\\"testuser\\\", \\\"email\\\": \\\"test@example.com\\\", \\\"firstName\\\": \\\"Test\\\", \\\"lastName\\\": \\\"User\\\", \\\"creationDate\\\": \\\"2024-01-26T12:00:00Z\\\"}\",\n  \"group\": \"USER\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 401,\n      \"message\": \"Unauthorized\",\n      \"description\": \"The request requires user authentication.  Provide a valid Bearer token in the Authorization header.\"\n    },\n    {\n      \"code\": 403,\n      \"message\": \"Forbidden\",\n      \"description\": \"The authenticated user does not have permission to access this resource.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred while processing the request.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/userRoutes.js",
    "apiUrl": "/api/users/profile",
    "method": "GET",
    "description": "Retrieves the currently authenticated user's profile information.  This includes basic user details and potentially other profile-specific data.",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "Authorization",
        "type": "string",
        "required": true,
        "description": "Bearer token for authentication.  Must be included in the header."
      }
    ],
    "response": "{\"id\": 1, \"username\": \"testuser\", \"email\": \"test@example.com\", \"firstName\": \"Test\", \"lastName\": \"User\", \"creationDate\": \"2024-01-26T12:00:00Z\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5h000cys559dakk5ya",
    "title": "USER - /api/users/profile",
    "content": "{\n  \"description\": \"Updates the currently authenticated user's profile information.  Allows partial updates; only fields provided in the request body will be modified. \",\n  \"params\": [\n    {\n      \"name\": \"user_id\",\n      \"type\": \"integer\",\n      \"required\": true,\n      \"description\": \"The ID of the user to update. This is typically derived from authentication and not explicitly passed as a parameter.\"\n    },\n    {\n      \"name\": \"first_name\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"The user's first name.\"\n    },\n    {\n      \"name\": \"last_name\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"The user's last name.\"\n    },\n    {\n      \"name\": \"email\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"The user's email address. Must be unique.\"\n    },\n    {\n      \"name\": \"bio\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"A short biography of the user.\"\n    },\n    {\n      \"name\": \"profile_picture_url\",\n      \"type\": \"string\",\n      \"required\": false,\n      \"description\": \"URL of the user's profile picture.\"\n    }\n  ],\n  \"authenticated\": true,\n  \"accessType\": \"user\",\n  \"expectedResponse\": \"{\\\"id\\\": 1, \\\"first_name\\\": \\\"John\\\", \\\"last_name\\\": \\\"Doe\\\", \\\"email\\\": \\\"john.doe@example.com\\\", \\\"bio\\\": \\\"Software Engineer\\\", \\\"profile_picture_url\\\": \\\"https://example.com/profile.jpg\\\"}\",\n  \"group\": \"USER\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 400,\n      \"message\": \"Bad Request\",\n      \"description\": \"The request body is invalid or missing required fields.\"\n    },\n    {\n      \"code\": 401,\n      \"message\": \"Unauthorized\",\n      \"description\": \"The user is not authenticated.\"\n    },\n    {\n      \"code\": 403,\n      \"message\": \"Forbidden\",\n      \"description\": \"The user does not have permission to update this profile.\"\n    },\n    {\n      \"code\": 404,\n      \"message\": \"Not Found\",\n      \"description\": \"The user with the given ID was not found.\"\n    },\n    {\n      \"code\": 409,\n      \"message\": \"Conflict\",\n      \"description\": \"The email address is already in use.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred on the server.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/userRoutes.js",
    "apiUrl": "/api/users/profile",
    "method": "PATCH",
    "description": "Updates the currently authenticated user's profile information.  Allows partial updates; only fields provided in the request body will be modified. ",
    "visibleOnDeployments": true,
    "queryParams": [
      {
        "name": "user_id",
        "type": "integer",
        "required": true,
        "description": "The ID of the user to update. This is typically derived from authentication and not explicitly passed as a parameter."
      },
      {
        "name": "first_name",
        "type": "string",
        "required": false,
        "description": "The user's first name."
      },
      {
        "name": "last_name",
        "type": "string",
        "required": false,
        "description": "The user's last name."
      },
      {
        "name": "email",
        "type": "string",
        "required": false,
        "description": "The user's email address. Must be unique."
      },
      {
        "name": "bio",
        "type": "string",
        "required": false,
        "description": "A short biography of the user."
      },
      {
        "name": "profile_picture_url",
        "type": "string",
        "required": false,
        "description": "URL of the user's profile picture."
      }
    ],
    "response": "{\"id\": 1, \"first_name\": \"John\", \"last_name\": \"Doe\", \"email\": \"john.doe@example.com\", \"bio\": \"Software Engineer\", \"profile_picture_url\": \"https://example.com/profile.jpg\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  },
  {
    "id": "cmaidto5h000dys55x190v6ug",
    "title": "USER - /api/users/profile",
    "content": "{\n  \"description\": \"Deletes the currently authenticated user's profile and associated data.  This action is irreversible.  After deletion, the user will no longer be able to access any application features or data associated with their account.  This endpoint will also remove any related data, such as posts, comments, or other user-specific content, depending on the application's data model.\",\n  \"params\": [],\n  \"authenticated\": true,\n  \"accessType\": \"user\",\n  \"expectedResponse\": \"{\\\"message\\\": \\\"User profile deleted successfully\\\"}\",\n  \"group\": \"USER\",\n  \"visibleOnDeployments\": true,\n  \"errorResponses\": [\n    {\n      \"code\": 401,\n      \"message\": \"Unauthorized\",\n      \"description\": \"The request requires user authentication.  The user is not logged in or the authentication token is invalid.\"\n    },\n    {\n      \"code\": 403,\n      \"message\": \"Forbidden\",\n      \"description\": \"The authenticated user does not have permission to delete their profile. This could be due to account restrictions or system-level limitations.\"\n    },\n    {\n      \"code\": 404,\n      \"message\": \"User Not Found\",\n      \"description\": \"The user profile associated with the authentication token could not be found.\"\n    },\n    {\n      \"code\": 500,\n      \"message\": \"Internal Server Error\",\n      \"description\": \"An unexpected error occurred while processing the request. Please contact support.\"\n    }\n  ]\n}",
    "filePathUrl": "src/routes/userRoutes.js",
    "apiUrl": "/api/users/profile",
    "method": "DELETE",
    "description": "Deletes the currently authenticated user's profile and associated data.  This action is irreversible.  After deletion, the user will no longer be able to access any application features or data associated with their account.  This endpoint will also remove any related data, such as posts, comments, or other user-specific content, depending on the application's data model.",
    "visibleOnDeployments": true,
    "queryParams": [],
    "response": "{\"message\": \"User profile deleted successfully\"}",
    "projectId": "cmaidto4l0002ys55xb8lwo6u",
    "createdAt": "2025-05-10T15:30:43.972Z",
    "updatedAt": "2025-05-10T15:30:43.972Z"
  }
];

  const groupedEndpoints = groupEndpointsByTag(endpoints);

  return (
    <div className="documentation-container">
      <Head>
        <title>express-test-app-1 API Documentation</title>
        <meta name="description" content="API Documentation for express-test-app-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="project-title">express-test-app-1</h1>
            <p className="project-subtitle">API Documentation</p>
          </div>
          <div className="version-badge">v1.0.0</div>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-content">
            <div className="nav-section">
              <h3>Getting Started</h3>
              <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#authentication">Authentication</a></li>
                <li><a href="#rate-limiting">Rate Limiting</a></li>
              </ul>
            </div>
            
            <div className="nav-section">
              <h3>API Reference</h3>
              {Object.entries(groupedEndpoints).map(([tag, tagEndpoints]) => (
                <div key={tag} className="endpoint-group">
                  <h4>{tag}</h4>
                  <ul>
                    {tagEndpoints.map((endpoint, index) => (
                      <li key={index}>
                        <a href={`#${endpoint.id}`} className="endpoint-link">
                          <span className={`method-badge method-${endpoint.method.toLowerCase()}`}>
                            {endpoint.method}
                          </span>
                          {endpoint.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          {/* Introduction */}
          <section id="introduction" className="content-section">
            <h2>Introduction</h2>
            <p className="intro-text">
              Welcome to the express-test-app-1 API documentation. This API allows you to integrate with our service 
              and access all the functionality programmatically.
            </p>
            <p className="description">
📦 Repomix v0.2.33

No custom config found at repomix.config.json or global config at /Users/fortuneikechi/.config/repomix/repomix.config.json.
You can add a config file for additional settings. Please check https://github.com/yamadashy/repomix for more information.
⠙ Collecting files...
[2K[1A[2K[G⠹ Processing files...
[2K[1A[2K[G⠸ Calculating metrics...
[2K[1A[2K[G⠼ Calculating metrics...
[2K[1A[2K[G✔ Packing completed successfully!

📈 Top 5 Files by Character Count and Token Count:
──────────────────────────────────────────────────
1.  src/controllers/productController.js (4,024 chars, 1,002 tokens)
2.  src/controllers/userController.js (3,097 chars, 770 tokens)
3.  src/app.js (1,309 chars, 305 tokens)
4.  src/models/Product.js (1,147 chars, 316 tokens)
5.  src/models/User.js (1,052 chars, 260 tokens)

🔎 Security Check:
──────────────────
✔ No suspicious files detected.

📊 Pack Summary:
────────────────
  Total Files: 10 files
  Total Chars: 15,647 chars
 Total Tokens: 3,809 tokens
       Output: /Users/fortuneikechi/Documents/docvan-main/tmp/express-test-app/api-docs.md
     Security: ✔ No suspicious files detected

🎉 All Done!
Your repository has been successfully packed.

💡 Repomix is now available in your browser! Try it at https://repomix.com
</p>
            
            <div className="info-cards">
              <div className="info-card">
                <h3>Base URL</h3>
                <code>https://api.example.com/v1</code>
              </div>
              <div className="info-card">
                <h3>Format</h3>
                <code>JSON</code>
              </div>
              <div className="info-card">
                <h3>HTTPS</h3>
                <code>Required</code>
              </div>
            </div>
          </section>

          {/* Endpoints */}
          {Object.entries(groupedEndpoints).map(([tag, tagEndpoints]) => (
            <section key={tag} className="content-section">
              <h2>{tag}</h2>
              {tagEndpoints.map((endpoint, index) => (
                <div key={index} id={endpoint.id} className="endpoint-card">
                  <div className="endpoint-header">
                    <div className="endpoint-title">
                      <span className={`method-badge method-${endpoint.method.toLowerCase()}`}>
                        {endpoint.method}
                      </span>
                      <h3>{endpoint.title}</h3>
                    </div>
                  </div>
                  
                  <div className="endpoint-url">
                    <code>{endpoint.apiUrl}</code>
                    <button className="copy-btn" onClick={() => navigator.clipboard.writeText(endpoint.apiUrl)}>
                      Copy
                    </button>
                  </div>
                  
                  {endpoint.description && (
                    <div className="endpoint-description">
                      <p>{endpoint.description}</p>
                    </div>
                  )}
                  
                  {endpoint.queryParams && endpoint.queryParams.length > 0 && (
                    <div className="parameters-section">
                      <h4>Query Parameters</h4>
                      <div className="parameters-table">
                        <div className="table-header">
                          <span>Name</span>
                          <span>Type</span>
                          <span>Required</span>
                          <span>Description</span>
                        </div>
                        {endpoint.queryParams.map((param, paramIndex) => (
                          <div key={paramIndex} className="table-row">
                            <code className="param-name">{param.name}</code>
                            <span className="param-type">{param.type}</span>
                            <span className={`param-required ${param.required ? 'required' : 'optional'}`}>
                              {param.required ? 'Required' : 'Optional'}
                            </span>
                            <span className="param-description">{param.description || '-'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="response-section">
                    <h4>Response</h4>
                    <div className="code-block">
                      <pre><code>{JSON.stringify(endpoint.response || { "message": "Success" }, null, 2)}</code></pre>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Generated by <a href="https://docvan.com" target="_blank" rel="noopener noreferrer">DocVan</a></p>
        </div>
      </footer>
    </div>
  );
}

function groupEndpointsByTag(endpoints) {
  const groups = {};
  
  endpoints.forEach(endpoint => {
    // Extract tag from URL path (e.g., /api/users -> Users)
    const urlParts = endpoint.apiUrl.split('/').filter(Boolean);
    const tag = urlParts[urlParts.length - 1]?.split('{')[0] || 'General';
    const tagName = tag.charAt(0).toUpperCase() + tag.slice(1);
    
    if (!groups[tagName]) {
      groups[tagName] = [];
    }
    
    groups[tagName].push(endpoint);
  });
  
  return groups;
}