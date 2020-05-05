/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  ListAllClientQuery, CreateClientCommand, UpdateClientCommand, DeleteClientCommand,
} from './client.entity';
import { ClientService } from './client.services';

const service: ClientService = new ClientService();

export async function list(event: ListAllClientQuery) {
  console.log(`Request to Lambda: ${JSON.stringify(event, undefined, 4)}`);
  return service.list(event);
}

export async function create(event: CreateClientCommand) {
  console.log(`Request to Lambda: ${JSON.stringify(event, undefined, 4)}`);
  return service.save(event);
}

export async function update(event: UpdateClientCommand) {
  console.log(`Request to Lambda: ${JSON.stringify(event, undefined, 4)}`);
  return service.update(event);
}

export async function remove(event: DeleteClientCommand) {
  console.log(`Request to Lambda: ${JSON.stringify(event, undefined, 4)}`);
  return service.delete(event);
}
