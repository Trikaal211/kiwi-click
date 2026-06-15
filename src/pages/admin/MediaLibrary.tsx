import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  FolderHeart, Copy, Trash2, Search, 
  ExternalLink, Check, Sparkles
} from 'lucide-react';
import apiClient from '../../api/client';
import ImageUpload from '../../components/admin/ImageUpload';

interface MediaItem {
  id: string;
  url: string;
  source: string; // e.g. "Blog Featured", "Team Profile", "User Upload", etc.
  name: string;
}

export default function MediaLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [localUploads, setLocalUploads] = useState<Omit<MediaItem, 'id'>[]>([]);
  const [newUploadUrl, setNewUploadUrl] = useState('');

  // Fetch blogs, team, testimonials, and services to harvest existing images
  const { data: blogs = [] } = useQuery({
    queryKey: ['mediaBlogs'],
    queryFn: async () => {
      const response = await apiClient.get('/blogs');
      return response.data.data.blogs || [];
    },
  });

  const { data: team = [] } = useQuery({
    queryKey: ['mediaTeam'],
    queryFn: async () => {
      const response = await apiClient.get('/team');
      return response.data.data.teamMembers || [];
    },
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ['mediaTestimonials'],
    queryFn: async () => {
      const response = await apiClient.get('/testimonials');
      return response.data.data.testimonials || [];
    },
  });

  const { data: services = [] } = useQuery({
    queryKey: ['mediaServices'],
    queryFn: async () => {
      const response = await apiClient.get('/services');
      return response.data.data.services || [];
    },
  });

  const { data: settingsData } = useQuery({
    queryKey: ['mediaSettings'],
    queryFn: async () => {
      const response = await apiClient.get('/settings');
      return response.data.data.settings;
    },
  });

  // Load user uploads from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kiwiclicks_media_history');
    if (saved) {
      try {
        setLocalUploads(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Handle new file upload callback
  const handleNewUpload = (url: string) => {
    if (!url) return;
    
    // Extract a friendly filename
    let name = 'Uploaded Image';
    if (url.startsWith('data:')) {
      name = `base64_image_${Date.now().toString().slice(-6)}`;
    } else {
      const parts = url.split('/');
      name = parts[parts.length - 1] || 'image.jpg';
    }

    const newItem = {
      url,
      source: 'User Upload',
      name
    };

    const updated = [newItem, ...localUploads];
    setLocalUploads(updated);
    localStorage.setItem('kiwiclicks_media_history', JSON.stringify(updated));
    setNewUploadUrl(''); // Reset the input component
  };

  // Copy link helper
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  // Delete user upload helper
  const deleteLocalImage = (url: string) => {
    if (window.confirm('Are you sure you want to remove this image from the Media Library dashboard?')) {
      const updated = localUploads.filter((item) => item.url !== url);
      setLocalUploads(updated);
      localStorage.setItem('kiwiclicks_media_history', JSON.stringify(updated));
    }
  };

  // Harvest all images from database
  const harvestedItems: MediaItem[] = [];
  const seenUrls = new Set<string>();

  // Add settings logo
  if (settingsData?.logoUrl && !seenUrls.has(settingsData.logoUrl)) {
    seenUrls.add(settingsData.logoUrl);
    harvestedItems.push({
      id: 'settings-logo',
      url: settingsData.logoUrl,
      source: 'Branding Logo',
      name: 'agency_logo.png'
    });
  }

  // Add blogs
  blogs.forEach((blog: any, i: number) => {
    if (blog.featuredImage && !seenUrls.has(blog.featuredImage)) {
      seenUrls.add(blog.featuredImage);
      harvestedItems.push({
        id: `blog-featured-${i}`,
        url: blog.featuredImage,
        source: `Blog: ${blog.title}`,
        name: blog.slug + '_featured.jpg'
      });
    }
    if (blog.ogImage && !seenUrls.has(blog.ogImage)) {
      seenUrls.add(blog.ogImage);
      harvestedItems.push({
        id: `blog-og-${i}`,
        url: blog.ogImage,
        source: `Blog SEO: ${blog.title}`,
        name: blog.slug + '_og.jpg'
      });
    }
  });

  // Add team member photos
  team.forEach((member: any, i: number) => {
    if (member.image && !seenUrls.has(member.image)) {
      seenUrls.add(member.image);
      harvestedItems.push({
        id: `team-member-${i}`,
        url: member.image,
        source: `Team: ${member.name}`,
        name: member.name.toLowerCase().replace(/\s+/g, '_') + '.jpg'
      });
    }
  });

  // Add testimonials
  testimonials.forEach((t: any, i: number) => {
    if (t.image && !seenUrls.has(t.image)) {
      seenUrls.add(t.image);
      harvestedItems.push({
        id: `testimonial-${i}`,
        url: t.image,
        source: `Reviewer: ${t.clientName}`,
        name: t.clientName.toLowerCase().replace(/\s+/g, '_') + '_avatar.jpg'
      });
    }
  });

  // Add services
  services.forEach((s: any, i: number) => {
    if (s.featuredImage && !seenUrls.has(s.featuredImage)) {
      seenUrls.add(s.featuredImage);
      harvestedItems.push({
        id: `service-featured-${i}`,
        url: s.featuredImage,
        source: `Service: ${s.title}`,
        name: s.slug + '_icon.png'
      });
    }
  });

  // Add local uploads
  localUploads.forEach((item, i) => {
    if (!seenUrls.has(item.url)) {
      seenUrls.add(item.url);
      harvestedItems.push({
        id: `local-upload-${i}`,
        url: item.url,
        source: item.source,
        name: item.name
      });
    }
  });

  // Filter media library items
  const filteredItems = harvestedItems.filter((item) => {
    const term = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.source.toLowerCase().includes(term) ||
      item.url.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div>
        <h1 className="font-serif italic text-3xl text-text-primary transition-theme">
          Media Assets Library
        </h1>
        <p className="text-xs font-sans text-text-secondary mt-1 transition-theme">
          Upload banner templates, browse website inline graphics, and copy live image URLs for your blog entries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Upload Zone (Left Column) */}
        <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-border-color/20">
            <Sparkles size={16} className="text-accent-orange" />
            <h3 className="font-serif italic text-lg text-text-primary transition-theme">
              Upload New Asset
            </h3>
          </div>
          
          <ImageUpload
            value={newUploadUrl}
            onChange={handleNewUpload}
            folder="library"
            label="Drag file here or select"
          />

          <div className="p-4 bg-accent-emerald/5 border border-accent-emerald/10 rounded-2xl">
            <p className="text-[10px] font-sans font-bold text-accent-emerald leading-relaxed uppercase tracking-wider mb-1">
              💡 TipTap Composer Integration
            </p>
            <p className="text-[10px] font-sans text-text-secondary leading-relaxed transition-theme">
              To inject images in your blog articles, upload them here, click the **Copy URL** icon, and paste the URL in the TipTap Editor Image upload window.
            </p>
          </div>
        </div>

        {/* Media Grid & Search (Right Column - 2 spans) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search Box */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-text-secondary">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="Search images by name, file extension, or location source..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card-bg border-2 border-border-color rounded-2xl font-sans text-xs font-bold text-text-primary placeholder:text-text-secondary/60 focus:border-accent-orange outline-none transition-theme"
            />
          </div>

          {/* Asset Grid */}
          {filteredItems.length === 0 ? (
            <div className="bg-card-bg border-2 border-border-color p-12 text-center rounded-3xl transition-theme">
              <FolderHeart size={36} className="mx-auto text-text-secondary mb-3 opacity-60" />
              <p className="text-xs font-sans font-bold text-text-primary mb-1">No Images Found</p>
              <p className="text-[10px] font-mono text-text-secondary">
                {searchQuery ? 'Adjust your filter keywords.' : 'Your Media library is ready to host marketing images.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card-bg border-2 border-border-color rounded-2xl overflow-hidden flex flex-col justify-between hover:border-accent-orange group transition-all duration-300 shadow-offset-xs"
                >
                  {/* Thumbnail */}
                  <div className="aspect-square bg-page-bg-sec/50 border-b border-border-color/30 overflow-hidden relative flex items-center justify-center">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />

                    {/* Actions Overlay */}
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.url)}
                        className="p-2.5 bg-white text-accent-emerald hover:bg-accent-orange hover:text-white rounded-xl shadow-md transition-all cursor-pointer"
                        title="Copy Image URL"
                      >
                        {copiedUrl === item.url ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 bg-white text-text-secondary hover:bg-accent-emerald hover:text-white rounded-xl shadow-md transition-all"
                        title="View Full Image"
                      >
                        <ExternalLink size={14} />
                      </a>
                      {item.source === 'User Upload' && (
                        <button
                          type="button"
                          onClick={() => deleteLocalImage(item.url)}
                          className="p-2.5 bg-white text-red-600 hover:bg-red-600 hover:text-white rounded-xl shadow-md transition-all cursor-pointer"
                          title="Remove from history"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-3.5 space-y-1">
                    <p className="text-[10px] font-sans font-bold text-text-primary truncate transition-theme" title={item.name}>
                      {item.name}
                    </p>
                    <div className="flex items-center justify-between text-[8px] font-mono uppercase tracking-wider text-text-secondary">
                      <span className="truncate max-w-[80px]" title={item.source}>
                        {item.source}
                      </span>
                      {copiedUrl === item.url && (
                        <span className="text-accent-orange font-bold">Copied!</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
