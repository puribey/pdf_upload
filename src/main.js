const crearServidor = require("./server.js");
// const axios = require("axios");
// const fs = require("fs");
// const FormData = require("form-data");

const main = async () => {
  await crearServidor({ port: 3000 });
  //   const filePath = "./fileToUpload/worksheetskindergarten.pdf";
  //   const pdfData = fs.readFileSync(filePath);

  //   const form = new FormData();
  //   form.append("file", pdfData);

  //   const res = await axios.post("http://localhost:3000/upload-file", form, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  //   console.log(res.data);
  //   server.close();
};
main();
