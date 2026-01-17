import React, { useState } from 'react';
import { ChevronDown, ChevronUp, DollarSign, Shield, Clock, Gift, Users, Trophy, HelpCircle, Sparkles, Crown, Award } from 'lucide-react';
import { ScrollReveal, TiltCard, GlowEffect } from '../effects';

const FaqPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const faqCategories = [
    { id: 'getting-started', name: 'Getting Started', icon: Sparkles, color: '#10B981' },
    { id: 'earnings', name: 'Earnings', icon: DollarSign, color: '#F59E0B' },
    { id: 'rewards', name: 'Rewards & Spin', icon: Crown, color: '#8B5CF6' },
    { id: 'security', name: 'Security', icon: Shield, color: '#EF4444' },
    { id: 'leaderboard', name: 'Leaderboard', icon: Trophy, color: '#06B6D4' },
    { id: 'account', name: 'Account', icon: Users, color: '#EC4899' }
  ];

  const faqData = {
    'getting-started': [
      {
        question: "How do I start earning cash rewards?",
        answer: "Simply sign up, complete your profile verification, and start taking surveys! You'll earn cash for each completed survey, plus bonus rewards from daily login streaks and our spin wheel. New users get a welcome bonus of $5 after their first survey!"
      },
      {
        question: "What types of activities can I do to earn money?",
        answer: "You can earn through surveys (main income source), daily check-ins, referrals, achievement unlocks, and our daily spin wheel. Each survey shows the payout amount upfront, typically ranging from $0.50 to $15 depending on length and complexity."
      },
      {
        question: "How long does it take to complete surveys?",
        answer: "Survey times vary from 5 minutes to 45 minutes. Each survey displays the estimated time and payout before you start. Shorter surveys typically pay $0.50-$3, while longer market research surveys can pay $10-$15."
      }
    ],
    'earnings': [
      {
        question: "How much money can I realistically make?",
        answer: "Active users typically earn $50-$200 per month. Top performers with long streaks and consistent daily activity can earn $300+. Your earnings depend on survey availability, streak multipliers (up to 3x), and bonus activities."
      },
      {
        question: "When and how do I get paid?",
        answer: "Instant cashout available for balances over $10 via PayPal or CashApp. Payments typically process within 2-24 hours. Premium users (earned through achievements) get instant cashouts with no minimum threshold!"
      },
      {
        question: "What are streak multipliers and how do they work?",
        answer: "Daily login streaks boost your earnings! 5+ days = 2x multiplier, 10+ days = 3x multiplier on all survey payouts. Miss a day and your streak resets, so consistency is key to maximizing earnings."
      },
      {
        question: "Can I really withdraw to PayPal and CashApp?",
        answer: "Absolutely! We support instant withdrawals to PayPal, CashApp, and direct bank transfer. Over $2.3M paid out to users since launch. All transactions are secure and tracked in your wallet history."
      }
    ],
    'rewards': [
      {
        question: "How does the daily spin wheel work?",
        answer: "Every 24 hours, you get one free spin on our 8-segment wheel! Win cash bonuses ($0.25-$10), survey multipliers, streak shields (protect your streak for one day), or bonus spins. Premium members get 2 spins daily!"
      },
      {
        question: "What can I win on the spin wheel?",
        answer: "The wheel has 8 rewards: Cash ($0.25, $1, $2.50, $5, $10), 2x Survey Multiplier, Streak Shield, and Bonus Spin. Higher-tier users have better odds at larger cash prizes and premium rewards."
      },
      {
        question: "What are achievement badges and how do I unlock them?",
        answer: "Badges unlock as you hit milestones: First Survey, 10-Day Streak, $100 Earned, Survey Master (50 surveys), and more! Each badge comes with a cash bonus and unlocks new features or better spin wheel odds."
      }
    ],
    'security': [
      {
        question: "Is my personal information secure?",
        answer: "Yes! We use bank-grade encryption and never sell personal data to third parties. Survey responses are anonymized and aggregated. We're GDPR compliant and regularly audited for security. Your privacy is our priority."
      },
      {
        question: "How do I know this isn't a scam?",
        answer: "We're a registered business with 50K+ active users and $2.3M+ paid out since 2023. Check our Trustpilot reviews (4.6/5 stars), BBB rating (A+), and social media for real user testimonials. Transparent payouts, no hidden fees."
      },
      {
        question: "Why do you pay users to take surveys?",
        answer: "Market research companies pay us for quality survey responses, and we share that revenue with you! It's a win-win: businesses get valuable consumer insights, you get paid for your time and opinions."
      }
    ],
    'leaderboard': [
      {
        question: "How does the leaderboard ranking work?",
        answer: "Rankings are based on total monthly earnings combined with consistency metrics. Top 10 users each month win bonus cash prizes ($100 for #1, $50 for #2-3, $25 for #4-10). Leaderboard resets monthly for fair competition!"
      },
      {
        question: "What are the monthly leaderboard prizes?",
        answer: "Monthly prizes: 1st Place: $100 + Crown Badge, 2nd-3rd: $50 + Gold Badge, 4th-10th: $25 + Silver Badge. Plus, top 3 get featured user spotlight and premium perks for the following month!"
      },
      {
        question: "Can I see other users' earnings?",
        answer: "Leaderboards show rankings and monthly totals only - never personal info or lifetime earnings. You can opt out of leaderboard display in privacy settings while still being eligible for prizes."
      }
    ],
    'account': [
      {
        question: "How do I update my profile or payment info?",
        answer: "Visit your profile page to update personal info, add/change payout methods, adjust notification preferences, and view your achievement progress. Changes to payment info are verified within 24 hours for security."
      },
      {
        question: "Can I refer friends and family?",
        answer: "Yes! Earn $10 for each friend who joins and completes their first survey. Your friend gets a $5 welcome bonus too! No limit on referrals. Track your referral earnings in the 'Refer & Earn' section."
      },
      {
        question: "What if I have technical issues or disputes?",
        answer: "Contact support via in-app chat (24/7), email, or help center. Most issues resolved within 2 hours. For survey disputes or technical problems, we investigate and often provide compensation for your time."
      }
    ]
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const currentFaqs = faqData[activeCategory] || [];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
      color: '#ffffff',
      paddingBottom: '80px'
    },
    hero: {
      background: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #F59E0B 100%)',
      padding: '120px 16px 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
      fontWeight: '800',
      marginBottom: '24px',
      background: 'linear-gradient(45deg, #ffffff, #f0f9ff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      textShadow: '0 4px 8px rgba(0,0,0,0.3)',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 4vw, 1.25rem)',
      color: '#ffffff',
      marginBottom: '32px',
      opacity: 0.95,
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: '1.6'
    },
    heroDecorations: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: '3rem',
      opacity: 0.2,
      animation: 'float 3s ease-in-out infinite'
    },
    categoryTabs: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 16px 0',
      overflowX: 'auto',
      display: 'flex',
      gap: '12px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },
    categoryTab: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: '50px',
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      fontSize: '14px',
      fontWeight: '500',
      minHeight: '44px'
    },
    categoryTabActive: {
      background: 'linear-gradient(135deg, #10B981, #059669)',
      borderColor: '#10B981',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
    },
    mainContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 16px'
    },
    faqItem: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      marginBottom: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    },
    faqItemExpanded: {
      background: 'rgba(16, 185, 129, 0.1)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)'
    },
    faqQuestion: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      color: '#ffffff',
      minHeight: '44px',
      gap: '12px'
    },
    faqAnswer: {
      padding: '0 20px 20px',
      fontSize: '15px',
      lineHeight: '1.6',
      color: 'rgba(255,255,255,0.8)',
      animation: 'slideDown 0.3s ease-out'
    },
    quickActions: {
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '20px',
      padding: '32px 24px',
      margin: '40px 16px 0',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)'
    },
    quickActionsTitle: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '16px',
      color: '#ffffff'
    },
    quickActionsText: {
      fontSize: '16px',
      color: 'rgba(255,255,255,0.8)',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    actionButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    actionButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '16px 24px',
      background: 'linear-gradient(135deg, #10B981, #059669)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minHeight: '44px',
      textDecoration: 'none'
    },
    actionButtonSecondary: {
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    floatingHelp: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '56px',
      height: '56px',
      background: 'linear-gradient(135deg, #10B981, #059669)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
      zIndex: 1000,
      animation: 'pulse 2s infinite'
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <ScrollReveal>
        <div style={styles.hero}>
          <div style={styles.heroDecorations}>🎯💰🏆</div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Frequently Asked Questions</h1>
            <p style={styles.heroSubtitle}>
              Get answers to common questions about earning cash rewards, payouts, streaks, and more. 
              Start maximizing your earnings today!
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Category Navigation */}
      <ScrollReveal>
        <div style={styles.categoryTabs}>
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TiltCard key={category.id}>
                <div
                  style={{
                    ...styles.categoryTab,
                    ...(activeCategory === category.id ? styles.categoryTabActive : {})
                  }}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setExpandedFaq(null);
                  }}
                >
                  <IconComponent size={18} style={{ color: category.color }} />
                  {category.name}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </ScrollReveal>

      {/* FAQ Content */}
      <div style={styles.mainContent}>
        <ScrollReveal>
          {currentFaqs.map((faq, index) => (
            <GlowEffect key={index} color="#10B981">
              <div
                style={{
                  ...styles.faqItem,
                  ...(expandedFaq === index ? styles.faqItemExpanded : {})
                }}
              >
                <div
                  style={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp size={20} style={{ color: '#10B981', flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={20} style={{ color: '#10B981', flexShrink: 0 }} />
                  )}
                </div>
                {expandedFaq === index && (
                  <div style={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                )}
              </div>
            </GlowEffect>
          ))}
        </ScrollReveal>
      </div>

      {/* Quick Actions */}
      <ScrollReveal>
        <TiltCard>
          <div style={styles.quickActions}>
            <h3 style={styles.quickActionsTitle}>Still Have Questions?</h3>
            <p style={styles.quickActionsText}>
              Our support team is here to help! Get instant answers through live chat 
              or browse our detailed help center for step-by-step guides.
            </p>
            <div style={styles.actionButtons}>
              <GlowEffect color="#10B981">
                <button style={styles.actionButton}>
                  <HelpCircle size={20} />
                  Contact Support
                </button>
              </GlowEffect>
              <button style={{...styles.actionButton, ...styles.actionButtonSecondary}}>
                <Award size={20} />
                Visit Help Center
              </button>
            </div>
          </div>
        </TiltCard>
      </ScrollReveal>

      {/* Floating Help Button */}
      <div style={styles.floatingHelp}>
        <HelpCircle size={24} color="#ffffff" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .categoryTabs::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 768px) {
          .actionButtons {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default FaqPage;