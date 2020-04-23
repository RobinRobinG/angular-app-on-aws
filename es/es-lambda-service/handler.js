'use strict';

const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'https://vpc-shopping-app-es-nro2lnlzhabqas5odvqjnrgx7q.us-west-2.es.amazonaws.com',
  log: 'error'
});

module.exports.es = async (event) => {
  for (const record of event.Records) {
    console.log({ record });
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    try {
      if (record.eventName === 'INSERT') {
        const result = await client.create({
          index: 'shopping-app',
          type: 'products-dev',
          id: record.dynamodb.NewImage.id.S,
          body: {
            id: record.dynamodb.NewImage.id.S,
            title: record.dynamodb.NewImage.name.S,
            published: record.dynamodb.NewImage.name.S
          }
        });
        console.log('====== complete =======');
        console.log(result);
      }
    } catch (error) {
      console.log({ error });
    }
  }
  return `Successfully processed ${event.Records.length} records.`;
};
