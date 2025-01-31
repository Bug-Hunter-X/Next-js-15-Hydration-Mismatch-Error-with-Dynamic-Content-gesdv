```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {date ? (
        <p>The current date and time is: {date.toLocaleString()}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```