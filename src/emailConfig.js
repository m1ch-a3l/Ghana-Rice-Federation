// ─────────────────────────────────────────────────────────────
//  EmailJS Configuration
//  1. Sign up free at https://www.emailjs.com
//  2. Add an Email Service (Gmail, Outlook, etc.)
//  3. Create an Email Template — see template variables below
//  4. Paste your IDs here
// ─────────────────────────────────────────────────────────────

export const EMAILJS_CONFIG = {
  SERVICE_ID:  'YOUR_SERVICE_ID',   // e.g. 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',  // e.g. 'template_xyz789'
  PUBLIC_KEY:  'YOUR_PUBLIC_KEY',   // e.g. 'user_AbCdEfGhIjK'

  // The email address that receives submissions
  RECIPIENT_EMAIL: 'mickeyeinstein2@gmail.com',
}

// ─────────────────────────────────────────────────────────────
//  EmailJS Template — paste this into your template editor:
//
//  Subject:  GRF Website Enquiry — {{subject}}
//
//  Body:
//  You have received a new enquiry from the GRF website.
//
//  Name:          {{first_name}} {{last_name}}
//  Email:         {{email}}
//  Phone:         {{phone}}
//  Organisation:  {{organisation}}
//  Subject:       {{subject}}
//
//  Message:
//  {{message}}
//
//  ——
//  Sent via Ghana Rice Federation website contact form.
//  Received: {{time}}
// ─────────────────────────────────────────────────────────────
