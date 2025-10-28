// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// import routes
const fileRoutes = require("./routes/fileRoutes");
const urlRoutes = require("./routes/urlRoutes");
const domainRoutes = require("./routes/domainRoutes");
const ipRoutes = require("./routes/ipRoutes");
const nmapRoutes = require("./routes/nmapRoutes"); // ✅ ADD THIS

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/files", fileRoutes);
app.use("/urls", urlRoutes);
app.use("/domains", domainRoutes);
app.use("/ip", ipRoutes);
app.use("/nmap", nmapRoutes); // ✅ ADD THIS

// root
app.get("/", (req, res) => {
  res.send("VirusTotal API Proxy is running...");
});

// console.log(process.env.VT_KEY);

// start server
app.listen(5000, "0.0.0.0", () => {
  console.log("✅ Server listening on port 5000 and accessible to other containers");
});
