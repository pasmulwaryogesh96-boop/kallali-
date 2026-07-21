"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Leaf,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Sprout,
  CloudSun,
  TrendingUp,
} from "lucide-react";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

const sideHighlights = [
  {
    icon: <Sprout className="w-5 h-5 text-white" />,
    title: "AI Crop Guidance",
    sub: "Get expert advice from Kemraj 24×7",
  },
  {
    icon: <CloudSun className="w-5 h-5 text-white" />,
    title: "Weather Intelligence",
    sub: "Hyperlocal forecasts for your farm",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    title: "Live Market Prices",
    sub: "Sell smarter with real-time data",
  },
];

interface FieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  togglePassword?: () => void;
  showPassword?: boolean;
  isPassword?: boolean;
}

function Field({
  id,
  label,
  type,
  placeholder,
  icon,
  value,
  onChange,
  error,
  togglePassword,
  showPassword,
  isPassword,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </div>
        <input
          id={id}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full pl-10 pr-${isPassword ? "10" : "4"} py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 bg-white transition-all outline-none
            ${error
              ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
              : "border-gray-200 focus:border-kallali-green focus:ring-2 focus:ring-green-100"
            }`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

interface FormState {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, ""))) {
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  }
  if (!form.password) {
    errors.password = "Password is required.";
  } else if (form.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }
  if (!form.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }
  return errors;
}

export default function Signup() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errs = validate(form);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          mobile: form.mobile,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setSubmitted(true);

    } catch (error) {
      console.error(error);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };
     
  return (
    <div className="min-h-screen flex">
      {/* ── Left panel — branding ── */}
      <div className="hidden lg:flex lg:w-[44%] xl:w-[42%] bg-gradient-to-br from-kallali-green to-kallali-green-dark flex-col justify-between p-12 relative overflow-hidden">
        {/* Decoration blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2.5 w-fit">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center border border-white/20">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Kallali</span>
          </Link>
        </div>

        {/* Central copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-green-100 text-sm font-semibold uppercase tracking-widest mb-4">
              🌾 India's AI Farming Platform
            </p>
            <h2 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Grow smarter.<br />Earn more.<br />Worry less.
            </h2>
            <p className="mt-5 text-green-100 text-base leading-relaxed max-w-sm">
              Join farmers across Telangana and India using Kemraj AI to manage crops, track finances, and sell directly to buyers.
            </p>
          </motion.div>

          {/* Feature highlights */}
          <div className="mt-10 space-y-4">
            {sideHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                  {h.icon}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{h.title}</p>
                  <p className="text-green-200/80 text-xs">{h.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <p className="relative z-10 text-green-200/60 text-xs">
          Made with ❤️ in India for Indian Farmers 🇮🇳
        </p>
      </div>

      {/* ── Right panel — form ── */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-12 bg-white overflow-y-auto">
        {/* Mobile logo */}
        <div className="lg:hidden mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-kallali-green flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Kallali</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-md"
        >
          {submitted ? (
            /* ── Success state ── */
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-kallali-green" />
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Account created!</h1>
              <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto">
                Welcome to Kallali, {form.fullName.split(" ")[0]}. Your AI farming companion Kemraj is ready for you.
              </p>
              <Link
                href="/onboarding"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-kallali-green text-white font-semibold text-sm hover:bg-kallali-green-dark transition-all shadow-lg shadow-green-200"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <>
              {/* Heading */}
              <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create your account</h1>
                <p className="mt-2 text-gray-500 text-sm">
                  Start your free account. No credit card required.
                </p>
              </div>

              {/* Google button */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm mb-6"
              >
                <GoogleIcon />
                Continue with Google
              </button>

              {/* Divider */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs text-gray-400 font-medium whitespace-nowrap">or sign up with email</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <Field
                  id="fullName"
                  label="Full Name"
                  type="text"
                  placeholder="e.g. Ravi Kumar"
                  icon={<User className="w-4 h-4" />}
                  value={form.fullName}
                  onChange={set("fullName")}
                  error={errors.fullName}
                />
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  icon={<Mail className="w-4 h-4" />}
                  value={form.email}
                  onChange={set("email")}
                  error={errors.email}
                />
                <Field
                  id="mobile"
                  label="Mobile Number"
                  type="tel"
                  placeholder="10-digit Indian mobile number"
                  icon={<Phone className="w-4 h-4" />}
                  value={form.mobile}
                  onChange={set("mobile")}
                  error={errors.mobile}
                />
                <Field
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Minimum 8 characters"
                  icon={<Lock className="w-4 h-4" />}
                  value={form.password}
                  onChange={set("password")}
                  error={errors.password}
                  isPassword
                  showPassword={showPassword}
                  togglePassword={() => setShowPassword((v) => !v)}
                />
                <Field
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Re-enter your password"
                  icon={<Lock className="w-4 h-4" />}
                  value={form.confirmPassword}
                  onChange={set("confirmPassword")}
                  error={errors.confirmPassword}
                  isPassword
                  showPassword={showConfirm}
                  togglePassword={() => setShowConfirm((v) => !v)}
                />

                {/* Terms */}
                <p className="text-xs text-gray-400 leading-relaxed pt-1">
                  By creating an account you agree to our{" "}
                  <a href="#" className="text-kallali-green hover:underline font-medium">Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" className="text-kallali-green hover:underline font-medium">Privacy Policy</a>.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-kallali-green text-white font-bold text-sm hover:bg-kallali-green-dark transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:-translate-y-0.5 active:translate-y-0 mt-2"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Login link */}
              <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="text-kallali-green font-semibold hover:text-kallali-green-dark transition-colors">
                  Log in
                </Link>
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
