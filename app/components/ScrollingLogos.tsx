"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const ScrollingProducts = () => {
    const products = [
        { id: "AA", name: "AI Assistant" },
        { id: "JS", name: "InfluenceIQ KOL Finder" },
        { id: "FL", name: "SkinAI Analyzer" },
        { id: "DV", name: "PriceSmart Dynamic Optimizer" },
        { id: "SS", name: "TrendPulse Market Radar" },
        // 重复一遍以确保无缝循环
        { id: "AA", name: "AI Assistant" },
        { id: "JS", name: "InfluenceIQ KOL Finder" },
        { id: "FL", name: "SkinAI Analyzer" },
    ];

    return (
        <section id="products-section" className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Built for the Future of E-commerce
                    </h2>
                </div>

                {/* 滚动容器 */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-x space-x-12 mb-12">
                        {products.map((product, index) => (
                            <div
                                key={`${product.id}-${index}`}
                                className="flex items-center space-x-4 min-w-[300px] hover:opacity-80 transition-opacity duration-300"
                            >
                                <div className="w-14 h-14 bg-slate-600/40 rounded-lg flex items-center justify-center text-slate-300 font-bold text-base flex-shrink-0">
                                    {product.id}
                                </div>
                                <div className="text-slate-300 font-medium text-lg whitespace-nowrap overflow-hidden">
                                    {product.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* See More 按钮 */}
                <div className="text-center">
                    <button className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg font-medium">
                        <span>See More Products</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-x {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-300px * 5 - 3rem * 5));
                    }
                }
                
                .animate-scroll-x {
                    animation: scroll-x 20s linear infinite;
                }
                
                .animate-scroll-x:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default ScrollingProducts;