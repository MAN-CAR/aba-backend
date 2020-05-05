/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */

import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import {
  CreateClientCommand, UpdateClientCommand, DeleteClientCommand, ListAllClientQuery,
} from './client.entity';
// Sort -> rbtId#clientLastname#dob
export class ClientQueryBuilder {
  public update(item: UpdateClientCommand): DynamoDB.DocumentClient.PutItemInput {
    return {
      TableName: process.env.TableName,
      Item: {
        ...item.value,
        sort: `${item.rbtId}#${item.value.lastName}#${item.value.dob}#${item.value.clientNumber}`,
        id: 'CL',
      },
    };
  }

  public delete(item: DeleteClientCommand): DynamoDB.DocumentClient.DeleteItemInput {
    return {
      TableName: process.env.TableName,
      Key: { id: 'CL', sort: `${item.rbtId}#${item.value.lastName}#${item.value.dob}#${item.value.clientNumber}` },
    };
  }

  public save(item: CreateClientCommand): DynamoDB.DocumentClient.PutItemInput {
    return {
      TableName: process.env.TableName,
      Item: {
        ...item.value,
        id: 'CL',
        sort: `${item.rbtId}#${item.value.lastName}#${item.value.dob}#${item.value.clientNumber}`,
      },
    };
  }

  public list(query: ListAllClientQuery): DynamoDB.DocumentClient.QueryInput {
    const result: DynamoDB.DocumentClient.QueryInput = {
      TableName: process.env.TableName,
      ExpressionAttributeValues: { ':id': 'CL' },
      KeyConditionExpression: 'id=:id',
      // eslint-disable-next-line radix
      Limit: parseInt(process.env.PAGE),
    };
    if (query.marker) {
      result.ExclusiveStartKey = JSON.parse(
        Buffer.from(query.marker, 'base64').toString('utf8'),
      );
    }

    return result;
  }
}
