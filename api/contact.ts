import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // 2. Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;``
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // 3. Send confirmation email TO the user
    await resend.emails.send({
      from: 'Gideon Portfolio <noreply@codergidingz.xyz>',  // ← must be your verified Resend domain
      to: [email],
      replyTo: ['anosykegideon@gmail.com'],
      subject: 'Thanks for reaching out!',
      html: `
        <p>Hello ${name},</p>

        <p>Thank you for reaching out through my portfolio website.</p>

        <p>I have received your message and will get back to you shortly.</p>

        <blockquote>
          ${message}
        </blockquote>

        <p>Best regards,<br />
        Gideon Anosike</p>
      `,
    });

    // 4. Forward the submission TO you
    await resend.emails.send({
      from: 'Portfolio <noreply@codergidingz.xyz>', // same verified domain
      to: ['anosykegideon@gmail.com'],               // ← your real email
      replyTo: [email],                                     // lets you reply directly to the user
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ 
      success: true,
      message: 'Emails sent successfully.' });

  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}