"""Run eures-jobs-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'keywords': ['software developer'],
 'countries': ['ie', 'nl'],
 'postedWithin': 'week',
 'maxResultsPerSearch': 50}
run = client.actor("kamerozkan/eures-jobs-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
