.PHONY: clean system-packages python-packages install tests run all

clean:
	find . -type f -name '*.pyc' -delete
	find . -type f -name '*.log' -delete

system-packages:
	sudo apt install python-pip -y

python-packages:
	pip install -r requirements.txt

install: system-packages python-packages

tests:
	python manage.py test

run:
	ng serve

env:
	virtualenv -p python3 venv
	source venv/bin/activate

InitDb:
	python manage.py db init
	python manage.py db migrate --message 'initial database migration'
	python manage.py db upgrade

all: clean install tests run
