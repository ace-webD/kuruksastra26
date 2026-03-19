import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-[1440px] h-[962px] relative bg-[#213447] mx-auto font-sans overflow-hidden">
      {/* Inner Rectangle */}
      <div className="absolute w-[1337px] h-[889px] top-[45px] left-[34px] bg-[#213447] flex flex-col items-center px-[40px] py-[40px]">

        {/* Contact Us Top Banner */}
        <div className="bg-[#e3dcc8] rounded-[29px] flex items-center justify-center mb-[50px] overflow-visible shadow-[0px_5px_0px_#000000] z-10" style={{ width: '370px', height: '58px', border: '2.55px solid #000000', transform: 'translateY(-50%)', position: 'absolute', top: '0' }}>
          <Image src="/spiral.png" alt="Spiral Left" width={84} height={79} className="absolute object-contain z-20" style={{ left: '-13px', top: '50%', transform: 'translateY(-50%)' }} />
          <h2 className="text-[36px] font-extrabold text-[#213447] tracking-widest uppercase mt-1 z-10" style={{ fontFamily: "Impact, sans-serif" }}>CONTACT</h2>
          <Image src="/spiral.png" alt="Spiral Right" width={84} height={79} className="absolute object-contain z-20" style={{ right: '-13px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Core Committee Title */}
        <h3 className="text-4xl font-bold text-[#e3dcc8] mb-12 tracking-widest" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)", fontFamily: "Courier New, Courier, monospace" }}>
          Core Committee
        </h3>

        {/* Committee Members Grid */}
        <div className="flex flex-wrap justify-center gap-x-[80px] gap-y-[40px] mb-[60px] w-full max-w-[1200px]">
          {/* Card 1 */}
          <div className="flex flex-col w-[340px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[4px] border-black box-border">
            <div className="bg-[#6b8baf] h-[65px] flex items-center justify-center px-4 text-center border-b-[4px] border-black box-border">
              <p className="text-white text-[13px] font-black uppercase leading-tight tracking-wide">Marketing and Cultural<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] h-[95px] flex flex-col items-center justify-center box-border">
              <p className="text-[22px] font-extrabold text-black" style={{ fontFamily: "Impact, sans-serif" }}>AMIRTHAVARSHINI R</p>
              <p className="text-black font-extrabold text-sm mt-1">+91 99529 64049</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col w-[340px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[4px] border-black box-border">
            <div className="bg-[#6b8baf] h-[65px] flex items-center justify-center px-4 text-center border-b-[4px] border-black box-border">
              <p className="text-white text-[13px] font-black uppercase leading-tight tracking-wide">Promotions and External<br />Relations Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] h-[95px] flex flex-col items-center justify-center box-border">
              <p className="text-[22px] font-extrabold text-black" style={{ fontFamily: "Impact, sans-serif" }}>AMRUTHA K R</p>
              <p className="text-black font-extrabold text-sm mt-1">+91 93619 71610</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col w-[340px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[4px] border-black box-border">
            <div className="bg-[#6b8baf] h-[65px] flex items-center justify-center px-4 text-center border-b-[4px] border-black box-border">
              <p className="text-white text-[13px] font-black uppercase leading-tight tracking-wide">Infra and Finance<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] h-[95px] flex flex-col items-center justify-center box-border">
              <p className="text-[22px] font-extrabold text-black" style={{ fontFamily: "Impact, sans-serif" }}>MUKILAN V M</p>
              <p className="text-black font-extrabold text-sm mt-1">+91 93844 37698</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col w-[340px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[4px] border-black box-border">
            <div className="bg-[#6b8baf] h-[65px] flex items-center justify-center px-4 text-center border-b-[4px] border-black box-border">
              <p className="text-white text-[13px] font-black uppercase leading-tight tracking-wide">Planning and Internal<br />Relations Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] h-[95px] flex flex-col items-center justify-center box-border">
              <p className="text-[22px] font-extrabold text-black" style={{ fontFamily: "Impact, sans-serif" }}>SHANJAY S</p>
              <p className="text-black font-extrabold text-sm mt-1">+91 96009 23014</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col w-[340px] rounded-[12px] overflow-hidden shadow-[5px_6px_0px_#000000] border-[4px] border-black box-border">
            <div className="bg-[#6b8baf] h-[65px] flex items-center justify-center px-4 text-center border-b-[4px] border-black box-border">
              <p className="text-white text-[13px] font-black uppercase leading-tight tracking-wide">Creative and Development<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] h-[95px] flex flex-col items-center justify-center box-border">
              <p className="text-[22px] font-extrabold text-black" style={{ fontFamily: "Impact, sans-serif" }}>RAJESHWAR P</p>
              <p className="text-black font-extrabold text-sm mt-1">+91 80724 37287</p>
            </div>
          </div>
        </div>

        {/* Follow Us Bottom Banner */}
        <div className="w-full h-[70px] bg-[#e3dcc8] rounded-[35px] flex items-center justify-between px-10 border-[4px] border-black box-border mb-8 shadow-[4px_5px_0px_#000000]">
          <h2 className="text-[36px] font-extrabold text-[#213447] tracking-wide" style={{ fontFamily: "Impact, sans-serif" }}>Follow Us</h2>
          <div className="relative z-10 flex gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] bg-black rounded-[10px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaYoutube size={22} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] bg-black rounded-[10px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaInstagram size={22} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] bg-black rounded-[10px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaFacebook size={22} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] bg-black rounded-[10px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaLinkedin size={22} /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] bg-black rounded-[10px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaXTwitter size={22} /></a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="w-full flex justify-between px-8 text-[#6b8baf] text-[13px] font-bold tracking-wide mt-auto">
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