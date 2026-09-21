import React from 'react';
import { LibraryProvider, useLibrary } from './context/LibraryContext';
import { Sidebar } from './components/Sidebar';
import { BottomNavigation } from './components/BottomNavigation';
import { Header } from './components/Header';
import { MiniAudioPlayer } from './components/MiniAudioPlayer';
import { AudioPlayerModal } from './components/AudioPlayerModal';

import { HomePage } from './pages/HomePage';
import { DiscoverPage } from './pages/DiscoverPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { EBookReaderPage } from './pages/EBookReaderPage';
import { AISummaryPage } from './pages/AISummaryPage';
import { ChapterSummaryPage } from './pages/ChapterSummaryPage';
import { AIBookQAPage } from './pages/AIBookQAPage';
import { UploadBookPage } from './pages/UploadBookPage';
import { MyLibraryPage } from './pages/MyLibraryPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ReadingHistoryPage } from './pages/ReadingHistoryPage';
import { NotesHighlightsPage } from './pages/NotesHighlightsPage';
import { ProfileSettingsPage } from './pages/ProfileSettingsPage';

const AppContent: React.FC = () => {
  const { currentView } = useLibrary();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'discover':
        return <DiscoverPage />;
      case 'book-detail':
        return <BookDetailPage />;
      case 'reader':
        return <EBookReaderPage />;
      case 'ai-summary':
        return <AISummaryPage />;
      case 'chapter-summary':
        return <ChapterSummaryPage />;
      case 'ai-qa':
        return <AIBookQAPage />;
      case 'upload':
        return <UploadBookPage />;
      case 'my-library':
        return <MyLibraryPage />;
      case 'favorites':
        return <FavoritesPage />;
      case 'history':
        return <ReadingHistoryPage />;
      case 'notes-highlights':
        return <NotesHighlightsPage />;
      case 'settings':
        return <ProfileSettingsPage />;
      default:
        return <HomePage />;
    }
  };

  const isReaderView = currentView === 'reader';

  return (
    <div className="flex min-h-screen bg-[#FFF8E7] text-[#2C2421]">
      {/* Desktop Left Sidebar (hidden in reader view if needed, or styled) */}
      {!isReaderView && <Sidebar />}

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {!isReaderView && <Header />}

        <main className={`flex-1 ${isReaderView ? '' : 'pb-24 md:pb-12'}`}>
          {renderView()}
        </main>

        <MiniAudioPlayer />
        <AudioPlayerModal />
        {!isReaderView && <BottomNavigation />}
      </div>
    </div>
  );
};

export function App() {
  return (
    <LibraryProvider>
      <AppContent />
    </LibraryProvider>
  );
}

export default App;
