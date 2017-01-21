from twitter import *

access_secret = 'G81fw384vhfAwkXqgfaIFC5i1YcYjrDSv5JIkyYEyU7QG'
token ='2453544336-ltTgoNKhOlbPf3HgX6agLWDZ1eeb8aWcG3EYybV'
c_key = 'XKMLJw68sVcad9pJffXzBOQR9'
c_secret = 'MAdK1wmIqTvnWSZnJlvlw0Y2UfGRyeYYUlmO9Ofi6RDafFPrM0'
t = Twitter(auth=OAuth(token=token, token_secret=access_secret, consumer_key=c_key, consumer_secret = c_secret, ))

data = t.search.tweets(q='#npcrimetrack')

if len(data['statuses']) != 0 :
	print data['statuses'][0]['text']
	print data['statuses'][0]['name']
else:
	print "Empty data"
