import { error } from "console";
import { readFile } from "fs";
import { writeFile } from "fs";


// writeFile("message.txt", "Hello from Jordi.", (error)=>{
//     if(error) throw error;
//     console.log("File is saved!");
// })

writeFile("message.txt", "This is also another text added to the file using node", (error)=>{
    if (error) throw error;
    console.log("Written Sucessfully");
})
readFile("message.txt", "utf-8", (err, data) =>{
    if(err) throw err;
    console.log(data)
})