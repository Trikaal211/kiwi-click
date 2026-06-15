import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Edit2, Save, X, Loader2 } from 'lucide-react';
import apiClient from '../../api/client';
import ImageUpload from '../../components/admin/ImageUpload';

export default function ServiceManagement() {
  const queryClient = useQueryClient();
  const [editingService, setEditingService] = useState<any>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const { data: services = [], isLoading } = useQuery({
    queryKey: ['adminServices'],
    queryFn: async () => {
      const response = await apiClient.get('/services');
      return response.data.data.services;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (payload: any) => {
      const response = await apiClient.put(`/services/${editingService.id}`, payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminServices'] });
      setEditingService(null);
      setSaving(false);
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || 'Failed to update service.');
      setSaving(false);
    }
  });

  const startEdit = (service: any) => {
    setEditingService(service);
    setTitle(service.title || '');
    setDescription(service.description || '');
    setFeaturedImage(service.featuredImage || '');
    setContent(service.content || '');
    setError('');
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !featuredImage || !content) {
      setError('Please fill in all fields.');
      return;
    }

    setSaving(true);
    updateMutation.mutate({
      title,
      description,
      featuredImage,
      content,
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
      <div>
        <h1 className="font-serif italic text-2xl md:text-3xl text-text-primary transition-theme">
          Service Offerings Management
        </h1>
        <p className="text-xs font-sans text-text-secondary mt-1.5 transition-theme">
          Manage the four primary service pillars. Updates here instantly synchronize to public page templates.
        </p>
      </div>

      {/* Grid of services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service: any) => (
          <div 
            key={service.id} 
            className="bg-card-bg border-2 border-border-color rounded-3xl overflow-hidden shadow-offset-sm flex flex-col justify-between group transition-theme"
          >
            <div>
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={service.featuredImage} 
                  alt="" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif italic text-xl text-text-primary transition-theme">
                  {service.title}
                </h3>
                <p className="text-xs font-sans font-medium text-text-secondary leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex justify-end">
              <button
                type="button"
                onClick={() => startEdit(service)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-page-bg border border-border-color hover:bg-accent-orange hover:text-white rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                <Edit2 size={12} /> Edit Offering
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Editor Modal */}
      {editingService && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <form 
            onSubmit={handleUpdate} 
            className="bg-card-bg border-2 border-border-color rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl transition-theme"
          >
            <div className="p-4 border-b border-border-color/20 flex items-center justify-between bg-page-bg-sec/50">
              <span className="font-mono text-xs text-text-secondary font-bold uppercase">
                Modify Pillar: {editingService.title}
              </span>
              <button
                type="button"
                onClick={() => setEditingService(null)}
                className="p-1.5 bg-page-bg hover:bg-red-500 hover:text-white border border-border-color rounded-lg text-text-primary transition-all cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl font-mono text-[10px] font-bold">
                  ⚠️ {error}
                </div>
              )}

              <div>
                <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                  Service Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-bold focus:outline-none focus:border-accent-orange transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                  Brief Description
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all resize-none"
                />
              </div>

              <ImageUpload
                label="Featured Image"
                value={featuredImage}
                onChange={setFeaturedImage}
                folder="services"
              />

              <div>
                <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                  Full Page Content
                </label>
                <textarea
                  required
                  rows={8}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Detailed scopes and features of the service pillar..."
                  className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all leading-relaxed"
                />
              </div>
            </div>

            <div className="p-4 border-t border-border-color/20 bg-page-bg-sec/50 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingService(null)}
                className="px-4 py-2.5 bg-page-bg hover:bg-hover-highlight border border-border-color rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-accent-orange hover:bg-accent-hover text-white text-xs font-sans font-bold uppercase tracking-widest rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-50"
              >
                {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
