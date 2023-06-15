const server = require('./api/server');
console.log("nodejs App is working....")
const port = process.env.PORT || 9000 ;

server.listen(port, () => {
        console.log(`Server running on port ${port}...`);
});