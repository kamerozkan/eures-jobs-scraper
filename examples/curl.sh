#!/usr/bin/env bash
# Run eures-jobs-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~eures-jobs-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"keywords": ["software developer"], "countries": ["ie", "nl"], "postedWithin": "week", "maxResultsPerSearch": 50}'
