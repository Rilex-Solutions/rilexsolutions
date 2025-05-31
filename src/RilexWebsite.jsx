import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const RilexWebsite = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header Section */}
      <header className="text-center py-20 px-4">
        <div className="mb-12">
          <h1 className="text-yellow-400 text-2xl font-bold tracking-wider">
            RILEX
            <span className="text-sm ml-1">SOLUTIONS</span>
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-bold text-yellow-400 leading-tight mb-8 transform -skew-x-12">
            WE HAVE<br />
            CREATIVE<br />
            SOLUTIONS.
          </h2>
          <button className="bg-yellow-400 text-black px-8 py-3 font-semibold hover:bg-yellow-500 transition-colors">
            Learn more
          </button>
        </div>
      </header>

      {/* We Started Small Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-5xl font-bold text-cyan-400 mb-8 transform -skew-x-6">
              WE STARTED<br />
              SMALL. <span className="text-green-400">///</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                We are a dynamic enterprise serving as the parent company for 
                a range of specialized businesses dedicated to meeting diverse 
                client needs.
              </p>
              
              <p>
                As a collective, our mission is to connect with clients on a 
                personal level, understanding their aspirations, and delivering 
                tailored solutions that surpass their expectations. Guided by our 
                unwavering commitment to excellence, we strive to forge lasting 
                relationships built on trust, creativity, and a shared vision for 
                success.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-full overflow-hidden w-96 h-96 mx-auto">
              <img 
                src="/api/placeholder/400/400" 
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full transform rotate-12"></div>
          </div>
        </div>
      </section>

      {/* What Makes RILEX Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-yellow-400 mb-16 transform -skew-x-6">
            WHAT MAKES RILEX<br />
            SOLUTIONS?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* RILEX Custom Works */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Custom Works Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4">
                RILEX CUSTOM WORKS
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We think, create, your custom work and explore the endless possibilities with 
                Rilex Custom Works. Let us transform your 
                ideas into tangible masterpieces, creating 
                memorable experiences that connect pieces that leave 
                lasting impressions. Experience our 
                personalized creations and experience the 
                artistry of Rilex Custom Works.
              </p>
            </div>

            {/* RILEX Design Company */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Design Company Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4">
                RILEX DESIGN COMPANY
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your one-stop destination for all your 
                design needs. We specialize in providing 
                top-notch services in social media 
                marketing designs, website designs, and 
                development. Whether you are a small 
                startup or an established brand, we have the expertise to 
                create visually stunning and engaging 
                designs that will captivate your audience.
              </p>
            </div>

            {/* Special Ops Advocacy */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Special Ops Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4">
                SPECIAL OPS ADVOCACY
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our mission is to empower families by 
                providing expert guidance and support 
                throughout every step of the IEP process. 
                We possess in-depth knowledge of special 
                education laws and regulations. We aim to 
                ensure that every child's voice 
                is heard, and provide a sense of security, 
                knowing that you have a trusted ally by 
                your side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-yellow-400 mb-16 transform -skew-x-6">
            WHY CHOOSE US?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">
                EXPERTISE AND<br />
                SPECIALIZATION
              </h4>
              <p className="text-gray-300 mb-4">
                Our team possesses the expertise 
                and in-depth knowledge required to 
                deliver exceptional results.
              </p>
              <div className="text-cyan-400 text-2xl font-bold">///</div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">
                PERSONALIZED<br />
                APPROACH
              </h4>
              <p className="text-gray-300 mb-4">
                The importance of building 
                meaningful connections with our 
                clients means we can deliver 
                customized solutions.
              </p>
              <div className="text-cyan-400 text-2xl font-bold">///</div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">
                COMPREHENSIVE<br />
                SERVICES
              </h4>
              <p className="text-gray-300 mb-4">
                One-stop destination for client needs. 
                Eliminating the need for multiple vendors 
                or agencies.
              </p>
              <div className="text-cyan-400 text-2xl font-bold">///</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-0 left-0 text-6xl text-green-400 opacity-50">"</div>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-200 px-8">
            At our core, we believe that every idea, no matter how small or 
            grand, deserves to be brought to life with passion and 
            purpose. With boundless creativity and a commitment to 
            excellence, we are here to turn imagination into reality, fueling 
            inspiration and driving success. Welcome to a world where 
            possibilities know no limits.
          </p>
          <div className="absolute bottom-0 right-0 text-6xl text-green-400 opacity-50">"</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-yellow-400 mb-8 transform -skew-x-6">
                LET'S CHAT
              </h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">Phone</h4>
                <p className="text-gray-300">720-799-8080</p>
              </div>
              
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">Email</h4>
                <p className="text-gray-300">rilexsolutionsllc@gmail.com</p>
              </div>
              
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">Social</h4>
                <div className="flex space-x-4">
                  <Facebook className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
                  <Twitter className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
                  <Instagram className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative lines */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-cyan-400 opacity-30"></div>
      </footer>
    </div>
  );
};

export default RilexWebsite;