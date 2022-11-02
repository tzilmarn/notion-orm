# Notion ORM

A warpper around [@notionhq/client](https://github.com/makenotion/notion-sdk-js) to provide better type safety.

This project is under active development, and is unstable at the moment. Feel free to help me build it!

## Installation

```bash
npm install @tzilmarn/notion-orm
```

## Usage

### Get Notion Credentials

Do the setup from [@notionhq/client](https://github.com/makenotion/notion-sdk-js), and get the IDs of the databases you will be using.

### Create a client

```javascript
import { createClient } from '@tzilmarn/notion-orm'

const client = createClient(
	{
		blogPosts: {
			databaseId: '<Database ID from before>',
			fields: {
				// Each key in the fields object should match a property in the database
				Title: { type: 'title' },
				Tags: { type: 'multi_select' },
				Status: { type: 'status' },
			},
		},
		friends: {
			databaseId: '<Database ID from before>',
			fields: {
				// Each key in the fields object should match a property in the database
				'Full Name': { type: 'title' },
				'Birth Day': { type: 'date' },
				Bio: { type: 'rich_text' },
			},
		},
	},
	{
		// Pass options to the @notionhq/client
		auth: '<AUTH TOKEN>',
	}
)
```

### Query your data

The returned data mirrors the notion types, while adding some convenience features like a `plainText` prop for the `rich_text` type that contains a concatenated plain text string.

```javascript
// Get one by ID
const tzilmarn = await client.friends.getOne('<ID HERE>')
console.log(`Im friends with ${tzilmarn.['Full Name'].plainText}!`)
console.log(`He was born on ${tzilmarn['Birth Day'].date.start}`)

// Filtering is same
const myBlogPosts = await client.blogPosts.getMany({
	filter: {
		property: 'status',
		status: {
			equals: 'Published',
		}
	})
})
const blogTitles = myBlogPosts.map(post => post.properties.title.plainText).join(', ') // Title 1, Title2, Title3
console.log(`My Blog Posts: ${blogTitles }`)
```
