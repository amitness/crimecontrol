import sqlite3

con = sqlite.connect('database.sqlite3')
cur = conn.cursor()

cur.execute('SELECT * FROM tweet_data')
for row in cur:
    row_id, tweet, longitude, lat, username, date = row
    print username
    print tweet
    print 
    print
