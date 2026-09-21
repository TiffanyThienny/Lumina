import React, { useState } from 'react';
import { Search, Sparkles, BookOpen, Heart, Clock, Volume2 } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';

export const DiscoverPage: React.FC = () => {
  const { books, navigateTo, favoriteIds, toggleFavorite, searchQuery, setSearchQuery } = useLibrary();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyAudio, setOnlyAudio] = useState<boolean>(false);

  const categories: string[] = ['All', 'Fiction', 'Self Development', 'Technology', 'Science', 'Business', 'Education', 'Psychology', 'History'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesAudio = !onlyAudio || book.isAudioAvailable;

    return matchesSearch && matchesCategory && matchesAudio;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="space-y-2">
        <span className="editorial-tag text-[#8C7355]">Curated Collection</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2421]">
          Discover Books
        </h1>
        <p className="text-sm text-[#5E504A]">
          Explore timeless classics, cognitive science, Stoic philosophy, and human history.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7B73]" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, authors, or topics..."
              className="w-full bg-[#FAF0E6] text-[#2C2421] placeholder-[#8C7B73] text-sm rounded-xl pl-10 pr-4 py-2.5 border border-[#E8DACD] focus:outline-none focus:border-[#CDB891] transition-smooth"
            />
          </div>

          {/* Toggle Audio Filter */}
          <button
            onClick={() => setOnlyAudio(!onlyAudio)}
            className={`px-4 py-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-smooth cursor-pointer ${
              onlyAudio 
                ? 'bg-[#8C7355] text-[#FFF8E7] border-[#8C7355]' 
                : 'bg-[#FAF0E6] text-[#5E504A] border-[#E8DACD] hover:border-[#CDB891]'
            }`}
          >
            <Volume2 size={15} />
            <span>Audio Available</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-smooth shrink-0 cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#2C2421] text-[#FFF8E7] shadow-xs' 
                  : 'bg-[#FAF0E6] text-[#5E504A] border border-[#E8DACD] hover:bg-[#F7E7CE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <div className="text-center py-16 bg-[#FAF0E6] rounded-3xl border border-[#E8DACD]">
          <p className="font-serif text-lg text-[#5E504A] mb-2">No books found</p>
          <p className="text-xs text-[#8C7B73]">Try searching for another author or clear filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => {
            const isFav = favoriteIds.includes(book.id);
            return (
              <div
                key={book.id}
                className="group relative flex flex-col justify-between p-4 rounded-2xl bg-[#FAF0E6] border border-[#E8DACD] hover:border-[#CDB891] hover:shadow-soft transition-all duration-300"
              >
                {/* Favorite Icon Button */}
                <button
                  onClick={() => toggleFavorite(book.id)}
                  className={`absolute top-6 right-6 z-10 p-2 rounded-full backdrop-blur-md transition-smooth cursor-pointer ${
                    isFav ? 'bg-[#FFE4C4] text-[#8C7355]' : 'bg-black/20 text-white/80 hover:text-white'
                  }`}
                  title={isFav ? 'Remove Favorite' : 'Add Favorite'}
                >
                  <Heart size={15} fill={isFav ? 'currentColor' : 'none'} />
                </button>

                <div>
                  {/* Book Cover Container */}
                  <div
                    onClick={() => navigateTo('book-detail', book.id)}
                    className="w-full h-52 rounded-xl mb-4 shadow-sm flex flex-col justify-between p-5 text-center cursor-pointer group-hover:scale-[1.01] transition-transform border border-black/5"
                    style={{ background: book.coverBg }}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CDB891]">
                      {book.category}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-base leading-tight line-clamp-2" style={{ color: book.coverTextColor || '#FAF0E6' }}>
                        {book.title}
                      </h3>
                      <p className="text-xs opacity-75 font-serif italic" style={{ color: book.coverTextColor || '#FAF0E6' }}>
                        {book.author}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-white/60">
                      <span>{book.totalPages} pages</span>
                      <span>{book.publicationYear}</span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1">
                    <h3 
                      onClick={() => navigateTo('book-detail', book.id)}
                      className="font-serif text-base font-semibold text-[#2C2421] hover:text-[#8C7355] transition-smooth cursor-pointer line-clamp-1"
                    >
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#8C7B73]">by {book.author}</p>
                    <p className="text-xs text-[#5E504A] line-clamp-2 mt-1 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-4 border-t border-[#E8DACD]/70 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#8C7B73] flex items-center gap-1 font-medium">
                    <Clock size={13} />
                    {book.readingTime}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigateTo('ai-summary', book.id)}
                      className="px-3 py-1.5 rounded-lg bg-[#F7E7CE] text-[#8C7355] font-medium text-[11px] hover:bg-[#CDB891] hover:text-[#2C2421] transition-smooth flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles size={13} />
                      <span>Summary</span>
                    </button>

                    <button
                      onClick={() => navigateTo('reader', book.id)}
                      className="px-3 py-1.5 rounded-lg bg-[#2C2421] text-[#FFF8E7] font-medium text-[11px] hover:bg-[#4A3E3D] transition-smooth flex items-center gap-1 cursor-pointer"
                    >
                      <BookOpen size={13} />
                      <span>Read</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
