const http = require('http');
const port = 8000;
const hostName= '127.0.0.1';
const fs= require('fs');
const url = require('url');

function renderHtml(path, res){
    fs.readFile(path, null, function(err, data){
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
    res.write("file not found");

    } else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
       
    }
    res.end();

    });
    
};

// function getStudents(pathObj, res) {
// 	let queryString = pathObj.query;
// 	console.log(":student", pathObj);
// 	if(queryString && queryString.userId){
// 		res.setHeader("Content-Type", 'application/json');
// 		res.end(JSON.stringify({"firstname":"abc"}));
// 	} else {
// 		res.setHeader("Content-Type", 'application/json');
// 		res.end(JSON.stringify(student));
// 	}
	
// }

// function getStudentByid(req, res){
// 	var body = '';
// 	req.on('data', function(data) {                                         
// 		body +=data;

// 		if(body.length>1e6) {
//             req.connection.destroy();
//             req.end();
// 		}
// 	});

// 	req.on('end', function(data) {
// 		var postData = JSON.parse(body);
// 		console.log(postData);
// 	});

//     res.end();
// }


var server= http.createServer((req, res)=>{

let pathObj = url.parse(req.url);

switch(pathObj.pathname){
    case '/':
    renderHtml("./public/index.html", res);
    break;

    case '/main.css':{
        fs.readFile(__dirname+"/public/assets/main.css", null, function(err, data){
            if(err) {
                res.writeHead(404, {'Content-Type': 'text/css'});
                 res.end("file not found");
    
        } else{
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(data);
           
        }
     
    
        });
        break;
        
    }
    case '/about':
    renderHtml("./public/about.html", res);
break;
    case '/contact':
    renderHtml("./public/contact.html", res);
break;
// case '/student' :
//     switch(req.method){
//         case 'GET':
//         getStudents(pathObj, res);
//         break;
//         case'POST':
//             getStudentByid(req, res);
        
//         break;
default:
res.writeHead(404, {'Content-Type': 'text/html'});
res.write("not found");
res.end();

    }

});



server.listen(port, hostName,  ()=>{
    console.log(`Server running at http://${hostName}:${port}`);
});