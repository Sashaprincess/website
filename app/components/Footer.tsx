"use client";

import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    // 添加滚动函数
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleContactClick = () => {
        window.location.href = 'mailto:support@chrysal.ai';
    };

    return (
        <>
            {/* CTA Section */}
            <section id="pricing-section" className="py-20 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Unlock the Power of AI for Your E-commerce Business
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Join thousands of merchants who trust our AI platform to grow sales and delight customers.
                    </p>
                    <button
                        onClick={() => scrollToSection('hero-section')}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-white"
                    >
                        Coming Soon
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-12">

                        {/* Logo Section */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="mb-8">
                                <div className="mb-6">
                                    <img
                                        src="design.png"
                                        alt="Chrysal"
                                        className="w-16 h-16 rounded-2xl object-cover"
                                    />
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Copyright © 2025 Chrysal AI Corporation. All rights reserved.
                                </p>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="col-span-1">
                            <h3 className="text-slate-300 font-medium mb-6 text-sm uppercase tracking-wider">
                                Products
                            </h3>
                            <div className="space-y-3">
                                <button onClick={() => scrollToSection('products-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    AI Assistant
                                </button>
                                <button onClick={() => scrollToSection('products-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    InfluenceIQ KOL Finder
                                </button>
                                <button onClick={() => scrollToSection('products-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    SkinAI Analyzer
                                </button>
                                <button onClick={() => scrollToSection('products-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    PriceSmart Optimizer
                                </button>
                                <button onClick={() => scrollToSection('products-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    TrendPulse Radar
                                </button>
                            </div>
                        </div>

                        {/* Solutions */}
                        <div className="col-span-1">
                            <h3 className="text-slate-300 font-medium mb-6 text-sm uppercase tracking-wider">
                                Solutions
                            </h3>
                            <div className="space-y-3">
                                <button onClick={() => scrollToSection('platform-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Sales Boost
                                </button>
                                <button onClick={() => scrollToSection('platform-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Customer Support
                                </button>
                                <button onClick={() => scrollToSection('platform-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Product Research
                                </button>
                                <button onClick={() => scrollToSection('platform-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Marketing Automation
                                </button>
                            </div>
                        </div>

                        {/* About */}
                        <div className="col-span-1">
                            <h3 className="text-slate-300 font-medium mb-6 text-sm uppercase tracking-wider">
                                About
                            </h3>
                            <div className="space-y-3">
                                <button onClick={() => scrollToSection('hero-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Company
                                </button>
                                <button onClick={() => scrollToSection('about-us-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    About Us
                                </button>
                                <button onClick={handleContactClick} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Contact Us
                                </button>
                                <button onClick={() => scrollToSection('about-us-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Careers
                                </button>
                                <button onClick={() => scrollToSection('about-us-section')} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Newsroom
                                </button>
                            </div>
                        </div>

                        {/* Follow */}
                        <div className="col-span-1">
                            <h3 className="text-slate-300 font-medium mb-6 text-sm uppercase tracking-wider">
                                Follow
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="https://linkedin.com/company/chrysal-ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    <Linkedin className="w-4 h-4 mr-2" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/chrysal-ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    <Twitter className="w-4 h-4 mr-2" />
                                    Twitter
                                </a>
                                <button onClick={handleContactClick} className="block text-slate-400 hover:text-white transition-colors text-left text-sm">
                                    Email
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;