import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Mail, Search, Phone, Calendar } from 'lucide-react';
import apiClient from '../../api/client';

export default function LeadManagement() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const { data: leads = [], isLoading, error } = useQuery({
    queryKey: ['adminLeads'],
    queryFn: async () => {
      const response = await apiClient.get('/leads');
      return response.data.data.leads;
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const response = await apiClient.patch(`/leads/${id}/status`, { status });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminLeads'] });
      queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
    },
  });

  const handleStatusChange = (id: string, newStatus: string) => {
    updateStatusMutation.mutate({ id, status: newStatus });
  };

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
        Error loading leads list.
      </div>
    );
  }

  const filteredLeads = leads.filter((lead: any) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? lead.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-accent-orange/15 text-accent-orange border-accent-orange/20';
      case 'contacted': return 'bg-blue-500/15 text-blue-500 border-blue-500/20';
      case 'qualified': return 'bg-purple-500/15 text-purple-500 border-purple-500/20';
      case 'converted': return 'bg-accent-green/15 text-accent-green border-accent-green/20';
      case 'closed': return 'bg-text-secondary/15 text-text-secondary border-text-secondary/20';
      default: return 'bg-text-secondary/10 text-text-secondary border-text-secondary/20';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif italic text-2xl md:text-3xl text-text-primary transition-theme">
          Customer Leads Lifecycle
        </h1>
        <p className="text-xs font-sans text-text-secondary mt-1.5 transition-theme">
          Track form submissions, qualify client scopes, and manage client communications pipeline.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-card-bg border-2 border-border-color p-4 rounded-2xl flex flex-col md:flex-row gap-4 transition-theme">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-text-secondary">
            <Search size={14} />
          </span>
          <input
            type="text"
            placeholder="Search by client name, email, or message content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange transition-all"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-page-bg border border-border-color/40 rounded-xl text-xs font-medium focus:outline-none focus:border-accent-orange cursor-pointer"
        >
          <option value="">All Statuses</option>
          <option value="pending">New / Pending</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="converted">Converted</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {/* Leads List Grid */}
      <div className="space-y-4">
        {filteredLeads.length === 0 ? (
          <div className="bg-card-bg border-2 border-border-color p-12 text-center text-text-secondary font-sans text-sm rounded-3xl transition-theme">
            No leads found matching current parameters.
          </div>
        ) : (
          filteredLeads.map((lead: any) => (
            <div 
              key={lead.id} 
              className="bg-card-bg border-2 border-border-color p-6 rounded-3xl shadow-offset-sm flex flex-col md:flex-row justify-between gap-6 transition-all transition-theme animate-fadeIn"
            >
              {/* Left Column: Client Details */}
              <div className="space-y-3 flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif italic text-xl text-text-primary transition-theme">
                    {lead.name}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase border ${getStatusColor(lead.status)}`}>
                    {lead.status === 'pending' ? 'New' : lead.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-text-secondary font-medium">
                  <a href={`mailto:${lead.email}`} className="hover:text-accent-orange flex items-center gap-1.5 transition-colors">
                    <Mail size={12} /> {lead.email}
                  </a>
                  {lead.phone && (
                    <span className="flex items-center gap-1.5">
                      <Phone size={12} /> {lead.phone}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(lead.createdAt).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <span className="px-2.5 py-1 bg-page-bg-sec border border-border-color/20 text-text-primary text-[10px] font-sans font-bold rounded-lg uppercase tracking-wider transition-theme">
                    💼 {lead.service}
                  </span>
                  {lead.budget && (
                    <span className="px-2.5 py-1 bg-page-bg-sec border border-border-color/20 text-text-primary text-[10px] font-sans font-bold rounded-lg uppercase tracking-wider transition-theme">
                      💵 Budget: {lead.budget}
                    </span>
                  )}
                </div>

                {/* Message Content */}
                <div className="mt-3 bg-page-bg border border-border-color/25 p-4 rounded-xl text-xs font-sans text-text-primary leading-relaxed transition-theme">
                  <p className="font-bold text-[9px] uppercase font-mono text-text-secondary mb-1">Message:</p>
                  <p className="whitespace-pre-wrap">{lead.message}</p>
                </div>
              </div>

              {/* Right Column: Status Change panel */}
              <div className="flex flex-col justify-between items-end gap-4 shrink-0">
                <div className="w-full md:w-48">
                  <label className="block text-[9px] font-mono text-text-secondary uppercase tracking-widest mb-1.5 font-bold text-left md:text-right">
                    Pipeline Status
                  </label>
                  <select
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                    className="w-full px-3 py-2 bg-page-bg border border-border-color/40 rounded-xl text-xs font-bold text-text-primary focus:outline-none focus:border-accent-orange cursor-pointer"
                  >
                    <option value="pending">New / Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="converted">Converted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
