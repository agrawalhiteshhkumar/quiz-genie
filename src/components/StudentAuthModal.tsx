import React, { useState, useEffect, useRef } from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import {
  X,
  User,
  GraduationCap,
  Mail,
  ShieldCheck,
  ArrowRight,
  RotateCcw,
  Sparkles,
  KeyRound,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export const StudentAuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    loginStudent,
    setMode,
  } = useLiveQuiz();

  const [step, setStep] = useState<1 | 2>(1);
  const [fullName, setFullName] = useState('');
  const [college, setCollege] = useState('D. P. Kharde Navjeevan College of Pharmacy');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // OTP state
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [generatedMockOtp, setGeneratedMockOtp] = useState<string>('749215');
  const [resendSeconds, setResendSeconds] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);

  const digitInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Generate random 6-digit OTP when entering step 2
  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError('Please enter a valid academic or personal email address.');
      return;
    }

    if (!fullName.trim() || !college.trim()) {
      return;
    }

    // Generate fresh 6-digit code
    const mockCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedMockOtp(mockCode);
    setOtpDigits(['', '', '', '', '', '']);
    setOtpError('');
    setResendSeconds(60);
    setStep(2);
    soundEffects.playBuzzer();
  };

  // Timer countdown for OTP resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 2 && resendSeconds > 0) {
      interval = setInterval(() => {
        setResendSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, resendSeconds]);

  // Auto-focus first OTP input on step 2
  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        digitInputRefs.current[0]?.focus();
      }, 150);
    }
  }, [step]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAuthModalOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthModalOpen, closeAuthModal]);

  if (!isAuthModalOpen) return null;

  const handleDigitChange = (index: number, val: string) => {
    setOtpError('');
    const char = val.slice(-1).replace(/[^0-9]/g, '');

    const nextDigits = [...otpDigits];
    nextDigits[index] = char;
    setOtpDigits(nextDigits);

    // Auto-advance focus
    if (char && index < 5) {
      digitInputRefs.current[index + 1]?.focus();
    }
  };

  const handleDigitKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      digitInputRefs.current[index - 1]?.focus();
    }
  };

  const handlePasteOtp = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').trim().replace(/[^0-9]/g, '');
    if (pasted.length === 6) {
      const nextDigits = pasted.split('').slice(0, 6);
      setOtpDigits(nextDigits);
      digitInputRefs.current[5]?.focus();
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = otpDigits.join('');

    if (enteredCode.length < 6) {
      setOtpError('Please enter all 6 digits of your verification code.');
      return;
    }

    // In prototype mode, accept either generatedMockOtp or "123456" for convenience
    if (enteredCode !== generatedMockOtp && enteredCode !== '123456') {
      setOtpError(`Invalid code. Expected ${generatedMockOtp} (or test code 123456).`);
      soundEffects.playWrong();
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      loginStudent({
        fullName: fullName.trim(),
        college: college.trim(),
        email: email.trim()
      });
      setIsVerifying(false);
      setMode('participant');
    }, 400);
  };

  const handleResendCode = () => {
    const mockCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedMockOtp(mockCode);
    setOtpDigits(['', '', '', '', '', '']);
    setOtpError('');
    setResendSeconds(60);
    soundEffects.playTick();
  };

  const handleAutoFillMockCode = () => {
    setOtpDigits(generatedMockOtp.split(''));
    setOtpError('');
    digitInputRefs.current[5]?.focus();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      {/* Modal Surface */}
      <div
        className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute right-5 top-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
            {step === 1 ? (
              <GraduationCap className="w-6 h-6 text-blue-700" />
            ) : (
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            )}
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              {step === 1 ? 'Student Registration' : 'Email OTP Verification'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {step === 1
                ? 'Sign in to record your PCI Exit Exam mock scores.'
                : 'Confirm your institutional pharmacy profile.'}
            </p>
          </div>
        </div>

        {/* STEP 1: Student Information Form */}
        {step === 1 && (
          <form onSubmit={handleSendCode} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name (As on PCI Registration / College ID)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Pharmacy College / Institution Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder="e.g. Government College of Pharmacy, Bengaluru"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
                <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Student Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  placeholder="e.g. rahul.sharma@pharmacy.edu.in"
                  className={`w-full bg-slate-50 border rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                    emailError
                      ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                      : 'border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                  }`}
                  required
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {emailError && (
                <p className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{emailError}</span>
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send 6-Digit Verification Code</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[11px] text-slate-500 text-center pt-2">
              By proceeding, your profile is registered for Module 13 live exit exam quizzes and performance analytics.
            </div>
          </form>
        )}

        {/* STEP 2: OTP Verification Screen */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div className="text-xs text-slate-600 leading-relaxed">
              Enter the 6-digit verification code sent to{' '}
              <strong className="text-slate-900 font-semibold">{email}</strong>.
            </div>

            {/* Prototype Mock OTP Helper Badge */}
            <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-blue-700" />
                <span className="text-slate-700">
                  Mock OTP Code: <strong className="font-mono text-sm font-black text-blue-800 tracking-wider">{generatedMockOtp}</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={handleAutoFillMockCode}
                className="text-[11px] font-bold text-blue-700 hover:text-blue-800 bg-white border border-blue-200 px-2 py-0.5 rounded shadow-2xs hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Auto-Fill
              </button>
            </div>

            {/* 6 Individual Digit Inputs */}
            <div>
              <div className="flex items-center justify-between gap-2 sm:gap-2.5">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      digitInputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleDigitKeyDown(index, e)}
                    onPaste={handlePasteOtp}
                    className="w-11 sm:w-12 h-13 text-center font-mono text-xl font-black bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                ))}
              </div>

              {otpError && (
                <p className="text-xs text-rose-600 font-medium mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{otpError}</span>
                </p>
              )}
            </div>

            {/* Resend Timer */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>Didn&apos;t receive code?</span>
              {resendSeconds > 0 ? (
                <span className="font-mono text-slate-400 font-medium">
                  Resend in {resendSeconds}s
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Resend OTP</span>
                </button>
              )}
            </div>

            {/* Action Button: Emerald Green */}
            <div className="space-y-2 pt-1">
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isVerifying ? 'Verifying Student Identity...' : 'Verify & Start Practice'}</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                ← Back to Edit Details
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
