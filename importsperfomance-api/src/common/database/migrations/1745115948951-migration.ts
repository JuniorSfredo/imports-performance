import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1745115948951 implements MigrationInterface {
  name = 'Migration1745115948951';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`tb_order_service\`
            ADD \`final_cost\` decimal(10, 2) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`tb_order_service\`
            ADD \`generated_at\` datetime NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`tb_order_service\`
            DROP COLUMN \`generated_at\``);
    await queryRunner.query(`ALTER TABLE \`tb_order_service\`
            DROP COLUMN \`final_cost\``);
  }
}
