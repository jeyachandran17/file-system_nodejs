
const express = require("express");
const app = express();

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

const fs = require('fs');
const path = require("path");

app.get("/create", function (request, response) {
    const folderpath = './backup';
    const date = new Date();
    const fileName =`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`;
    const filepath = path.join(folderpath,fileName);
    const fileContent = `Current Timestamp : ${Date.now()}`

    fs.writeFile(filepath, fileContent, (err) => {
        if (err) {
            console.error(err);
            response.status(500).send("Error creating file");
        }
        else{
            console.log(`file : ${fileName} successfully created`);
            response.status(200).send("file successfully created");
        }
    })
})
