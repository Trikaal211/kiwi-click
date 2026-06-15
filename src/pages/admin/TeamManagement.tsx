import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Plus, Edit2, Trash2, Search, X, Save, RefreshCw
} from 'lucide-react';
import apiClient from '../../api/client';
import ImageUpload from '../../components/admin/ImageUpload';

const Linkedin = ({ size = 13, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 13, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);



interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
  linkedin?: string | null;
  twitter?: string | null;
  createdAt: string;
}

export default function TeamManagement() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [formError, setFormError] = useState('');

  // Fetch Team Members
  const { data, isLoading, error } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: async () => {
      const response = await apiClient.get('/team');
      return response.data.data.teamMembers as TeamMember[];
    },
  });

  // Create Team Member mutation
  const createMutation = useMutation({
    mutationFn: async (newMember: Omit<TeamMember, 'id' | 'createdAt'>) => {
      const response = await apiClient.post('/team', newMember);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] });
      closeModal();
    },
    onError: (err: any) => {
      setFormError(err.response?.data?.message || 'Failed to create team member.');
    }
  });

  // Update Team Member mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<TeamMember> }) => {
      const response = await apiClient.put(`/team/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] });
      closeModal();
    },
    onError: (err: any) => {
      setFormError(err.response?.data?.message || 'Failed to update team member.');
    }
  });

  // Delete Team Member mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/team/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] });
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Failed to delete team member.');
    }
  });

  const openAddModal = () => {
    setEditingMember(null);
    setName('');
    setDesignation('');
    setImage('');
    setBio('');
    setLinkedin('');
    setTwitter('');
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (member: TeamMember) => {
    setEditingMember(member);
    setName(member.name);
    setDesignation(member.designation);
    setImage(member.image);
    setBio(member.bio);
    setLinkedin(member.linkedin || '');
    setTwitter(member.twitter || '');
    setFormError('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingMember(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name} from the team?`)) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) return setFormError('Name is required');
    if (!designation.trim()) return setFormError('Designation is required');
    if (!image.trim()) return setFormError('Profile photo is required');
    if (bio.trim().length < 5) return setFormError('Bio must be at least 5 characters long');

    const memberData = {
      name,
      designation,
      image,
      bio,
      linkedin: linkedin.trim() || undefined,
      twitter: twitter.trim() || undefined,
    };

    if (editingMember) {
      updateMutation.mutate({ id: editingMember.id, data: memberData });
    } else {
      createMutation.mutate(memberData);
    }
  };

  const filteredMembers = data?.filter((member) => {
    const term = searchQuery.toLowerCase();
    return (
      member.name.toLowerCase().includes(term) ||
      member.designation.toLowerCase().includes(term) ||
      member.bio.toLowerCase().includes(term)
    );
  }) || [];

  return (
    <div className="space-y-6">
      {/* Header and Add Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif italic text-3xl text-text-primary transition-theme">
            Team Profiles
          </h1>
          <p className="text-xs font-sans text-text-secondary mt-1 transition-theme">
            Manage designations, photos, bios, and social handles of KiwiClicks experts.
          </p>
        </div>
        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-orange hover:bg-accent-orange/95 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-offset-sm transition-all cursor-pointer"
        >
          <Plus size={14} /> Add Team Member
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-secondary">
          <Search size={14} />
        </span>
        <input
          type="text"
          placeholder="Search team members by name, role or bio..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-card-bg border-2 border-border-color rounded-2xl font-sans text-xs font-bold text-text-primary placeholder:text-text-secondary/60 focus:border-accent-orange outline-none transition-theme"
        />
      </div>

      {/* Main Content Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl font-mono text-xs font-bold">
          Error loading team records.
        </div>
      ) : filteredMembers.length === 0 ? (
        <div className="bg-card-bg border-2 border-border-color p-12 text-center rounded-3xl transition-theme">
          <Users size={36} className="mx-auto text-text-secondary mb-3 opacity-60" />
          <p className="text-xs font-sans font-bold text-text-primary mb-1">No Team Members Found</p>
          <p className="text-[10px] font-mono text-text-secondary">
            {searchQuery ? 'Adjust your search terms.' : 'Click "Add Team Member" to populate your agency roster.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <motion.div
              layout
              key={member.id}
              className="bg-card-bg border-2 border-border-color rounded-3xl overflow-hidden flex flex-col justify-between shadow-offset-sm hover:-translate-y-1 transition-all transition-theme group"
            >
              {/* Photo & Basic Info */}
              <div>
                <div className="h-64 overflow-hidden relative bg-page-bg-sec/50 border-b border-border-color/30 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => openEditModal(member)}
                      className="p-2 bg-white/90 hover:bg-accent-orange text-accent-emerald hover:text-white rounded-xl shadow-md transition-all cursor-pointer"
                      title="Edit Profile"
                    >
                      <Edit2 size={13} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(member.id, member.name)}
                      className="p-2 bg-white/90 hover:bg-red-600 text-red-600 hover:text-white rounded-xl shadow-md transition-all cursor-pointer"
                      title="Delete Member"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif italic text-xl text-text-primary group-hover:text-accent-orange transition-all transition-theme">
                      {member.name}
                    </h3>
                    <p className="text-[9px] font-mono tracking-widest text-accent-emerald uppercase font-bold mt-0.5">
                      {member.designation}
                    </p>
                  </div>

                  <p className="text-xs font-sans text-text-secondary leading-relaxed font-medium line-clamp-4 transition-theme">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social / Footing */}
              <div className="p-6 pt-0 border-t border-border-color/10 mt-2 flex items-center gap-3">
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-page-bg hover:bg-accent-emerald hover:text-white border border-border-color text-text-secondary transition-all"
                  >
                    <Linkedin size={13} />
                  </a>
                ) : (
                  <span className="p-2 rounded-lg bg-page-bg border border-border-color/30 text-text-secondary/20 cursor-not-allowed">
                    <Linkedin size={13} />
                  </span>
                )}
                {member.twitter ? (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-page-bg hover:bg-accent-orange hover:text-white border border-border-color text-text-secondary transition-all"
                  >
                    <Twitter size={13} />
                  </a>
                ) : (
                  <span className="p-2 rounded-lg bg-page-bg border border-border-color/30 text-text-secondary/20 cursor-not-allowed">
                    <Twitter size={13} />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Editor Drawer / Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            ></motion.div>

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-card-bg border-2 border-border-color p-6 md:p-8 rounded-3xl shadow-xl z-10 space-y-6 transition-theme max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border-color/30">
                <h3 className="font-serif italic text-2xl text-text-primary transition-theme">
                  {editingMember ? `Edit Profile: ${editingMember.name}` : 'Add Team Member'}
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-1.5 hover:bg-hover-highlight border border-border-color text-text-primary rounded-xl transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {formError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl font-mono text-[10px] font-bold">
                    ⚠️ {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
                      />
                    </div>

                    {/* Designation */}
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                        Designation / Role
                      </label>
                      <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="e.g. Lead AI Engineer"
                        className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
                      />
                    </div>

                    {/* Social Handles */}
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                        LinkedIn URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                        Twitter URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                        placeholder="https://twitter.com/..."
                        className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none transition-theme"
                      />
                    </div>
                  </div>

                  {/* Photo Upload Container */}
                  <div className="flex flex-col justify-between">
                    <ImageUpload
                      value={image}
                      onChange={setImage}
                      folder="team"
                      label="Profile Photo"
                    />
                  </div>
                </div>

                {/* Professional Biography */}
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                    Professional Biography
                  </label>
                  <textarea
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Describe their expertise, experience, and key accomplishments..."
                    className="w-full px-4 py-3 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-medium text-text-primary focus:border-accent-orange outline-none resize-none transition-theme"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-border-color/30">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2.5 border-2 border-border-color/60 text-text-primary font-sans font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-hover-highlight transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={createMutation.isPending || updateMutation.isPending}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-emerald text-white border-2 border-accent-emerald hover:border-accent-emerald/80 font-sans font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-accent-emerald/90 transition-all cursor-pointer shadow-offset-sm disabled:opacity-50"
                  >
                    {(createMutation.isPending || updateMutation.isPending) ? (
                      <RefreshCw size={13} className="animate-spin" />
                    ) : (
                      <Save size={13} />
                    )}
                    Save Profile
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
