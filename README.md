# Personal website
A website that was developed with NodeJS and love. If you would like to clone my project, you can simply do the following instruction:

**Cloning Project**

`$ git clone https://github.com/Akiraff2015/node-website.git`

Once you cloned the project on your local desktop, do the following commands:

`$ cd node-website && npm i`

This will change to node-website directory and install everything. Once all node_modules installed, ensure to have your MongoDB to be running in your terminal.

`$ mongod`

And make sure that there are no ports running at **3000**! If you got nodemon, you can simply type the following command, at the root of directory.

`nodemon ./bin/www`

If you don't have nodemon, you can simply use `node ./bin/www` or you can download nodemon globally by `npm i -g nodemon`
