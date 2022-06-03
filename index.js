const Client = require("ftp");

var ftp = new Client();
ftp.on("ready", function () {
  ftp.put("SASNAKAWHITENGLISH.png", "/SASNAKAWHITENGLISH.png", (err) => {
    if (err) throw err;
    ftp.end();
    console.log("Done");
  });
});
// connect to localhost:21 as anonymous
ftp.connect({
  host: process.env.FTP_HOST,
  port: parseInt(process.env.FTP_HOST),
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  // secure: false,
});
