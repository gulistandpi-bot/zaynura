/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import ChatInterface from './components/ChatInterface';
import ResourceLibrary from './components/ResourceLibrary';
import LearningComponents from './components/LearningComponents';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [initialPrompt, setInitialPrompt] = useState<string | null>(null);

  const handleCardAction = (tab: string, prompt?: string) => {
    if (prompt) {
      setInitialPrompt(prompt);
    }
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <HomeView onCardClick={handleCardAction} />;
      case 'chat':
        return <ChatInterface initialPrompt={initialPrompt} clearInitialPrompt={() => setInitialPrompt(null)} />;
      case 'resources':
        return <ResourceLibrary onCardClick={handleCardAction} />;
      case 'competence':
        return <LearningComponents />;
      default:
        return <HomeView onCardClick={handleCardAction} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 ml-64 min-h-screen">
        <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center px-8 sticky top-0 z-40">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>RaqamliPed</span>
            <span>/</span>
            <span className="text-slate-800 font-medium capitalize">
              {activeTab === 'dashboard' ? 'Bosh sahifa' : 
               activeTab === 'chat' ? 'AI Yordamchi' : 
               activeTab === 'resources' ? 'Resurslar' : 'Kompetensiyalar'}
            </span>
          </div>
        </header>
        <div className="animate-in fade-in duration-500">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

