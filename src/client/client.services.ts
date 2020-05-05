/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */

import { Repository } from '@src/commons/repository';
import { ClientQueryBuilder } from './client.query-builder';
import {
  UpdateClientCommand, DeleteClientCommand, CreateClientCommand, ListAllClientQuery,
} from './client.entity';
import { ClientResponseBuilder } from './client.response-builder';

export class ClientService {
    repository: Repository = new Repository();

    queryBuilder: ClientQueryBuilder = new ClientQueryBuilder();

    responseBuilder: ClientResponseBuilder = new ClientResponseBuilder();

    public async update(item: UpdateClientCommand): Promise<string> {
      const input = this.queryBuilder.update(item);
      return this.repository.save(input).then(() => 'success');
    }

    public async delete(item: DeleteClientCommand): Promise<string> {
      const input = this.queryBuilder.delete(item);
      return this.repository.delete(input).then(() => 'success');
    }

    public async save(item: CreateClientCommand): Promise<string> {
      const input = this.queryBuilder.save(item);
      return this.repository.save(input).then(() => 'success');
    }

    public async list(request: ListAllClientQuery): Promise<any> {
      const query = this.queryBuilder.list(request);
      return this.repository
        .list(query)
        .then((result) => this.responseBuilder.list(result));
    }
}
