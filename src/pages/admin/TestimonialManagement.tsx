import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Plus, Edit2, Trash2, Star, 
  Search, X, Save, RefreshCw, Quote
} from 'lucide-react';
import apiClient from '../../api/client';
import ImageUpload from '../../components/admin/ImageUpload';

interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  designation: string;
  review: string;
  rating: number;
  image?: string | null;
}

export default function TestimonialManagement() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

  // Form states
  const [clientName, setClientName] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState('');
  const [formError, setFormError] = useState('');

  // Fetch Testimonials
  const { data, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await apiClient.get('/testimonials');
      return response.data.data.testimonials as Testimonial[];
    },
  });

  // Create Testimonial mutation
  const createMutation = useMutation({
    mutationFn: async (newTestimonial: Omit<Testimonial, 'id'>) => {
      const response = await apiClient.post('/testimonials', newTestimonial);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      closeModal();
    },
    onError: (err: any) => {
      setFormError(err.response?.data?.message || 'Failed to create testimonial.');
    }
  });

  // Update Testimonial mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Testimonial> }) => {
      const response = await apiClient.put(`/testimonials/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      closeModal();
    },
    onError: (err: any) => {
      setFormError(err.response?.data?.message || 'Failed to update testimonial.');
    }
  });

  // Delete Testimonial mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/testimonials/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Failed to delete testimonial.');
    }
  });

  const openAddModal = () => {
    setEditingTestimonial(null);
    setClientName('');
    setCompany('');
    setDesignation('');
    setReview('');
    setRating(5);
    setImage('');
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setClientName(testimonial.clientName);
    setCompany(testimonial.company);
    setDesignation(testimonial.designation);
    setReview(testimonial.review);
    setRating(testimonial.rating);
    setImage(testimonial.image || '');
    setFormError('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTestimonial(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete the testimonial from ${name}?`)) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!clientName.trim()) return setFormError('Client name is required');
    if (!company.trim()) return setFormError('Company name is required');
    if (!designation.trim()) return setFormError('Designation is required');
    if (review.trim().length < 10) return setFormError('Review must be at least 10 characters long');

    const testimonialData = {
      clientName,
      company,
      designation,
      review,
      rating: Number(rating),
      image: image.trim() || undefined,
    };

    if (editingTestimonial) {
      updateMutation.mutate({ id: editingTestimonial.id, data: testimonialData });
    } else {
      createMutation.mutate(testimonialData);
    }
  };

  const filteredTestimonials = data?.filter((t) => {
    const term = searchQuery.toLowerCase();
    return (
      t.clientName.toLowerCase().includes(term) ||
      t.company.toLowerCase().includes(term) ||
      t.designation.toLowerCase().includes(term) ||
      t.review.toLowerCase().includes(term)
    );
  }) || [];

  return (
    <div className="space-y-6">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif italic text-3xl text-text-primary transition-theme">
            Client Testimonials
          </h1>
          <p className="text-xs font-sans text-text-secondary mt-1 transition-theme">
            Manage feedback, client credentials, star ratings, and avatars showcased on the website.
          </p>
        </div>
        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-orange hover:bg-accent-orange/95 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-offset-sm transition-all cursor-pointer"
        >
          <Plus size={14} /> Add Testimonial
        </button>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-secondary">
          <Search size={14} />
        </span>
        <input
          type="text"
          placeholder="Search testimonials by client name, company or text..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-card-bg border-2 border-border-color rounded-2xl font-sans text-xs font-bold text-text-primary placeholder:text-text-secondary/60 focus:border-accent-orange outline-none transition-theme"
        />
      </div>

      {/* Loader / Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl font-mono text-xs font-bold">
          Error loading client testimonials.
        </div>
      ) : filteredTestimonials.length === 0 ? (
        <div className="bg-card-bg border-2 border-border-color p-12 text-center rounded-3xl transition-theme">
          <MessageSquare size={36} className="mx-auto text-text-secondary mb-3 opacity-60" />
          <p className="text-xs font-sans font-bold text-text-primary mb-1">No Testimonials Found</p>
          <p className="text-[10px] font-mono text-text-secondary">
            {searchQuery ? 'Adjust your search terms.' : 'Add your first customer validation quote.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((t) => (
            <motion.div
              layout
              key={t.id}
              className="bg-card-bg border-2 border-border-color p-6 rounded-3xl flex flex-col justify-between shadow-offset-sm hover:-translate-y-0.5 transition-all transition-theme relative group"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute right-6 top-6 text-accent-emerald/10 pointer-events-none">
                <Quote size={48} className="fill-current" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < t.rating ? 'text-accent-orange fill-accent-orange' : 'text-text-secondary/20'}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs font-sans text-text-secondary leading-relaxed font-medium italic mb-6 transition-theme">
                  "{t.review}"
                </p>
              </div>

              {/* Client Profile Details */}
              <div className="flex items-center justify-between border-t border-border-color/10 pt-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-page-bg-sec border border-border-color overflow-hidden flex items-center justify-center">
                    {t.image ? (
                      <img src={t.image} alt={t.clientName} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-serif italic font-bold text-accent-emerald text-sm">
                        {t.clientName.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold text-text-primary transition-theme">
                      {t.clientName}
                    </h4>
                    <p className="text-[9px] font-mono text-text-secondary uppercase tracking-wider">
                      {t.designation}, {t.company}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => openEditModal(t)}
                    className="p-2 bg-page-bg hover:bg-accent-orange text-text-secondary hover:text-white rounded-xl border border-border-color transition-all cursor-pointer"
                    title="Edit Review"
                  >
                    <Edit2 size={12} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(t.id, t.clientName)}
                    className="p-2 bg-page-bg hover:bg-red-600 text-text-secondary hover:text-white rounded-xl border border-border-color transition-all cursor-pointer"
                    title="Delete Review"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Editor Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-card-bg border-2 border-border-color p-6 md:p-8 rounded-3xl shadow-xl z-10 space-y-6 transition-theme max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border-color/30">
                <h3 className="font-serif italic text-2xl text-text-primary transition-theme">
                  {editingTestimonial ? 'Edit Testimonial' : 'Add Client Testimonial'}
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

                {/* Client Name & Star Rating */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                      Client Name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                      Star Rating (1-5)
                    </label>
                    <div className="flex items-center gap-1.5 py-2">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setRating(val)}
                          className="text-text-secondary hover:scale-125 transition-all cursor-pointer"
                        >
                          <Star
                            size={20}
                            className={val <= rating ? 'text-accent-orange fill-accent-orange' : 'text-text-secondary/20'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company & Designation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                      Company
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Cyberdyne Systems"
                      className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                      Designation
                    </label>
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="e.g. Managing Director"
                      className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
                    />
                  </div>
                </div>

                {/* Photo Upload */}
                <div>
                  <ImageUpload
                    value={image}
                    onChange={setImage}
                    folder="testimonials"
                    label="Client Avatar / Company Logo"
                  />
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                    Feedback / Review Text
                  </label>
                  <textarea
                    rows={4}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="We loved working with KiwiClicks! They increased our organic search traffic by 150% in under 90 days..."
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
                    Save Testimonial
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
