import React, { useRef, useState } from 'react';
import { Settings, Upload, Image as ImageIcon, X, FileText, Check } from 'lucide-react';
import { extractTextFromPDF, parseLinkedInData } from '../utils/pdfParser';
import { ProfileData } from '../types';

interface PortfolioControlsProps {
  onUpdateData: (data: Partial<ProfileData>) => void;
  currentData: ProfileData;
}

const PortfolioControls: React.FC<PortfolioControlsProps> = ({ onUpdateData, currentData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const heroImageInputRef = useRef<HTMLInputElement>(null);
  const aboutImageInputRef = useRef<HTMLInputElement>(null);

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsParsing(true);
    try {
      const text = await extractTextFromPDF(file);
      const parsedData = parseLinkedInData(text);
      
      const updates: Partial<ProfileData> = {};
      if (parsedData.email || parsedData.phone || parsedData.linkedin) {
        updates.contact = {
          ...currentData.contact,
          email: parsedData.email || currentData.contact.email,
          phone: parsedData.phone || currentData.contact.phone,
          linkedin: parsedData.linkedin || currentData.contact.linkedin,
        };
      }
      if (parsedData.summary) {
        updates.summary = parsedData.summary;
      }

      onUpdateData(updates);
      alert("PDF Parsed successfully! Contact info and summary updated found.");
    } catch (err) {
      alert("Error parsing PDF. Please ensure it is a valid text-based PDF.");
    } finally {
      setIsParsing(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'hero' | 'about') => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpdateData(type === 'hero' ? { heroImage: url } : { aboutImage: url });
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
        title="Customize Portfolio"
      >
        <Settings size={24} />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Settings size={20} className="text-blue-400" />
                Customize Portfolio
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* PDF Upload Section */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">LinkedIn Integration</h4>
                <div 
                  onClick={() => pdfInputRef.current?.click()}
                  className={`border-2 border-dashed border-gray-700 hover:border-blue-500 hover:bg-blue-500/5 rounded-xl p-6 cursor-pointer transition-all text-center group ${isParsing ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  <div className="mx-auto w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                    {isParsing ? (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                    ) : (
                        <FileText size={24} className="text-blue-400" />
                    )}
                  </div>
                  <p className="text-white font-medium mb-1">
                    {isParsing ? "Parsing PDF..." : "Import LinkedIn PDF"}
                  </p>
                  <p className="text-xs text-gray-500">Supports text-based PDF resumes</p>
                  <input 
                    type="file" 
                    ref={pdfInputRef} 
                    accept=".pdf" 
                    className="hidden" 
                    onChange={handlePdfUpload}
                  />
                </div>
              </div>

              {/* Image Uploads */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Personalize Images</h4>
                
                <div className="grid grid-cols-2 gap-4">
                    {/* Hero Image */}
                    <div 
                        onClick={() => heroImageInputRef.current?.click()}
                        className="glass-card p-4 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-center group"
                    >
                        <div className="mx-auto w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-500/20 transition-colors">
                            <ImageIcon size={20} className="text-purple-400" />
                        </div>
                        <span className="text-sm text-gray-300">Hero Photo</span>
                        <input 
                            type="file" 
                            ref={heroImageInputRef} 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleImageUpload(e, 'hero')}
                        />
                    </div>

                    {/* About Image */}
                    <div 
                        onClick={() => aboutImageInputRef.current?.click()}
                        className="glass-card p-4 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-center group"
                    >
                        <div className="mx-auto w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-500/20 transition-colors">
                            <ImageIcon size={20} className="text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300">About Photo</span>
                        <input 
                            type="file" 
                            ref={aboutImageInputRef} 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleImageUpload(e, 'about')}
                        />
                    </div>
                </div>
              </div>

              <div className="text-xs text-center text-gray-500 pt-4 border-t border-white/5">
                Changes are applied immediately to your view.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioControls;