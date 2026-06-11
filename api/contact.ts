/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: Request, res: any):Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
    return;
  }
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'hello world',
      html: `
      <p>it works!</p>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    });
    if (error) {
      console.error('Error sending email:', error);
    }
    console.log({ data });

    return res.status(200).json({ 
      success: true, 
      message: 'Hello from the contact API!' 
    });
  }
  catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ success: false, message: 'Failed to send message' });
  }
}
