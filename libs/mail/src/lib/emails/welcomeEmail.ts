import { template } from './template';

type welcomeProps = {
  userName: string;
  company_name: string;
  url: string;
  email: string;
};

export function welcomeEmail({
  company_name,
  url,
  email,
  userName,
}: welcomeProps) {
  return {
    from: process.env.SUPPORT_EMAIL_ADDRESS,
    to: `${userName} <${email}>`,
    subject: `Welcome! to ${company_name}`,
    html: template('welcome.html', {
      userName,
      email,
      company_name,
      url,
    }),
  };
}
