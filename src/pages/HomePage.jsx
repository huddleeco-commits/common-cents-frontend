import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Gift, Award, TrendingUp, Users, Star, Crown, Zap } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';

const HomePage = () => {
  const [confetti, setConfetti] = useState(false);

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  const achievements = [
    { icon: Crown, title: "Survey Master", desc: "Complete 50 surveys", progress: 74, color: "#fbbf24" },
    { icon: Zap, title: "Speed Demon", desc: "Complete survey in <2min", progress: 100, color: "#10b981" },
    { icon: Star, title: "Streak King", desc: "7 day login streak", progress: 42, color: "#8b5cf6" }
  ];

  const stats = [
    { value: 500000, suffix: "+ Members", icon: Users },
    { value: 2.5, suffix: "M Paid Out", icon: DollarSign, prefix: "$" },
    { value: 98, suffix: "% Satisfaction", icon: Star }
  ];

  const confettiStyle = confetti ? {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 1000,
    animation: 'confettiFade 3s ease-out forwards'
  } : {};

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0a0a1a 100%)',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      
      {/* Confetti Effect */}
      {confetti && <div style={confettiStyle}></div>}

      {/* Hero Section */}
      <section style={{
        padding: '60px 20px 80px',
        textAlign: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, transparent 50%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        
        {/* Floating Achievement Badges */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          animation: 'float 6s ease-in-out infinite',
          display: window.innerWidth < 768 ? 'none' : 'block'
        }}>
          <div style={{
            background: 'rgba(16,185,129,0.2)',
            border: '2px solid #10b981',
            borderRadius: '12px',
            padding: '8px 12px',
            fontSize: '14px',
            backdropFilter: 'blur(10px)'
          }}>
            +$25 earned today! 🎉
          </div>
        </div>

        <div style={{
          position: 'absolute',
          top: '30%',
          left: '5%',
          animation: 'float 4s ease-in-out infinite reverse',
          display: window.innerWidth < 768 ? 'none' : 'block'
        }}>
          <div style={{
            background: 'rgba(251,191,36,0.2)',
            border: '2px solid #fbbf24',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            backdropFilter: 'blur(10px)'
          }}>
            🏆
          </div>
        </div>

        <div style={{
          marginBottom: '24px',
          animation: 'glow 2s ease-in-out infinite alternate'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #10b981, #fbbf24)',
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            margin: '0 auto 24px',
            boxShadow: '0 10px 30px rgba(16,185,129,0.3)'
          }}>
            💰
          </div>
        </div>

        <h1 style={{
          fontSize: window.innerWidth < 768 ? '36px' : '56px',
          fontWeight: '800',
          marginBottom: '24px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          background: 'linear-gradient(135deg, #ffffff, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.2'
        }}>
          Turn Your Time Into
          <br />
          <span style={{ color: '#10b981' }}>Cold Hard Cash</span>
        </h1>

        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          opacity: 0.9,
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Complete surveys, spin the wheel daily, and earn real money. 
          Join <strong style={{ color: '#10b981' }}>500,000+</strong> members already cashing out!
        </p>

        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          gap: '16px',
          marginBottom: '60px'
        }}>
          <GlowEffect color="#10b981">
            <Link to="/earn" style={{ textDecoration: 'none' }}>
              <button 
                onClick={triggerConfetti}
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 32px',
                  fontSize: '18px',
                  fontWeight: '700',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(16,185,129,0.4)',
                  minWidth: '200px',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 30px rgba(16,185,129,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 20px rgba(16,185,129,0.4)';
                }}
              >
                <DollarSign size={20} />
                Start Earning Now
                <ArrowRight size={20} />
              </button>
            </Link>
          </GlowEffect>

          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.2)',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '200px',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
            }}
            >
              Try Demo Dashboard
            </button>
          </Link>
        </div>

        {/* Stats Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
          maxWidth: '800px',
          width: '100%'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <stat.icon size={32} style={{ 
                color: '#10b981', 
                marginBottom: '12px',
                filter: 'drop-shadow(0 2px 4px rgba(16,185,129,0.3))'
              }} />
              <div style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#10b981',
                marginBottom: '4px'
              }}>
                <AnimatedCounter 
                  end={stat.value} 
                  prefix={stat.prefix || ''} 
                  suffix={stat.suffix} 
                  duration={2000} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works - Gamified */}
      <ScrollReveal>
        <section style={{
          padding: '80px 20px',
          background: 'rgba(16,185,129,0.05)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: window.innerWidth < 768 ? '32px' : '42px',
              fontWeight: '800',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Level Up Your Earnings
            </h2>
            <p style={{
              fontSize: '18px',
              opacity: 0.8,
              marginBottom: '60px',
              maxWidth: '600px',
              margin: '0 auto 60px'
            }}>
              Three simple steps to start earning. It's like gaming, but you get paid!
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
              gap: '32px'
            }}>
              {[
                { step: 1, icon: '📝', title: 'Complete Surveys', desc: 'Answer quick surveys and earn $1-$5 each', color: '#10b981' },
                { step: 2, icon: '🎰', title: 'Spin Daily Wheel', desc: 'Daily bonus spins for extra cash and rewards', color: '#fbbf24' },
                { step: 3, icon: '💸', title: 'Cash Out Instantly', desc: 'PayPal, CashApp, or gift cards - your choice!', color: '#8b5cf6' }
              ].map((item, index) => (
                <TiltCard key={index}>
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    padding: '40px 24px',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      background: item.color,
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: '800',
                      color: 'white'
                    }}>
                      {item.step}
                    </div>
                    
                    <div style={{
                      fontSize: '48px',
                      marginBottom: '20px'
                    }}>
                      {item.icon}
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      marginBottom: '16px',
                      color: item.color
                    }}>
                      {item.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '16px',
                      opacity: 0.8,
                      lineHeight: '1.5'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Achievement Showcase */}
      <ScrollReveal>
        <section style={{
          padding: '80px 20px',
          background: 'linear-gradient(135deg, rgba(251,191,36,0.1) 0%, transparent 50%)'
        }}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: window.innerWidth < 768 ? '32px' : '42px',
              fontWeight: '800',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Unlock Epic Rewards
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: '40px'
            }}>
              {achievements.map((achievement, index) => (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      background: achievement.color,
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 12px ${achievement.color}40`
                    }}>
                      <achievement.icon size={20} color="white" />
                    </div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#ffffff'
                    }}>
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <p style={{
                    fontSize: '14px',
                    opacity: 0.7,
                    marginBottom: '16px'
                  }}>
                    {achievement.desc}
                  </p>
                  
                  {/* Progress Bar */}
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    height: '8px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      background: `linear-gradient(90deg, ${achievement.color}, ${achievement.color}cc)`,
                      width: `${achievement.progress}%`,
                      height: '100%',
                      borderRadius: '10px',
                      transition: 'width 2s ease-out',
                      boxShadow: `0 0 10px ${achievement.color}60`
                    }}></div>
                  </div>
                  
                  <div style={{
                    fontSize: '12px',
                    color: achievement.color,
                    fontWeight: '600',
                    marginTop: '8px'
                  }}>
                    {achievement.progress}% Complete
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(251,191,36,0.1) 100%)'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: window.innerWidth < 768 ? '32px' : '42px',
            fontWeight: '800',
            marginBottom: '24px',
            color: '#ffffff'
          }}>
            Ready to Start Earning?
          </h2>
          
          <p style={{
            fontSize: '18px',
            opacity: 0.8,
            marginBottom: '40px'
          }}>
            Join thousands earning $200+ per month in their spare time
          </p>
          
          <GlowEffect color="#10b981">
            <Link to="/earn" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                border: 'none',
                padding: '20px 48px',
                fontSize: '20px',
                fontWeight: '700',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(16,185,129,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 12px 48px rgba(16,185,129,0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 32px rgba(16,185,129,0.4)';
              }}
              >
                <Gift size={24} />
                Claim Your $5 Bonus
                <ArrowRight size={24} />
              </button>
            </Link>
          </GlowEffect>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 10px 30px rgba(16,185,129,0.3); }
          100% { box-shadow: 0 15px 40px rgba(16,185,129,0.6); }
        }
        
        @keyframes confettiFade {
          0% { 
            opacity: 1; 
            background: radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(251,191,36,0.3) 30%, transparent 70%);
          }
          100% { 
            opacity: 0; 
            background: radial-gradient(circle, transparent 0%, transparent 70%);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;