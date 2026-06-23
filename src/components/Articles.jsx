import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';

// Your actual published articles from Dev.to
const articles = [
    {
        title: "Selecting Your Frontend Foundation: React vs Next.js",
        description: "A detailed breakdown comparing React and Next.js to help you choose the right foundation for your next frontend project based on performance, SEO, and developer experience.",
        date: "Jun 19, 2026",
        tags: ["React", "Next.js", "Frontend"],
        link: "https://dev.to/hamza_amir/selecting-your-frontend-foundation-react-vs-nextjs-3898",
        platform: "Dev.to"
    },
    {
        title: "My Open Source Journey with VoiceyBill",
        description: "Sharing my experience contributing to open source through the VoiceyBill project, including my merged PRs and lessons learned along the way.",
        date: "Jun 11, 2026",
        tags: ["Open Source", "Contributions", "Career"],
        link: "https://dev.to/hamza_amir/my-open-source-journey-with-voiceybill-53em",
        platform: "Dev.to"
    }
];

const Articles = () => {
    return (
        <section id="articles" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
                <div>
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Writing</h2>
                    <h3 className="text-3xl font-bold text-white">Published Articles</h3>
                </div>
                <a
                    href="https://dev.to/hamza_amir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg"
                >
                    <ExternalLink className="w-4 h-4" />
                    View All Articles
                </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {articles.map((article, index) => (
                    <motion.a
                        key={index}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.3)' }}
                        className="flex flex-col h-full bg-[#151515] border border-white/5 rounded-2xl p-6 hover:bg-[#1c1c1c] transition-all cursor-pointer group"
                    >
                        {/* Header with Date and Platform */}
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Calendar className="w-3.5 h-3.5" />
                                {article.date}
                            </div>
                            <span className="text-[10px] font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                                {article.platform}
                            </span>
                        </div>

                        {/* Content */}
                        <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                            {article.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                            {article.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-medium bg-white/5 text-gray-300 px-2.5 py-1 rounded-full border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Read More Link */}
                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 group-hover:text-blue-400 transition-colors mt-auto pt-4 border-t border-white/5">
                            Read article
                            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Articles;