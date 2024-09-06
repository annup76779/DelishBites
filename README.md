# Getting Started with Frontend
### Initial Setup - 
```shell
npm i
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Backend Steup

#### Initial Setup

##### Install dependencies
```shell
cd ./delishbites_backend
pip install -r requirements.txt
```

##### Do migrations
```shell
python manage.py migrate
```

##### Create superuser - admin user
```shell
python manage.py createsuperuser
```

##### Start backend server
```shell
python manage.py runserver
```