import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PROXY_SERVER_PORT || 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.use(cors({ origin: 'http://localhost:81' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send-mail', async (req, res) => {
  const { name, title, content } = req.body;

  const msg = {
    to: 'noreply@brunobergmann.de',
    from: 'noreply@brunobergmann.de',
    subject: 'Neue Kontaktanfrage',
    text: `
      Name: ${name}
      Titel: ${title}
      Inhalt: ${content}
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'E-Mail sent successfully.' });
  } catch (error) {
    console.error('An error occurred while sending the e-mail:', error);
    res.status(500).json({ error: 'An error occurred while sending the E-Mail.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
