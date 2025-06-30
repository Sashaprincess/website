"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const router = useRouter();

    const navigationItems = {
        Product: [
            { name: 'AI Assistant', scrollTo: 'products-section' },
            { name: 'InfluenceIQ KOL Finder', scrollTo: 'products-section' },
            { name: 'SkinAI Analyzer', scrollTo: 'products-section' },
            { name: 'PriceSmart Optimizer', scrollTo: 'products-section' },
            { name: 'TrendPulse Radar', scrollTo: 'products-section' }
        ],
        Solutions: [
            { name: 'Sales Boost', scrollTo: 'sales-boost-section' },
            { name: 'Customer Support', scrollTo: 'customer-support-section' },
            { name: 'Product Research', scrollTo: 'product-research-section' },
            { name: 'Marketing Automation', scrollTo: 'marketing-automation-section' }
        ],
        About: [
            { name: 'Company', scrollTo: 'hero-section' },
            { name: 'About Us', scrollTo: 'about-us-section' },
            { name: 'Contact Us', action: 'mailto' }
        ],
    };

    const handleDropdownToggle = (item) => {
        setActiveDropdown(activeDropdown === item ? null : item);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setActiveDropdown(null);
        setIsOpen(false);
    };

    const handleContactClick = () => {
        window.location.href = 'mailto:support@chrysal.ai';
        setActiveDropdown(null);
        setIsOpen(false);
    };

    const handleItemClick = (item) => {
        if (item.action === 'mailto') {
            handleContactClick();
        } else {
            scrollToSection(item.scrollTo);
        }
    };

    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <nav className="bg-transparent relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center cursor-pointer" onClick={scrollToHome}>
                            <span className="text-4xl font-serif text-white/80 hover:text-white">Chrysal</span>
                        </div>

                        {/* Centered Desktop Navigation */}
                        <div className="hidden md:flex items-center justify-center flex-1">
                            <div className="flex items-center space-x-8">
                                {Object.keys(navigationItems).map((item) => (
                                    <div
                                        key={item}
                                        className="relative"
                                    >
                                        <button
                                            onClick={() => handleDropdownToggle(item)}
                                            className="text-white/80 hover:text-white"
                                        >
                                            {item}
                                        </button>

                                        {/* Dropdown Menu */}
                                        {activeDropdown === item && (
                                            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                                {navigationItems[item].map((subItem, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleItemClick(subItem)}
                                                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side button */}
                        <div className="hidden md:flex">
                            <button
                                onClick={() => router.push('/login')}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                Login
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white/80 hover:text-white focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                                {Object.entries(navigationItems).map(([category, items]) => (
                                    <div key={category}>
                                        <button
                                            onClick={() => handleDropdownToggle(category)}
                                            className="w-full text-left flex items-center justify-between px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                                        >
                                            {category}
                                            <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === category ? 'rotate-180' : ''}`} />
                                        </button>
                                        {activeDropdown === category && (
                                            <div className="pl-6 space-y-1">
                                                {items.map((item, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleItemClick(item)}
                                                        className="w-full text-left block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                                                    >
                                                        {item.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={() => router.push('/login')}
                                    className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 mt-4"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;