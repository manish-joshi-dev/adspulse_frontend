import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { LogOut, BarChart3, Plus, History, FileText } from 'lucide-react';


export const Sidebar = ({ onClose }) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    onClose?.();
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
      isActive
        ? 'text-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/10'
        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]/30'
    }`;

  return (
    <div 
      className="h-full flex flex-col border-r"
      style={{
        background: 'var(--color-sidebar-bg)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Logo section */}
      <div 
        className="p-6 border-b"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-purple)] rounded-lg flex items-center justify-center"
          >
            <span className="text-white font-bold text-sm">AP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold" style={{ color: 'var(--color-text-primary)' }}>AdsPulse</span>
            <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Diagnostic Engine</span>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <div className="mb-8">
          <p 
            className="text-xs font-semibold uppercase tracking-wide mb-4 px-2"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Main
          </p>
          <div className="space-y-1">
            <NavLink to="/dashboard" className={navLinkClass} onClick={onClose}>
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/dashboard" className={navLinkClass} onClick={onClose}>
              <Plus className="w-5 h-5" />
              <span>New Analysis</span>
            </NavLink>
          </div>
        </div>

        <div>
          <p 
            className="text-xs font-semibold uppercase tracking-wide mb-4 px-2"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            History
          </p>
          <div className="space-y-1">
            <NavLink to="/history" className={navLinkClass} onClick={onClose}>
              <History className="w-5 h-5" />
              <span>Past Analyses</span>
            </NavLink>
            <NavLink to="/history" className={navLinkClass} onClick={onClose}>
              <FileText className="w-5 h-5" />
              <span>Reports</span>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* User profile + logout */}
      <div 
        className="p-6 border-t space-y-3"
        style={{ borderColor: 'var(--color-border)' }}
      >
        {/* User profile card */}
        <div 
          className="px-4 py-3 rounded-lg border"
          style={{
            background: 'var(--color-bg-secondary)',
            borderColor: 'var(--color-border)',
          }}
        >
          <p 
            className="text-xs mb-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Logged in as
          </p>
          <p 
            className="text-sm font-medium truncate"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {user?.email}
          </p>
          <p 
            className="text-xs mt-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Plan: <span style={{ color: 'var(--color-accent-success)' }}>{user?.plan || 'free'}</span>
          </p>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium"
          style={{
            color: 'var(--color-accent-critical)',
          }}
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
