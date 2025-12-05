'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaUsers, FaDollarSign, FaFileAlt, FaChartLine } from 'react-icons/fa';
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalRevenue: 0,
    totalCaseStudies: 0,
    totalBlogPosts: 0,
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const statCards = [
    {
      title: 'Total Leads',
      value: stats.totalLeads,
      icon: FaUsers,
      change: '+12%',
      trending: 'up',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: FaDollarSign,
      change: '+23%',
      trending: 'up',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Case Studies',
      value: stats.totalCaseStudies,
      icon: FaFileAlt,
      change: '+5',
      trending: 'up',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Blog Posts',
      value: stats.totalBlogPosts,
      icon: FaChartLine,
      change: '+8',
      trending: 'up',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-navy-dark p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {session.user?.name}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trending === 'up' ? HiTrendingUp : HiTrendingDown;
            
            return (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.trending === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    <TrendIcon className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.title}</div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="cyber-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/admin/leads')}
                className="w-full text-left px-4 py-3 bg-navy-medium hover:bg-navy-medium/80 rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                View Leads
              </button>
              <button
                onClick={() => router.push('/admin/payments')}
                className="w-full text-left px-4 py-3 bg-navy-medium hover:bg-navy-medium/80 rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                View Payments
              </button>
              <button
                onClick={() => router.push('/admin/case-studies')}
                className="w-full text-left px-4 py-3 bg-navy-medium hover:bg-navy-medium/80 rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                Manage Case Studies
              </button>
              <button
                onClick={() => router.push('/admin/blog')}
                className="w-full text-left px-4 py-3 bg-navy-medium hover:bg-navy-medium/80 rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                Manage Blog
              </button>
            </div>
          </div>

          <div className="cyber-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>New lead from contact form</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Payment received - $999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>New blog post published</span>
              </div>
            </div>
          </div>

          <div className="cyber-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Database</span>
                <span className="text-green-400 text-sm font-semibold">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">API</span>
                <span className="text-green-400 text-sm font-semibold">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Payments</span>
                <span className="text-green-400 text-sm font-semibold">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
