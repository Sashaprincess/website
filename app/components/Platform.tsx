"use client";

import React, { useState, useEffect } from 'react';
import { Brain, Shield, Rocket } from 'lucide-react';

const Platform = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [displayedInput, setDisplayedInput] = useState('');
    const [displayedOutput, setDisplayedOutput] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    const demoScript = [
        {
            input: "I need an AI customer service system for handling inquiries",
            output: "Recommended Solution:\n\n• Intelligent chat system with NLP\n• 24/7 automated responses\n• Seamless human handoff\n• Multi-channel integration\n\nExpected: 70% reduction in manual workload"
        }
    ];

    useEffect(() => {
        const script = demoScript[0];

        // 重置演示
        const resetDemo = () => {
            setCurrentStep(0);
            setDisplayedInput('');
            setDisplayedOutput('');
            setShowCursor(true);
        };

        // 打字机效果 - 输入
        const typeInput = () => {
            setCurrentStep(1);
            let i = 0;
            const inputInterval = setInterval(() => {
                if (i <= script.input.length) {
                    setDisplayedInput(script.input.slice(0, i));
                    i++;
                } else {
                    clearInterval(inputInterval);
                    setTimeout(() => {
                        setShowCursor(false);
                        setTimeout(typeOutput, 1000);
                    }, 500);
                }
            }, 50);
        };

        // 打字机效果 - 输出
        const typeOutput = () => {
            setCurrentStep(2);
            let i = 0;
            const outputInterval = setInterval(() => {
                if (i <= script.output.length) {
                    setDisplayedOutput(script.output.slice(0, i));
                    i++;
                } else {
                    clearInterval(outputInterval);
                    setTimeout(() => {
                        setTimeout(resetDemo, 2000);
                    }, 2000);
                }
            }, 30);
        };

        // 开始演示循环
        const startDemo = () => {
            setTimeout(typeInput, 1000);
        };

        startDemo();

        // 设置循环
        const demoLoop = setInterval(() => {
            resetDemo();
            setTimeout(startDemo, 500);
        }, 12000);

        return () => {
            clearInterval(demoLoop);
        };
    }, []);

    return (
        <section id="platform-section" className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Augment All of Your Work on
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            One Integrated, Secure Platform
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Fixed Size Animated Demo */}
                    <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 h-[380px] flex flex-col">
                            {/* Input Section */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-slate-300 mb-3">
                                    Describe your business needs
                                </label>
                                <div className="w-full p-4 bg-slate-700/50 border border-slate-600/30 rounded-lg h-[70px] relative overflow-hidden">
                                    <span className="text-slate-200 text-sm leading-relaxed">
                                        {displayedInput}
                                        {currentStep === 1 && showCursor && (
                                            <span className="animate-pulse text-blue-400">|</span>
                                        )}
                                    </span>
                                </div>
                            </div>

                            {/* Generate Button */}
                            <button
                                className={`w-full py-3 px-4 rounded-lg mb-4 transition-all duration-300 text-sm font-medium ${currentStep >= 2
                                        ? 'bg-emerald-500 text-white'
                                        : currentStep === 1 && displayedInput.length > 10
                                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                                            : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                                    }`}
                            >
                                {currentStep >= 2 ? '✓ Analysis Complete' : 'Generate AI Solution'}
                            </button>

                            {/* Output Section - Fixed Height */}
                            <div className="flex-1 border-t border-slate-600/30 pt-4 overflow-hidden">
                                {currentStep >= 2 && (
                                    <>
                                        <div className="flex items-center space-x-2 text-blue-400 mb-3">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-medium">AI Analysis Complete</span>
                                        </div>
                                        <div className="text-sm text-slate-300">
                                            <div className="font-semibold mb-3 text-slate-200">Your Custom Solution:</div>
                                            <div className="bg-slate-700/40 border border-slate-600/20 rounded-lg p-4 h-[140px] overflow-hidden">
                                                <div className="text-xs leading-relaxed text-slate-300 whitespace-pre-line">
                                                    {displayedOutput}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-right">
                                AI Assistant
                                <br />
                                <span className="text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Tailored
                                    <br />
                                    to Your
                                </span>
                            </h3>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Brain className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Intelligent Analysis</h4>
                                    <p className="text-slate-400">Advanced AI that understands context and provides precise insights for your industry.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Enterprise Security</h4>
                                    <p className="text-slate-400">Bank-level security with end-to-end encryption and compliance standards.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Seamless Integration</h4>
                                    <p className="text-slate-400">Connects with your existing tools and workflows without disruption.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Platform;