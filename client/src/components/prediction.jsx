import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Prediction() {
  const [content, setContent] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  const resetForm = () => {
    setContent('');
    setPrediction(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Fake News Detector</h1>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">News Article Analysis</h2>
          <p className="text-xl text-gray-600">Paste your news article content below to analyze its authenticity</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-3">
                News Article Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste the news article content here..."
                rows={12}
                className="w-full px-4 py-3 border border-green-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none text-gray-700 text-sm leading-relaxed bg-white/80 backdrop-blur-sm"
                required
              />
              <div className="mt-2 text-right">
                <span className="text-sm text-emerald-600">{content.length} characters</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={loading || !content.trim()}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  'Analyze Article'
                )}
              </button>
              
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 border border-emerald-300 text-emerald-700 font-semibold rounded-2xl hover:bg-emerald-50 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Clear
              </button>
            </div>
          </form>

          {/* Results */}
          {prediction !== null && (
            <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Analysis Result</h3>
                
                <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold shadow-lg ${
                  prediction === 1 
                    ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white border-2 border-red-300' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-2 border-green-300'
                }`}>
                  {prediction === 1 ? (
                    <>
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      Likely Fake News
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Likely Real News
                    </>
                  )}
                </div>
                
                <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
                  {prediction === 1 
                    ? 'This article shows characteristics commonly found in fake news. Please verify with reliable sources.'
                    : 'This article appears to be legitimate news content based on our analysis.'
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Prediction;