/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  dataBaseName = 'messages.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) { }

  async openDataBase() {
    try {
      this.db = await this.sqlite.create({ name: this.dataBaseName, location: 'default' });
      await this.createDataBase();
    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados', error);
    }
  }

  async createDataBase() {
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  getCreateTable() {
    const sqls = [];
    sqls.push('CREATE TABLE IF NOT EXISTS messages (id integer primary key AUTOINCREMENT, fromName varchar(200), date varchar(10), read varchar(2), message varchar(200), airTicket varchar(20), accommodation varchar(20), locomotion varchar(20), situation varchar(20));');
    sqls.push('CREATE TABLE IF NOT EXISTS contacts (id integer primary key AUTOINCREMENT, name varchar(200));');
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]) {
    return this.db.executeSql(sql, params);
  }
}
