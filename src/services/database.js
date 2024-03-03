import { useMemo } from 'react'

class Database {
  constructor(name, schema = {}, version = 1) {
    this.name = name
    this.schema = schema
    this.version = version
  }

  async deleteDatabase(name) {
    await indexedDB.deleteDatabase(name)
  }

  get database() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db)
      } else {
        const request = window.indexedDB.open(this.name, this.version)
        request.onsuccess = (e) => {
          this.db = e.target.result
          resolve(this.db)
        }
        request.onupgradeneeded = (e) => {
          const db = e.target.result

          Object.entries(this.schema).forEach(
            ([
              name,
              options = {
                keyPath: 'id',
                autoIncrement: true,
              },
            ]) => {
              try {
                db.createObjectStore(name, options)
              } catch (e) {}
            }
          )
        }
        request.onerror = (e) => {
          reject(e.target.errorCode)
        }
      }
    })
  }

  async importData(data) {
    const db = await this.database
    return new Promise((resolve, reject) => {
      const entites = Object.keys(data)
      const transaction = db.transaction(entites, 'readwrite')

      entites.forEach((name) => {
        transaction.objectStore(name).clear()
        data[name].forEach((item) => transaction.objectStore(name).add(item))
      })

      transaction.commit()

      transaction.oncomplete = () => resolve(data)
      transaction.onerror = (e) => reject(e)
    })
  }

  async exportData() {
    return {
      taxonomy: await this.getAll('taxonomy'),
    }
  }

  async getAll(name) {
    const db = await this.database
    return await new Promise((resolve, reject) => {
      const req = db.transaction(name, 'readonly').objectStore(name).getAll()
      req.onsuccess = (_) => resolve(req.result)
      req.onerror = (e) => reject(e)
    })
  }

  async get(name, key) {
    const db = await this.database
    return await new Promise((resolve, reject) => {
      const req = db.transaction(name, 'readonly').objectStore(name).get(key)
      req.onsuccess = (_) => resolve(req.result)
      req.onerror = (e) => reject(e)
    })
  }

  async add(name, value) {
    const db = await this.database
    db.transaction(name, 'readwrite').objectStore(name).add(value)
    return value
  }

  async put(name, value) {
    const db = await this.database
    db.transaction(name, 'readwrite').objectStore(name).put(value)
    return value
  }

  async addAll(name, values = []) {
    values.forEach((value) => this.add(name, value))
  }

  async delete(name, key) {
    const db = await this.database
    db.transaction(name, 'readwrite').objectStore(name).delete(key)

    return key
  }
}

export const AppDatabase = new Database(
  'cuneiform',
  {
    taxonomy: { keyPath: 'id' },
  },
  1
)

export function useDatabase(name) {
  return useMemo(() => AppDatabase, [name])
}
