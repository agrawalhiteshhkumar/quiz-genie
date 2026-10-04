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
  Zap,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  Hash
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export const StudentAuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    loginStudent,
    setMode,
  } = useLiveQuiz();

  const [activeTab, setActiveTab] = useState<'guest' | 'verified'>('guest');
  const [step, setStep] = useState<1 | 2>(1);
  
  // Student Details
  const [fullName, setFullName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [college, setCollege] = useState('D. P. Kharde Navjeevan College of Pharmacy');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // OTP state
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [generatedMockOtp, setGeneratedMockOtp] = useState<string>('123456');
  const [resendSeconds, setResendSeconds] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);

  const digitInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Frictionless One-Click Guest Start
  const handleQuickStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    loginStudent({
      fullName: fullName.trim() + (rollNumber ? ` (${rollNumber.trim()})` : ''),
      college: college.trim(),
      email: email.trim() || 'guest@brightpath.org.in'
    });
    soundEffects.playBuzzer();
    closeAuthModal();
    setMode('practice');
  };

  // Verified Email OTP Flow
  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!fullName.trim()) return;

    const mockCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedMockOtp(mockCode);
    setOtpDigits(['', '', '', '', '', '']);
    setOtpError('');
    setResendSeconds(60);
    setStep(2);
    soundEffects.playBuzzer();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 2 && resendSeconds > 0) {
      interval = setInterval(() => {
        setResendSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, resendSeconds]);

  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        digitInputRefs.current[0]?.focus();
      }, 150);
    }
  }, [step]);

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
      setOtpError('Please enter all 6 digits.');
      return;
    }

    if (enteredCode !== generatedMockOtp && enteredCode !== '123456') {
      setOtpError(`Invalid code. Enter: ${generatedMockOtp}`);
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
      closeAuthModal();
      setMode('practice');
    }, 400);
  };

  const handleAutoFillMockCode = () => {
    setOtpDigits(generatedMockOtp.split(''));
    setOtpError('');
    digitInputRefs.current[5]?.focus();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
            <GraduationCap className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Student Entrance
            </h2>
            <p className="text-xs text-slate-500">
              Bright Path D.Pharm Exit Exam Portal
            </p>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl mb-4 text-xs font-bold">
          <button
            type="button"
            onClick={() => { setActiveTab('guest'); setStep(1); }}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'guest'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Quick Start (No OTP)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('verified')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'verified'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified (Email)</span>
          </button>
        </div>

        {/* TAB 1: Frictionless Quick Start */}
        {activeTab === 'guest' && (
          <form onSubmit={handleQuickStart} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Student Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Amit Patil"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  required
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Roll No. / Enrollment ID (Optional)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  placeholder="e.g. 24DP012"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
                <Hash className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                College Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  required
                />
                <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Start Practice Drill Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-center text-slate-400">
              One-click entry • Instant access to PCI ER-2020 question sets
            </p>
          </form>
        )}

        {/* TAB 2: Verified Email Flow */}
        {activeTab === 'verified' && (
          <>
            {step === 1 ? (
              <form onSubmit={handleSendCode} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Amit Patil"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                      required
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                      placeholder="e.g. amit@gmail.com"
                      className={`w-full bg-slate-50 border rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none transition-all ${
                        emailError ? 'border-rose-400' : 'border-slate-300 focus:border-blue-600'
                      }`}
                      required
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  {emailError && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{emailError}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Verification</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                  <span>Enter Code: <strong className="font-mono text-sm">{generatedMockOtp}</strong></span>
                  <button
                    type="button"
                    onClick={handleAutoFillMockCode}
                    className="bg-amber-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-md"
                  >
                    Auto-Fill
                  </button>
                </div>

                <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                  {otpDigits.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { digitInputRefs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleDigitChange(index, e.target.value)}
                      onKeyDown={(e) => handleDigitKeyDown(index, e)}
                      onPaste={handlePasteOtp}
                      className="w-10 sm:w-12 h-12 text-center font-mono text-lg font-black bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:bg-white outline-none"
                    />
                  ))}
                </div>

                {otpError && (
                  <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{otpError}</span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isVerifying ? 'Verifying...' : 'Verify & Enter'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-center text-xs text-slate-500 hover:text-slate-800"
                >
                  ← Edit Information
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};
