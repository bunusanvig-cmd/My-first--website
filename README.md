# Digital DK Portfolio

Premium AI marketing portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Zod, React Hook Form, and Nodemailer.

## Features

- Dark, premium, AI-inspired design
- Responsive app-router pages
- Dynamic service and blog routes
- Contact, consultation, and newsletter APIs
- SEO metadata, sitemap, and robots route
- Reusable UI and section components
- Toasts, cookie banner, scroll progress, back-to-top, and WhatsApp CTA

## Setup

1. Install dependencies.
2. Copy `.env.example` to `.env.local` and fill in your Gmail app password in `SMTP_PASS`.
3. Run the dev server.

```bash
npm install
npm run dev
```

## Environment

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`
- `MAIL_TO`
- `NEXT_PUBLIC_SITE_URL`

## Notes

- If SMTP is not configured, the API routes still respond successfully and log that mail sending was skipped.
- For Gmail, use `smtp.gmail.com`, port `465`, `SMTP_SECURE=true`, your Gmail address as `SMTP_USER`, and a Google App Password in `SMTP_PASS`.
- The site is ready for deployment on Vercel.
