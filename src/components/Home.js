import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-700 leading-tight">
              Welcome to <span className="text-[#3DC1C9]">Profile Viesta</span>
            </h1>
            <p className="text-lg text-gray-600">
              A comprehensive user management portal. Explore user details, add new users, and streamline your database.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={() => navigate("/userlist")}
                className="bg-[#3DC1C9] text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-md"
              >
                View User List
              </button>
              <button
                onClick={() => navigate("/users/new")}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition shadow-md"
              >
                Add New User
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="User Management"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "User Management",
                desc: "Easily view, add, edit, and delete user profiles.",
                svg: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
              },
              {
                iconBg: "bg-green-100",
                iconColor: "text-green-600",
                title: "Advanced Search",
                desc: "Find users quickly with powerful filtering.",
                svg: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                ),
              },
              {
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                title: "Secure & Reliable",
                desc: "User data is protected with top-level security.",
                svg: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className={`w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center mb-4`}>
                  <svg className={`h-6 w-6 ${feature.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {feature.svg}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Karan Malhotra",
                role: "HR Manager",
                quote: "Profile Viesta has transformed how we manage our employee database. Intuitive interface & powerful features.",
                img: "https://media-hosting.imagekit.io/177db6860c7e4711/Face.jpeg",
              },
              {
                name: "Piyush Rajoda",
                role: "IT Director",
                quote: "The search and filter capabilities are outstanding. We can now find user information in seconds!",
                img: "https://media-hosting.imagekit.io/47e85ed384364854/Face%20(1).jpeg",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: '#3DC1C9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your user management?</h2>
          <p className="text-lg mb-6">Get started with Profile Viesta now.</p>
          <button
            onClick={() => navigate("/users/new")}
            className="bg-white text-[#3DC1C9] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Add Your First User
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
