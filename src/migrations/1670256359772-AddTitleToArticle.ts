import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTitleToArticle1670256359772 implements MigrationInterface {
  name = 'AddTitleToArticle1670256359772';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "articles" ADD "title" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "title"`);
  }
}
