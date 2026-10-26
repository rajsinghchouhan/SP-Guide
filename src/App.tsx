import { useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { EarningsCalculator } from './components/EarningsCalculator';
import { PainPointsSection } from './components/PainPointsSection';
import { DayInTheLifeSection } from './components/DayInTheLifeSection';
import { HomeServiceModelSection } from './components/HomeServiceModelSection';
import { CurriculumSection } from './components/CurriculumSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookPreviewSection } from './components/BookPreviewSection';
import { ComparisonSection } from './components/ComparisonSection';
import { AuthorSection } from './components/AuthorSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CheckoutModal } from './components/CheckoutModal';
import { RecentSaleNotification } from './components/RecentSaleNotification';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. Sticky Top Scarcity Banner */}
      <HeaderBanner onOpenCheckout={handleOpenCheckout} />

      {/* Main Page Flow */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* 3. Interactive Earnings Calculator */}
        <EarningsCalculator onOpenCheckout={handleOpenCheckout} />

        {/* 4. Pain Points Reality Check */}
        <PainPointsSection />

        {/* 5. Imagine... A Day In Your New Life (WhatsApp Simulation) */}
        <DayInTheLifeSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. The Secret: Home Service Model */}
        <HomeServiceModelSection onOpenCheckout={handleOpenCheckout} />

        {/* 7. What You Get: 5 Modules + 5 Bonuses */}
        <CurriculumSection onOpenCheckout={handleOpenCheckout} />

        {/* 8. Student Case Studies & Reviews */}
        <TestimonialsSection onOpenCheckout={handleOpenCheckout} />

        {/* 9. Interactive E-Book Sneak Peek Preview */}
        <BookPreviewSection onOpenCheckout={handleOpenCheckout} />

        {/* 10. 2 Options Contrast & 6 Months Later Roadmap */}
        <ComparisonSection onOpenCheckout={handleOpenCheckout} />

        {/* 11. Meet Your Coach / Dr. Manish Shrivastava */}
        <AuthorSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Final CTA & Price Jump Warning */}
        <FinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* 14. Footer with Support & Trust */}
      <Footer />

      {/* 15. Sticky Bottom Action Bar */}
      <StickyBottomBar onOpenCheckout={handleOpenCheckout} />

      {/* 16. Checkout Dialog Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />

      {/* 17. Live Purchase Notification Ticker */}
      <RecentSaleNotification />
    </div>
  );
}
