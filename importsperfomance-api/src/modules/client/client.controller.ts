import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientsResponseDTO } from './dtos/clients.response.dto';
import { ClientResponseDTO } from './dtos/client.response.dto';
import { ClientIdDTO } from './dtos/client.id.dto';
import { ClientRequestDTO } from './dtos/client.request.dto';
import { CustomValidationPipe } from '../../common/pipes/custom.validation.pipe';

@Controller('/clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getAllClients(): Promise<ClientsResponseDTO[]> {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  async getClientById(@Param('id') id: number): Promise<ClientResponseDTO> {
    return this.clientService.getClientById(id);
  }

  @Post('/create')
  @UsePipes(new CustomValidationPipe())
  async createClient(
    @Body() clientBody: ClientRequestDTO,
  ): Promise<ClientIdDTO> {
    return await this.clientService.createClient(clientBody);
  }
}
