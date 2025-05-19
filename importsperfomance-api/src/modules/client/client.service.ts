import { Injectable } from '@nestjs/common';
import { ClientRepository } from './persistence/client.repository';
import { plainToInstance } from 'class-transformer';
import { ClientsResponseDTO } from './dtos/clients.response.dto';
import { ClientResponseDTO } from './dtos/client.response.dto';
import { ClientRequestDTO } from './dtos/client.request.dto';
import { ClientIdDTO } from './dtos/client.id.dto';
import { Client } from './entities/client.entity';
import { ClientAlreadyExistsException } from './exceptions/client.already.exists.exception';
import { HashService } from '../hash/hash.service';
import { Role } from '../../common/enums/role.enums';

@Injectable()
export class ClientService {
  constructor(
    private readonly clientRepository: ClientRepository,
    private readonly hashService: HashService,
  ) {}

  public async getAllClients(): Promise<ClientsResponseDTO[]> {
    const clients = await this.clientRepository.findAll();
    return clients.map((client) => plainToInstance(ClientsResponseDTO, client));
  }

  public async getClientById(id: number): Promise<ClientResponseDTO> {
    const client = await this.clientRepository.findClientById(id);
    return plainToInstance(ClientResponseDTO, client, {
      excludeExtraneousValues: true,
    });
  }

  public async createClient(clientDTO: ClientRequestDTO): Promise<ClientIdDTO> {
    if (
      (await this.clientRepository.findClientByEmail(clientDTO.email)) ||
      (await this.clientRepository.findClientByCPF(clientDTO.cpf))
    )
      throw new ClientAlreadyExistsException('Client already exists');

    clientDTO.password = await this.hashService.hash(clientDTO.password);

    const client = plainToInstance(Client, clientDTO, {
      excludeExtraneousValues: true,
    });

    client.role = Role.CLIENT;

    return this.clientRepository.save(client).then((client): ClientIdDTO => {
      return { id: client.id };
    });
  }

  public async findClientByEmail(email: string): Promise<Client | null> {
    return await this.clientRepository.findClientByEmail(email);
  }
}
