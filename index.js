require("dotenv").config();
const axios = require("axios");

const apiKey = process.env.OPENAI_API_KEY;
const query = "Give 3 words for Thailand";
console.log("Query:", query);

async function getResponse(query) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: query }],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const responseText = response.data.choices[0].message.content;
    console.log("Response:", responseText);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}

getResponse(query);
