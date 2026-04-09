
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Server, CreditCard, LifeBuoy, Globe, User, LogOut, Settings, LayoutDashboard, Plus, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useCurrency } from '@/hooks/useCurrency.jsx';

const DashboardPage = () => {
  const { currentUser, logout } = useAuth();
  const { getCurrencySymbol, convertPrice } = useCurrency();

  const userName = currentUser?.name || currentUser?.email?.split('@')[0] || 'User';

  const sidebarLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Server, label: 'My Servers', active: false },
    { icon: CreditCard, label: 'Billing', active: false },
    { icon: LifeBuoy, label: 'Support', active: false },
    { icon: Globe, label: 'Domains', active: false },
    { icon: User, label: 'Account', active: false },
  ];

  const servers = [
    { id: 'srv-9281', name: 'Minecraft Survival', type: 'Game Server', ip: '192.168.1.45', status: 'Running', renewal: '2026-05-12' },
    { id: 'srv-4029', name: 'FiveM Roleplay', type: 'Game Server', ip: '10.0.0.12', status: 'Stopped', renewal: '2026-04-20' }
  ];

  const tickets = [
    { id: '#TKT-9012', subject: 'Billing question regarding Standard Plan', status: 'Closed', date: '2026-04-01' },
    { id: '#TKT-8834', subject: 'Help installing custom modpack', status: 'Closed', date: '2026-03-15' }
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard | ExtraRack</title>
      </Helmet>

      <div className="flex-grow flex flex-col md:flex-row bg-background pt-20">
        
        {/* Sidebar (Desktop) */}
        <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card p-6 h-[calc(100vh-80px)] sticky top-20">
          <nav className="flex-1 space-y-2">
            {sidebarLinks.map((link, idx) => (
              <a 
                key={idx} 
                href="#" 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors ${link.active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-6 border-t border-border mt-auto">
            <button onClick={logout} className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-destructive hover:bg-destructive/10 transition-colors w-full">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-1">Welcome back, {userName}! 👋</h1>
                <p className="text-muted-foreground">Here's an overview of your active services.</p>
              </div>
              <Button className="font-bold gap-2">
                <Plus className="w-5 h-5" /> Deploy Server
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Active Servers</h3>
                  <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><Server className="w-5 h-5" /></div>
                </div>
                <div className="text-3xl font-extrabold">2</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Next Billing</h3>
                  <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg"><CreditCard className="w-5 h-5" /></div>
                </div>
                <div className="text-3xl font-extrabold">{getCurrencySymbol()}{convertPrice(19.99)}</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Open Tickets</h3>
                  <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg"><LifeBuoy className="w-5 h-5" /></div>
                </div>
                <div className="text-3xl font-extrabold">0</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Uptime (30d)</h3>
                  <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg"><Zap className="w-5 h-5" /></div>
                </div>
                <div className="text-3xl font-extrabold">99.9%</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Servers Table */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">My Servers</h2>
                  <a href="#" className="text-sm font-semibold text-primary hover:underline">View All</a>
                </div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                      <thead>
                        <tr className="bg-secondary/50 border-b border-border">
                          <th className="p-4 font-semibold text-muted-foreground">Server Name</th>
                          <th className="p-4 font-semibold text-muted-foreground">IP Address</th>
                          <th className="p-4 font-semibold text-muted-foreground">Status</th>
                          <th className="p-4 font-semibold text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {servers.map(server => (
                          <tr key={server.id} className="hover:bg-secondary/20 transition-colors">
                            <td className="p-4">
                              <div className="font-bold text-foreground">{server.name}</div>
                              <div className="text-xs text-muted-foreground">{server.type}</div>
                            </td>
                            <td className="p-4 font-mono text-sm">{server.ip}</td>
                            <td className="p-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                server.status === 'Running' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                              }`}>
                                {server.status}
                              </span>
                            </td>
                            <td className="p-4">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Settings className="w-4 h-4 text-muted-foreground" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tickets Table */}
                <div className="flex justify-between items-center pt-4">
                  <h2 className="text-xl font-bold">Recent Tickets</h2>
                  <a href="#" className="text-sm font-semibold text-primary hover:underline">View All</a>
                </div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                      <tbody className="divide-y divide-border">
                        {tickets.map(ticket => (
                          <tr key={ticket.id} className="hover:bg-secondary/20 transition-colors">
                            <td className="p-4 w-24 font-mono text-sm text-muted-foreground">{ticket.id}</td>
                            <td className="p-4 font-medium text-foreground">{ticket.subject}</td>
                            <td className="p-4 text-right">
                              <span className="text-xs font-bold bg-secondary text-muted-foreground px-2 py-1 rounded">
                                {ticket.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Billing Widget */}
              <div>
                <h2 className="text-xl font-bold mb-6">Billing Overview</h2>
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <div className="text-center pb-6 border-b border-border">
                    <p className="text-sm text-muted-foreground font-semibold mb-2 uppercase tracking-wider">Account Balance</p>
                    <div className="text-4xl font-extrabold text-foreground mb-4">{getCurrencySymbol()}0.00</div>
                    <Button className="w-full font-bold">Add Funds</Button>
                  </div>
                  <div className="pt-6">
                    <p className="text-sm font-semibold mb-4">Upcoming Invoices</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-muted-foreground">Standard Plan</span>
                      <span className="text-sm font-bold">{getCurrencySymbol()}{convertPrice(19.99)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Due Date</span>
                      <span className="text-sm font-bold text-foreground">April 20, 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
