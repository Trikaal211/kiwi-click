import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Users, Settings, LogOut, 
  HelpCircle, MessageSquare, Briefcase, Mail, FolderHeart, 
  Menu, X, Globe, ChevronRight, Search, ArrowLeft
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface SearchOption {
  title: string;
  category: string;
  path: string;
}

const SEARCH_OPTIONS: SearchOption[] = [
  { title: 'Dashboard Overview', category: 'Navigation', path: '/admin/dashboard' },
  { title: 'Write Blog Post', category: 'Blogs', path: '/admin/blogs/new' },
  { title: 'Manage Blog Posts', category: 'Blogs', path: '/admin/blogs' },
  { title: 'Customer Leads Queue', category: 'Leads', path: '/admin/leads' },
  { title: 'Service Offerings', category: 'Services', path: '/admin/services' },
  { title: 'Team Roster', category: 'Team', path: '/admin/team' },
  { title: 'FAQs Manager', category: 'FAQs', path: '/admin/faqs' },
  { title: 'Testimonials Review', category: 'Testimonials', path: '/admin/testimonials' },
  { title: 'Media Library', category: 'Assets', path: '/admin/media' },
  { title: 'Global System Settings', category: 'Branding', path: '/admin/settings' },
];

export default function DashboardLayout() {
  const { user, loading, logout, isAuthenticated } = useAdminAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Route protection guard
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-page-bg flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Blog Posts', path: '/admin/blogs', icon: FileText },
    { name: 'Service Offerings', path: '/admin/services', icon: Briefcase },
    { name: 'Customer Leads', path: '/admin/leads', icon: Mail },
    { name: 'Team Members', path: '/admin/team', icon: Users },
    { name: 'FAQs', path: '/admin/faqs', icon: HelpCircle },
    { name: 'Testimonials', path: '/admin/testimonials', icon: MessageSquare },
    { name: 'Media Library', path: '/admin/media', icon: FolderHeart },
    { name: 'Global Settings', path: '/admin/settings', icon: Settings },
  ];

  // Dynamic Navigation Calculations
  const getNavigationInfo = (pathname: string) => {
    const path = pathname.replace(/\/$/, ''); // Normalize trailing slash
    
    if (path === '/admin' || path === '/admin/dashboard') {
      return {
        breadcrumbs: [{ label: 'Dashboard' }] as BreadcrumbItem[],
        title: 'Overview',
        back: null
      };
    }
    
    if (path.startsWith('/admin/blogs')) {
      if (path.includes('/new')) {
        return {
          breadcrumbs: [
            { label: 'Dashboard', path: '/admin/dashboard' },
            { label: 'Blogs', path: '/admin/blogs' },
            { label: 'Create Blog' }
          ] as BreadcrumbItem[],
          title: 'Create Blog Post',
          back: { label: 'Back to Blogs', path: '/admin/blogs' }
        };
      }
      if (path.includes('/edit/')) {
        return {
          breadcrumbs: [
            { label: 'Dashboard', path: '/admin/dashboard' },
            { label: 'Blogs', path: '/admin/blogs' },
            { label: 'Edit Blog' }
          ] as BreadcrumbItem[],
          title: 'Edit Blog Post',
          back: { label: 'Back to Blogs', path: '/admin/blogs' }
        };
      }
      return {
        breadcrumbs: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Blogs' }
        ] as BreadcrumbItem[],
        title: 'Blog Management',
        back: { label: 'Back to Dashboard', path: '/admin/dashboard' }
      };
    }
    
    if (path.startsWith('/admin/services')) {
      return {
        breadcrumbs: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Services' }
        ] as BreadcrumbItem[],
        title: 'Service Offerings',
        back: { label: 'Back to Dashboard', path: '/admin/dashboard' }
      };
    }

    if (path.startsWith('/admin/leads')) {
      return {
        breadcrumbs: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Leads' }
        ] as BreadcrumbItem[],
        title: 'Customer Leads Queue',
        back: { label: 'Back to Dashboard', path: '/admin/dashboard' }
      };
    }

    if (path.startsWith('/admin/team')) {
      return {
        breadcrumbs: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Team' }
        ] as BreadcrumbItem[],
        title: 'Team Members Roster',
        back: { label: 'Back to Dashboard', path: '/admin/dashboard' }
      };
    }

    if (path.startsWith('/admin/faqs')) {
      return {
        breadcrumbs: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'FAQs' }
        ] as BreadcrumbItem[],
        title: 'FAQs Accordion Manager',
        back: { label: 'Back to Dashboard', path: '/admin/dashboard' }
      };
    }

    if (path.startsWith('/admin/testimonials')) {
      return {
        breadcrumbs: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Testimonials' }
        ] as BreadcrumbItem[],
        title: 'Client Testimonials',
        back: { label: 'Back to Dashboard', path: '/admin/dashboard' }
      };
    }

    if (path.startsWith('/admin/media')) {
      return {
        breadcrumbs: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Media Library' }
        ] as BreadcrumbItem[],
        title: 'Unified Media Assets',
        back: { label: 'Back to Dashboard', path: '/admin/dashboard' }
      };
    }

    if (path.startsWith('/admin/settings')) {
      return {
        breadcrumbs: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Settings' }
        ] as BreadcrumbItem[],
        title: 'Global System Settings',
        back: { label: 'Back to Dashboard', path: '/admin/dashboard' }
      };
    }

    return {
      breadcrumbs: [{ label: 'Dashboard', path: '/admin/dashboard' }] as BreadcrumbItem[],
      title: 'CMS Console',
      back: null
    };
  };

  const navInfo = getNavigationInfo(location.pathname);

  const filteredOptions = SEARCH_OPTIONS.filter(option =>
    option.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    option.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-page-bg text-text-primary flex relative transition-theme z-10">
      {/* Mobile Drawer Backdrop Toggle */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar Drawer Panel */}
      <aside className={`fixed inset-y-0 left-0 w-64 border-r-2 border-border-color bg-card-bg z-50 flex flex-col transform transition-transform lg:transform-none lg:static duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Logo Branding */}
        <div className="p-6 border-b border-border-color/30 flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex flex-col">
            <span className="font-handwriting text-accent-orange text-2xl font-bold -rotate-1">
              KiwiClicks
            </span>
            <span className="text-[9px] font-mono tracking-widest text-text-secondary uppercase font-bold">
              CMS Dashboard
            </span>
          </Link>
          <button 
            type="button" 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 bg-page-bg border border-border-color rounded-lg text-text-primary cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>

        {/* Navigation Sidebar List */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto no-scrollbar">
          {menuItems.map((item) => {
            const isActive = item.path === '/admin/dashboard'
              ? (location.pathname === '/admin' || location.pathname === '/admin/' || location.pathname.startsWith('/admin/dashboard'))
              : location.pathname.startsWith(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-all ${
                  isActive 
                    ? 'bg-accent-emerald text-white shadow-offset-sm translate-x-1' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-hover-highlight'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-accent-orange' : 'text-text-secondary'} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Admin User Profile Section */}
        <div className="p-4 border-t border-border-color/30 bg-page-bg-sec/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-emerald text-white flex items-center justify-center font-serif italic font-bold border border-border-color">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-sans font-bold text-text-primary truncate">{user.name}</p>
              <p className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">
                {user.role}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600/10 hover:bg-red-600 hover:text-white border border-red-600/30 text-red-500 rounded-lg text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <LogOut size={12} /> Log Out
          </button>
        </div>
      </aside>

      {/* Main Action Viewport */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Sticky Admin Header */}
        <header className="sticky top-0 z-40 bg-card-bg/95 backdrop-blur-md border-b-2 border-border-color/30 py-3 px-4 md:px-6 min-h-[72px] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-theme shadow-sm">
          {/* Left: Hamburger + Back Button + Breadcrumbs & Title */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 bg-page-bg border-2 border-border-color rounded-xl text-text-primary cursor-pointer hover:bg-hover-highlight transition-all shrink-0"
              title="Open Navigation"
            >
              <Menu size={16} />
            </button>

            {/* Back Button (Contextual) */}
            {navInfo.back && (
              <Link
                to={navInfo.back.path}
                className="inline-flex items-center justify-center p-2 bg-page-bg hover:bg-hover-highlight border-2 border-border-color rounded-xl text-text-primary transition-all shadow-offset-sm shrink-0"
                title={navInfo.back.label}
              >
                <ArrowLeft size={14} />
              </Link>
            )}

            {/* Breadcrumbs & Page Title Stack */}
            <div className="min-w-0">
              {/* Breadcrumb Row */}
              <nav className="flex items-center gap-1.5 flex-wrap text-[10px] font-mono font-bold uppercase tracking-widest text-text-secondary">
                {navInfo.breadcrumbs.map((crumb, index) => {
                  const isLast = index === navInfo.breadcrumbs.length - 1;
                  return (
                    <div key={crumb.label} className="flex items-center gap-1.5">
                      {index > 0 && <ChevronRight size={10} className="text-text-secondary/40 shrink-0" />}
                      {!isLast && crumb.path ? (
                        <Link to={crumb.path} className="hover:text-accent-orange transition-colors">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className={isLast ? 'text-accent-orange' : 'text-text-secondary/80'}>
                          {crumb.label}
                        </span>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Page Title */}
              <h2 className="font-serif italic text-lg md:text-xl text-text-primary leading-tight mt-0.5 transition-theme truncate">
                {navInfo.title}
              </h2>
            </div>
          </div>

          {/* Right: Quick Search + Live Site + Profile Menu */}
          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            {/* Quick Search */}
            <div className="relative flex-1 md:flex-initial max-w-[280px]">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-text-secondary pointer-events-none">
                  <Search size={13} />
                </span>
                <input
                  type="text"
                  placeholder="Quick search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  className="w-full pl-8 pr-3 py-1.5 bg-page-bg border-2 border-border-color/60 rounded-xl text-xs font-semibold text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent-orange transition-all font-sans"
                />
              </div>

              {/* Search Suggestions Floating Panel */}
              {searchFocused && (
                <div className="absolute right-0 mt-2 w-72 max-h-80 bg-card-bg border-2 border-border-color rounded-2xl shadow-offset overflow-y-auto no-scrollbar z-50 py-2">
                  <div className="px-3 py-1 text-[9px] font-mono text-text-secondary/60 uppercase tracking-widest border-b border-border-color/15 mb-1 font-bold">
                    Jump to console page
                  </div>
                  {filteredOptions.length === 0 ? (
                    <div className="px-4 py-3 text-xs font-sans text-text-secondary">
                      No matching page found.
                    </div>
                  ) : (
                    filteredOptions.map(option => (
                      <Link
                        key={option.path}
                        to={option.path}
                        onMouseDown={() => navigate(option.path)}
                        className="flex flex-col px-4 py-2 hover:bg-hover-highlight text-left transition-colors border-l-4 border-transparent hover:border-accent-orange"
                      >
                        <span className="text-xs font-bold text-text-primary font-sans">{option.title}</span>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-text-secondary mt-0.5">{option.category}</span>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Live Site & User Profile Container */}
            <div className="flex items-center gap-2.5 shrink-0">
              <Link 
                to="/" 
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-page-bg border-2 border-border-color text-[10px] font-mono font-bold uppercase rounded-xl hover:bg-hover-highlight transition-all shadow-offset-sm"
              >
                <Globe size={11} className="text-accent-green" /> Live Site
              </Link>

              {/* Interactive Profile Dropdown Menu */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="w-10 h-10 rounded-xl bg-accent-emerald hover:bg-accent-orange text-white flex items-center justify-center font-serif italic font-bold border-2 border-border-color transition-all shadow-offset-sm cursor-pointer select-none"
                >
                  {user.name.charAt(0).toUpperCase()}
                </button>

                {profileDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 cursor-default" 
                      onClick={() => setProfileDropdownOpen(false)}
                    ></div>
                    
                    <div className="absolute right-0 mt-2.5 w-64 bg-card-bg border-2 border-border-color rounded-2xl shadow-offset z-50 p-4 transition-all">
                      <div className="flex items-center gap-3 pb-3 border-b border-border-color/30 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-accent-emerald text-white flex items-center justify-center font-serif italic font-bold border border-border-color shrink-0">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-sans font-bold text-text-primary truncate">{user.name}</p>
                          <p className="text-[9px] font-mono text-text-secondary truncate mt-0.5 font-semibold">
                            {user.email}
                          </p>
                          <span className="inline-block px-1.5 py-0.5 bg-accent-orange/15 text-accent-orange rounded text-[8px] font-mono font-bold uppercase tracking-wider mt-1">
                            {user.role}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Link
                          to="/admin/settings"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-sans font-bold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-hover-highlight rounded-lg transition-all"
                        >
                          <Settings size={12} /> Branding Settings
                        </Link>
                        <Link
                          to="/"
                          target="_blank"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-sans font-bold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-hover-highlight rounded-lg transition-all"
                        >
                          <Globe size={12} /> Visit Public Site
                        </Link>
                      </div>

                      <div className="border-t border-border-color/30 mt-3 pt-3">
                        <button
                          type="button"
                          onClick={() => {
                            setProfileDropdownOpen(false);
                            logout();
                          }}
                          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600/10 hover:bg-red-600 hover:text-white border border-red-600/30 text-red-500 rounded-lg text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer"
                        >
                          <LogOut size={12} /> Log Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* View Outlet Port */}
        <main className="p-6 md:p-8 max-w-6xl w-full mx-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
