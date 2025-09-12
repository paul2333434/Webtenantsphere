'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function InvitationPage() {
  const params = useParams();
  const id = params.id as string;
  const [status, setStatus] = useState('Processing your invitation...');
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    if (!id) return;

    const deepLink = `tenantsphere://invitation/${id}`;
    
    // Detect if mobile
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      setStatus('Opening TenantSphere app...');
      
      const timer = setTimeout(() => {
        attemptAppOpen(deepLink);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setStatus('Please open this link on your mobile device or download the app:');
      setShowActions(true);
    }
  }, [id]);

  const attemptAppOpen = (deepLink: string) => {
    const timeout = setTimeout(() => {
      setStatus('Choose how to continue:');
      setShowActions(true);
    }, 2000);
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timeout);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Attempt to open the app
    window.location.href = deepLink;
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timeout);
    };
  };

  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="max-w-md w-full bg-white rounded-xl p-10 text-center shadow-lg">
        <div className="text-2xl font-bold text-purple-600 mb-5">
          🏠 TenantSphere
        </div>
        
        <h1 className="text-xl font-semibold mb-6 text-gray-900">Tenant Invitation</h1>
        
        <div className="mb-6 text-gray-700">
          {status}
        </div>
        
        {showActions && (
          <div className="space-y-3">
            <a
              href={`tenantsphere://invitation/${id}`}
              className="block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Open TenantSphere App
            </a>
            
            <a
              href="https://play.google.com/store/search?q=tenantsphere"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Download for Android
            </a>
            
            <a
              href="https://apps.apple.com/search?term=tenantsphere"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Download for iOS
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
