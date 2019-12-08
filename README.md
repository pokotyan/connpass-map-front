[![CircleCI](https://circleci.com/gh/pokotyan/connpass-map-front.svg?style=svg)](https://circleci.com/gh/pokotyan/connpass-map-front)

# cloudfrontのcache削除

```
aws cloudfront create-invalidation --distribution-id E1STGFJ32YW6TP --invalidation-batch '{ "Paths": { "Quantity": 1, "Items": ["/*"] }, "CallerReference": "deploy_'`echo $(date +%s)`'" }' --profile private
```
