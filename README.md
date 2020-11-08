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
`post` Create a new Product https://quinn-server.herokuapp.com/products/

`get` Read all Products https://quinn-server.herokuapp.com/products/

`get` Read a single Product https://quinn-server.herokuapp.com/products/:id

`update` Update a Products https://quinn-server.herokuapp.com/products:id

`delete` Delete a single Product https://quinn-server.herokuapp.com/products/:id



