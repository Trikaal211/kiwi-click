import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, Plus, Edit2, Trash2, ChevronDown, ChevronUp,
  Search, X, Save, RefreshCw, Layers
} from 'lucide-react';
import apiClient from '../../api/client';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQManagement() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null);

  // Form states
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');
  const [newCategoryInput, setNewCategoryInput] = useState('');
  const [formError, setFormError] = useState('');

  // Fetch FAQs
  const { data: faqs = [], isLoading, error } = useQuery({
    queryKey: ['faqs'],
    queryFn: async () => {
      const response = await apiClient.get('/faqs');
      return response.data.data.faqs as FAQ[];
    },
  });

  // Create FAQ mutation
  const createMutation = useMutation({
    mutationFn: async (newFAQ: Omit<FAQ, 'id'>) => {
      const response = await apiClient.post('/faqs', newFAQ);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
      closeModal();
    },
    onError: (err: any) => {
      setFormError(err.response?.data?.message || 'Failed to create FAQ.');
    }
  });

  // Update FAQ mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<FAQ> }) => {
      const response = await apiClient.put(`/faqs/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
      closeModal();
    },
    onError: (err: any) => {
      setFormError(err.response?.data?.message || 'Failed to update FAQ.');
    }
  });

  // Delete FAQ mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.delete(`/faqs/${id}`);
    },
    onSuccess: (_, deletedId) => {
      queryClient.invalidateQueries({ queryKey: ['faqs'] });
      if (expandedFAQ === deletedId) setExpandedFAQ(null);
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Failed to delete FAQ.');
    }
  });


  // Extract all unique categories
  const categories = ['All', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const openAddModal = () => {
    setEditingFAQ(null);
    setQuestion('');
    setAnswer('');
    setCategory(categories[1] !== 'All' && categories[1] ? categories[1] : 'General');
    setNewCategoryInput('');
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (faq: FAQ) => {
    setEditingFAQ(faq);
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setCategory(faq.category);
    setNewCategoryInput('');
    setFormError('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingFAQ(null);
  };

  const handleDelete = (id: string, question: string) => {
    if (window.confirm(`Are you sure you want to delete this FAQ:\n"${question}"?`)) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!question.trim()) return setFormError('Question is required');
    if (!answer.trim()) return setFormError('Answer is required');
    
    const finalCategory = newCategoryInput.trim() ? newCategoryInput.trim() : category;
    if (!finalCategory.trim()) return setFormError('Category is required');

    const faqData = {
      question,
      answer,
      category: finalCategory,
    };

    if (editingFAQ) {
      updateMutation.mutate({ id: editingFAQ.id, data: faqData });
    } else {
      createMutation.mutate(faqData);
    }
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif italic text-3xl text-text-primary transition-theme">
            FAQ Builder
          </h1>
          <p className="text-xs font-sans text-text-secondary mt-1 transition-theme">
            Manage your sales questions, technical answers, and group them into categories.
          </p>
        </div>
        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-orange hover:bg-accent-orange/95 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-offset-sm transition-all cursor-pointer"
        >
          <Plus size={14} /> Add FAQ
        </button>
      </div>

      {/* Categories Toolbar & Search */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] font-mono font-bold uppercase rounded-lg border-2 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-accent-emerald border-accent-emerald text-white shadow-offset-xs'
                  : 'bg-card-bg border-border-color text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:max-w-xs">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-secondary">
            <Search size={14} />
          </span>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card-bg border-2 border-border-color rounded-2xl font-sans text-xs font-bold text-text-primary placeholder:text-text-secondary/60 focus:border-accent-orange outline-none transition-theme"
          />
        </div>
      </div>

      {/* Main Content Accordions */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl font-mono text-xs font-bold">
          Error loading FAQ list from the database.
        </div>
      ) : filteredFAQs.length === 0 ? (
        <div className="bg-card-bg border-2 border-border-color p-12 text-center rounded-3xl transition-theme">
          <HelpCircle size={36} className="mx-auto text-text-secondary mb-3 opacity-60" />
          <p className="text-xs font-sans font-bold text-text-primary mb-1">No FAQs Found</p>
          <p className="text-[10px] font-mono text-text-secondary">
            {searchQuery ? 'Adjust your search queries.' : 'Add your first FAQ accordion.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isExpanded = expandedFAQ === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-card-bg border-2 border-border-color rounded-2xl overflow-hidden transition-all shadow-offset-xs"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleFAQ(faq.id)}
                  className="p-5 flex items-center justify-between cursor-pointer hover:bg-hover-highlight/20 transition-all"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase bg-accent-emerald/10 text-accent-emerald flex-shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-sans font-bold text-xs text-text-primary md:text-sm transition-theme leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-text-secondary flex-shrink-0">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden border-t border-border-color/10 bg-page-bg-sec/30"
                    >
                      <div className="p-5 md:px-6 space-y-4">
                        <p className="text-xs font-sans text-text-secondary leading-relaxed font-medium transition-theme whitespace-pre-line">
                          {faq.answer}
                        </p>
                        
                        <div className="flex items-center gap-2 pt-3 border-t border-border-color/5">
                          <button
                            type="button"
                            onClick={() => openEditModal(faq)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-border-color/60 hover:bg-accent-orange hover:text-white rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary transition-all cursor-pointer"
                          >
                            <Edit2 size={10} /> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(faq.id, faq.question)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-border-color/60 hover:bg-red-600 hover:text-white rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary transition-all cursor-pointer"
                          >
                            <Trash2 size={10} /> Delete
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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
                  {editingFAQ ? 'Edit FAQ Accordion' : 'Create FAQ Accordion'}
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

                {/* Question */}
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                    FAQ Question
                  </label>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="e.g. Do you support technical integrations for custom web applications?"
                    className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
                  />
                </div>

                {/* Category Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold font-bold">
                      Select Existing Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
                    >
                      {categories.filter(cat => cat !== 'All').map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                      {categories.filter(cat => cat !== 'All').length === 0 && (
                        <option value="General">General</option>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1 font-bold">
                      <Layers size={10} className="text-accent-orange" /> Or Write New Category
                    </label>
                    <input
                      type="text"
                      value={newCategoryInput}
                      onChange={(e) => setNewCategoryInput(e.target.value)}
                      placeholder="e.g. SEO Audit"
                      className="w-full px-4 py-2.5 bg-page-bg-sec border-2 border-border-color rounded-xl font-sans text-xs font-bold text-text-primary focus:border-accent-orange outline-none transition-theme"
                    />
                  </div>
                </div>

                {/* Answer */}
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                    FAQ Detailed Answer
                  </label>
                  <textarea
                    rows={6}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Provide a comprehensive, customer-friendly answer here..."
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
                    Save FAQ
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
