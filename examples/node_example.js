// Run eures-jobs-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "keywords": [
    "software developer"
  ],
  "countries": [
    "ie",
    "nl"
  ],
  "postedWithin": "week",
  "maxResultsPerSearch": 50
};
const run = await client.actor('kamerozkan/eures-jobs-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
