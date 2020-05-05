/* eslint-disable max-classes-per-file */
export class Client {
    clientNumber: string;

    firstName: string;

    lastName: string;

    dob: string; // YYYY-MM-DD

    medicaidId: string;
}

export class CreateClientCommand {
    value: Client;

    rbtId: string;
}

export class UpdateClientCommand {
    value: Client;

    rbtId: string;
}

export class DeleteClientCommand {
    value: Client;

    rbtId: string;
}

export class ListAllClientQuery {
    marker: string;
}
