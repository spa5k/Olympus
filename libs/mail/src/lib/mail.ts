import { logger } from '@olympus/logger';
import nodemailer from 'nodemailer';
import { forgetEmail, welcomeEmail } from './emails';

export async function mail(
  email: string,
  url: string,
  userName: string,
  type: 'WELCOME' | 'FORGET_PASSWORD'
): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_USER_PASSWORD,
    },
  });

  let info;
  if (type === 'WELCOME') {
    info = await transporter.sendMail(
      welcomeEmail({
        company_name: process.env.COMPANY_NAME,
        email,
        url,
        userName,
      })
    );
  } else if (type === 'FORGET_PASSWORD') {
    info = await transporter.sendMail(
      forgetEmail({
        company_name: process.env.COMPANY_NAME,
        email,
        url,
        userName,
      })
    );
  }

  logger.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
