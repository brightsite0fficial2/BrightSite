import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEAM_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEAM_TEMPLATE_ID;
const CLIENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function sendSubmissionEmails(form) {
  const templateParams = {
    client_name: form.name,
    client_email: form.email,
    client_phone: form.phone,
    company_name: form.companyName,
    company_address: form.companyAddress,
    package: form.package,
    details: form.details,
    accepted_on: new Date().toLocaleString("en-IN", { dateStyle: "long", timeStyle: "short" }),
  };

  return Promise.all([
    emailjs.send(SERVICE_ID, TEAM_TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY }),
    emailjs.send(SERVICE_ID, CLIENT_TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY }),
  ]);
}
