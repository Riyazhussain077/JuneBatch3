const {test , expect} = require ('@playwright/test')

// 1) GET   - Fetch all posts..

test('GET: Fetch all posts', async ({request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total Posts fetched:", body.length);
    expect(body.length).toBeGreaterThan(0);
    
});

// 2) POST - Create a new post with YOUR DATA

test('POST: Create a post with Riyaz Hussain data', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'QA Automation with Playwright',
      body: 'This post is created by Riyaz Hussain for teaching API automation using Playwright.',
      userId: 777     // You can set any custom user ID
    }
  });

  expect(response.status()).toBe(201); // Created
  const body = await response.json();
  console.log("Created Post ID:", body.id);
  expect(body).toHaveProperty('id');
  expect(body.title).toBe('QA Automation with Playwright');
});

// 3) PUT - Update an existing post with YOUR DATA

test('PUT: Update a post with Riyaz’s new title', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      id: 1,
      title: 'Updated by Riyaz - Playwright in Action',
      body: 'The post was updated successfully by Riyaz using Playwright PUT method.',
      userId: 777
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log("Updated Post Title:", body.title);
  expect(body.title).toBe('Updated by Riyaz - Playwright in Action');
});

// 4) DELETE - Delete a post


test('DELETE: Delete a post created by Riyaz', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  console.log("Post deleted successfully by Riyaz");
});
