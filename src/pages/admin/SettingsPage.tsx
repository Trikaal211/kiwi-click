import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Save, RefreshCw, CheckCircle2, 
  MapPin, Phone, Mail, Link as LinkIcon, Globe
} from 'lucide-react';
import apiClient from '../../api/client';
import ImageUpload from '../../components/admin/ImageUpload';

const Facebook = ({ size = 12, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 12, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 12, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 12, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);



interface SettingsData {
  agencyName: string;
  logoUrl?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  mapsLink?: string | null;
  facebookLink?: string | null;
  instagramLink?: string | null;
  linkedinLink?: string | null;
  twitterLink?: string | null;
}

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Form states
  const [agencyName, setAgencyName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mapsLink, setMapsLink] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');

  // Fetch Settings
  const { data, isLoading } = useQuery({
    queryKey: ['agencySettings'],
    queryFn: async () => {
      const response = await apiClient.get('/settings');
      return response.data.data.settings as SettingsData;
    },
  });

  // Populate form when data changes
  useEffect(() => {
    if (data) {
      setAgencyName(data.agencyName || '');
      setLogoUrl(data.logoUrl || '');
      setPhone(data.phone || '');
      setEmail(data.email || '');
      setAddress(data.address || '');
      setMapsLink(data.mapsLink || '');
      setFacebookLink(data.facebookLink || '');
      setInstagramLink(data.instagramLink || '');
      setLinkedinLink(data.linkedinLink || '');
      setTwitterLink(data.twitterLink || '');
    }
  }, [data]);

  // Update Settings mutation
  const updateMutation = useMutation({
    mutationFn: async (updatedSettings: SettingsData) => {
      const response = await apiClient.put('/settings', updatedSettings);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agencySettings'] });
      setSuccessMessage('Agency settings updated successfully!');
      setErrorMessage('');
      setTimeout(() => setSuccessMessage(''), 4000);
    },
    onError: (err: any) => {
      setErrorMessage(err.response?.data?.message || 'Failed to update agency settings.');
      setSuccessMessage('');
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!agencyName.trim()) {
      setErrorMessage('Agency Name is required.');
      return;
    }

    updateMutation.mutate({
      agencyName,
      logoUrl: logoUrl.trim() || null,
      phone: phone.trim() || null,
      email: email.trim() || null,
      address: address.trim() || null,
      mapsLink: mapsLink.trim() || null,
      facebookLink: facebookLink.trim() || null,
      instagramLink: instagramLink.trim() || null,
      linkedinLink: linkedinLink.trim() || null,
      twitterLink: twitterLink.trim() || null,
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif italic text-3xl text-text-primary transition-theme">
            Global Settings
          </h1>
          <p className="text-xs font-sans text-text-secondary mt-1 transition-theme">
            Customize branding identifiers, official addresses, maps links, and social channel vectors.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Messages */}
        {successMessage && (
          <div className="p-4 bg-accent-green/10 border border-accent-green/20 text-accent-green rounded-2xl font-mono text-xs font-bold flex items-center gap-2">
            <CheckCircle2 size={14} /> {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl font-mono text-xs font-bold">
            ⚠️ {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Logo Branding Card (Left Column) */}
          <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border-color/20">
              <Globe size={16} className="text-accent-orange" />
              <h3 className="font-serif italic text-lg text-text-primary transition-theme">
                Agency Branding
              </h3>
            </div>
            
            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                Agency Name
              </label>
              <input
                type="text"
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
                placeholder="KiwiClicks"
                className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
              />
            </div>

            <div>
              <ImageUpload
                value={logoUrl}
                onChange={setLogoUrl}
                folder="settings"
                label="Agency Header Logo"
              />
            </div>
          </div>

          {/* Details / Socials Forms (Right Column - 2 spans) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details */}
            <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme space-y-4">
              <h3 className="font-serif italic text-lg text-text-primary border-b border-border-color/20 pb-3 transition-theme">
                Contact & Location Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1">
                    <Phone size={11} className="text-accent-emerald" /> Contact Phone
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1">
                    <Mail size={11} className="text-accent-emerald" /> Contact Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. hello@kiwiclicks.com"
                    className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1">
                  <MapPin size={11} className="text-accent-orange" /> Physical Business Address
                </label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Sector 62, Noida, Delhi NCR, India"
                  className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none resize-none transition-theme"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1">
                  <LinkIcon size={11} className="text-accent-orange" /> Google Maps Pin URL
                </label>
                <input
                  type="url"
                  value={mapsLink}
                  onChange={(e) => setMapsLink(e.target.value)}
                  placeholder="https://maps.google.com/..."
                  className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme space-y-4">
              <h3 className="font-serif italic text-lg text-text-primary border-b border-border-color/20 pb-3 transition-theme">
                Social Media Links
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1">
                    <Linkedin size={11} className="text-accent-emerald" /> LinkedIn Page
                  </label>
                  <input
                    type="url"
                    value={linkedinLink}
                    onChange={(e) => setLinkedinLink(e.target.value)}
                    placeholder="https://linkedin.com/company/kiwiclicks"
                    className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1">
                    <Twitter size={11} className="text-accent-emerald" /> Twitter Profile
                  </label>
                  <input
                    type="url"
                    value={twitterLink}
                    onChange={(e) => setTwitterLink(e.target.value)}
                    placeholder="https://twitter.com/kiwiclicks"
                    className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1">
                    <Facebook size={11} className="text-accent-orange" /> Facebook Page
                  </label>
                  <input
                    type="url"
                    value={facebookLink}
                    onChange={(e) => setFacebookLink(e.target.value)}
                    placeholder="https://facebook.com/kiwiclicks"
                    className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1">
                    <Instagram size={11} className="text-accent-orange" /> Instagram Profile
                  </label>
                  <input
                    type="url"
                    value={instagramLink}
                    onChange={(e) => setInstagramLink(e.target.value)}
                    placeholder="https://instagram.com/kiwiclicks"
                    className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                  />
                </div>
              </div>
            </div>

            {/* Actions Submit */}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                disabled={updateMutation.isPending}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-emerald text-white border-2 border-accent-emerald hover:border-accent-emerald/90 font-sans font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-accent-emerald/95 transition-all cursor-pointer shadow-offset-sm disabled:opacity-50"
              >
                {updateMutation.isPending ? (
                  <RefreshCw size={13} className="animate-spin" />
                ) : (
                  <Save size={13} />
                )}
                Save Agency Settings
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
