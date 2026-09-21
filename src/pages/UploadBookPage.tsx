import React, { useState } from 'react';
import { Upload, CheckCircle2, Loader2, BookOpen, Sparkles } from 'lucide-react';
import { useLibrary } from '../context/LibraryContext';
import type { Book } from '../types';

export const UploadBookPage: React.FC = () => {
  const { addUploadedBook, navigateTo } = useLibrary();

  const [step, setStep] = useState<'choose' | 'processing' | 'ready'>('choose');
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [createdBook, setCreatedBook] = useState<Book | null>(null);

  const handleSimulatedUpload = (fileTitle: string) => {
    setUploadedFileName(fileTitle);
    setStep('processing');

    // Simulate clean 3-step progress: Choose Book -> Processing -> Book Ready
    setTimeout(() => {
      const cleanTitle = fileTitle.replace(/\.(pdf|epub)$/i, '').replace(/_/g, ' ');
      const mockBook: Book = {
        id: `upload-${Date.now()}`,
        title: cleanTitle,
        author: 'Uploaded Document',
        category: 'Self Development',
        coverBg: 'linear-gradient(135deg, #8C7355 0%, #4A3E3D 100%)',
        coverTextColor: '#FAF0E6',
        readingTime: '3 hrs 15 mins',
        totalPages: 185,
        publicationYear: '2026',
        isUploaded: true,
        uploadedAt: 'Just now',
        isAudioAvailable: true,
        description: `Your uploaded book "${fileTitle}" is now processed and ready for distraction-free reading and AI summaries.`,
        progress: { chapterIndex: 0, pageNumber: 1, percent: 0, lastRead: 'Just now' },
        chapters: [
          {
            id: 'u-ch1',
            number: 1,
            title: 'Introduction and Key Themes',
            readingTime: '15 mins',
            summary: 'An overview of the core principles presented in this uploaded edition.',
            keyPoints: ['First foundational principle', 'Practical application in daily routine'],
            content: `Welcome to your personal digital copy of ${fileTitle}. Lumina has prepared this text with high-legibility serif typography for maximum reading comfort.\n\nEnjoy an uninterrupted reading session or explore the AI summary features.`
          }
        ],
        summary: {
          quickOverview: `A synthesized overview of your uploaded file "${fileTitle}".`,
          mainIdeas: ['Core idea 1 from your document', 'Practical key takeaway for daily reflection'],
          keyTakeaways: ['Key takeaway synthesized by Lumina AI'],
          importantConcepts: [{ title: 'Main Subject', explanation: 'Primary focus of the document.' }]
        },
        presetQAs: [
          { question: 'What is the main topic of this uploaded book?', answer: 'This book covers personal development and cognitive focus.' }
        ]
      };

      setCreatedBook(mockBook);
      addUploadedBook(mockBook);
      setStep('ready');
    }, 2800);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10 space-y-8 animate-fade-in text-center sm:text-left">
      <div className="space-y-2">
        <span className="editorial-tag text-[#8C7355]">Personal Library</span>
        <h1 className="font-serif text-3xl font-semibold text-[#2C2421]">
          Add a Book
        </h1>
        <p className="text-xs sm:text-sm text-[#5E504A]">
          Upload PDF or EPUB files to enjoy in your quiet reading sanctuary with AI summaries.
        </p>
      </div>

      {/* STEP 1: CHOOSE BOOK DROPZONE */}
      {step === 'choose' && (
        <div className="space-y-6">
          <div 
            onClick={() => handleSimulatedUpload('Principles_of_Quiet_Focus.epub')}
            className="p-10 sm:p-14 border-2 border-dashed border-[#CDB891] rounded-3xl bg-[#FAF0E6] hover:bg-[#FAEBD7] transition-all duration-300 flex flex-col items-center text-center cursor-pointer group shadow-xs"
          >
            <div className="w-16 h-16 rounded-full bg-[#F7E7CE] text-[#8C7355] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Upload size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#2C2421] mb-1">
              Drop your e-book here
            </h3>
            <p className="text-xs text-[#8C7B73] mb-4">
              or click to choose a file from your device
            </p>
            <span className="text-[11px] font-semibold text-[#8C7355] bg-[#F7E7CE] px-3.5 py-1 rounded-full border border-[#CDB891]/40">
              Supported Formats: PDF, EPUB
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleSimulatedUpload('Architecture_of_Mind.pdf')}
              className="px-5 py-2.5 rounded-full bg-[#FAF0E6] border border-[#E8DACD] text-xs font-medium text-[#5E504A] hover:bg-[#F7E7CE] transition-smooth cursor-pointer"
            >
              Try sample file: Architecture_of_Mind.pdf
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: SIMPLE CLEAN PROCESSING (NO TECHNICAL JARGON) */}
      {step === 'processing' && (
        <div className="p-12 rounded-3xl bg-[#FAF0E6] border border-[#E8DACD] text-center space-y-6 shadow-soft animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#F7E7CE] text-[#8C7355] mx-auto flex items-center justify-center">
            <Loader2 size={32} className="animate-spin" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-semibold text-[#2C2421]">
              Preparing "{uploadedFileName}"
            </h3>
            <p className="text-xs text-[#8C7B73]">
              Lumina is setting up your distraction-free reading view...
            </p>
          </div>

          {/* Simple Clean Step Bar */}
          <div className="max-w-xs mx-auto flex items-center justify-between text-xs font-medium text-[#8C7355] pt-4 border-t border-[#E8DACD]">
            <span>Choose Book</span>
            <span className="font-bold underline">Processing</span>
            <span className="text-[#8C7B73]">Book Ready</span>
          </div>
        </div>
      )}

      {/* STEP 3: BOOK READY */}
      {step === 'ready' && createdBook && (
        <div className="p-10 rounded-3xl bg-[#FAF0E6] border border-[#CDB891] text-center space-y-6 shadow-soft animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#FFE4C4] text-[#8C7355] mx-auto flex items-center justify-center">
            <CheckCircle2 size={36} />
          </div>

          <div className="space-y-2">
            <span className="editorial-tag text-[#8C7355]">Success</span>
            <h3 className="font-serif text-2xl font-semibold text-[#2C2421]">
              Book Ready
            </h3>
            <p className="text-xs text-[#5E504A]">
              "{createdBook.title}" is now added to your personal library.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigateTo('reader', createdBook.id)}
              className="px-6 py-3 rounded-full bg-[#2C2421] text-[#FFF8E7] hover:bg-[#4A3E3D] text-xs font-semibold transition-smooth flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <BookOpen size={16} />
              <span>Read Book</span>
            </button>

            <button
              onClick={() => navigateTo('ai-summary', createdBook.id)}
              className="px-6 py-3 rounded-full bg-[#F7E7CE] text-[#8C7355] hover:bg-[#CDB891] hover:text-[#2C2421] text-xs font-semibold transition-smooth flex items-center gap-2 cursor-pointer"
            >
              <Sparkles size={16} />
              <span>View Summary</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
