# GAG Blog Website

This is a blog website built using Next.js and Tailwind CSS for the frontend and GraphCMS for the backend using GraphQL. The website allows the admin to perform CRUD operations on the blog posts in real-time.

## Technologies Used

- Frontend: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- Backend: [GraphCMS](https://graphcms.com/), [GraphQL](https://graphql.org/)
- Other libraries: [Moment.js](https://momentjs.com/)

## Features

- Real-time updates
- Create, read, update, and delete blog posts
- Simple and intuitive UI
- Fast and responsive
- Optimized for SEO

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository
2. Install the dependencies using `npm install`
3. Create a `.env.local` file in the root directory of the project and add the following environment variables:

GRAPHCMS_ENDPOINT=<your GraphCMS endpoint>
GRAPHCMS_TOKEN=<your GraphCMS token>

markdown
Copy code

4. Run the development server using `npm run dev`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles Next.js in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run start`

Starts the built app in production mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Checks the code for linting errors using [ESLint](https://eslint.org/).

### `npm run format`

Formats the code using [Prettier](https://prettier.io/).

## Dependencies

- `next`
- `react`
- `react-dom`
- `graphql`
- `graphql-request`
- `moment`
- `tailwindcss`

## Dev Dependencies

- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `prettier`

Note: Make sure to install these dependencies and dev dependencies before running the commands.

## Conclusion

With these instructions, you can now run and develop the GAG blog website using Next.js, Tailwind CSS, and GraphCMS. Happy coding!
