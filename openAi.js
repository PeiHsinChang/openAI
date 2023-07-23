import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-haoyZsSbhi7ckZe0uoCcv9ad",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();