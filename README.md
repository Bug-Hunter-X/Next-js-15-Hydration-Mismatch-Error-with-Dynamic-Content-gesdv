# Next.js 15 Hydration Mismatch Error

This repository demonstrates a common hydration mismatch error in Next.js 15 applications.  The error arises from discrepancies between server-side rendering (SSR) and client-side hydration when dynamic content is involved.

## Bug Description

The `pages/about.js` file uses `new Date()` to display the current date and time. Because the date changes between server-side rendering and client-side hydration, Next.js throws a hydration mismatch error.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the hydration mismatch error in your browser's console.

## Solution

The solution involves ensuring that any dynamic content rendered on the client-side is consistent with what was initially rendered on the server-side.  The solution is implemented in `pages/about.js` file.