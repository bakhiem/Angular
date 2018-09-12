const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
try {
  require("./config.json");
} catch (err) {
  throw new Error(
    "File config.json not created. Check out config-template.json"
  );
}
const config = require("./config.json");

const app = express();

const postRouter = require("./modules/api/posts/route");

const userRouter = require("./modules/api/user/route");

const authRouter = require("./modules/api/auth/route");
//deploy secure is true
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: config.secureCookie,
      maxAge: 12 * 60 * 60 * 1000
    }
  })
);

app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );
  const acceptedOrigins = ['http://localhost:4200','http://localhost:6969']
  if (req.headers.origin && acceptedOrigins.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));



app.use("/", postRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
mongoose.connect(config.mongoPath, err => {
  if (err) console.error(err);
  else console.log("Database connect successful");
});

const port = process.env.port || 6969;

app.listen(port, err => {
  if (err) console.log(err);
  console.log("Server started at port " + port);
});