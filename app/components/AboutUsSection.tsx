"use client";

import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const AboutUsSection = () => {
    const teamMembers = [
        {
            name: "Shin Cao",
            title: "CEO & Co-Founder",
            description: "Past: Litigation at O'Melveny",
            image: "/team/Shin.jpeg", // 确保这个路径与你的文件名完全匹配
            linkedin: "https://www.linkedin.com/in/shin-cao/",
            twitter: "https://twitter.com/winston"
        },
        {
            name: "Jessica Yan",
            title: "CPO & Co-Founder",
            description: "Past: Senior Engineer at Google",
            image: "/team/jessie.jpg", // 确保这个路径与你的文件名完全匹配
            linkedin: "https://www.linkedin.com/in/jie-yan-5a0268290/",
            twitter: "https://twitter.com/jessicayan"
        },
        {
            name: "Iris Zhou",
            title: "CTO & Co-Founder",
            description: "Past: Product Manager at Meta",
            image: "/team/Iris.jpeg", // 确保这个路径与你的文件名完全匹配
            linkedin: "https://www.linkedin.com/in/ziqi-zhou-115a90290/",
            twitter: "https://twitter.com/marcusr"
        }
    ];

    return (
        <section id="about-us-section" className="py-32 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        Experienced leaders from top tech companies and legal firms, united by a vision to transform e-commerce with AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group">
                            {/* 头像区域 - 高级深色风格 */}
                            <div className="relative mb-8 overflow-hidden rounded-2xl">
                                <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative">
                                    {/* 渐变叠加层 */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>

                                    {/* 实际图片 */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center"
                                        onError={(e) => {
                                            // 临时注释掉错误处理
                                            console.log('Image load error:', e);
                                        }}
                                    />

                                    {/* 备用临时头像 - 当图片加载失败时显示 */}
                                    <div className="absolute inset-0 hidden items-center justify-center">
                                        <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-slate-300 text-3xl font-light border border-slate-500/30">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 信息区域 - 简约高级 */}
                            <div className="text-left">
                                <h3 className="text-3xl font-light text-white mb-2 tracking-wide">
                                    {member.name}
                                </h3>
                                <p className="text-slate-400 font-medium mb-2 text-lg">
                                    {member.title}
                                </p>
                                <p className="text-slate-500 mb-6 leading-relaxed">
                                    {member.description}
                                </p>

                                {/* 社交媒体链接 - 极简风格 */}
                                <div className="flex space-x-4">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;