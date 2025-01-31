```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error because Next.js will try to
  // hydrate the client-side rendering with a different value than what was
  // initially rendered on the server.
  const date = new Date();
  return (
    <div>
      <h1>About Page</h1>
      <p>The current date and time is: {date.toLocaleString()}</p>
    </div>
  );
}
```