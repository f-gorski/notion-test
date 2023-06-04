const { Client } = require("@notionhq/client")
require("dotenv").config()

const handler = async () => {
  const notion = new Client({
    auth: process.env.VITE_NOTION_API_TOKEN,
  })
  const page = await notion.databases.query({
    database_id: process.env.VITE_DB_ID,
  })

  const tasksList = page.results.map((task) => {
    return {
      name: task.properties["Task name"].title[0].text.content,
      start_date: task.properties.Due.date.start,
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(tasksList),
  }
}

module.exports = { handler }
