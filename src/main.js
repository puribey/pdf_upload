import crearServidor from "./server.js";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";

const main = async () => {
  const server = await crearServidor({ port: 3000 });

  console.log("------------- Upload pdf --------------");
  const filePath = "./fileToUpload/worksheetskindergarten.pdf";
  const form = new FormData();
  form.append("demo", fs.createReadStream(filePath));
  try {
    const resPost = await axios({
      method: "post",
      url: "http://localhost:3000/upload-file",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
      },
    });
    console.log("Upload response", resPost.data);
  } catch (err) {
    console.log(err.message);
  }

  console.log("------------- Get uploaded pdfs --------------");
  try {
    const resGet = await axios.get("http://localhost:3000/files");
    console.log("Get PDF response", resGet.data);
  } catch (err) {
    console.log(err.message);
  }
  server.close();
};
main();
