//alustan uut nädalat luues uus kaust weekX, sinna sisse uus fail server.js, avan terminali ja kirjutan: npm init -y, luuakse package.json fail (selleks vajalik node.js rakendust)

const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 3000;

//õpetame serverile mingisuguse päringu, kuvame ka konsooli päringu nime (requestUrl)
const server = http.createServer((request, response) => {
    const requestUrl = url.parse(request.url).pathname;
    console.log(requestUrl);

    if (requestUrl === "/") {
        fs.readFile("index.html", (error, fileContent) => {
            if (error) {
                response.writeHead(404);
                response.write(`Error. File not found.`);
            } else {
                response.writeHead(200);
                response.write(fileContent);
            }

            response.end();
        });   

    } else if (requestUrl === "/about") {
        fs.readFile("about.html", (error, fileContent) => {
            if (error) {
                response.writeHead(404);
                response.write(`Error. File not found.`);
            } else {
                response.writeHead(200);
                response.write(fileContent);
            }

            response.end();
        });

    } else if (requestUrl === "/contact") {
        fs.readFile("contact.html", (error, fileContent) => {
            if (error) {
                response.writeHead(404);
                response.write(`Error. File not found.`);
            } else {
                response.writeHead(200);
                response.write(fileContent);
            }

            response.end();
        });

    } else {
        response.writeHead(404);
        response.write(`Error. ${requestUrl} page not found.`)
        response.end();
    }

    //response.end();
});

// Ctrl + C programmi peatamiseks

server.listen(port, error => {
    if(error){
        console.log(error);
    } else {
        console.log(`Server is running on port ${port}.`);
    }
});