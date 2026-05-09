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
- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM
- NextAuth.js

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
3. Create a `.env` file in the root directory and add the following environment variables.
   
```env   
DATABASE_URL=your_postgresql_db_url

DIRECT_URL=your_postgresql_direct_url

NEXTAUTH_URL=llocalhost:3000

NEXTAUTH_SECRET=longstring

BREVO_SMTP_HOST=brevo_smtp_host

BREVO_SMTP_USER=brevo_smtp_user

BREVO_SMTP_PASS=brevo_smtp_pass

EMAIL_FROM=examnple.com

NODE_ENV=development
```

5. Start the development server with below command:
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).
