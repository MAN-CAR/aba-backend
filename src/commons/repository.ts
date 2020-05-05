import * as DynamoDB from 'aws-sdk/clients/dynamodb';


export class Repository {
  private docClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient({ region: 'us-east-1' });

  public async delete(
    item: DynamoDB.DocumentClient.DeleteItemInput,
  ): Promise<DynamoDB.DocumentClient.DeleteItemOutput> {
    return this.docClient.delete(item).promise();
  }

  public async save(
    item: DynamoDB.DocumentClient.PutItemInput,
  ): Promise<DynamoDB.DocumentClient.PutItemOutput> {
    return this.docClient.put(item).promise();
  }

  public async list(
    query: DynamoDB.DocumentClient.QueryInput,
  ): Promise<DynamoDB.DocumentClient.QueryOutput> {
    return this.docClient.query(query).promise();
  }
}
