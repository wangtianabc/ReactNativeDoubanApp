import React from 'react'
import SQLiteStorage from 'react-native-sqlite-storage'

SQLiteStorage.DEBUG(true)
//SQLiteStorage.enablePromise(true)
const database_name = "doudou.db"
const database_version = "1.0"
const database_displayname = "MySQLite"
const database_size = -1
var db

const collectionTableName = 'Collection'
class SQLite extends React.Component{
    render() {
        return null
    }

    componentWillUnmount(){
        if(db){
            this.successCB('close')
            db.close()
        }else {
            console.log("SQLiteStorage not open")
        }
    }

    open = () => {
        db = SQLiteStorage.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
            () => {this.successCB('open')},
            (err) => {this.errorCB('open', err)}
        )
    }

    close = () => {
        if(db) {
            this.successCB('close')
            db.close()
        }else {
            console.log('SQLite not open')
        }
        db = null
    }

    createTable = () => {
        if(!db) {
            this.open()
        }

        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS ' + collectionTableName + '(' +
                'id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,' +
                'title VARCHAR,' +
                'url VARCHAR,' +
                'pic VARCHAR,' +
                'director VARCHAR,' +
                'actor VARCHAR' + ')',[],
                () => {this.successCB('execute sql')},
                (err) => {this.errorCB('execute sql', err)}
            )
        },(err) => {
            this.errorCB('transaction', err)
        },() => {
            this.successCB('transaction')
        })
    }

    saveCollection = (movie) => {
        debugger
        return new Promise((resolve, reject) => {
            if(!db) {
                this.open()
            }

            db.executeSql('INSERT INTO ' + collectionTableName + '(title,url,pic,director,actor) VALUES (?,?,?,?,?)',
                [movie.title, movie.alt, movie.images.large,movie.directors[0].name,movie.casts.map((v) => v.name).join('/')],
                () => {
                    this.successCB('save collection')
                    resolve()
                },
                (err) => {
                    this.errorCB('save collection', err)
                    reject()
                }
            )
        })
    }

    findCollectionByName = (name) => {
        if(!db) {
            this.open()
        }

        return new Promise((resolve,reject) => {
            db.executeSql('SELECT * FROM ' + collectionTableName + ' where title = ? limit 1', [name],
                (results) => {
                    debugger
                    if(results.rows.length > 0){
                        resolve(results.rows.item(0))
                    }else{
                        reject('not find movie')
                    }
                    this.successCB('find movie by name')
                },
                (err) => {
                    reject(err)
                    this.errorCB('find movie by name', err)
                }
            )
        })

    }

    deleteCollectionByName = (name) => {
        if(!db) {
            this.open()
        }
        return new Promise((resolve,reject) => {
            db.executeSql('',[name],
                () => {
                    resolve()
                    this.successCB('delete movie by name')
                },
                (err) => {
                    reject(err)
                    this.errorCB('delete movie by name', err)
                }
            )
        })
    }

    successCB(name){
        console.log(`SQLiteStorage ${name} success`)
    }
    errorCB(name, err){
        console.log(`SQLiteStorage ${name} error: ${err}`)
    }
}

export default SQLite