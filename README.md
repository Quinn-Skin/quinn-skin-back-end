# Quinn

In order to see Json format in the browser please install the [Json View](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?utm_source=chrome-ntp-icon) extension in Google Chrome.

## How to run it.

First clone this repository into your local machine: `` git clone https://github.com/brayhandeaza/quinn-back-end.git ``

You will need to update the `.env` file with your credentials: 

`DATABASE=quinn_db` This one is the database name and you should keep it the same

`USERNAME=[your database username`

`PASSWORD=[your database passwords]`


## Available Scripts

In the project directory, you can run:

`npm install`

`npm run db:init`

`npm start`

## API routes to CRUD (Create, Read, Update, and Delete) 
`post` Create a new Product https://quinn-back-end.herokuapp.com/produts/

`get` Read all Products https://quinn-back-end.herokuapp.com/produts/

`get` Read a single Product https://quinn-back-end.herokuapp.com/produts/:id

`update` Update a Products https://quinn-back-end.herokuapp.com/produts/:id

`delete` Delete a single Product https://quinn-back-end.herokuapp.com/produts/:id



