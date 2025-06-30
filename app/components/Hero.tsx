"use client";

import React from 'react';
import { Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                        <Zap className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-sm text-blue-300">Next-Generation AI Technology</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        Professional
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Class AI
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Domain-specific AI solutions for e-commerce, digital businesses, and entrepreneurs seeking intelligent automation and growth


                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                            Coming Soon
                        </button>
                        <button className="border border-blue-500/50 hover:border-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-500/10">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/2 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </section>
    );
};

export default Hero;