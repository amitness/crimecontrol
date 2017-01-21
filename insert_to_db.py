import sqlite3

conn = sqlite3.connect('database.sqlite3')
cur = conn.cursor()

tweet = "There is a robbery in progress at Kalimati."
longitude = 0
latitude = 0
username = 'user1'
created_date = 'Sun Apr 12, 2012 00:12:00 UTC'
cur.execute('SELECT username, created_date '
	+' FROM tweet_data '
	+' WHERE username = ? and created_date = ?', 
	(tweet,created_date)
	)
if(cur!=None and cur.rowcount>0):
	cur.execute('INSERT INTO tweet_data'
		+ '( tweet, longitude, latitude, username, created_date)'
		+ ' VALUES '
		+ '(?,?,?,?,?)', (tweet, longitude, latitude,username, created_date)
		)
	conn.commit();
cur.close()