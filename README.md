
# Slugify API

This is a simple Node.js API that converts a given string into a URL-friendly slug. It is deployed on [Railway](https://railway.app) and can be used to generate slugs for various applications.

## Features
- Converts any string into a slug.
- Removes special characters and spaces.
- Converts the string to lowercase.
- Deployed on Railway for easy access and scalability.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/slugify-api.git
    cd slugify-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your environment variables:
    ```env
    PORT=3000
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

Send a POST request to the `/slugify` endpoint with a JSON body containing the text you want to convert to a slug.

### Example Request

```bash
curl -X POST https://your-api-url.railway.app/slugify -H "Content-Type: application/json" -d '{"text": "Hello World from Railway!"}'
```

### Example Response

```json
{
  "slug": "hello-world-from-railway"
}
```

## Environment Variables

- `PORT`: The port on which the server will run (default: 3000).

## Deployment

This project is configured to be easily deployed on [Railway](https://railway.app). Just link your repository, set your environment variables, and deploy.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://opensource.org/licenses/MIT)
