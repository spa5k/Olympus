import { template } from './template';

type forgetPasswordProps = {
  userName: string;
  company_name: string;
  url: string;
  email: string;
};

export function forgetEmail({
  userName,
  email,
  company_name,
  url,
}: forgetPasswordProps) {
  return {
    from: process.env.SUPPORT_EMAIL_ADDRESS,
    to: `${name} <${email}>`,
    subject: `Reset your password!`,
    html: template('forgetPassword.html', {
      userName,
      email,
      company_name,
      url,
    }),
  };
}
