/* eslint-disable @typescript-eslint/no-explicit-any */
export default function handler(req: Request, res: any):void {

  res.status(200).json({ 
    success: true, 
    message: 'Hello from the contact API!' 
  });
}
