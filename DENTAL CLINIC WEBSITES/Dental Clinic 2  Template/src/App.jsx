import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  CheckCircle, 
  Check, 
  Menu,
  Apple,
  Play,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  MapPin,
  HelpCircle,
  Navigation
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dentacure');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dentacure' ? 'dentiva' : 'dentacure');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const ref = 'DC2-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(ref);
    setBookingSuccess(true);
  };

  const timeSlots = ['09:30 AM', '11:00 AM', '02:00 PM', '03:30 PM', '05:00 PM', '06:00 PM'];

  const doctors = [
    {
      id: 'ricardo',
      name: 'Ricardo Gray',
      role: 'Practice Owner',
      credentials: 'DMD, FICOI • 15+ Years Clinical Practice',
      bio: 'Specializes in complex full-mouth rehabilitation, precision implantology, and computer-guided oral surgical procedures. Dedicated to gentle, minimally invasive dental medicine.',
      image: '/assets/dentist_ricardo_gray.jpg'
    },
    {
      id: 'marcel',
      name: 'Marcel Bryan',
      role: 'Patient Services Manager',
      credentials: 'BS Health Administration • Patient Concierge Director',
      bio: 'Ensures seamless appointment scheduling, financial coordination, and personalized treatment planning for patients and families.',
      image: '/assets/dentist_marcel_bryan.jpg'
    },
    {
      id: 'maxence',
      name: 'Maxence Jolie',
      role: 'Dental Hygienist',
      credentials: 'RDH, BSDH • Advanced Ultrasonic Therapy',
      bio: 'Passionate about preventive prophylaxis, gentle periodontal therapy, and empowering patients with individualized oral hygiene protocols.',
      image: '/assets/dentist_maxence_jolie.jpg'
    },
    {
      id: 'suebian',
      name: 'Suebian Yoly',
      role: 'Doctor',
      credentials: 'DMD, MS Orthodontics • Clear Aligner Certified',
      bio: 'Focuses on pediatric dentistry, interceptive orthodontics, and invisible clear aligner treatments for teenage and adult smile transformations.',
      image: '/assets/dentist_suebian_yoly.jpg'
    }
  ];

  const faqs = [
    {
      q: 'Are dental treatments, cleanings, and extractions painful at DentaCure?',
      a: 'Not at all. At DentaCure, patient comfort is our top priority. We use modern topical anesthetics and precision local numbing techniques so you feel zero discomfort during dental fillings, deep cleanings, or extractions.'
    },
    {
      q: 'How long do orthodontic braces or clear aligners take to straighten teeth?',
      a: 'Treatment duration typically ranges from 12 to 24 months for traditional metal and ceramic braces. Clear aligners for mild-to-moderate alignment can achieve ideal smiles in 6 to 12 months.'
    },
    {
      q: 'Where is DentaCure Dental Clinic located and is parking available?',
      a: 'We are located at 2nd Floor, Unit 1, Grand Plaza Building, McArthur Highway, Brgy. Sevilla, San Fernando City, La Union, 2500 (above Technoblitz Computer Store, directly near ILAW ATBP., TESDA, and DMMSU). Dedicated free patient parking is available directly in front of the building.'
    },
    {
      q: 'What are your clinic operating hours and cut-off schedule?',
      a: 'Our clinic is open Monday to Saturday from 9:00 AM to 5:30 PM, and Sunday from 1:00 PM to 5:00 PM. Daily cut-off for appointments and walk-ins is strictly 5:00 PM. Call or text us at (0976) 485 7648 or landline 072 6108 681.'
    },
    {
      q: 'Do you offer flexible installment payment plans or family discounts?',
      a: 'Yes! We offer 0% interest monthly installment packages for orthodontic braces, porcelain crowns, and dental implants, along with a 20% discount on our Family Care Annual Package.'
    },
    {
      q: 'How long do professional cold-light laser teeth whitening results last?',
      a: 'Our in-clinic cold-light whitening brightens teeth by 5 to 8 shades in a single 45-minute appointment. With regular oral hygiene, results typically last 2 to 3 years.'
    }
  ];

  return (
    <div className={`min-h-screen bg-white text-[#1A1A1A] antialiased ${theme === 'dentiva' ? 'dentiva-mode' : ''}`}>
      
      {/* 1. STICKY TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src="/assets/dentacure_logo.svg" alt="DentaCure Dental Clinic" className="h-10 w-auto object-contain" />
          </a>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
            <a href="#home" className="text-neutral-900 font-semibold">Home</a>
            <a href="#services" className="hover:text-neutral-900 transition">Our Services</a>
            <a href="#dentists" className="hover:text-neutral-900 transition">Our Dentists</a>
            <a href="#discount-plan" className="hover:text-neutral-900 transition">Discount Plan</a>
            <a href="#faq" className="hover:text-neutral-900 transition">FAQ</a>
            <a href="directions.html" className="hover:text-neutral-900 transition flex items-center gap-1 font-semibold text-[#5F8239]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Directions</span>
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={toggleTheme}
              className="hidden sm:flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition shadow-sm"
              title="Toggle between DentaCure (Green) and Tooth D' Care (Teal)">
              <span className={`w-2 h-2 rounded-full ${theme === 'dentacure' ? 'bg-[#4E7837]' : 'bg-[#178782]'} animate-pulse`} />
              <span>{theme === 'dentacure' ? '🌿 DentaCure Green' : '🍃 Tooth D\' Care Teal'}</span>
            </button>

            <button 
              onClick={() => { setIsBookingOpen(true); setBookingSuccess(false); }}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full text-white transition shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                theme === 'dentacure' ? 'bg-[#4E7837] hover:bg-[#37542B]' : 'bg-[#178782] hover:bg-[#105E5A]'
              }`}>
              Book Online
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-100 bg-white px-6 py-4 space-y-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-neutral-900">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-neutral-600">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-neutral-600">Our Services</a>
            <a href="#discount-plan" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-neutral-600">Discount Plan</a>
            <a href="#dentists" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-neutral-600">Our Dentists</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-neutral-600">Location</a>
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Theme:</span>
              <button onClick={toggleTheme} className="text-xs font-semibold px-3 py-1 rounded-full border border-neutral-200">
                {theme === 'dentacure' ? 'Switch to Tooth D\' Care Teal' : 'Switch to DentaCure Green'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
                theme === 'dentacure' ? 'bg-[#EEF4EB] text-[#2C4820]' : 'bg-[#E6F4F4] text-[#105E5A]'
              }`}>
                <span className={`w-2 h-2 rounded-full ${theme === 'dentacure' ? 'bg-[#4E7837]' : 'bg-[#178782]'}`} />
                <span>
                  {theme === 'dentacure' 
                    ? '🌿 San Fernando City, La Union • Mon-Sat 9AM-6PM' 
                    : 'July 01, 2026 • Doctor Open Clinic 09 AM - 06 PM'}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
                Get a <span className={theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}>Beautiful Straight Smile Quickly.</span>
              </h1>

              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Transform your smile quickly and effortlessly with our exceptional services. We understand the importance of having a beautiful, straight smile, and that's why we offer efficient solutions tailored to your needs.
              </p>

              <div className="pt-2">
                <button 
                  onClick={() => { setIsBookingOpen(true); setBookingSuccess(false); }}
                  className={`px-8 py-3.5 text-base font-semibold rounded-full text-white shadow-md hover:scale-105 transition duration-200 ${
                    theme === 'dentacure' ? 'bg-[#4E7837] hover:bg-[#37542B]' : 'bg-[#178782] hover:bg-[#105E5A]'
                  }`}>
                  Book Now
                </button>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 max-w-lg">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="/assets/patient_sarah.jpg" alt="Patient" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="/assets/patient_david.jpg" alt="Patient" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="/assets/dentist_maxence_jolie.jpg" alt="Patient" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="/assets/cta_smiling_woman.jpg" alt="Patient" />
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 leading-snug">
                  <strong className="font-bold text-neutral-900 text-base">827+</strong>
                  <span className="block text-neutral-500">Transform your smile quickly and with our exceptional services.</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Typodont Braces Model */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className={`absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full pointer-events-none -z-10 blur-3xl opacity-60 ${
                theme === 'dentacure' ? 'bg-[#4E7837]/20' : 'bg-[#178782]/20'
              }`} />

              <div className="absolute top-2 right-4 sm:right-8 bg-white/95 backdrop-blur-md shadow-lg border border-neutral-100 px-4 py-2 rounded-2xl text-[11px] font-semibold text-neutral-700 z-10 flex items-center gap-2">
                <Clock className={`w-3.5 h-3.5 ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`} />
                <div>
                  <span className="block font-bold text-neutral-900">July 01, 2026</span>
                  <span className="text-neutral-400 text-[10px]">Open Clinic 09 AM - 06 PM</span>
                </div>
              </div>

              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                <img 
                  src="/assets/dental_braces_model_3d.png" 
                  alt="3D Dental Braces Anatomical Model" 
                  className="w-full h-auto object-contain animate-float-teeth select-none drop-shadow-2xl"
                />
              </div>

              <div className="absolute -bottom-2 left-4 sm:left-8 bg-white/95 backdrop-blur-md shadow-lg border border-neutral-100 px-4 py-2.5 rounded-2xl text-xs font-semibold text-neutral-800 z-10 flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  theme === 'dentacure' ? 'bg-[#EEF4EB] text-[#4E7837]' : 'bg-[#E6F4F4] text-[#178782]'
                }`}>
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-neutral-900 block">Clear Orthodontics</span>
                  <span className="text-[10px] text-neutral-400">Micro-precision archwires</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STATS RIBBON */}
      <section className="border-y border-neutral-100 bg-neutral-50/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            <div className="flex items-center gap-4 px-4 pt-4 md:pt-0">
              <span className={`text-5xl sm:text-6xl font-black tracking-tighter ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`}>170</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold leading-snug">Performed<br/><span className="text-neutral-800">surgeries</span></span>
            </div>
            <div className="flex items-center gap-4 px-4 pt-4 md:pt-0">
              <span className={`text-5xl sm:text-6xl font-black tracking-tighter ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`}>85</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold leading-snug">Satisfied<br/><span className="text-neutral-800">Patients</span></span>
            </div>
            <div className="flex items-center gap-4 px-4 pt-4 md:pt-0">
              <span className={`text-5xl sm:text-6xl font-black tracking-tighter ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`}>176</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold leading-snug">Staff<br/><span className="text-neutral-800">Members</span></span>
            </div>
            <div className="flex items-center gap-4 px-4 pt-4 md:pt-0">
              <span className={`text-5xl sm:text-6xl font-black tracking-tighter ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`}>98</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold leading-snug">Yearly<br/><span className="text-neutral-800">Surgeries</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DARK SERVICES CONTAINER */}
      <section id="services" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  We specialize in you.<br />whatever your specialty
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  At our company, we take pride in providing individuals customized solutions that are specifically tailored to meet your unique expertise, requirements, and preferences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Service 1 */}
              <div className="bg-[#242424] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-neutral-800">
                <div className="h-60 sm:h-64 overflow-hidden relative">
                  <img src="/assets/service_checkups.jpg" alt="Vibrant Checkups" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white/90">
                    Preventive Care
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Vibrant Checkups</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      At our dental practice, we believe that regular dental exams are the cornerstone of a healthy and radiant smile.
                    </p>
                  </div>
                  <button onClick={() => { setIsBookingOpen(true); setBookingSuccess(false); }} className={`inline-flex items-center gap-2 text-sm font-semibold hover:underline pt-2 ${
                    theme === 'dentacure' ? 'text-[#82A769]' : 'text-[#229891]'
                  }`}>
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-[#242424] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-neutral-800">
                <div className="h-60 sm:h-64 overflow-hidden relative">
                  <img src="/assets/service_cleaning.jpg" alt="Revitalized Cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white/90">
                    Oral Hygiene
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Revitalized Cleaning</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      At our clinic, we understand that maintaining optimal oral health is essential for overall smile and overall well-being.
                    </p>
                  </div>
                  <button onClick={() => { setIsBookingOpen(true); setBookingSuccess(false); }} className={`inline-flex items-center gap-2 text-sm font-semibold hover:underline pt-2 ${
                    theme === 'dentacure' ? 'text-[#82A769]' : 'text-[#229891]'
                  }`}>
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-[#242424] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-neutral-800">
                <div className="h-60 sm:h-64 overflow-hidden relative">
                  <img src="/assets/service_fillings.jpg" alt="Reinforced Fillings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white/90">
                    Restorative
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Reinforced Fillings</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      At our dental practice, we prioritize the longevity and functionality of your smile. Our advanced fillings of true value.
                    </p>
                  </div>
                  <button onClick={() => { setIsBookingOpen(true); setBookingSuccess(false); }} className={`inline-flex items-center gap-2 text-sm font-semibold hover:underline pt-2 ${
                    theme === 'dentacure' ? 'text-[#82A769]' : 'text-[#229891]'
                  }`}>
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROMO SECTION */}
      <section id="discount-plan" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                Your Family's Dental Health Matters: Discover Our Budget-Friendly Discount Plan.
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                Unlock Optimal Dental Wellness For Your Loved Ones: Embrace Our Budget-Friendly Discount Plan for Comprehensive Care and Radiant Smiles.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="/assets/patient_david.jpg" alt="Member" />
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="/assets/patient_sarah.jpg" alt="Member" />
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="/assets/cta_smiling_woman.jpg" alt="Member" />
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-white ${
                      theme === 'dentacure' ? 'bg-[#EEF4EB] text-[#4E7837]' : 'bg-[#E6F4F4] text-[#178782]'
                    }`}>
                      +1.2k
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500 font-medium">1,200+ Active<br />Family Members</span>
                </div>

                <div className="hidden sm:block text-neutral-400">
                  <svg width="46" height="28" viewBox="0 0 54 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6c16 2 34 8 42 18" />
                    <path d="M40 24l6 2-2-6" />
                  </svg>
                </div>

                <button 
                  onClick={() => setIsDiscountOpen(true)}
                  className={`px-7 py-3 text-sm font-semibold rounded-full text-white shadow-md hover:scale-105 transition ${
                    theme === 'dentacure' ? 'bg-[#4E7837] hover:bg-[#37542B]' : 'bg-[#178782] hover:bg-[#105E5A]'
                  }`}>
                  Join Now Save Up
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {/* 80% Card */}
              <div className={`border rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm transition ${
                theme === 'dentacure' ? 'bg-[#EEF4EB] border-[#D8E5D3]' : 'bg-[#E6F4F4] border-[#C8E5E5]'
              }`}>
                <div className="absolute top-6 right-8 text-neutral-300 opacity-60">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <div className="relative z-10 space-y-3">
                  <span className={`text-5xl sm:text-6xl font-black tracking-tight ${
                    theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'
                  }`}>80%</span>
                  <h3 className="text-lg font-bold text-neutral-900 pt-1">Exclusive Member Savings</h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
                    Save 30% - 80% on Dental Procedures, Including Oral Exams, Cleanings, and X-Rays.
                  </p>
                </div>
              </div>

              {/* 40% Card */}
              <div className={`border rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm transition ${
                theme === 'dentacure' ? 'bg-[#EEF4EB] border-[#D8E5D3]' : 'bg-[#E6F4F4] border-[#C8E5E5]'
              }`}>
                <div className="absolute top-6 right-8 text-neutral-300 opacity-60">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <div className="relative z-10 space-y-3">
                  <span className={`text-5xl sm:text-6xl font-black tracking-tight ${
                    theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'
                  }`}>40%</span>
                  <h3 className="text-lg font-bold text-neutral-900 pt-1">Enhanced Member Benefits</h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
                    Save 40% on All Other Dental Services, Including Cosmetic, Restorative, and Specialty Dental Procedures.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TEAM SECTION */}
      <section id="dentists" className="py-16 sm:py-24 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
                Introducing Our Dedicated Dentists
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base mt-2">
                Board-certified dental surgeons and oral specialists committed to clinical excellence.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-600 shadow-sm">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-600 shadow-sm">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map(doc => (
              <div 
                key={doc.id}
                onClick={() => setActiveDoctor(doc)}
                className="bg-white rounded-3xl p-5 border border-neutral-100 shadow-sm cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-5 relative group">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">{doc.name}</h3>
                  <p className="text-xs text-neutral-400 font-medium">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
                See What Our Clients Have to Say:
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Embark on a Journey through Heartfelt Experiences: Unveil the Praises and Testimonials from Our Esteemed Clients, Showcasing the Unmatched Quality of Our Services!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#ECE7DE] relative flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="text-neutral-300 font-serif text-5xl leading-none">“</div>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
                  The clinic is also exceptionally clean and prioritizes hygiene. They follow strict cleanliness protocols, which gives me added confidence that I am in a safe environment for dental care.
                </p>
              </div>
              <div className="pt-6 border-t border-[#E8E1D5] flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <img src="/assets/patient_sarah.jpg" alt="Danny Kelly" className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Danny Kelly</h4>
                    <p className="text-xs text-neutral-400">Product Manager</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold flex items-center gap-1 cursor-pointer ${
                  theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'
                }`}>
                  Read more <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#ECE7DE] relative flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="text-neutral-300 font-serif text-5xl leading-none">“</div>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
                  The entire staff is courteous, punctual, and attentive. The doctor explained every step of the teeth straightening plan with digital simulation before starting. Truly remarkable service!
                </p>
              </div>
              <div className="pt-6 border-t border-[#E8E1D5] flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <img src="/assets/patient_david.jpg" alt="Salina Martin" className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Salina Martin</h4>
                    <p className="text-xs text-neutral-400">Creative Director</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold flex items-center gap-1 cursor-pointer ${
                  theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'
                }`}>
                  Read more <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 FAQ SECTION */}
      <section id="faq" className="py-16 sm:py-24 bg-[#FAF9F5] border-y border-[#ECE7DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-bold text-[#5F8239] shadow-sm uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Patient Questions Answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Clear, transparent answers about our gentle dental treatments, orthodontics, appointments, and clinic directions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm overflow-hidden transition hover:border-[#5F8239]/40">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 text-base sm:text-lg focus:outline-none">
                  <span>{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold transition-all text-lg ${
                    openFaqIndex === idx ? 'bg-neutral-900 text-white rotate-45' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    +
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 pt-1 border-t border-neutral-100">
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-xs sm:text-sm text-neutral-500">
            <span>Have another question? Reach our team directly via </span>
            <a href="tel:09764857648" className="text-[#5F8239] font-bold hover:underline">(0976) 485 7648</a>
            <span> or </span>
            <a href="mailto:toothdcarelu@gmail.com" className="text-[#5F8239] font-bold hover:underline">toothdcarelu@gmail.com</a>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-[32px] sm:rounded-[40px] text-white overflow-hidden shadow-2xl relative ${
            theme === 'dentacure' 
              ? 'bg-gradient-to-r from-[#233B19] via-[#37542B] to-[#4E7837]' 
              : 'bg-gradient-to-r from-[#105E5A] via-[#178782] to-[#229891]'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Seize the opportunity for a brighter smile starting now!
                </h2>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
                  Embracing the bliss of fewer moments, unlocking the gateway to a brighter shine. Captivating Smile Beyond Your Wildest Dreams!
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button 
                    onClick={() => { setIsBookingOpen(true); setBookingSuccess(false); }}
                    className="px-6 py-3 rounded-full border-2 border-white/80 text-white font-semibold text-sm hover:bg-white/10 transition">
                    Schedule
                  </button>
                  <button 
                    onClick={() => { setIsBookingOpen(true); setBookingSuccess(false); }}
                    className="px-7 py-3 rounded-full bg-white text-neutral-900 font-bold text-sm hover:bg-neutral-100 transition shadow-lg flex items-center gap-2">
                    Book Here <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-end pr-0 lg:pr-10">
                <div className="w-full max-w-[360px] sm:max-w-[420px] aspect-square flex items-end justify-center">
                  <img 
                    src="/assets/cta_smiling_woman.png" 
                    alt="Radiant Smiling Patient" 
                    className="w-full h-auto object-contain select-none filter drop-shadow-2xl translate-y-2 lg:translate-y-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GOOGLE MAP DIRECTIONS & LOCATION */}
      <section id="location" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3E4] border border-[#D5E6CA] text-[#426123] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Clinic Location &amp; Directions</s            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Visit Us in San Fernando City, La Union
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              Located along McArthur Highway in Brgy. Sevilla, above Technoblitz Computer Store, near ILAW ATBP., TESDA, and DMMSU. Free patient parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-200 shadow-xl shadow-neutral-100 min-h-[380px] sm:min-h-[440px] relative bg-neutral-100">
              <iframe 
                src="https://maps.google.com/maps?q=Grand+Plaza+Building,+Sevilla,+San+Fernando+City,+La+Union,+Philippines&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '380px' }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Google Map Directions to DentaCure"
                className="w-full h-full object-cover">
              </iframe>

              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-neutral-100 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-neutral-900">Grand Plaza Building • Unit 1</p>
                  <p className="text-[11px] text-neutral-500">2nd Floor, Brgy. Sevilla, San Fernando City</p>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Grand+Plaza+Building+Sevilla+San+Fernando+City+La+Union+Philippines" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-full bg-[#5F8239] text-white text-xs font-bold hover:bg-[#4E6D2D] transition shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                  <span>Directions</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF9F5] border border-[#ECE7DE] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#5F8239]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg">DentaCure Dental Clinic</h3>
                    <p className="text-xs text-neutral-400">San Fernando City, La Union</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-neutral-100 text-xs sm:text-sm text-neutral-700 space-y-1">
                  <p className="font-bold text-neutral-900">📍 Exact Location:</p>
                  <p>2nd Floor, Unit 1, Grand Plaza Building</p>
                  <p>McArthur Highway, Brgy. Sevilla</p>
                  <p>San Fernando City, 2500 La Union</p>
                </div>

                <div className="space-y-2 text-xs text-neutral-600">
                  <div className="flex justify-between py-1.5 border-b border-neutral-200/60">
                    <span className="font-medium text-neutral-500">Mon – Sat Hours:</span>
                    <span className="font-bold text-neutral-900">9:00 AM – 5:30 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-200/60">
                    <span className="font-medium text-neutral-500">Sunday:</span>
                    <span className="font-bold text-[#5F8239]">1:00 PM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-medium text-neutral-500">Daily Cut-off:</span>
                    <span className="font-bold text-neutral-900">5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Grand+Plaza+Building+Sevilla+San+Fernando+City+La+Union+Philippines" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3.5 px-6 rounded-full bg-[#5F8239] text-white font-bold text-sm hover:bg-[#4E6D2D] transition shadow-md flex items-center justify-center gap-2">
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a 
                  href="directions.html" 
                  className="w-full py-3 px-6 rounded-full bg-white border border-neutral-300 text-neutral-800 font-semibold text-xs hover:bg-neutral-50 transition flex items-center justify-center gap-2">
                  <span>View Full Transit Guide &amp; Landmark Routes</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-white border-t border-neutral-100 pt-16 pb-12 text-neutral-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-100">
            <div className="lg:col-span-2 space-y-4">
              <a href="#home" className="block">
                <img src="/assets/dentacure_logo.svg" alt="DentaCure Dental Clinic" className="h-10 w-auto object-contain" />
              </a>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed">
                2nd Floor, Unit 1, Grand Plaza Building, McArthur Highway, Brgy. Sevilla, San Fernando City, La Union, 2500.
              </p>
              <div className="flex items-center gap-3 pt-2 text-neutral-400">
                <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-neutral-900 cursor-pointer"><Twitter className="w-4 h-4" /></span>
                <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-neutral-900 cursor-pointer"><Linkedin className="w-4 h-4" /></span>
                <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-neutral-900 cursor-pointer"><Github className="w-4 h-4" /></span>
                <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-neutral-900 cursor-pointer"><Facebook className="w-4 h-4" /></span>
                <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-neutral-900 cursor-pointer"><Instagram className="w-4 h-4" /></span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-1">
                <p className="text-xs text-neutral-400">Phone / WhatsApp / Viber</p>
                <p className="text-xs font-semibold text-neutral-800">(0976) 485 7648 • 072 6108 681</p>
              </div>
              <div className="space-y-1 pt-1">
                <p className="text-xs text-neutral-400">Email Inquiries</p>
                <p className="text-xs font-semibold text-neutral-800">toothdcarelu@gmail.com</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-neutral-900 transition">Our Services</a></li>
                <li><a href="#dentists" className="hover:text-neutral-900 transition">Our Dentists</a></li>
                <li><a href="#faq" className="hover:text-neutral-900 transition font-semibold text-[#5F8239]">FAQ Section</a></li>
                <li><a href="directions.html" className="hover:text-neutral-900 transition font-semibold text-[#5F8239]">Map &amp; Directions</a></li>
                <li><a href="#discount-plan" className="hover:text-neutral-900 transition">Discount Plan</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider">Information</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="directions.html" className="hover:text-neutral-900 transition">San Fernando Clinic</a></li>
                <li><a href="#" className="hover:text-neutral-900 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-neutral-900 transition">Terms of Services</a></li>
                <li><a href="#home" className="hover:text-neutral-900 transition">Back to Top ↑</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-neutral-700">Get the app:</span>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg border border-neutral-200 bg-neutral-50 text-[11px] font-semibold text-neutral-700 hover:bg-neutral-100 flex items-center gap-1.5">
                  <Apple className="w-3.5 h-3.5" /> App Store
                </button>
                <button className="px-3 py-1.5 rounded-lg border border-neutral-200 bg-neutral-50 text-[11px] font-semibold text-neutral-700 hover:bg-neutral-100 flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5" /> Google Play
                </button>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <span className="font-semibold text-neutral-700">Working Days:</span> Monday to Saturday: 9am - 7pm | Sunday: By Appointment
            </div>

            <div className="text-center sm:text-right max-w-xs text-neutral-400">
              {theme === 'dentacure' 
                ? 'Unit 1, 2nd Floor, Grand Plaza Building, Brgy. Sevilla, San Fernando City, La Union'
                : 'Central Medical Arts Plaza, Level 4, Metropolitan District'}
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: BOOKING MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsBookingOpen(false)} className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-neutral-100">
            <button onClick={() => setIsBookingOpen(false)} className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-700 p-1.5 rounded-full hover:bg-neutral-100">
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                  theme === 'dentacure' ? 'bg-[#EEF4EB] text-[#2C4820]' : 'bg-[#E6F4F4] text-[#105E5A]'
                }`}>Direct Reservation Portal</span>
                <h3 className="text-2xl font-bold text-neutral-900">Schedule Your Dental Visit</h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1 mb-5">
                  Pick your preferred service, date, and appointment slot.
                </p>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Full Name</label>
                    <input type="text" required placeholder="e.g. Maria Santos" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Contact Number</label>
                      <input type="tel" required placeholder="(0976) 485 7648" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Email Address</label>
                      <input type="email" required placeholder="name@email.com" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Treatment / Procedure</label>
                    <select required className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900">
                      <option value="braces">Orthodontics & Clear Braces</option>
                      <option value="checkup">Vibrant Checkups & Consultation</option>
                      <option value="cleaning">Revitalized Ultrasonic Cleaning</option>
                      <option value="fillings">Reinforced Composite Fillings</option>
                      <option value="surgery">Oral Surgery & Implantology</option>
                      <option value="pedodontics">Pedodontics (Children Dental)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Preferred Date</label>
                    <input type="date" required className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Available Time Slot</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-2.5 py-2 text-xs font-semibold rounded-lg border transition ${
                            selectedTime === time 
                              ? (theme === 'dentacure' ? 'bg-[#4E7837] text-white border-[#4E7837]' : 'bg-[#178782] text-white border-[#178782]')
                              : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                          }`}>
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={`w-full py-3 text-sm font-bold tracking-wide rounded-full text-white mt-2 transition ${
                      theme === 'dentacure' ? 'bg-[#4E7837] hover:bg-[#37542B]' : 'bg-[#178782] hover:bg-[#105E5A]'
                    }`}>
                    Confirm Appointment Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
                  theme === 'dentacure' ? 'bg-[#EEF4EB] text-[#4E7837]' : 'bg-[#E6F4F4] text-[#178782]'
                }`}>
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900">Appointment Requested!</h4>
                <p className="text-sm text-neutral-600 max-w-xs mx-auto leading-relaxed">
                  Your request has been received. Our clinic concierge will text/call to verify your slot.
                </p>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 inline-block">
                  <span className="text-xs text-neutral-400 block uppercase font-bold">Booking Reference</span>
                  <span className="text-base font-mono font-bold text-neutral-900">{bookingRef}</span>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => setIsBookingOpen(false)} 
                    className={`px-8 py-2.5 text-sm font-semibold rounded-full text-white ${
                      theme === 'dentacure' ? 'bg-[#4E7837]' : 'bg-[#178782]'
                    }`}>
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: DOCTOR MODAL */}
      {activeDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setActiveDoctor(null)} className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl z-10 border border-neutral-100 text-center space-y-4">
            <button onClick={() => setActiveDoctor(null)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1.5 rounded-full hover:bg-neutral-100">
              <X className="w-5 h-5" />
            </button>
            <img src={activeDoctor.image} alt={activeDoctor.name} className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-neutral-100 shadow-md" />
            <div>
              <h3 className="text-xl font-bold text-neutral-900">{activeDoctor.name}</h3>
              <p className={`text-xs font-semibold ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`}>{activeDoctor.role}</p>
              <p className="text-[11px] text-neutral-400 mt-0.5">{activeDoctor.credentials}</p>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed text-left bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
              {activeDoctor.bio}
            </p>
            <button 
              onClick={() => { setActiveDoctor(null); setIsBookingOpen(true); }}
              className={`w-full py-2.5 text-xs font-bold rounded-full text-white ${
                theme === 'dentacure' ? 'bg-[#4E7837]' : 'bg-[#178782]'
              }`}>
              Book Appointment with Doctor
            </button>
          </div>
        </div>
      )}

      {/* MODAL 3: DISCOUNT MODAL */}
      {isDiscountOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsDiscountOpen(false)} className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-neutral-100 space-y-5">
            <button onClick={() => setIsDiscountOpen(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1.5 rounded-full hover:bg-neutral-100">
              <X className="w-5 h-5" />
            </button>
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                theme === 'dentacure' ? 'bg-[#EEF4EB] text-[#2C4820]' : 'bg-[#E6F4F4] text-[#105E5A]'
              }`}>Membership Plan</span>
              <h3 className="text-2xl font-bold text-neutral-900 mt-2">Family Dental Savings Plan</h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                No insurance waiting periods, no maximums, zero deductibles.
              </p>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                <Check className={`w-5 h-5 shrink-0 ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`} />
                <span><strong>80% Off:</strong> Initial comprehensive oral examination, x-rays & prophylaxis.</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                <Check className={`w-5 h-5 shrink-0 ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`} />
                <span><strong>40% Off:</strong> Orthodontics, composite fillings, crowns & oral surgery.</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                <Check className={`w-5 h-5 shrink-0 ${theme === 'dentacure' ? 'text-[#4E7837]' : 'text-[#178782]'}`} />
                <span><strong>Priority Scheduling:</strong> Emergency appointments within 2 hours.</span>
              </div>
            </div>
            <button 
              onClick={() => { setIsDiscountOpen(false); setIsBookingOpen(true); }}
              className={`w-full py-3 text-sm font-bold rounded-full text-white ${
                theme === 'dentacure' ? 'bg-[#4E7837]' : 'bg-[#178782]'
              }`}>
              Enroll Family Plan Today
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
