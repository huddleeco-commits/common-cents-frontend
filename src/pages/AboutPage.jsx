import React from 'react';
import { ScrollReveal, AnimatedCounter, StaggeredList, GlowEffect } from '../effects';
import { Award, Shield, Zap, Users, Target, Trophy, Star, Gift, DollarSign, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Your data is protected with bank-level security. Every reward earned is guaranteed and paid out within 24 hours."
    },
    {
      icon: Zap,
      title: "Instant Gratification",
      description: "No waiting weeks for rewards. Complete surveys, spin the wheel, and see your earnings grow in real-time."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Join millions of earners competing on leaderboards and celebrating achievements together."
    },
    {
      icon: Target,
      title: "Fair Opportunities",
      description: "Everyone gets equal access to surveys and rewards. Your time is valuable, and we pay what it's worth."
    }
  ];

  const achievements = [
    { icon: Trophy, label: "Survey Master", count: "50K+ Users" },
    { icon: Star, label: "Daily Streaks", count: "1M+ Days" },
    { icon: Gift, label: "Rewards Given", count: "$2.5M+" },
    { icon: Sparkles, label: "Spin Winners", count: "500K+" }
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former fintech exec who believes everyone deserves to earn from their time online.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      bio: "Game designer turned rewards architect, obsessed with creating addictive earning experiences.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      name: "Elena Kowalski",
      role: "Chief Technology Officer",
      bio: "Security expert ensuring your data stays safe while you earn real cash rewards.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#0a0a1a', 
      color: '#ffffff', 
      minHeight: '100vh',
      fontFamily: "'Inter', system-ui, sans-serif" 
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%)',
        padding: '80px 16px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'conic-gradient(from 0deg, #10B981 0deg 45deg, #fbbf24 45deg 90deg, #10B981 90deg 135deg, #fbbf24 135deg 180deg, #10B981 180deg 225deg, #fbbf24 225deg 270deg, #10B981 270deg 315deg, #fbbf24 315deg 360deg)',
          borderRadius: '50%',
          opacity: 0.3,
          animation: 'spinSlow 20s linear infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'conic-gradient(from 45deg, #10B981 0deg 45deg, #fbbf24 45deg 90deg, #10B981 90deg 135deg, #fbbf24 135deg 180deg, #10B981 180deg 225deg, #fbbf24 225deg 270deg, #10B981 270deg 315deg, #fbbf24 315deg 360deg)',
          borderRadius: '50%',
          opacity: 0.2,
          animation: 'spinSlow 15s linear infinite reverse'
        }} />

        <ScrollReveal>
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '24px',
              gap: '12px'
            }}>
              <DollarSign style={{ color: '#10B981', fontSize: '32px' }} />
              <Sparkles style={{ color: '#fbbf24', fontSize: '28px' }} />
              <Trophy style={{ color: '#10B981', fontSize: '32px' }} />
            </div>
            
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '800',
              marginBottom: '24px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              background: 'linear-gradient(135deg, #ffffff 0%, #10B981 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2'
            }}>
              Turn Your Time Into Real Cash Rewards
            </h1>
            
            <p style={{
              fontSize: '20px',
              marginBottom: '40px',
              opacity: 0.9,
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              We're on a mission to reward every minute you spend online. Join millions earning real money through surveys, games, and daily activities.
            </p>

            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '24px',
              alignItems: 'center',
              '@media (min-width: 640px)': {
                flexDirection: 'row',
                justifyContent: 'center'
              }
            }}>
              <GlowEffect color="#10B981">
                <button style={{
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  color: '#ffffff',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  minHeight: '56px',
                  minWidth: '200px',
                  boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  Start Earning Today
                </button>
              </GlowEffect>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
                opacity: 0.8
              }}>
                <Shield size={20} style={{ color: '#10B981' }} />
                <span>100% Free • No Hidden Fees</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <style>{`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={{
          padding: '60px 16px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderTop: '1px solid rgba(16, 185, 129, 0.2)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#10B981', marginBottom: '8px' }}>
                  <AnimatedCounter end={5} suffix="M+" duration={2000} />
                </div>
                <div style={{ fontSize: '16px', opacity: 0.8 }}>Active Earners</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#fbbf24', marginBottom: '8px' }}>
                  $<AnimatedCounter end={15} suffix="M+" duration={2500} />
                </div>
                <div style={{ fontSize: '16px', opacity: 0.8 }}>Paid Out</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#10B981', marginBottom: '8px' }}>
                  <AnimatedCounter end={50} suffix="K+" duration={2200} />
                </div>
                <div style={{ fontSize: '16px', opacity: 0.8 }}>Daily Surveys</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#fbbf24', marginBottom: '8px' }}>
                  <AnimatedCounter end={98} suffix="%" duration={1800} />
                </div>
                <div style={{ fontSize: '16px', opacity: 0.8 }}>Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mission Statement */}
      <section style={{
        padding: '100px 16px',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
        textAlign: 'center'
      }}>
        <ScrollReveal>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <blockquote style={{
              fontSize: 'clamp(24px, 4vw, 42px)',
              fontWeight: '600',
              lineHeight: '1.4',
              marginBottom: '32px',
              background: 'linear-gradient(135deg, #ffffff 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
              position: 'relative'
            }}>
              "Every minute you spend online has value. We're here to make sure you get paid for it."
            </blockquote>
            <div style={{
              fontSize: '18px',
              opacity: 0.7,
              fontWeight: '500'
            }}>
              — Sarah Chen, CEO & Founder
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Values Section */}
      <ScrollReveal>
        <section style={{
          padding: '80px 16px',
          background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '60px',
              background: 'linear-gradient(135deg, #ffffff 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Our Core Values
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} style={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                    alignItems: window.innerWidth < 768 ? 'center' : 'flex-start',
                    gap: '24px',
                    padding: '32px',
                    background: 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '16px',
                    textAlign: window.innerWidth < 768 ? 'center' : 'left'
                  }}>
                    <div style={{
                      minWidth: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #10B981, #059669)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)'
                    }}>
                      <IconComponent size={36} color="#ffffff" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        marginBottom: '12px',
                        color: '#ffffff'
                      }}>
                        {value.title}
                      </h3>
                      <p style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        opacity: 0.8
                      }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Achievements Grid */}
      <ScrollReveal>
        <section style={{
          padding: '80px 16px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a1a 100%)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '60px',
              background: 'linear-gradient(135deg, #fbbf24 0%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Platform Achievements
            </h2>

            <StaggeredList 
              items={achievements}
              renderItem={(achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <GlowEffect key={index} color="#fbbf24">
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                      border: '1px solid rgba(251, 191, 36, 0.3)',
                      borderRadius: '20px',
                      padding: '32px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: '0 8px 32px rgba(251, 191, 36, 0.3)'
                      }}>
                        <IconComponent size={28} color="#ffffff" />
                      </div>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: '#ffffff'
                      }}>
                        {achievement.label}
                      </h3>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#fbbf24'
                      }}>
                        {achievement.count}
                      </div>
                    </div>
                  </GlowEffect>
                );
              }}
            />
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section */}
      <ScrollReveal>
        <section style={{
          padding: '80px 16px',
          background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '60px',
              background: 'linear-gradient(135deg, #ffffff 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Meet the Team
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              {teamMembers.map((member, index) => (
                <div key={index} style={{
                  background: 'rgba(16, 185, 129, 0.05)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '20px',
                  padding: '32px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    margin: '0 auto 20px',
                    border: '4px solid #10B981'
                  }} />
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#ffffff'
                  }}>
                    {member.name}
                  </h3>
                  <div style={{
                    fontSize: '14px',
                    color: '#10B981',
                    fontWeight: '500',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {member.role}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    opacity: 0.8
                  }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section style={{
          padding: '100px 16px',
          background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
          textAlign: 'center',
          borderTop: '1px solid rgba(16, 185, 129, 0.2)'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '700',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Ready to Start Earning?
            </h2>
            
            <p style={{
              fontSize: '18px',
              marginBottom: '40px',
              opacity: 0.8,
              lineHeight: '1.6'
            }}>
              Join millions of users turning their time into real cash rewards. Start with your first survey today.
            </p>

            <GlowEffect color="#10B981">
              <button style={{
                background: 'linear-gradient(135deg, #10B981, #059669)',
                color: '#ffffff',
                padding: '20px 40px',
                fontSize: '18px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                minHeight: '60px',
                minWidth: '200px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
                transition: 'all 0.3s ease'
              }}>
                Get Started Now
              </button>
            </GlowEffect>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '32px',
              fontSize: '14px',
              opacity: 0.7
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={16} style={{ color: '#10B981' }} />
                <span>Secure</span>
              </div>
              <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={16} style={{ color: '#fbbf24' }} />
                <span>Instant Payouts</span>
              </div>
              <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Gift size={16} style={{ color: '#10B981' }} />
                <span>Free to Join</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default AboutPage;