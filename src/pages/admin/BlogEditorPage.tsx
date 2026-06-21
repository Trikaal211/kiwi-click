import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import apiClient from '../../api/client';
import TipTapEditor from '../../components/admin/TipTapEditor';
import ImageUpload from '../../components/admin/ImageUpload';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

export default function BlogEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEditMode = !!id;

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugManualEdit, setSlugManualEdit] = useState(false);
  const [canonicalManualEdit, setCanonicalManualEdit] = useState(false);
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [category, setCategory] = useState('SEO');
  const [author, setAuthor] = useState('James Mercer');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [published, setPublished] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  // SEO Fields
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [ogImage, setOgImage] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');

  // Fetch blog data if in edit mode
  const { data: blogData, isLoading } = useQuery({
    queryKey: ['blogItem', id],
    queryFn: async () => {
      const response = await apiClient.get(`/blogs/${id}`);
      return response.data.data.blog;
    },
    enabled: isEditMode,
  });

  useEffect(() => {
    if (blogData) {
      setTitle(blogData.title || '');
      setSlug(blogData.slug || '');
      setSlugManualEdit(true); // Disable auto-slugify on loaded edit data
      setExcerpt(blogData.excerpt || '');
      setContent(blogData.content || '');
      setFeaturedImage(blogData.featuredImage || '');
      setCategory(blogData.category || 'SEO');
      setAuthor(blogData.author || 'James Mercer');
      setTags(blogData.tags || []);
      setPublished(blogData.published || false);
      
      // SEO
      setMetaTitle(blogData.metaTitle || '');
      setMetaDescription(blogData.metaDescription || '');
      setOgImage(blogData.ogImage || '');
      setKeywords(blogData.keywords || []);
      setCanonicalUrl(blogData.canonicalUrl || '');
      setCanonicalManualEdit(true); // Disable auto-canonical on loaded data
    }
  }, [blogData]);

  const saveMutation = useMutation({
    mutationFn: async (blogPayload: any) => {
      if (isEditMode) {
        return await apiClient.put(`/blogs/${id}`, blogPayload);
      } else {
        return await apiClient.post('/blogs', blogPayload);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminBlogs'] });
      queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
      navigate('/admin/blogs');
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || 'Failed to save blog post.');
      setSaving(false);
    }
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !excerpt || !content || !featuredImage) {
      setError('Please fill in Title, Excerpt, Content and Upload a Featured Image.');
      return;
    }

    setError('');
    setSaving(true);

    const payload = {
      title,
      slug: slug || undefined,
      excerpt,
      content,
      featuredImage,
      category,
      author,
      tags,
      published,
      metaTitle: metaTitle || undefined,
      metaDescription: metaDescription || undefined,
      ogImage: ogImage || undefined,
      keywords,
      canonicalUrl: canonicalUrl || undefined,
    };

    saveMutation.mutate(payload);
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleAddKeyword = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      e.preventDefault();
      if (!keywords.includes(keywordInput.trim())) {
        setKeywords([...keywords, keywordInput.trim()]);
      }
      setKeywordInput('');
    }
  };

  const handleRemoveKeyword = (kwToRemove: string) => {
    setKeywords(keywords.filter(k => k !== kwToRemove));
  };

  if (isEditMode && isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSave} className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-border-color/20">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/blogs"
            className="p-2.5 bg-card-bg hover:bg-hover-highlight border-2 border-border-color rounded-xl text-text-primary transition-all shadow-offset-sm"
          >
            <ArrowLeft size={14} />
          </Link>
          <div>
            <h1 className="font-serif italic text-2xl text-text-primary transition-theme">
              {isEditMode ? 'Edit Blog Post' : 'New Blog Post'}
            </h1>
            <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mt-1">
              KiwiClicks CMS Editor
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer bg-card-bg border-2 border-border-color px-4 py-2.5 rounded-xl shadow-offset-sm select-none">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-4 h-4 rounded text-accent-green focus:ring-accent-green accent-accent-green cursor-pointer"
            />
            <span className="text-xs font-sans font-bold text-text-primary uppercase tracking-wider">
              {published ? 'Published' : 'Save as Draft'}
            </span>
          </label>

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-3 bg-accent-orange hover:bg-accent-hover text-white text-xs font-sans font-bold uppercase tracking-widest rounded-xl hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all shadow-offset-sm cursor-pointer disabled:opacity-50"
          >
            {saving ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />}
            {isEditMode ? 'Update Post' : 'Publish Post'}
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-2xl font-mono text-xs font-bold">
          ⚠️ {error}
        </div>
      )}

      {/* Editor Main Content & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main writing columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Post Title */}
          <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme">
            <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2 font-bold">
              Article Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => {
                const newTitle = e.target.value;
                setTitle(newTitle);
                if (!slugManualEdit) {
                  const generatedSlug = slugify(newTitle);
                  setSlug(generatedSlug);
                  if (!canonicalManualEdit) {
                    setCanonicalUrl(`https://kiwiclicks.in/blog/${generatedSlug}`);
                  }
                }
              }}
              placeholder="e.g. 5 AI automation workflows business owners are using right now"
              className="w-full px-4 py-3 bg-page-bg border-2 border-border-color/60 rounded-xl text-sm font-bold text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent-orange transition-all"
            />
          </div>

          {/* Excerpt */}
          <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme">
            <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2 font-bold">
              Excerpt / Brief Description
            </label>
            <textarea
              required
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Write a brief, engaging summary of what this article is about (used in blog cards and lists)..."
              className="w-full px-4 py-3 bg-page-bg border-2 border-border-color/60 rounded-xl text-xs font-medium text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent-orange transition-all resize-none"
            />
          </div>

          {/* TipTap Rich Editor */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest font-bold">
              Article Body Content
            </label>
            {/* Render TipTap Rich Editor */}
            {isEditMode ? (
              content !== undefined && content !== '' && (
                <TipTapEditor content={content} onChange={setContent} />
              )
            ) : (
              <TipTapEditor content="" onChange={setContent} />
            )}
            {/* Fallback editor in case data has not loaded fully */}
            {isEditMode && content === '' && (
              <div className="p-8 border-2 border-dashed border-border-color/40 rounded-2xl text-center text-text-secondary bg-card-bg text-xs">
                Preparing TipTap editor content...
              </div>
            )}
          </div>

          {/* SEO MANAGEMENT PANEL */}
          <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme space-y-5">
            <h3 className="font-serif italic text-lg text-text-primary border-b border-border-color/20 pb-2 transition-theme">
              SEO Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                  SEO Meta Title
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Leave empty to fallback to Title"
                  className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                  URL Slug Override
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSlug(val);
                    if (val === '') {
                      setSlugManualEdit(false);
                    } else {
                      setSlugManualEdit(true);
                    }
                    if (!canonicalManualEdit) {
                      setCanonicalUrl(`https://kiwiclicks.in/blog/${val}`);
                    }
                  }}
                  placeholder="Auto-generated on empty"
                  className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                SEO Meta Description
              </label>
              <textarea
                rows={2}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Brief meta snippet describing the article inside SERP results..."
                className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                Canonical URL
              </label>
              <input
                type="url"
                value={canonicalUrl}
                onChange={(e) => {
                  setCanonicalUrl(e.target.value);
                  setCanonicalManualEdit(true);
                }}
                placeholder="https://kiwiclicks.com/blog/your-custom-slug"
                className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all font-mono"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <ImageUpload
                label="OG Image (Open Graph Share Card)"
                value={ogImage}
                onChange={setOgImage}
                folder="blogs_seo"
              />
              
              <div>
                <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                  SEO Keywords
                </label>
                <input
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={handleAddKeyword}
                  placeholder="Type keyword and press Enter..."
                  className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all"
                />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {keywords.map(kw => (
                    <span key={kw} className="inline-flex items-center gap-1 px-2.5 py-1 bg-page-bg-sec border border-border-color/20 rounded-md text-[10px] font-medium">
                      {kw}
                      <button type="button" onClick={() => handleRemoveKeyword(kw)} className="text-text-secondary hover:text-red-500 font-bold ml-0.5 cursor-pointer">×</button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Parameters panels */}
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme">
            <ImageUpload
              label="Featured Image"
              value={featuredImage}
              onChange={setFeaturedImage}
              folder="blogs"
            />
          </div>

          {/* Classification & Metadata Panel */}
          <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme space-y-4">
            <h3 className="font-serif italic text-lg text-text-primary border-b border-border-color/20 pb-2 transition-theme">
              Categorization
            </h3>
            
            <div>
              <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange cursor-pointer"
              >
                <option value="SEO">SEO & Local SEO</option>
                <option value="Marketing">Social Media Marketing</option>
                <option value="Development">Website Development</option>
                <option value="AI">AI Automation</option>
                <option value="Growth">Business Growth</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                Author
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author name"
                className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold">
                Tags / Labels
              </label>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                placeholder="Type tag and press Enter..."
                className="w-full px-3.5 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all"
              />
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-page-bg-sec border border-border-color/20 rounded-md text-[9px] font-medium font-mono text-text-secondary">
                    {tag}
                    <button type="button" onClick={() => handleRemoveTag(tag)} className="text-text-secondary hover:text-red-500 font-bold cursor-pointer">×</button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
