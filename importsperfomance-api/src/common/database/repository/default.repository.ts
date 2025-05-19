import {
  EntityManager,
  EntityTarget,
  ObjectLiteral,
  Repository,
} from 'typeorm';

export class DefaultRepository<T extends ObjectLiteral> {
  protected readonly repository: Repository<T>;

  constructor(
    readonly entity: EntityTarget<T>,
    readonly manager: EntityManager,
  ) {
    this.repository = manager.getRepository(entity);
  }
}
