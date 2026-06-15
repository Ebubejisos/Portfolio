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

  // User html
  const ownerEmailHtml: string = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:#111827; padding:28px 40px; border-radius:12px 12px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0; font-size:12px; font-weight:600; color:#6366f1; letter-spacing:2px; text-transform:uppercase;">
                      New Message
                    </p>
                    <h2 style="margin:6px 0 0; color:#ffffff; font-size:22px; font-weight:700;">
                      Portfolio Contact Form
                    </h2>
                  </td>
                  <td align="right">
                    <span style="display:inline-block; background:#6366f1; color:#fff;
                                 font-size:11px; font-weight:700; padding:6px 14px;
                                 border-radius:20px; letter-spacing:1px; text-transform:uppercase;">
                      New Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff; padding:36px 40px;">

              <!-- Sender Info Cards -->
              <p style="margin:0 0 16px; font-size:12px; font-weight:600; color:#9ca3af; letter-spacing:1.5px; text-transform:uppercase;">
                Sender Details
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td width="48%" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px;">
                    <p style="margin:0 0 4px; font-size:11px; color:#9ca3af; text-transform:uppercase; letter-spacing:1px;">Name</p>
                    <p style="margin:0; font-size:16px; font-weight:600; color:#111827;">${name}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px;">
                    <p style="margin:0 0 4px; font-size:11px; color:#9ca3af; text-transform:uppercase; letter-spacing:1px;">Email</p>
                    <p style="margin:0; font-size:15px; font-weight:600; color:#6366f1;">
                      <a href="mailto:${email}" style="color:#6366f1; text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 12px; font-size:12px; font-weight:600; color:#9ca3af; letter-spacing:1.5px; text-transform:uppercase;">
                Message
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#f9fafb; border:1px solid #e5e7eb; border-left:4px solid #6366f1;
                              border-radius:0 8px 8px 0; padding:20px;">
                    <p style="margin:0; font-size:15px; line-height:1.8; color:#374151;">
                      ${message}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your message&body=Hi ${name},"
                       style="display:inline-block; background:#6366f1; color:#ffffff; text-decoration:none;
                              font-size:15px; font-weight:600; padding:14px 36px;
                              border-radius:8px; letter-spacing:0.3px;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f9fafb; padding:20px 40px; border-radius:0 0 12px 12px; border-top:1px solid #e5e7eb;">
              <p style="margin:0; font-size:12px; color:#9ca3af; text-align:center;">
                Sent from your portfolio contact form • yourportfolio.vercel.app
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;
  // Sender html
  const userEmailHtml: string = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for reaching out!</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- HEADER -->
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%); padding: 40px 40px 30px; border-radius: 12px 12px 0 0;">
              <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:700; letter-spacing:-0.5px;">
                Your Name
              </h1>
              <p style="margin:8px 0 0; color:#a0a0b0; font-size:14px; letter-spacing:2px; text-transform:uppercase;">
                Portfolio
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff; padding: 40px;">

              <!-- Greeting -->
              <p style="margin:0 0 16px; font-size:22px; font-weight:600; color:#111827;">
                Hey ${name}, thanks for reaching out! 👋
              </p>
              <p style="margin:0 0 28px; font-size:15px; line-height:1.7; color:#4b5563;">
                I've received your message and will get back to you as soon as possible — usually within 24–48 hours. I appreciate you taking the time to connect.
              </p>

              <!-- Divider -->
              <hr style="border:none; border-top:1px solid #e5e7eb; margin: 0 0 28px;" />

              <!-- Message recap -->
              <p style="margin:0 0 12px; font-size:12px; font-weight:600; color:#9ca3af; letter-spacing:1.5px; text-transform:uppercase;">
                Your Message
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#f9fafb; border-left:3px solid #6366f1; border-radius:0 8px 8px 0; padding:16px 20px;">
                    <p style="margin:0; font-size:15px; line-height:1.7; color:#374151;">
                      ${message}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="https://yourportfolio.vercel.app"
                       style="display:inline-block; background:#6366f1; color:#ffffff; text-decoration:none;
                              font-size:15px; font-weight:600; padding:14px 32px; border-radius:8px;
                              letter-spacing:0.3px;">
                      View My Portfolio →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f9fafb; padding:24px 40px; border-radius:0 0 12px 12px; border-top:1px solid #e5e7eb;">
              <p style="margin:0; font-size:13px; color:#9ca3af; text-align:center; line-height:1.6;">
                You're receiving this because you submitted a contact form at
                <a href="https://yourportfolio.vercel.app" style="color:#6366f1; text-decoration:none;">yourportfolio.vercel.app</a><br/>
                If this wasn't you, you can safely ignore this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;
  try {
    // 3. Send confirmation email TO the user
    await resend.emails.send({
      from: 'Gideon Portfolio <noreply@codergidingz.xyz>',  // ← must be your verified Resend domain
      to: [email],
      replyTo: ['anosykegideon@gmail.com'],
      subject: 'Thanks for reaching out!',
      html: userEmailHtml,
    });

    // 4. Forward the submission TO you
    await resend.emails.send({
      from: 'Portfolio <noreply@codergidingz.xyz>', // same verified domain
      to: ['anosykegideon@gmail.com'],               // ← your real email
      replyTo: [email],                                     // lets you reply directly to the user
      subject: `New message from ${name}`,
      html: ownerEmailHtml,
    });

    return res.status(200).json({ 
      success: true,
      message: 'Emails sent successfully.' });

  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}