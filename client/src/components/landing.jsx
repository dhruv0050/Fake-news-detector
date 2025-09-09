import React from 'react'
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate  = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 p-12">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              Fake News <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Detector</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Leverage the power of machine learning to detect misinformation and verify the authenticity of news articles with our advanced AI-powered tool.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Fast Analysis</h3>
              <p className="text-slate-600 text-sm">Get instant results in seconds</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">High Accuracy</h3>
              <p className="text-slate-600 text-sm">ML-powered detection system</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/predict')}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-teal-300"
          >
            Start Analyzing News →
          </button>
        </div>
      </div>
    </div>
  )
}
export default Landing;