import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const checkUploadsFileExists = () => {


  const uploadsPath = path.join(__dirname, "../uploads/lemon");

  fs.access(uploadsPath, (err) => {
    if (err) fs.mkdir(uploadsPath, { recursive: true }, (err) => console.log(err));
    
  });

};
