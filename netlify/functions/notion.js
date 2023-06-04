const { Client } = require("@notionhq/client")
require("dotenv").config()

const handler = async () => {
  const notion = new Client({
    auth: process.env.VITE_NOTION_API_TOKEN,
  })
  const page = await notion.databases.query({
    database_id: process.env.VITE_DB_ID,
  })

  const data = JSON.stringify({
    name: page.results[0].properties["Task name"].title[0].text.content,
    start_date: page.results[0].properties.Due.date.start,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      name: page.results[0].properties["Task name"].title[0].text.content,
      start_date: page.results[0].properties.Due.date.start,
    }),
  }
}

module.exports = { handler }
