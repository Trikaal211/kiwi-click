import { useState, useRef, type DragEvent } from 'react';
import { Upload, X, RefreshCw } from 'lucide-react';
import apiClient from '../../api/client';


interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  label?: string;
}

export default function ImageUpload({ value, onChange, folder = 'kiwiclicks', label = 'Image' }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload only image files.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds the 5MB limit.');
      return;
    }

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);

    try {
      const response = await apiClient.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 'success') {
        onChange(response.data.data.url);
      } else {
        setError('Image upload failed.');
      }
    } catch (err: any) {
      console.error('Upload error:', err);
      setError(err.response?.data?.message || 'Error uploading image.');
    } finally {
      setUploading(false);
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    onChange('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full">
      <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2 font-bold">
        {label}
      </label>

      {value ? (
        <div className="relative border-2 border-border-color rounded-2xl overflow-hidden aspect-video bg-page-bg-sec flex items-center justify-center group transition-theme">
          <img
            src={value}
            alt="Uploaded Preview"
            className="w-full h-full object-cover group-hover:opacity-85 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onButtonClick}
              className="p-2.5 bg-white text-accent-emerald rounded-xl hover:bg-accent-orange hover:text-white transition-all shadow-md cursor-pointer"
              title="Replace Image"
              disabled={uploading}
            >
              <RefreshCw size={16} className={uploading ? 'animate-spin' : ''} />
            </button>
            <button
              type="button"
              onClick={removeImage}
              className="p-2.5 bg-white text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-md cursor-pointer"
              title="Delete Image"
              disabled={uploading}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}
          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[160px] ${
            dragActive
              ? 'border-accent-orange bg-accent-orange/5'
              : 'border-border-color/60 bg-card-bg hover:border-accent-orange hover:bg-hover-highlight/50'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <RefreshCw size={28} className="text-accent-orange animate-spin" />
              <p className="text-sm font-sans font-bold text-text-primary">Uploading Image...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-page-bg-sec border border-border-color flex items-center justify-center text-text-secondary mb-3">
                <Upload size={18} />
              </div>
              <p className="text-xs font-sans font-bold text-text-primary mb-1">
                Drag & Drop or Click to Upload
              </p>
              <p className="text-[10px] font-mono text-text-secondary">
                PNG, JPG, WEBP (Max 5MB)
              </p>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className="text-[10px] font-mono font-bold text-red-500 mt-1.5 flex items-center gap-1">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}
