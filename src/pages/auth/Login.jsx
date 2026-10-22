import { Eye, ArrowRight, LockKeyhole } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout.jsx';
import FormField from '../../components/common/FormField.jsx';
import Button from '../../components/common/Button.jsx';
export default function Login() {
  return <AuthLayout><div className="auth-form"><span className="auth-form__icon"><LockKeyhole size={24} aria-hidden="true" /></span><h2>Welcome to your workspace</h2><p>Sign in and pick up where you left off.</p><div className="stack"><FormField id="login-email" label="Email address" type="email" placeholder="you@northstar.edu" required /><div className="password-field"><FormField id="login-password" label="Password" type="password" placeholder="Enter your password" required hint="Account validation messages will appear here." /><Button variant="icon" className="password-field__toggle" aria-label="Show password"><Eye size={18} /></Button></div><div className="auth-form__options"><label className="checkbox-label"><input type="checkbox" /> Keep me signed in</label><Button variant="text">Forgot password?</Button></div><Button className="button--full">Sign in <ArrowRight size={17} /></Button></div><p className="auth-form__switch">New to Northstar? <Button variant="text">Create an account</Button></p></div></AuthLayout>;
}
