const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'あなたのGmailアドレス@gmail.com',
      pass: 'Googleで発行したアプリパスワード',
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: '2301432@s.asojuku.ac.jp',
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, error: err.message });
  }
});

app.listen(3001, () => console.log('✅ Server running on http://localhost:3001'));
