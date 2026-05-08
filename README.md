# Wedding Invitation Card Maker

A modern web application for creating, editing, and publishing beautiful wedding invitation cards. Built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features
- Customizable wedding invitation templates
- Card editor with live preview
- User authentication (NextAuth.js)
- Template selection and publishing
- Responsive design

## Project Structure
- `app/` — Next.js app directory (routes, pages, API)
- `components/` — Reusable React components
- `hooks/` — Custom React hooks
- `lib/` — Utility libraries and services
- `prisma/` — Prisma schema and migrations
- `public/` — Static assets
- `styles/` — Global styles

## Technologies Used
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)

## Getting Started

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/wedding-invitation-card-maker.git
   cd wedding-invitation-card-maker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - `.env` and fill in the required values.
   
DATABASE_URL=""
DIRECT_URL=""
NEXTAUTH_URL=""
NEXTAUTH_SECRET=""
BREVO_SMTP_HOST=""
BREVO_SMTP_USER=""
BREVO_SMTP_PASS=""
EMAIL_FROM=""
NODE_ENV="development"

5. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## License

This project is licensed under the MIT License.
