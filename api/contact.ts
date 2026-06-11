import { Resend } from 'resend';

// eslint-disable-next-line no-undef
const resend = new Resend(process.env.RESEND_API_KEY);
console.log('API Key:', process.env.RESEND_API_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
    return;
  }
  (async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
}
