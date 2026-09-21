import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Heart, 
  MoreVertical, 
  Trash2, 
  Plus 
} from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import { ConfirmationModal } from '../components/ConfirmationModal';

export const MyLibraryPage: React.FC = () => {
  const { 
    books, 
    navigateTo, 
    favoriteIds, 
    toggleFavorite, 
    savedSummaryIds, 
    removeUploadedBook 
  } = useLibrary();

  const [activeTab, setActiveTab] = useState<'all' | 'uploaded' | 'saved' | 'favorites'>('all');
  const [openMenuBookId, setOpenMenuBookId] = useState<string | null>(null);
  const [deleteModalBookId, setDeleteModalBookId] = useState<string | null>(null);

  const displayedBooks = books.filter(book => {
    if (activeTab === 'uploaded') return book.isUploaded;
    if (activeTab === 'saved') return savedSummaryIds.includes(book.id);
    if (activeTab === 'favorites') return favoriteIds.includes(book.id);
    return true; // 'all'
  });

  const handleDeleteConfirm = () => {
    if (deleteModalBookId) {
      removeUploadedBook(deleteModalBookId);
      setDeleteModalBookId(null);
      setOpenMenuBookId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="editorial-tag text-[#8C7355]">Personal Collection</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2421]">
            My Library
          </h1>
        </div>

        <button
          onClick={() => navigateTo('upload')}
          className="px-5 py-2.5 rounded-full bg-[#8C7355] text-[#FFF8E7] hover:bg-[#755F43] text-xs font-semibold transition-smooth flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Plus size={16} />
          <span>Add New Book</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-[#E8DACD] gap-6">
        {(['all', 'uploaded', 'saved', 'favorites'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-xs sm:text-sm font-medium uppercase tracking-wider transition-smooth border-b-2 cursor-pointer ${
              activeTab === tab 
                ? 'border-[#8C7355] text-[#2C2421] font-semibold' 
                : 'border-transparent text-[#8C7B73] hover:text-[#2C2421]'
            }`}
          >
            {tab === 'all' && `All Books (${books.length})`}
            {tab === 'uploaded' && `Uploaded (${books.filter(b => b.isUploaded).length})`}
            {tab === 'saved' && `Saved Summaries (${savedSummaryIds.length})`}
            {tab === 'favorites' && `Favorites (${favoriteIds.length})`}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      {displayedBooks.length === 0 ? (
        <div className="text-center py-16 bg-[#FAF0E6] rounded-3xl border border-[#E8DACD] space-y-3">
          <BookOpen size={36} className="text-[#8C7B73] mx-auto" />
          <p className="font-serif text-lg text-[#5E504A]">No books in this view</p>
          <button
            onClick={() => navigateTo('discover')}
            className="text-xs font-semibold text-[#8C7355] underline cursor-pointer"
          >
            Explore & add books
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedBooks.map((book) => {
            const isFav = favoriteIds.includes(book.id);
            const isMenuOpen = openMenuBookId === book.id;

            return (
              <div
                key={book.id}
                className="group relative flex flex-col justify-between p-4 rounded-2xl bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] transition-all duration-300"
              >
                <div>
                  {/* Book Cover Thumbnail & Top Badge */}
                  <div
                    onClick={() => navigateTo('reader', book.id)}
                    className="w-full h-48 rounded-xl mb-4 shadow-sm flex flex-col justify-between p-4 text-center cursor-pointer group-hover:scale-[1.01] transition-transform border border-black/5 relative"
                    style={{ background: book.coverBg }}
                  >
                    <div className="flex justify-between items-center text-[9px] uppercase font-semibold text-[#CDB891]">
                      <span>{book.category}</span>
                      {book.isUploaded && (
                        <span className="bg-[#2C2421] text-[#FFF8E7] px-2 py-0.5 rounded-full">
                          Uploaded
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-base leading-tight line-clamp-2" style={{ color: book.coverTextColor || '#FAF0E6' }}>
                      {book.title}
                    </h3>

                    <span className="text-[10px] font-serif italic text-white/70">
                      {book.author}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 
                        onClick={() => navigateTo('book-detail', book.id)}
                        className="font-serif text-base font-semibold text-[#2C2421] hover:text-[#8C7355] transition-smooth cursor-pointer truncate flex-1"
                      >
                        {book.title}
                      </h3>

                      {/* 3-Dot Menu for Uploaded Books */}
                      {book.isUploaded && (
                        <div className="relative">
                          <button
                            onClick={() => setOpenMenuBookId(isMenuOpen ? null : book.id)}
                            className="p-1 text-[#8C7B73] hover:text-[#2C2421] rounded-full transition-smooth cursor-pointer"
                          >
                            <MoreVertical size={16} />
                          </button>

                          {isMenuOpen && (
                            <div className="absolute right-0 top-6 w-40 bg-[#FFF8E7] border border-[#E8DACD] rounded-xl shadow-xl z-20 py-1 text-xs">
                              <button
                                onClick={() => navigateTo('reader', book.id)}
                                className="w-full px-3 py-2 text-left hover:bg-[#F7E7CE] flex items-center gap-2 text-[#2C2421]"
                              >
                                <BookOpen size={14} />
                                <span>Open Book</span>
                              </button>
                              <button
                                onClick={() => navigateTo('ai-summary', book.id)}
                                className="w-full px-3 py-2 text-left hover:bg-[#F7E7CE] flex items-center gap-2 text-[#2C2421]"
                              >
                                <Sparkles size={14} />
                                <span>View Summary</span>
                              </button>
                              <button
                                onClick={() => setDeleteModalBookId(book.id)}
                                className="w-full px-3 py-2 text-left hover:bg-[#FFE4C4] flex items-center gap-2 text-rose-700"
                              >
                                <Trash2 size={14} />
                                <span>Remove Book</span>
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-[#8C7B73]">by {book.author}</p>
                  </div>

                  {/* Reading Progress */}
                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-[11px] text-[#8C7B73]">
                      <span>Progress</span>
                      <span>{book.progress.percent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#F7E7CE] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#8C7355] rounded-full"
                        style={{ width: `${book.progress.percent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-4 border-t border-[#E8DACD]/70 flex items-center justify-between text-xs">
                  <button
                    onClick={() => toggleFavorite(book.id)}
                    className={`p-1.5 rounded-full transition-smooth cursor-pointer ${
                      isFav ? 'text-[#8C7355]' : 'text-[#8C7B73] hover:text-[#8C7355]'
                    }`}
                  >
                    <Heart size={16} fill={isFav ? 'currentColor' : 'none'} />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigateTo('ai-summary', book.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#F7E7CE] text-[#8C7355] font-medium text-[11px] hover:bg-[#CDB891] hover:text-[#2C2421] transition-smooth"
                    >
                      Summary
                    </button>
                    <button
                      onClick={() => navigateTo('reader', book.id)}
                      className="px-3 py-1.5 rounded-lg bg-[#2C2421] text-[#FFF8E7] font-medium text-[11px] hover:bg-[#4A3E3D] transition-smooth"
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* REMOVAL CONFIRMATION MODAL */}
      <ConfirmationModal
        isOpen={!!deleteModalBookId}
        title="Remove Uploaded Book?"
        message="Are you sure you want to remove this book from your personal library? This action cannot be undone."
        confirmText="Remove Book"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteModalBookId(null)}
      />
    </div>
  );
};
