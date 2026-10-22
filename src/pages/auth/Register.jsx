import { Eye, UserRoundPlus, ArrowRight } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout.jsx';
import FormField from '../../components/common/FormField.jsx';
import Button from '../../components/common/Button.jsx';
export default function Register() {
  return (
    <AuthLayout>
      <div className="auth-form">
        <span className="auth-form__icon">
          <UserRoundPlus
            size={24}
            aria-hidden="true"
          />
        </span>
        <h2>Your next chapter starts here</h2>
        <p>Create your Northstar Academy account.</p>
        <div className="stack">
          <div className="form-grid">
            <FormField
              id="register-first"
              label="First name"
              placeholder="Alex"
              required
            />
            <FormField
              id="register-last"
              label="Last name"
              placeholder="Morgan"
              required
            />
          </div>
          <FormField
            id="register-email"
            label="Academic email"
            type="email"
            placeholder="you@northstar.edu"
            required
          />
          <div className="password-field">
            <FormField
              id="register-password"
              label="Password"
              type="password"
              placeholder="Create a password"
              hint="Use at least 12 characters. Validation messages will appear here."
              required
            />
            <Button
              variant="icon"
              className="password-field__toggle"
              aria-label="Show password"
            >
              <Eye size={18} />
            </Button>
          </div>
          <FormField
            id="register-confirm"
            label="Confirm password"
            type="password"
            placeholder="Enter your password again"
            required
          />
          <label className="checkbox-label">
            <input type="checkbox" /> I agree to the terms and privacy policy.
          </label>
          <Button className="button--full">
            Create account <ArrowRight size={17} />
          </Button>
        </div>
        <p className="auth-form__switch">
          Already have an account? <Button variant="text">Sign in</Button>
        </p>
      </div>
    </AuthLayout>
  );
}
