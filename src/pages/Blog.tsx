import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  comments: number;
  imageUrl: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top Solar EPC Company in Kerala for Industrial & Commercial',
    excerpt: 'Choosing a reliable solar EPC company in Kerala for 1 MW+ solar plants is crucial. Local weather, grid regulations, and project performance matter. This article explains what matters in choosing an EPC partner and why Solluz Energy is dependable.',
    author: 'Solluz Energy',
    date: 'November 13, 2025',
    comments: 0,
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Blog',
  },
  {
    id: '2',
    title: '430 kWp Rooftop Solar Project at Sparsh Global School, Greater Noida',
    excerpt: 'At Solluz Energy, every building can turn into a power plant. Schools and factories can all create their own clean energy. One of our latest projects proves this idea. We are proud to share the success of a 430 kWp rooftop solar system at Sparsh Global School, Greater Noida (U.P.).',
    author: 'Solluz Energy',
    date: 'November 11, 2025',
    comments: 0,
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Blog',
  },
  {
    id: '3',
    title: 'Solar Companies in Hyderabad Delivering Industrial Solutions',
    excerpt: 'Hyderabad is emerging as a hub for solar energy solutions. Discover how leading solar companies in Hyderabad are transforming industrial energy consumption with innovative solar installations.',
    author: 'Solluz Energy',
    date: 'November 8, 2025',
    comments: 0,
    imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Blog',
  },
  {
    id: '4',
    title: 'Solar Company in Odisha - Solluz Energy Leading the Change',
    excerpt: 'Solluz Energy is making significant strides in Odisha, providing cutting-edge solar solutions for businesses and industries. Learn about our commitment to sustainable energy in the region.',
    author: 'Solluz Energy',
    date: 'November 5, 2025',
    comments: 0,
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Blog',
  },
  {
    id: '5',
    title: 'Solar Plant in Tamil Nadu - How Industries Are Turning Sunshine into Savings',
    excerpt: 'Tamil Nadu industries are increasingly adopting solar power to reduce costs and carbon footprint. Explore how solar plants are transforming the industrial landscape in the state.',
    author: 'Solluz Energy',
    date: 'November 2, 2025',
    comments: 0,
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Blog',
  },
  {
    id: '6',
    title: 'Understanding Solar Panel Efficiency and Performance Metrics',
    excerpt: 'Learn about the key metrics that determine solar panel efficiency and how to choose the right panels for your energy needs. Understanding these factors can help maximize your solar investment.',
    author: 'Solluz Energy',
    date: 'October 30, 2025',
    comments: 0,
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Blog',
  },
];

const archives = [
  'November 2025',
  'October 2025',
  'September 2025',
  'August 2025',
  'July 2025',
  'June 2025',
  'May 2025',
  'April 2025',
  'March 2025',
  'February 2025',
];

export const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 5;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Blog</h1>
            <p className="text-xl md:text-2xl text-white">Get the Latest News and Updates</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-3 space-y-8">
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Featured Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Blog Badge */}
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 md:p-8">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{post.comments} Comments</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-orange-500 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>

                    {/* Continue Reading Button */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Continue Reading
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar - Right Column */}
            <aside className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search Bar */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search website here"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-r-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 5).map((post) => (
                      <li key={post.id}>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-gray-700 hover:text-orange-500 transition-colors flex items-start space-x-3"
                        >
                          <svg
                            className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="line-clamp-2">{post.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Comments */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Comments</h3>
                  <p className="text-gray-600">No comments to show.</p>
                </div>

                {/* Archives */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Archives</h3>
                  <ul className="space-y-2">
                    {archives.map((archive, index) => (
                      <li key={index}>
                        <Link
                          to={`/blog/archives/${archive.toLowerCase().replace(' ', '-')}`}
                          className="text-gray-700 hover:text-orange-500 transition-colors flex items-center space-x-2"
                        >
                          <svg
                            className="w-4 h-4 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span>{archive}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left">
              Smartest Way to Generate Electricity
            </h2>
            <Link
              to="/contact"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

