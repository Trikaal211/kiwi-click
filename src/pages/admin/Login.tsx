import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAdminAuth } from '../../hooks/useAdminAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const res = await login(email, password, remember);
    if (res.success) {
      navigate('/admin/dashboard');
    } else {
      setError(res.message || 'Login failed.');
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-page-bg flex items-center justify-center p-6 transition-theme relative z-20">
      {/* Background radial accent glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-card-bg border-2 border-border-color p-8 rounded-3xl shadow-offset transition-theme"
      >
        <div className="text-center mb-8">
          <span className="font-handwriting text-accent-orange text-3xl font-bold -rotate-1 inline-block">
            KiwiClicks
          </span>
          <h1 className="font-serif italic text-3xl text-text-primary mt-2 transition-theme">
            CMS Admin Console
          </h1>
          <p className="text-xs font-sans text-text-secondary mt-2 font-medium">
            Sign in to manage KiwiClicks marketing and blogs
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-5 p-3.5 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl text-xs font-mono font-bold flex items-center gap-2"
          >
            ⚠️ {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2 font-bold">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-text-secondary">
                <Mail size={16} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@kiwiclicks.com"
                className="w-full pl-10 pr-4 py-3 bg-page-bg border-2 border-border-color/60 rounded-xl text-sm font-medium text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-orange transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2 font-bold">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-text-secondary">
                <Lock size={16} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-page-bg border-2 border-border-color/60 rounded-xl text-sm font-medium text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-orange transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded text-accent-green focus:ring-accent-green accent-accent-green cursor-pointer"
              />
              <span className="text-xs font-sans font-bold text-text-secondary hover:text-text-primary transition-colors">
                Remember Login
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 bg-accent-emerald hover:bg-accent-orange text-white font-sans font-bold text-sm uppercase tracking-widest rounded-xl hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all shadow-offset-sm disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer mt-4"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Signing In...
              </>
            ) : (
              'Sign In to Dashboard'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
