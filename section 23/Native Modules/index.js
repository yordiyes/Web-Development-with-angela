const fs = require("fs");

// fs.writeFile("message.txt", "Hello from Jordi.", (error)=>{
//     if(error) throw error;
//         console.log("File is saved!");
// })

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
