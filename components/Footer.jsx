import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-auto min-h-[962px] relative bg-[#213447] overflow-hidden flex flex-col items-center pt-[40px] md:pt-[60px] pb-[40px]">
      {/* Inner Rectangle */}
      <div className="w-full h-full relative flex flex-col items-center z-10 px-[4vw] md:px-0" style={{ fontFamily: "'Jomhuria', sans-serif", fontWeight: 400 }}>

        {/* Contact Us Top Banner */}
        <div className="bg-[#e3dcc8] rounded-[50px] md:rounded-[500px] flex items-center justify-between px-[5vw] mb-[25px] md:mb-[35px] shadow-[0px_8px_0px_#000000] border-[3px] border-black box-border w-full md:w-[95%] min-h-[80px] md:min-h-[137px] py-[10px] md:py-0">
          <div className="w-[40px] sm:w-[50px] md:w-[85px] shrink-0">
            <Image src="/spiral.png" alt="Spiral Left" width={85} height={85} className="w-full h-auto object-contain mt-1" />
          </div>
          <h2 className="text-center flex-1 uppercase text-[#213447] pt-2 md:pt-4 text-[45px] md:text-[112.9px] leading-[0.8] md:leading-[80.79px]" style={{ letterSpacing: '0%', WebkitTextStroke: '1px #000000' }}>
            <span className="md:hidden">CONTACT</span>
            <span className="hidden md:inline" style={{ WebkitTextStroke: '2px #000000' }}>CONTACT US</span>
          </h2>
          <div className="w-[40px] sm:w-[50px] md:w-[85px] shrink-0">
            <Image src="/spiral.png" alt="Spiral Right" width={85} height={85} className="w-full h-auto object-contain mt-1" />
          </div>
        </div>

        {/* Core Committee Title */}
        <h3 className="text-[#e3dcc8] mb-[20px] md:mb-[35px] text-center text-[50px] md:text-[83.63px] leading-[1] md:leading-[59.85px] tracking-[0.03em]" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
          Core Committee
        </h3>

        {/* Committee Members Grid */}
        <div className="flex flex-row flex-wrap justify-center items-stretch gap-[3vw] lg:gap-[2.5vw] mb-[30px] md:mb-[60px] w-[95%] sm:w-[90%]">
          {/* Card 1 */}
          <div className="relative flex flex-col w-[47%] lg:w-[30%] h-[100px] md:h-[190px] rounded-[6px] md:rounded-[12px] overflow-hidden shadow-[2px_3px_0px_#000000] md:shadow-[5px_6px_0px_#000000] border-[2px] md:border-[4px] border-black box-border hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[35px] md:min-h-[60px] md:h-[75px] shrink-0 flex items-center justify-center px-1 md:px-2 text-center border-b-[2px] md:border-b-[3px] border-black box-border">
              <p className="text-white text-[10px] md:text-[36px] uppercase leading-[0.9] md:leading-[0.8] tracking-wide">Marketing and Cultural<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-0 md:gap-1">
              <p className="text-[12px] md:text-[50px] text-black leading-none md:leading-[0.6] font-bold md:font-normal mt-1 md:mt-4">AMIRTHAVARSHINI R</p>
              <p className="text-black text-[10px] md:text-[36px] leading-none md:leading-[0.8] font-bold md:font-normal mt-[2px] md:mt-2">+91 99529 64049</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col w-[47%] lg:w-[30%] h-[100px] md:h-[190px] rounded-[6px] md:rounded-[12px] overflow-hidden shadow-[2px_3px_0px_#000000] md:shadow-[5px_6px_0px_#000000] border-[2px] md:border-[4px] border-black box-border hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[35px] md:min-h-[60px] md:h-[75px] shrink-0 flex items-center justify-center px-1 md:px-2 text-center border-b-[2px] md:border-b-[3px] border-black box-border">
              <p className="text-white text-[10px] md:text-[36px] uppercase leading-[0.9] md:leading-[0.8] tracking-wide">Promotions and External<br />Relations Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-0 md:gap-1">
              <p className="text-[12px] md:text-[50px] text-black leading-none md:leading-[0.6] font-bold md:font-normal mt-1 md:mt-4">AMRUTHA K R</p>
              <p className="text-black text-[10px] md:text-[36px] leading-none md:leading-[0.8] font-bold md:font-normal mt-[2px] md:mt-2">+91 93619 71610</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col w-[47%] lg:w-[30%] h-[100px] md:h-[190px] rounded-[6px] md:rounded-[12px] overflow-hidden shadow-[2px_3px_0px_#000000] md:shadow-[5px_6px_0px_#000000] border-[2px] md:border-[4px] border-black box-border hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[35px] md:min-h-[60px] md:h-[75px] shrink-0 flex items-center justify-center px-1 md:px-2 text-center border-b-[2px] md:border-b-[3px] border-black box-border">
              <p className="text-white text-[10px] md:text-[36px] uppercase leading-[0.9] md:leading-[0.8] tracking-wide">Infra and Finance<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-0 md:gap-1">
              <p className="text-[12px] md:text-[50px] text-black leading-none md:leading-[0.6] font-bold md:font-normal mt-1 md:mt-4">MUKILAN V M</p>
              <p className="text-black text-[10px] md:text-[36px] leading-none md:leading-[0.8] font-bold md:font-normal mt-[2px] md:mt-2">+91 93844 37698</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative flex flex-col w-[47%] lg:w-[30%] h-[100px] md:h-[190px] rounded-[6px] md:rounded-[12px] overflow-hidden shadow-[2px_3px_0px_#000000] md:shadow-[5px_6px_0px_#000000] border-[2px] md:border-[4px] border-black box-border hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[35px] md:min-h-[60px] md:h-[75px] shrink-0 flex items-center justify-center px-1 md:px-2 text-center border-b-[2px] md:border-b-[3px] border-black box-border">
              <p className="text-white text-[10px] md:text-[36px] uppercase leading-[0.9] md:leading-[0.8] tracking-wide">Planning and Internal<br />Relations Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-0 md:gap-1">
              <p className="text-[12px] md:text-[50px] text-black leading-none md:leading-[0.6] font-bold md:font-normal mt-1 md:mt-4">SHANJAY S</p>
              <p className="text-black text-[10px] md:text-[36px] leading-none md:leading-[0.8] font-bold md:font-normal mt-[2px] md:mt-2">+91 96009 23014</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative flex flex-col w-[47%] lg:w-[30%] h-[100px] md:h-[190px] rounded-[6px] md:rounded-[12px] overflow-hidden shadow-[2px_3px_0px_#000000] md:shadow-[5px_6px_0px_#000000] border-[2px] md:border-[4px] border-black box-border hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 z-[50] pointer-events-none mix-blend-multiply opacity-[0.4]">
              <Image src="/texture.png" alt="Card Texture Overlay" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="bg-[#6b8baf] h-[35px] md:min-h-[60px] md:h-[75px] shrink-0 flex items-center justify-center px-1 md:px-2 text-center border-b-[2px] md:border-b-[3px] border-black box-border">
              <p className="text-white text-[10px] md:text-[36px] uppercase leading-[0.9] md:leading-[0.8] tracking-wide">Creative and Development<br />Coordinator</p>
            </div>
            <div className="bg-[#e3dcc8] flex-1 flex flex-col items-center justify-center box-border gap-0 md:gap-1">
              <p className="text-[12px] md:text-[50px] text-black leading-none md:leading-[0.6] font-bold md:font-normal mt-1 md:mt-4">RAJESHWAR P</p>
              <p className="text-black text-[10px] md:text-[36px] leading-none md:leading-[0.8] font-bold md:font-normal mt-[2px] md:mt-2">+91 80724 37287</p>
            </div>
          </div>
        </div>

        {/* Follow Us Bottom Banner */}
        <div className="bg-[#e3dcc8] rounded-[30px] md:rounded-[50px] flex flex-row items-center justify-between px-[5vw] border-[3px] md:border-[5px] border-black box-border mb-[20px] md:mb-[30px] shadow-[0px_4px_0px_#000000] md:shadow-[0px_8px_0px_#000000] w-full md:w-[95%] h-[60px] md:h-[90px]">
          <h2 className="text-[24px] md:text-[75px] text-[#213447] tracking-wide pt-1 md:pt-4 leading-none text-left">Follow Us</h2>
          <div className="relative z-10 flex gap-1 md:gap-5 flex-wrap justify-end">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px] bg-black rounded-[6px] md:rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaYoutube className="text-[14px] md:text-[26px]" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px] bg-black rounded-[6px] md:rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaInstagram className="text-[14px] md:text-[26px]" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px] bg-black rounded-[6px] md:rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaFacebook className="text-[14px] md:text-[26px]" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px] bg-black rounded-[6px] md:rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaLinkedin className="text-[14px] md:text-[26px]" /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-[28px] md:w-[48px] h-[28px] md:h-[48px] bg-black rounded-[6px] md:rounded-[12px] flex items-center justify-center text-[#e3dcc8] hover:scale-110 transition-transform cursor-pointer"><FaXTwitter className="text-[14px] md:text-[26px]" /></a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="flex flex-row justify-between items-center text-center px-[4vw] text-[#6b8baf] text-[12px] md:text-[32px] tracking-wide mt-auto mb-[20px] leading-tight w-[95%] gap-[10px] md:gap-0">
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