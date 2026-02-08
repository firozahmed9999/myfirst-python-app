const express = require("express");
const app = express();

const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Home page – admission Form
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Admission Form</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
          }
          .container {
            width: 400px;
            margin: 100px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h2 {
            text-align: center;
          }
          input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
          }
          button {
            width: 100%;
            padding: 10px;
            background: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
          }
          .success {
            text-align: center;
            color: green;
            margin-top: 20px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Admission Form</h2>

          <form method="POST" action="/enroll">
            <input type="text" name="name" placeholder="Customer Name" required />
            <input type="tel" name="mobile" placeholder="Mobile Number" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

// Handle form submission
app.post("/enroll", (req, res) => {
  const { name, mobile } = req.body;

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>admission Completed</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
          }
          .container {
            width: 400px;
            margin: 100px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .success {
            color: green;
            font-size: 20px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <p class="success">✅ admission completed</p>
          <p>Name: ${name}</p>
          <p>Mobile: ${mobile}</p>
          <a href="/">Go Back</a>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
