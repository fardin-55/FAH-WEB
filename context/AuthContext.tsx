import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, SubscriptionTier } from '@/types/auth.types';

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, tier?: SubscriptionTier) => void;
  logout: () => void;
  upgradeToPro: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isUpgradeModalOpen: boolean;
  setIsUpgradeModalOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('trustscan_user');
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return {
      id: 'usr_demo123',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      tier: 'free',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces'
    };
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('trustscan_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('trustscan_user');
    }
  }, [user]);

  const login = (email: string, tier: SubscriptionTier = 'free') => {
    setUser({
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: email.split('@')[0],
      email,
      tier,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces'
    });
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const upgradeToPro = () => {
    if (user) {
      setUser({ ...user, tier: 'pro' });
    } else {
      setUser({
        id: 'usr_' + Math.random().toString(36).substring(2, 9),
        name: 'Pro Member',
        email: 'pro@example.com',
        tier: 'pro',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces'
      });
    }
    setIsUpgradeModalOpen(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      upgradeToPro,
      isAuthModalOpen,
      setIsAuthModalOpen,
      isUpgradeModalOpen,
      setIsUpgradeModalOpen
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
