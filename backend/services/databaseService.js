import sqlite3 from 'sqlite3';
import { promisify } from 'util';

export class DatabaseService {
  constructor() {
    this.db = null;
  }

  async initialize() {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database('./contact_messages.db', (err) => {
        if (err) {
          console.error('Error opening database:', err);
          reject(err);
        } else {
          console.log('Connected to SQLite database');
          this.createTable().then(resolve).catch(reject);
        }
      });
    });
  }

  async createTable() {
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL,
        ip TEXT,
        user_agent TEXT,
        timestamp TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;

    return new Promise((resolve, reject) => {
      this.db.run(createTableSQL, (err) => {
        if (err) {
          console.error('Error creating table:', err);
          reject(err);
        } else {
          console.log('Contact messages table ready');
          resolve();
        }
      });
    });
  }

  async storeMessage(messageData) {
    const { name, email, phone, message, ip, userAgent, timestamp } = messageData;
    
    const insertSQL = `
      INSERT INTO contact_messages (name, email, phone, message, ip, user_agent, timestamp)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    return new Promise((resolve, reject) => {
      this.db.run(insertSQL, [name, email, phone, message, ip, userAgent, timestamp], function(err) {
        if (err) {
          console.error('Error storing message:', err);
          reject(err);
        } else {
          resolve({
            id: this.lastID,
            name,
            email,
            phone,
            message,
            ip,
            userAgent,
            timestamp
          });
        }
      });
    });
  }

  async getAllMessages() {
    const selectSQL = `
      SELECT id, name, email, phone, message, ip, user_agent, timestamp, created_at
      FROM contact_messages
      ORDER BY created_at DESC
    `;

    return new Promise((resolve, reject) => {
      this.db.all(selectSQL, [], (err, rows) => {
        if (err) {
          console.error('Error fetching messages:', err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  async getMessageById(id) {
    const selectSQL = `
      SELECT id, name, email, phone, message, ip, user_agent, timestamp, created_at
      FROM contact_messages
      WHERE id = ?
    `;

    return new Promise((resolve, reject) => {
      this.db.get(selectSQL, [id], (err, row) => {
        if (err) {
          console.error('Error fetching message:', err);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  async close() {
    if (this.db) {
      return new Promise((resolve) => {
        this.db.close((err) => {
          if (err) {
            console.error('Error closing database:', err);
          } else {
            console.log('Database connection closed');
          }
          resolve();
        });
      });
    }
  }
}
