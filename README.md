# crime-tracker

![Screenshot](Screenshot.jpg?raw=true)

A web app that tracks crime happening in city in real time. Developed during Leapfrog Hackathon at [KU IT Meet 2017](https://www.facebook.com/events/147957639029217/).

Details: [Slides](slides.pdf)

###Built With

* [Python](https://www.python.org/)
* [Flask](http://flask.pocoo.org/)
* [Google Maps API](https://developers.google.com/maps/)

### Local Development
To install these interactives on your local machine:
* Clone this repository to your local machine.
* In the directory where you placed the cloned repo, create a virtual environment for Python and project dependencies in a directory called "venv":
```shell
pip install virtualenv 
virtualenv venv
```
* Activate your virtual environment
```shell
source venv/bin/activate
```
* Install Flask and all required packages:
```shell
pip install -r requirements.txt
```

* Fire up your local webserver:
```shell
python manage.py runserver
```
* In a web browser, go to [localhost:8000](http://localhost:8000/), and you should see the development site! Please not that the terminal window you are running the development site in must stay open while you are using the site.
* When daily development is complete, terminate the local web server by typing ```CONTROL + C```. Also deactivate the virtual environment:
```shell
deactivate
```

**Authors:**
- [Amit Chaudhary](https://github.com/studenton)
- [Enosh Shrestha](https://github.com/eroj333)
- [Kamal Paneru](https://github.com/Kamalpaneru)

## License

This project is licensed under the GNU License - see the [LICENSE](LICENSE.md) file for details
