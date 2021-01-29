# Note manager with NODE.JS

## Run using defualt NODE runtime(cmd)

    node app.js

NODE.JS mst be installed to run this application as this depends on the JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.

## run using NODEMON runtime(cmd)

    nodemon app.js

nodemon is enabled globally through the -g flag. You can use nodemon in this repo where ever without having to list it down as a dependancy. This allows you to automatically restart the server when you save the file in your favourite text editor.

### Add a new note(cmd):

`node app.js add --title="Your Note Title" --body="Body of your title"`

### Remove a note(cmd):

`node app.js remove --title="Your note title" `

### List all the notes

`node app.js list`

### Read a note

`node app.js read --title="title"`

---

#### NOTE: This application is based on pure js. And this has no licence feel free to clone``
