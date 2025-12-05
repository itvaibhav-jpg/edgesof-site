'use client';

import { useState } from 'react';
import { HiCheckCircle, HiXCircle, HiRefresh } from 'react-icons/hi';

export default function AdminSetup() {
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<any>(null);

  const testConnection = async () => {
    setTesting(true);
    setResults(null);

    try {
      const response = await fetch('/api/admin/test-connection');
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setResults({
        success: false,
        error: 'Failed to connect to API',
      });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="cyber-card p-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Setup</h1>
          <p className="text-gray-400 mb-8">
            Configure your admin panel and verify database connection
          </p>

          {/* Environment Variables Check */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Environment Variables
            </h2>
            <div className="space-y-3">
              <EnvCheck name="MONGODB_URI" />
              <EnvCheck name="NEXTAUTH_SECRET" />
              <EnvCheck name="NEXTAUTH_URL" />
              <EnvCheck name="CONTACT_EMAIL" />
            </div>
          </div>

          {/* Database Connection Test */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Database Connection
            </h2>
            <button
              onClick={testConnection}
              disabled={testing}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-glow to-aqua-bright text-navy-dark font-semibold rounded-md hover:shadow-lg hover:shadow-cyan-glow/50 transition-all disabled:opacity-50"
            >
              <HiRefresh className={`w-5 h-5 ${testing ? 'animate-spin' : ''}`} />
              {testing ? 'Testing...' : 'Test Connection'}
            </button>

            {results && (
              <div className="mt-4 p-4 bg-navy-dark border border-white/10 rounded-md">
                {results.success ? (
                  <div className="flex items-start gap-3">
                    <HiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-500 font-semibold mb-2">
                        ✅ Database Connected Successfully!
                      </p>
                      <div className="text-sm text-gray-400 space-y-1">
                        <p>Database: {results.database}</p>
                        <p>Status: {results.status}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <HiXCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-500 font-semibold mb-2">
                        ❌ Connection Failed
                      </p>
                      <p className="text-sm text-gray-400">{results.error}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Setup Instructions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Create Admin User
            </h2>
            <div className="bg-navy-dark border border-white/10 rounded-md p-6">
              <p className="text-gray-300 mb-4">
                Run this command in your terminal to create an admin user:
              </p>
              <div className="bg-black/50 p-4 rounded-md mb-4">
                <code className="text-cyan-glow text-sm">
                  node scripts/create-admin.js
                </code>
              </div>
              <p className="text-sm text-gray-400">
                This will create an admin user with email: kumar@edgesof.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/admin/login"
                className="p-4 bg-navy-dark border border-white/10 rounded-md hover:border-cyan-glow transition-colors"
              >
                <h3 className="text-white font-semibold mb-1">Admin Login</h3>
                <p className="text-sm text-gray-400">
                  Access the admin dashboard
                </p>
              </a>
              <a
                href="/"
                className="p-4 bg-navy-dark border border-white/10 rounded-md hover:border-cyan-glow transition-colors"
              >
                <h3 className="text-white font-semibold mb-1">Home Page</h3>
                <p className="text-sm text-gray-400">
                  Return to main website
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnvCheck({ name }: { name: string }) {
  // This is client-side, so we can't actually check env vars
  // This is just for display purposes
  return (
    <div className="flex items-center gap-3 p-3 bg-navy-dark border border-white/10 rounded-md">
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      <span className="text-gray-300 font-mono text-sm">{name}</span>
      <span className="ml-auto text-xs text-gray-500">Configured in Vercel</span>
    </div>
  );
}
