import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Plus, Search, Edit2, Trash2, X, Eye, EyeOff 
} from 'lucide-react';
import apiClient from '../../api/client';

export default function BlogManagement() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [previewBlog, setPreviewBlog] = useState<any>(null);

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ['adminBlogs'],
    queryFn: async () => {
      const response = await apiClient.get('/blogs');
      return response.data.data.blogs;
    },
  });
  const togglePublishMutation = useMutation({
    mutationFn: async ({ id, published }: { id: string; published: boolean }) => {
      const response = await apiClient.put(`/blogs/${id}`, { published });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminBlogs'] });
    },
  });

  const deleteBlogMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await apiClient.delete(`/blogs/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminBlogs'] });
    },
  });

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to permanently delete the blog post "${title}"?`)) {
      deleteBlogMutation.mutate(id);
    }
  };

  const handleTogglePublish = (id: string, currentStatus: boolean) => {
    togglePublishMutation.mutate({ id, published: !currentStatus });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const filteredBlogs = blogs.filter((blog: any) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? blog.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(blogs.map((b: any) => b.category)));

  return (
    <div className="space-y-6">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif italic text-2xl md:text-3xl text-text-primary transition-theme">
            Blog Posts CMS
          </h1>
          <p className="text-xs font-sans text-text-secondary mt-1.5 transition-theme">
            Manage KiwiClicks blog articles, publish/unpublish live drafts, and preview content.
          </p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="inline-flex items-center gap-2 px-5 py-3 bg-accent-orange text-white text-xs font-sans font-bold uppercase tracking-widest rounded-xl hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all shadow-offset-sm shrink-0 cursor-pointer"
        >
          <Plus size={14} /> New Blog Post
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-card-bg border-2 border-border-color p-4 rounded-2xl flex flex-col md:flex-row gap-4 transition-theme">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-text-secondary">
            <Search size={14} />
          </span>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange cursor-pointer"
        >
          <option value="">All Categories</option>
          {categories.map((cat: any) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Blogs Table */}
      <div className="bg-card-bg border-2 border-border-color rounded-3xl overflow-hidden transition-theme">
        {filteredBlogs.length === 0 ? (
          <div className="py-16 text-center text-text-secondary font-sans text-sm">
            No articles found matching filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="bg-page-bg-sec/50 text-text-secondary font-bold border-b border-border-color/20 uppercase tracking-widest text-[9px]">
                  <th className="p-4 pl-6">Blog Details</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Author</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color/10 font-medium">
                {filteredBlogs.map((blog: any) => (
                  <tr key={blog.id} className="hover:bg-hover-highlight/30 transition-colors">
                    <td className="p-4 pl-6 max-w-sm">
                      <div className="flex items-center gap-3">
                        <img 
                          src={blog.featuredImage} 
                          alt="" 
                          className="w-12 h-12 rounded-lg object-cover border border-border-color/20"
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-text-primary text-sm truncate transition-theme">{blog.title}</p>
                          <p className="text-[10px] text-text-secondary truncate font-mono mt-0.5">/{blog.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 bg-page-bg-sec text-text-primary border border-border-color/25 rounded-md text-[10px]">
                        {blog.category}
                      </span>
                    </td>
                    <td className="p-4 text-text-secondary font-bold">{blog.author}</td>
                    <td className="p-4">
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(blog.id, blog.published)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase transition-all border cursor-pointer ${
                          blog.published
                            ? 'bg-accent-green/10 border-accent-green/30 text-accent-green hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30'
                            : 'bg-text-secondary/5 border-text-secondary/20 text-text-secondary hover:bg-accent-green/10 hover:text-accent-green hover:border-accent-green/30'
                        }`}
                        title={blog.published ? 'Click to Unpublish' : 'Click to Publish'}
                      >
                        {blog.published ? <Eye size={10} /> : <EyeOff size={10} />}
                        {blog.published ? 'Live' : 'Draft'}
                      </button>
                    </td>
                    <td className="p-4 text-text-secondary font-mono">
                      {new Date(blog.createdAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setPreviewBlog(blog)}
                          className="p-2 bg-page-bg border border-border-color hover:bg-accent-green hover:text-white rounded-lg text-text-primary transition-all cursor-pointer"
                          title="Preview Blog"
                        >
                          <Eye size={12} />
                        </button>
                        <Link
                          to={`/admin/blogs/edit/${blog.id}`}
                          className="p-2 bg-page-bg border border-border-color hover:bg-accent-orange hover:text-white rounded-lg text-text-primary transition-all inline-block"
                          title="Edit Blog"
                        >
                          <Edit2 size={12} />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className="p-2 bg-page-bg border border-border-color hover:bg-red-600 hover:text-white rounded-lg text-text-primary hover:border-red-600 transition-all cursor-pointer"
                          title="Delete Blog"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Preview Modal (Medium-like layout) */}
      {previewBlog && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-card-bg border-2 border-border-color rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl transition-theme">
            <div className="p-4 border-b border-border-color/20 flex items-center justify-between bg-page-bg-sec/50">
              <span className="font-mono text-xs text-text-secondary font-bold uppercase">
                Article Preview ({previewBlog.published ? 'Live' : 'Draft'})
              </span>
              <button
                type="button"
                onClick={() => setPreviewBlog(null)}
                className="p-1.5 bg-page-bg hover:bg-red-500 hover:text-white border border-border-color rounded-lg text-text-primary transition-all cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="text-xs font-mono font-bold text-accent-green uppercase border border-accent-green/30 px-2.5 py-1 rounded-md">
                  {previewBlog.category}
                </span>
                <h1 className="font-serif italic text-3xl md:text-4xl text-text-primary transition-theme">
                  {previewBlog.title}
                </h1>
                <div className="flex items-center justify-center gap-3 text-xs font-mono text-text-secondary">
                  <span>By {previewBlog.author}</span>
                  <span>·</span>
                  <span>
                    {new Date(previewBlog.createdAt).toLocaleDateString(undefined, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              <img
                src={previewBlog.featuredImage}
                alt=""
                className="w-full h-80 object-cover rounded-2xl border-2 border-border-color"
              />

              {/* Excerpt */}
              <div className="p-4 bg-page-bg-sec/40 border-l-4 border-accent-orange italic text-sm font-sans rounded-r-xl max-w-3xl mx-auto transition-theme">
                {previewBlog.excerpt}
              </div>

              {/* Body Content */}
              <div 
                className="prose dark:prose-invert max-w-3xl mx-auto text-sm font-sans leading-relaxed pt-4"
                dangerouslySetInnerHTML={{ __html: previewBlog.content }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
