import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full min-w-[1440px] h-[962px] relative bg-[#213447] overflow-hidden flex flex-col items-center pt-[60px] pb-[40px]">
      {/* Inner Rectangle */}
      <div className="w-full h-full relative flex flex-col items-center z-10" style={{ fontFamily: "'Jomhuria', sans-serif", fontWeight: 400 }}>

        {/* Contact Us Top Banner */}
        <div className="bg-[#e3dcc8] rounded-[500px] flex items-center justify-between px-[4vw] sm:px-[6vw] mb-[35px] shadow-[0px_8px_0px_#000000] border-[3px] border-black box-border w-[95%]" style={{ height: '137px' }}>
          <div className="w-[60px] sm:w-[75px] md:w-[85px]">
            <Image src="/spiral.png" alt="Spiral Left" width={85} height={85} className="w-full h-auto object-contain mt-1" />
          </div>
          <h2 className="text-center flex-1 uppercase text-[#213447] pt-4" style={{ fontSize: '112.9px', lineHeight: '80.79px', letterSpacing: '0%', WebkitTextStroke: '3.17px #000000' }}>CONTACT US</h2>
          <div className="w-[60px] sm:w-[75px] md:w-[85px]">
            <Image src="/spiral.png" alt="Spiral Right" width={85} height={85} className="w-full h-auto object-contain mt-1" />
          </div>
        </div>

        {/* Core Committee Title */}
        <h3 className="text-[#e3dcc8] mb-[35px] text-center" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)", fontSize: "83.63px", lineHeight: "59.85px", letterSpacing: "0.03em" }}>
          Core Committee
        </h3>

        {/* Committee Members Grid */}
        <div className="flex flex-wrap justify-center gap-[2.5vw] mb-[60px] w-[95%]">
          {/* Card 1 */}
          <div className="relative flex flex-col w-full sm:w-[45%] lg:w-[30%] h-[190px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[4px] border-black box-border hover:scale-[1.02] transition-transform">
            {/* Texture Overlay */}
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[75px] shrink-0 flex items-center justify-center px-4 text-center border-b-[3px] border-black box-border">
              <p className="text-white text-[32px] sm:text-[36px] uppercase leading-[0.8] tracking-wide mt-2">Marketing and Cultural<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-1">
              <p className="text-[50px] text-black leading-[0.6] mt-4">AMIRTHAVARSHINI R</p>
              <p className="text-black text-[36px] mt-2 leading-[0.8]">+91 99529 64049</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col w-full sm:w-[45%] lg:w-[30%] h-[190px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[4px] border-black box-border hover:scale-[1.02] transition-transform">
            {/* Texture Overlay */}
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[75px] shrink-0 flex items-center justify-center px-4 text-center border-b-[3px] border-black box-border">
              <p className="text-white text-[32px] sm:text-[36px] uppercase leading-[0.8] tracking-wide mt-2">Promotions and External<br />Relations Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-1">
              <p className="text-[50px] text-black leading-[0.6] mt-4">AMRUTHA K R</p>
              <p className="text-black text-[36px] mt-2 leading-[0.8]">+91 93619 71610</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col w-full sm:w-[45%] lg:w-[30%] h-[190px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[4px] border-black box-border hover:scale-[1.02] transition-transform">
            {/* Texture Overlay */}
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[75px] shrink-0 flex items-center justify-center px-4 text-center border-b-[3px] border-black box-border">
              <p className="text-white text-[32px] sm:text-[36px] uppercase leading-[0.8] tracking-wide mt-2">Infra and Finance<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-1">
              <p className="text-[50px] text-black leading-[0.6] mt-4">MUKILAN V M</p>
              <p className="text-black text-[36px] mt-2 leading-[0.8]">+91 93844 37698</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative flex flex-col w-full sm:w-[48%] lg:w-[31%] max-w-[500px] h-[190px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[3px] border-black box-border hover:scale-[1.02] transition-transform">
            {/* Texture Overlay */}
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[75px] shrink-0 flex items-center justify-center px-4 text-center border-b-[3px] border-black box-border">
              <p className="text-white text-[32px] sm:text-[36px] uppercase leading-[0.8] tracking-wide mt-2">Planning and Internal<br />Relations Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-1">
              <p className="text-[50px] text-black leading-[0.6] mt-4">SHANJAY S</p>
              <p className="text-black text-[36px] mt-2 leading-[0.8]">+91 96009 23014</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative flex flex-col w-full sm:w-[48%] lg:w-[31%] max-w-[500px] h-[190px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[3px] border-black box-border hover:scale-[1.02] transition-transform">
            {/* Texture Overlay */}
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[75px] shrink-0 flex items-center justify-center px-4 text-center border-b-[3px] border-black box-border">
              <p className="text-white text-[32px] sm:text-[36px] uppercase leading-[0.8] tracking-wide mt-2">Creative and Development<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-1">
              <p className="text-[50px] text-black leading-[0.6] mt-4">RAJESHWAR P</p>
              <p className="text-black text-[36px] mt-2 leading-[0.8]">+91 80724 37287</p>
            </div>
          </div>
        </div>

        {/* Follow Us Bottom Banner */}
        <div className="bg-[#e3dcc8] rounded-[50px] flex items-center justify-between px-[4vw] border-[5px] border-black box-border mb-[30px] shadow-[0px_8px_0px_#000000] w-[95%]" style={{ height: '90px' }}>
          <h2 className="text-[75px] text-[#213447] tracking-wide pt-4 leading-none">Follow Us</h2>
          <div className="relative z-10 flex gap-5">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaYoutube size={26} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaInstagram size={26} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaFacebook size={26} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaLinkedin size={26} /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-black rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaXTwitter size={26} /></a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="flex justify-between px-[4vw] text-[#6b8baf] text-[32px] tracking-wide mt-auto mb-[20px] leading-none w-[95%]">
          <p>@2026 kuruksastra</p>
          <p>Made with &lt;3 by 3000PI &amp; ACE</p>
        </div>

      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 z-[100] pointer-events-none mix-blend-hard-light opacity-[0.25]">
        <Image src="/texture.png" alt="Texture Overlay" fill style={{ objectFit: "cover" }} />
      </div>
    </footer>
  );
}