import sqlite3

conn = sqlite3.connect('database.sqlite3')
cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS tweet_data')
cur.execute('CREATE TABLE tweet_data ('
			+ ' id INTEGER PRIMARY KEY AUTOINCREMENT,'
			+ ' tweet TEXT,'
			+ ' longitude REAL,'
			+ ' latitude REAL,'
			+ ' username TEXT,'
			+ ' created_date TEXT'
			+ ' )' 
		)

cur.close()