import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1744232119452 implements MigrationInterface {
    name = 'Migration1744232119452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tb_auto_part\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`brand\` varchar(255) NOT NULL, \`price\` decimal(10,2) NOT NULL, \`replacement_km\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_payment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`amount\` decimal(10,2) NOT NULL, \`payment_date\` timestamp NOT NULL, \`status\` enum ('pending', 'approved') NOT NULL DEFAULT 'pending', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_order_service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`service_description\` varchar(255) NOT NULL, \`status\` enum ('waiting', 'progress', 'finished') NOT NULL DEFAULT 'waiting', \`labor_cost\` decimal(10,2) NOT NULL, \`parts_cost\` decimal(10,2) NOT NULL, \`vehicle_id\` int NULL, \`payment_id\` int NULL, \`mechanical_id\` int NULL, UNIQUE INDEX \`REL_c7af68cd203a7e94c29c33e347\` (\`payment_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_vehicle\` (\`id\` int NOT NULL AUTO_INCREMENT, \`make\` varchar(255) NOT NULL, \`vehicle_type\` varchar(255) NOT NULL, \`vehicle_plate\` varchar(255) NOT NULL, \`color\` varchar(255) NOT NULL, \`year\` int NOT NULL, \`mileage\` int NOT NULL, \`client_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_client\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tb_order_service_has_auto_part\` (\`order_service_id\` int NOT NULL, \`auto_part_id\` int NOT NULL, INDEX \`IDX_2ae8aaa5612ec4d6346a55ffd9\` (\`order_service_id\`), INDEX \`IDX_4f4ca6eb4856afe34d338e0a56\` (\`auto_part_id\`), PRIMARY KEY (\`order_service_id\`, \`auto_part_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tb_order_service\` ADD CONSTRAINT \`FK_7ddbc038560354eb8d533e22242\` FOREIGN KEY (\`vehicle_id\`) REFERENCES \`tb_vehicle\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_order_service\` ADD CONSTRAINT \`FK_c7af68cd203a7e94c29c33e3474\` FOREIGN KEY (\`payment_id\`) REFERENCES \`tb_payment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_order_service\` ADD CONSTRAINT \`FK_c88df540aafd3581c39a6557a78\` FOREIGN KEY (\`mechanical_id\`) REFERENCES \`tb_employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_vehicle\` ADD CONSTRAINT \`FK_67ecdd5dd0eac698c65a882ba96\` FOREIGN KEY (\`client_id\`) REFERENCES \`tb_client\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tb_order_service_has_auto_part\` ADD CONSTRAINT \`fk_order_service_has_auto_part_order_service_id\` FOREIGN KEY (\`order_service_id\`) REFERENCES \`tb_order_service\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tb_order_service_has_auto_part\` ADD CONSTRAINT \`fk_order_service_has_auto_part_auto_part_id\` FOREIGN KEY (\`auto_part_id\`) REFERENCES \`tb_auto_part\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tb_order_service_has_auto_part\` DROP FOREIGN KEY \`fk_order_service_has_auto_part_auto_part_id\``);
        await queryRunner.query(`ALTER TABLE \`tb_order_service_has_auto_part\` DROP FOREIGN KEY \`fk_order_service_has_auto_part_order_service_id\``);
        await queryRunner.query(`ALTER TABLE \`tb_vehicle\` DROP FOREIGN KEY \`FK_67ecdd5dd0eac698c65a882ba96\``);
        await queryRunner.query(`ALTER TABLE \`tb_order_service\` DROP FOREIGN KEY \`FK_c88df540aafd3581c39a6557a78\``);
        await queryRunner.query(`ALTER TABLE \`tb_order_service\` DROP FOREIGN KEY \`FK_c7af68cd203a7e94c29c33e3474\``);
        await queryRunner.query(`ALTER TABLE \`tb_order_service\` DROP FOREIGN KEY \`FK_7ddbc038560354eb8d533e22242\``);
        await queryRunner.query(`DROP INDEX \`IDX_4f4ca6eb4856afe34d338e0a56\` ON \`tb_order_service_has_auto_part\``);
        await queryRunner.query(`DROP INDEX \`IDX_2ae8aaa5612ec4d6346a55ffd9\` ON \`tb_order_service_has_auto_part\``);
        await queryRunner.query(`DROP TABLE \`tb_order_service_has_auto_part\``);
        await queryRunner.query(`DROP TABLE \`tb_client\``);
        await queryRunner.query(`DROP TABLE \`tb_vehicle\``);
        await queryRunner.query(`DROP INDEX \`REL_c7af68cd203a7e94c29c33e347\` ON \`tb_order_service\``);
        await queryRunner.query(`DROP TABLE \`tb_order_service\``);
        await queryRunner.query(`DROP TABLE \`tb_employee\``);
        await queryRunner.query(`DROP TABLE \`tb_payment\``);
        await queryRunner.query(`DROP TABLE \`tb_auto_part\``);
    }

}
