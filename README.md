### Project Name:  Comic Cohort 🦸
------------------
### A Comic Book e-commerce shopping site

### User Stories

As a user, I want to be able to search and filter comic books by author and price, so that I can easily find the comics I am interested in.
As a user, I want to be able to view the homepage with a list of comic books, so that I can see what is available.
As a user, I want to be able to view individual product pages with quantity, colour and variant pickers, so that I can choose the options I want before adding the item to my basket.
As a user, I want to be able to add items to my basket, so that I can keep track of what I want to purchase.
As a user, I want my basket contents to be persisted for future visits, so that I can come back to the site later and continue where I left off.
As a user, I want to be able to filter products by category, so that I can find the type of comic books I am interested in.
As a user, I want to be able to sort products by price, so that I can find the best deals.
As a user, I want to be able to perform end-to-end tests, so that I can be confident that the site is working as intended.
Acceptance Criteria

The site should be server-rendered using Next.js.
The homepage should display a list of comic books available for sale.
Each comic book should have its own individual product page, containing quantity, colour and variant pickers.
All data should be stored in a SQLite database.
The site should include an "Add to Basket" button on each product page.
The site should include a basket page that shows all saved items.
Basket contents should be persisted for future visits using local storage.
The site should include a way for users to filter products by category.
The site should include a way for users to sort products by price.
The site should include end-to-end tests to ensure that all functionality is working as expected.
Stretch Criteria

Allow users to leave reviews and ratings on products.
Implement authentication and authorization to restrict access to certain pages or functionality.
Allow users to view their purchase history and track the status of current orders.
Implement a search bar to allow users to search for specific comics or authors.
Implement a recommendation system that suggests products based on the user's purchase history or browsing behaviour.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
