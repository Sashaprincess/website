// app/login/page.tsx
"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // 模拟登录/注册处理
            await new Promise(resolve => setTimeout(resolve, 1500));

            if (isLogin) {
                // 登录成功，直接跳转到主页
                router.push('/');
            } else {
                // 注册成功，也直接跳转到主页（移除邮箱验证步骤）
                router.push('/');
            }
        } catch (error) {
            console.error('Auth error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-6">
            <div className="w-full max-w-xs">

                <div className="space-y-12">
                    {/* Logo/Brand */}
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-8 shadow-2xl">
                            <img
                                src="/design.png"
                                alt="Chrysal"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center space-y-6">
                        <h1 className="text-2xl font-light text-white tracking-wide">
                            {isLogin ? 'Welcome' : 'Create Account'}
                        </h1>
                        <p className="text-slate-300 text-base">
                            {isLogin ? 'Log in to harvey-ai to continue to Chrysal' : 'Join Chrysal today'}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field (only for register) */}
                        {!isLogin && (
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="w-full px-0 py-6 bg-transparent border-0 border-b border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-white transition-all duration-300 text-xl font-light"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="space-y-2">
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-white transition-all duration-300 text-lg font-light"
                                placeholder="Email"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative space-y-2">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                className="w-full px-0 py-3 pr-12 bg-transparent border-0 border-b border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-white transition-all duration-300 text-xl font-light"
                                placeholder="Password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-0 top-3 text-slate-500 hover:text-white transition-colors duration-300"
                            >
                                {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Confirm Password (only for register) */}
                        {!isLogin && (
                            <div className="space-y-2">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-white transition-all duration-300 text-xl font-light"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-white text-black py-3 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:opacity-50 shadow-2xl hover:shadow-white/20 mt-12"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-3">
                                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                    <span>Processing...</span>
                                </div>
                            ) : (
                                isLogin ? 'Sign In' : 'Create Account'
                            )}
                        </button>

                        {/* Forgot Password */}
                        {isLogin && (
                            <div className="text-center pt-2">
                                <button
                                    type="button"
                                    className="text-slate-300 hover:text-white transition-colors duration-300 text-lg"
                                >
                                    Forgot password?
                                </button>
                            </div>
                        )}
                    </form>

                    {/* Switch Mode */}
                    <div className="text-center pt-1 space-y-0">
                        <p className="text-slate-300 text-lg">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-white hover:text-slate-300 font-medium text-lg transition-colors duration-300 underline underline-offset-4"
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}