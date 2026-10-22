import { Mail, ArrowLeft } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout.jsx';
import FormField from '../../components/common/FormField.jsx';
import Button from '../../components/common/Button.jsx';
export default function ForgotPassword() {
  return <AuthLayout><div className="auth-form"><span className="auth-form__icon"><Mail size={24} aria-hidden="true" /></span><h2>Let’s get you back in</h2><p>Enter your academic email to request a password reset link.</p><div className="stack"><FormField id="reset-email" label="Email address" type="email" placeholder="you@northstar.edu" required hint="Reset confirmation or validation messages will appear here." /><Button className="button--full">Send reset link</Button><Button variant="text"><ArrowLeft size={15} /> Back to sign in</Button></div><div className="info-note">If you need account support, contact your academy administrator.</div></div></AuthLayout>;
}
