import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useState, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Your actual published articles from Dev.to with cover images
const articles = [
    {
        title: "Selecting Your Frontend Foundation: React vs Next.js",
        description: "A detailed breakdown comparing React and Next.js to help you choose the right foundation for your next frontend project based on performance, SEO, and developer experience.",
        date: "Jun 19, 2026",
        tags: ["React", "Next.js", "Frontend"],
        link: "https://dev.to/hamza_amir/selecting-your-frontend-foundation-react-vs-nextjs-3898",
        platform: "Dev.to",
        coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=center"
    },
    {
        title: "My Open Source Journey with VoiceyBill",
        description: "Sharing my experience contributing to open source through the VoiceyBill project, including my merged PRs and lessons learned along the way.",
        date: "Jun 11, 2026",
        tags: ["Open Source", "Contributions", "Career"],
        link: "https://dev.to/hamza_amir/my-open-source-journey-with-voiceybill-53em",
        platform: "Dev.to",
        coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop&crop=center"
    },
    {
        title: "AI Fluency: The Career Skill That Separates Operators from the Obsolete",
        description: "Exploring the importance of AI fluency in today's job market and how understanding AI can be a critical skill for career growth and staying relevant in the tech industry.",
        date: "Jun 26, 2026",
        tags: ["AI", "Career", "Skills"],
        link: "https://dev.to/hamza_amir/ai-fluency-the-career-skill-that-separates-operators-from-the-obsolete-1i2h",
        platform: "Dev.to",
        coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center"
    }
];

const Articles = () => {
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const swiperRef = useRef(null);

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
        if (swiperRef.current) {
            if (isAutoPlaying) {
                swiperRef.current.autoplay.stop();
            } else {
                swiperRef.current.autoplay.start();
            }
        }
    };

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
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <a
                        href="https://dev.to/hamza_amir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg"
                    >
                        <ExternalLink className="w-4 h-4" />
                        View All Articles
                    </a>
                </div>
            </motion.div>

            {/* Slider Container */}
            <div className="relative max-w-4xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24
                        }
                    }}
                    navigation={{
                        nextEl: '.swiper-articles-next',
                        prevEl: '.swiper-articles-prev',
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={articles.length > 1}
                    className="articles-swiper"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <a
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.3)' }}
                                    className="bg-[#151515] border border-white/5 rounded-2xl overflow-hidden hover:bg-[#1c1c1c] transition-all cursor-pointer group h-full flex flex-col"
                                >
                                    {/* Cover Image - Bright and vibrant */}
                                    <div className="relative h-56 w-full overflow-hidden bg-gradient-to-r from-purple-900/20 to-blue-900/20 flex-shrink-0">
                                        <img
                                            src={article.coverImage}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-100"
                                            style={{
                                                filter: 'brightness(1) contrast(1.05) saturate(1.1)'
                                            }}
                                        />
                                        {/* Subtle gradient for text readability only */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                                        {/* Platform badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="text-[10px] font-medium text-purple-400 bg-purple-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-500/30">
                                                {article.platform}
                                            </span>
                                        </div>

                                        {/* Date badge */}
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {article.date}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {article.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                            {article.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {article.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] font-medium bg-white/5 text-gray-300 px-2.5 py-1 rounded-full border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Read More Link */}
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 group-hover:text-blue-400 transition-colors pt-4 border-t border-white/5 mt-auto">
                                            Read article
                                            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button className="swiper-articles-prev w-10 h-10 rounded-full border border-white/10 bg-[#1c1c1c] text-white hover:bg-[#2a2a2a] transition-colors flex items-center justify-center cursor-pointer">
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={toggleAutoPlay}
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
                    >
                        {isAutoPlaying ? (
                            <Pause className="w-4 h-4" />
                        ) : (
                            <Play className="w-4 h-4" />
                        )}
                    </button>

                    <button className="swiper-articles-next w-10 h-10 rounded-full border border-white/10 bg-[#1c1c1c] text-white hover:bg-[#2a2a2a] transition-colors flex items-center justify-center cursor-pointer">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Articles;