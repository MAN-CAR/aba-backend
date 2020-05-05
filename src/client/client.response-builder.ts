/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */

import * as DynamoDB from 'aws-sdk/clients/dynamodb';


export class ClientResponseBuilder {
  public list(result: DynamoDB.DocumentClient.QueryOutput): any {
    const { Items, LastEvaluatedKey } = result;
    const response: any = {
      marker: (LastEvaluatedKey) ? Buffer.from(JSON.stringify(LastEvaluatedKey)).toString('base64') : null,
      data: (Items || []).map(({
        clientNumber,
        firstName,
        lastName,
        dob,
        medicaidId,
      }) => ({
        clientNumber, firstName, lastName, dob, medicaidId,
      })),
    };

    return response;
  }
}
