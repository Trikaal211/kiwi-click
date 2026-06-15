import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, Users, Mail, MessageSquare, Briefcase, 
  ArrowRight, FilePlus, Settings, ExternalLink
} from 'lucide-react';
import apiClient from '../../api/client';

export default function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: async () => {
      const response = await apiClient.get('/dashboard/stats');
      return response.data.data;
    },
  });

  const { data: blogsData } = useQuery({
    queryKey: ['blogsList'],
    queryFn: async () => {
      const response = await apiClient.get('/blogs');
      return response.data.data.blogs;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl font-mono text-xs font-bold">
        Error loading statistics. Make sure the backend server is running.
      </div>
    );
  }

  const stats = data?.stats;
  const recentLeads = data?.recentLeads || [];
  const recentBlogs = blogsData?.slice(0, 5) || [];

  const statCards = [
    { label: 'Total Blogs', value: stats?.blogs?.total || 0, subText: `${stats?.blogs?.published || 0} Published`, icon: FileText, color: 'text-accent-orange', bg: 'bg-accent-orange/10' },
    { label: 'Total Leads', value: stats?.leads?.total || 0, subText: `${stats?.leads?.pending || 0} Unread`, icon: Mail, color: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
    { label: 'Services', value: stats?.servicesCount || 0, subText: 'Dynamic pages', icon: Briefcase, color: 'text-accent-green', bg: 'bg-accent-green/10' },
    { label: 'Team Members', value: stats?.teamCount || 0, subText: 'Active profiles', icon: Users, color: 'text-accent-orange', bg: 'bg-accent-orange/10' },
    { label: 'Testimonials', value: stats?.testimonialsCount || 0, subText: 'Reviews', icon: MessageSquare, color: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="font-serif italic text-3xl md:text-4xl text-text-primary transition-theme">
          Welcome back, Admin
        </h1>
        <p className="text-xs font-sans font-medium text-text-secondary mt-1.5 transition-theme">
          Here is a summary of the marketing performance and content on KiwiClicks.
        </p>
      </div>

      {/* Grid of stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              key={card.label}
              className="bg-card-bg border-2 border-border-color p-5 rounded-2xl flex flex-col justify-between shadow-offset-sm hover:-translate-y-1 transition-all transition-theme"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest font-bold">
                  {card.label}
                </span>
                <div className={`p-2 rounded-lg ${card.bg} ${card.color}`}>
                  <Icon size={14} />
                </div>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-text-primary transition-theme">
                  {card.value}
                </p>
                <p className="text-[10px] font-sans font-bold text-text-secondary mt-1">
                  {card.subText}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions Panel */}
      <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme">
        <h3 className="font-serif italic text-lg text-text-primary mb-4 transition-theme">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/admin/blogs/new"
            className="flex items-center gap-3 p-4 bg-page-bg-sec hover:bg-accent-orange hover:text-white rounded-2xl border-2 border-border-color/40 font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-offset-sm group"
          >
            <div className="p-2 bg-white/20 rounded-lg text-text-primary group-hover:text-white">
              <FilePlus size={14} />
            </div>
            Write Blog Post
          </Link>
          <Link
            to="/admin/leads"
            className="flex items-center gap-3 p-4 bg-page-bg-sec hover:bg-accent-emerald hover:text-white rounded-2xl border-2 border-border-color/40 font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-offset-sm group"
          >
            <div className="p-2 bg-white/20 rounded-lg text-text-primary group-hover:text-white">
              <Mail size={14} />
            </div>
            View Leads Queue
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center gap-3 p-4 bg-page-bg-sec hover:bg-accent-green hover:text-white rounded-2xl border-2 border-border-color/40 font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-offset-sm group"
          >
            <div className="p-2 bg-white/20 rounded-lg text-text-primary group-hover:text-white">
              <Settings size={14} />
            </div>
            Manage settings
          </Link>
        </div>
      </div>

      {/* Lists of Recent Elements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Leads */}
        <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme flex flex-col">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-color/20">
            <h3 className="font-serif italic text-lg text-text-primary transition-theme">
              Recent Leads
            </h3>
            <Link to="/admin/leads" className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-orange hover:underline flex items-center gap-1">
              All Leads <ArrowRight size={11} />
            </Link>
          </div>
          {recentLeads.length === 0 ? (
            <p className="text-xs font-sans text-text-secondary py-8 text-center">No leads received yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="text-text-secondary font-bold border-b border-border-color/10">
                    <th className="py-2">Contact Name</th>
                    <th className="py-2">Service Request</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color/10 font-medium">
                  {recentLeads.map((lead: any) => (
                    <tr key={lead.id} className="hover:bg-hover-highlight/40">
                      <td className="py-3">
                        <p className="font-bold text-text-primary transition-theme">{lead.name}</p>
                        <p className="text-[10px] text-text-secondary truncate">{lead.email}</p>
                      </td>
                      <td className="py-3 text-text-secondary truncate">{lead.service}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase ${
                          lead.status === 'pending' ? 'bg-accent-orange/15 text-accent-orange' : 'bg-accent-green/15 text-accent-green'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-card-bg border-2 border-border-color p-6 rounded-3xl transition-theme flex flex-col">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-color/20">
            <h3 className="font-serif italic text-lg text-text-primary transition-theme">
              Recent Blogs
            </h3>
            <Link to="/admin/blogs" className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-orange hover:underline flex items-center gap-1">
              All Blogs <ArrowRight size={11} />
            </Link>
          </div>
          {recentBlogs.length === 0 ? (
            <p className="text-xs font-sans text-text-secondary py-8 text-center">No blog articles written yet.</p>
          ) : (
            <div className="divide-y divide-border-color/10">
              {recentBlogs.map((blog: any) => (
                <div key={blog.id} className="py-3 flex items-center justify-between hover:bg-hover-highlight/40 px-2 rounded-xl transition-all">
                  <div className="min-w-0 flex-1 pr-4">
                    <p className="font-bold text-text-primary truncate transition-theme">{blog.title}</p>
                    <p className="text-[10px] text-text-secondary font-mono mt-0.5">{blog.category} · By {blog.author}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase ${
                      blog.published ? 'bg-accent-green/15 text-accent-green' : 'bg-text-secondary/10 text-text-secondary'
                    }`}>
                      {blog.published ? 'Live' : 'Draft'}
                    </span>
                    <Link to={`/admin/blogs/edit/${blog.id}`} className="p-1 hover:text-accent-orange text-text-secondary transition-all">
                      <ExternalLink size={12} />
                    </Link>
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
