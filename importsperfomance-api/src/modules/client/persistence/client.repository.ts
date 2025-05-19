import { DefaultRepository } from '../../../common/database/repository/default.repository';
import { Client } from '../entities/client.entity';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientRepository extends DefaultRepository<Client> {
  constructor(manager: EntityManager) {
    super(Client, manager);
  }

  async findAll(): Promise<Client[]> {
    return await this.manager.find(Client);
  }

  async findClientById(id: number): Promise<Client> {
    const clientFound = await this.manager.findOne(Client, {
      where: { id: id },
      relations: ['vehicles'],
    });

    if (!clientFound) throw new Error('Client not found');
    return clientFound;
  }

  async save(client: Client): Promise<Client> {
    this.manager.create(Client, client);
    return await this.manager.save(client);
  }

  async findClientByEmail(email: string): Promise<Client | null> {
    return await this.manager.findOne(Client, {
      where: { email },
    });
  }

  async findClientByCPF(cpf: string): Promise<Client | null> {
    return await this.manager.findOne(Client, {
      where: { cpf },
    });
  }
}
