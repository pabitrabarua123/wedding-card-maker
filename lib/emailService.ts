import nodemailer from 'nodemailer';

// Create transporter using SMTP (using Brevo SMTP)
const createTransporter = () => {
  return nodemailer.createTransport({
            host: process.env.BREVO_SMTP_HOST!,
            port: 587,
            secure: false, // Must be false for 587
            auth: {
              user: process.env.BREVO_SMTP_USER!,
              pass: process.env.BREVO_SMTP_PASS!,
            },
            // optional: ignore TLS errors in dev
            tls: process.env.NODE_ENV === "development" ? { rejectUnauthorized: false } : undefined,
          });
};

interface EmailData {
  identifier: string;
  url: string;
}

export const sendEmailCustomer = async (data: EmailData) => {
  const transporter = createTransporter();
  
  const { identifier, url } = data;

const mailOptions = {
  from: process.env.EMAIL_FROM!,
  to: identifier,
  subject: `Sign in to Wedify`,
html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #8b4513 0%, #d4a574 100%); padding: 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Welcome to Wedify</h1>
      <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">Your wedding template is ready to be customized</p>
    </div>

    <!-- Body -->
    <div style="padding: 40px 30px; background-color: #ffffff;">
      <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Hi there,<br><br>
        Your account is pending verification. Please click the button below to verify your email and access your Wedify account.
      </p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${url}" style="background-color: #8b4513; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
          Verify Account
        </a>
      </div>

      <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 25px 0 0 0;">
        If you did not request this, please ignore this email. If you need assistance, our team is here to help.
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 14px; margin: 0;">
        <strong style="color: #374151;">Wedify</strong>
      </p>
      <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
        This email was sent to ${identifier}. For support, contact us anytime.
      </p>
    </div>
  </div>
`,

};

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Ownership approval email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending ownership approval email:', error);
    throw error;
  }
};
