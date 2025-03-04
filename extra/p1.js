const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/getdata' && req.method === 'GET') {
        try {
            const data = await fs.readFile('./data.json', 'utf8');
            res.writeHead(200);
            res.end(data); // Send the raw JSON string
        } catch (error) {
            console.error('Error reading data:', error);
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Internal server error' }));
        }
    } else if (req.url === '/setdata' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', async () => {
            try {
                const newData = JSON.parse(body);
                let users = [];
                try {
                    const fileData = await fs.readFile('./data.json', 'utf8');
                    users = JSON.parse(fileData);
                } catch (readError) {
                    
                    if (readError.code !== 'ENOENT' && readError.name !=='SyntaxError') {
                        throw readError;
                    }
                }

                const newId = users.length > 0 ? users[users.length - 1].roll_no + 1 : 101; //Use roll_no instead of id
                newData.roll_no = newId; 
                users.push(newData);

                await fs.writeFile('./data.json', JSON.stringify(users, null, 2));
                res.writeHead(200);
                res.end(JSON.stringify({ message: 'Data set successfully' }));
            } catch (error) {
                console.error('Error writing data:', error);
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'Internal server error' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(9000, () => {
    console.log('Server running on port 9000');
});