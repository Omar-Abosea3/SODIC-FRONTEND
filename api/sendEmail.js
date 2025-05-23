const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, email , whatsapp } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or another service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <title>Contact Form Submission</title>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      background-color: #f4f6f8;
                      padding: 20px;
                      color: #333;
                    }
                    .container {
                      background-color: #ffffff;
                      padding: 20px;
                      border-radius: 8px;
                      max-width: 600px;
                      margin: 0 auto;
                      box-shadow: 0 0 10px rgba(0,0,0,0.05);
                    }
                    h2 {
                      color: #007bff;
                    }
                    .info {
                      margin-bottom: 15px;
                    }
                    .info b {
                      display: inline-block;
                      width: 100px;
                    }
                    .message {
                      background: #f1f1f1;
                      padding: 10px;
                      border-left: 4px solid #007bff;
                      border-radius: 4px;
                      white-space: pre-wrap;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <h2>New Contact Form Submission</h2>

                    <div class="info"><b>Name:</b> ${name}</div>
                    <div class="info"><b>Email:</b> ${email}</div>
                    <div class="info"><b>Phone:</b> ${whatsapp}</div>
                    <!-- <div class="info"><b>Message:</b></div> -->
                    <!-- <div class="message">$</div> -->
                  </div>
                </body>
                </html>
                `,
    });

    return res.json({ message: 'Email sent successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
};
