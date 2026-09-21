import React from 'react';
import { Heart } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const FavoritesPage: React.FC = () => {
  const { books, favoriteIds, toggleFavorite, navigateTo } = useLibrary();

  const favoriteBooks = books.filter(b => favoriteIds.includes(b.id));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <span className="editorial-tag text-[#8C7355]">Curated Sanctuary</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2421]">
          Your Favorites
        </h1>
        <p className="text-xs sm:text-sm text-[#5E504A]">
          Books and wisdom saved close to your heart.
        </p>
      </div>

      {favoriteBooks.length === 0 ? (
        <div className="text-center py-20 bg-[#FAF0E6] rounded-3xl border border-[#E8DACD] space-y-3">
          <Heart size={40} className="text-[#8C7B73] mx-auto opacity-50" />
          <h3 className="font-serif text-xl font-semibold text-[#2C2421]">No favorites yet</h3>
          <p className="text-xs text-[#5E504A]">Click the heart icon on any book to save it to your favorites.</p>
          <button
            onClick={() => navigateTo('discover')}
            className="px-5 py-2.5 rounded-full bg-[#8C7355] text-[#FFF8E7] text-xs font-semibold hover:bg-[#755F43] transition-smooth cursor-pointer"
          >
            Explore Books
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteBooks.map((book) => (
            <div
              key={book.id}
              className="group flex flex-col justify-between p-4 rounded-2xl bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] transition-all duration-300 relative"
            >
              <div>
                <div
                  onClick={() => navigateTo('book-detail', book.id)}
                  className="w-full h-48 rounded-xl mb-4 shadow-sm flex flex-col justify-between p-4 text-center cursor-pointer group-hover:scale-[1.01] transition-transform border border-black/5"
                  style={{ background: book.coverBg }}
                >
                  <span className="text-[9px] font-semibold uppercase text-[#CDB891]">
                    {book.category}
                  </span>
                  <h3 className="font-serif font-bold text-base leading-tight line-clamp-2" style={{ color: book.coverTextColor || '#FAF0E6' }}>
                    {book.title}
                  </h3>
                  <span className="text-[10px] font-serif italic text-white/70">
                    {book.author}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 
                    onClick={() => navigateTo('book-detail', book.id)}
                    className="font-serif text-base font-semibold text-[#2C2421] hover:text-[#8C7355] transition-smooth cursor-pointer truncate"
                  >
                    {book.title}
                  </h3>
                  <p className="text-xs text-[#8C7B73]">by {book.author}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DACD]/70 flex items-center justify-between text-xs">
                <button
                  onClick={() => toggleFavorite(book.id)}
                  className="p-1.5 rounded-full text-rose-700 hover:bg-[#FFE4C4] transition-smooth cursor-pointer"
                  title="Remove from Favorites"
                >
                  <Heart size={16} fill="currentColor" />
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
          ))}
        </div>
      )}
    </div>
  );
};
