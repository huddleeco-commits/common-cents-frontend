import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Zap, Target, Gift, Clock, Flame, Trophy, Sparkles, ChevronRight, Star, TrendingUp } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';

const DashboardPage = () => {
  const [balance, setBalance] = useState(127.45);
  const [streak, setStreak] = useState(7);
  const [todayEarnings, setTodayEarnings] = useState(12.30);
  const [showConfetti, setShowConfetti] = useState(false);
  const [wheelSpinning, setWheelSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);

  const achievements = [
    { id: 1, title: 'First Survey', icon: Star, unlocked: true, date: '2 days ago' },
    { id: 2, title: 'Week Warrior', icon: Flame, unlocked: true, date: '1 day ago' },
    { id: 3, title: 'High Roller', icon: Trophy, unlocked: false, progress: 80 }
  ];

  const recentActivity = [
    { id: 1, type: 'survey', title: 'Shopping Habits Survey', amount: 3.50, time: '2 hours ago' },
    { id: 2, type: 'spin', title: 'Daily Spin Bonus', amount: 1.25, time: '1 day ago' },
    { id: 3, type: 'bonus', title: 'Login Streak Bonus', amount: 2.00, time: '1 day ago' },
    { id: 4, type: 'survey', title: 'Food Preferences Survey', amount: 5.75, time: '2 days ago' },
    { id: 5, type: 'referral', title: 'Friend Referral Bonus', amount: 10.00, time: '3 days ago' }
  ];

  const spinWheel = () => {
    if (wheelSpinning) return;
    
    setWheelSpinning(true);
    const spins = 5 + Math.random() * 5;
    const finalRotation = wheelRotation + (spins * 360) + (Math.random() * 360);
    setWheelRotation(finalRotation);
    
    setTimeout(() => {
      setWheelSpinning(false);
      setShowConfetti(true);
      const winAmount = Math.random() < 0.7 ? 0.5 + Math.random() * 2 : 5 + Math.random() * 10;
      setBalance(prev => prev + winAmount);
      setTodayEarnings(prev => prev + winAmount);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 3000);
  };

  const getStreakMultiplier = () => {
    if (streak >= 10) return '3x';
    if (streak >= 5) return '2x';
    return '1x';
  };

  return (
    <div style={{
      backgroundColor: '#0a0a1a',
      color: '#ffffff',
      minHeight: '100vh',
      paddingBottom: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Confetti Effect */}
      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1000,
          background: `
            radial-gradient(circle at 20% 80%, #10B981 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #FFD700 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #10B981 0%, transparent 50%)
          `,
          animation: 'confetti 3s ease-out forwards'
        }} />
      )}

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)',
        padding: '20px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '8px',
            background: 'linear-gradient(135deg, #10B981 0%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Your Earnings Dashboard
          </h1>
          <p style={{ opacity: 0.8, fontSize: '14px' }}>
            Keep earning, keep growing! 🚀
          </p>
        </div>
      </div>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {/* Balance Card */}
        <ScrollReveal>
          <TiltCard>
            <div style={{
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              borderRadius: '20px',
              padding: '32px 24px',
              textAlign: 'center',
              margin: '24px 0',
              boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                animation: 'pulse 3s ease-in-out infinite'
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <DollarSign style={{ width: '32px', height: '32px', marginBottom: '12px' }} />
                <div style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px' }}>
                  <AnimatedCounter end={balance} prefix="$" duration={2000} decimals={2} />
                </div>
                <p style={{ opacity: 0.9, fontSize: '16px' }}>Total Balance</p>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Stats Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{
            flex: '1',
            minWidth: '150px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <TrendingUp style={{ width: '24px', height: '24px', color: '#10B981', marginBottom: '12px', margin: '0 auto' }} />
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981', marginBottom: '4px' }}>
              <AnimatedCounter end={todayEarnings} prefix="$" duration={1500} decimals={2} />
            </div>
            <p style={{ fontSize: '14px', opacity: 0.8 }}>Today's Earnings</p>
          </div>

          <div style={{
            flex: '1',
            minWidth: '150px',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
              <Flame style={{ width: '24px', height: '24px', color: '#FFD700' }} />
            </div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#FFD700', marginBottom: '4px' }}>
              <AnimatedCounter end={streak} duration={1000} />
            </div>
            <p style={{ fontSize: '14px', opacity: 0.8 }}>
              Day Streak ({getStreakMultiplier()})
            </p>
          </div>
        </div>

        {/* Spin Wheel */}
        <ScrollReveal>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 30, 50, 0.8) 0%, rgba(20, 20, 40, 0.9) 100%)',
            borderRadius: '20px',
            padding: '24px',
            marginBottom: '24px',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#10B981' }}>
              Daily Spin Wheel 🎯
            </h3>
            
            <div style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              margin: '0 auto 24px'
            }}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: `conic-gradient(
                  #10B981 0deg 45deg,
                  #FFD700 45deg 90deg,
                  #10B981 90deg 135deg,
                  #FFD700 135deg 180deg,
                  #10B981 180deg 225deg,
                  #FFD700 225deg 270deg,
                  #10B981 270deg 315deg,
                  #FFD700 315deg 360deg
                )`,
                transform: `rotate(${wheelRotation}deg)`,
                transition: wheelSpinning ? 'transform 3s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
                position: 'relative',
                boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
              }}>
                {/* Wheel segments with text */}
                {[0.5, 1.0, 0.25, 2.0, 0.75, 5.0, 1.5, 10.0].map((amount, index) => (
                  <div key={index} style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${index * 45 + 22.5}deg) translateY(-70px)`,
                    transformOrigin: '0 0',
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '12px',
                    textAlign: 'center'
                  }}>
                    ${amount}
                  </div>
                ))}
              </div>
              
              {/* Pointer */}
              <div style={{
                position: 'absolute',
                top: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '20px solid #ffffff',
                zIndex: 10
              }} />
            </div>

            <GlowEffect color="#10B981">
              <button
                onClick={spinWheel}
                disabled={wheelSpinning}
                style={{
                  background: wheelSpinning 
                    ? 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)'
                    : 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '16px 32px',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: wheelSpinning ? 'not-allowed' : 'pointer',
                  minHeight: '48px',
                  opacity: wheelSpinning ? 0.6 : 1,
                  transform: 'translateZ(0)',
                  boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
                }}
              >
                {wheelSpinning ? 'Spinning...' : 'Spin to Win! 🎰'}
              </button>
            </GlowEffect>
          </div>
        </ScrollReveal>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <Link to="/earn" style={{ textDecoration: 'none' }}>
            <GlowEffect color="#10B981">
              <div style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.1) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'center',
                color: '#ffffff',
                minHeight: '48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <Target style={{ width: '28px', height: '28px', color: '#10B981', marginBottom: '8px' }} />
                <span style={{ fontWeight: '600' }}>Earn More</span>
              </div>
            </GlowEffect>
          </Link>

          <Link to="/rewards" style={{ textDecoration: 'none' }}>
            <GlowEffect color="#FFD700">
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 193, 7, 0.1) 100%)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'center',
                color: '#ffffff',
                minHeight: '48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <Gift style={{ width: '28px', height: '28px', color: '#FFD700', marginBottom: '8px' }} />
                <span style={{ fontWeight: '600' }}>Rewards</span>
              </div>
            </GlowEffect>
          </Link>

          <Link to="/wallet" style={{ textDecoration: 'none' }}>
            <GlowEffect color="#8B5CF6">
              <div style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'center',
                color: '#ffffff',
                minHeight: '48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <DollarSign style={{ width: '28px', height: '28px', color: '#8B5CF6', marginBottom: '8px' }} />
                <span style={{ fontWeight: '600' }}>Cash Out</span>
              </div>
            </GlowEffect>
          </Link>
        </div>

        {/* Achievements */}
        <ScrollReveal>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 30, 50, 0.8) 0%, rgba(20, 20, 40, 0.9) 100%)',
            borderRadius: '20px',
            padding: '24px',
            marginBottom: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFD700'
            }}>
              <Trophy style={{ width: '24px', height: '24px' }} />
              Recent Achievements
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {achievements.map(achievement => (
                <div key={achievement.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px',
                  background: achievement.unlocked 
                    ? 'rgba(16, 185, 129, 0.1)' 
                    : 'rgba(107, 114, 128, 0.1)',
                  borderRadius: '12px',
                  border: `1px solid ${achievement.unlocked ? 'rgba(16, 185, 129, 0.2)' : 'rgba(107, 114, 128, 0.2)'}`
                }}>
                  <achievement.icon style={{
                    width: '20px',
                    height: '20px',
                    color: achievement.unlocked ? '#10B981' : '#6B7280'
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>
                      {achievement.title}
                    </div>
                    {achievement.unlocked ? (
                      <div style={{ fontSize: '12px', opacity: 0.7 }}>
                        Unlocked {achievement.date}
                      </div>
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '4px',
                        background: 'rgba(107, 114, 128, 0.3)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${achievement.progress}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #10B981, #FFD700)',
                          borderRadius: '2px',
                          transition: 'width 0.5s ease'
                        }} />
                      </div>
                    )}
                  </div>
                  {achievement.unlocked && (
                    <Sparkles style={{ width: '16px', height: '16px', color: '#FFD700' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Recent Activity */}
        <ScrollReveal>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 30, 50, 0.8) 0%, rgba(20, 20, 40, 0.9) 100%)',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Clock style={{ width: '24px', height: '24px', color: '#10B981' }} />
              Recent Activity
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentActivity.map(activity => (
                <div key={activity.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>
                      {activity.title}
                    </div>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>
                      {activity.time}
                    </div>
                  </div>
                  <div style={{
                    color: '#10B981',
                    fontWeight: '700',
                    fontSize: '16px'
                  }}>
                    +${activity.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/earn" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '16px',
                padding: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '12px',
                color: '#10B981',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Earn More Cash
                <ChevronRight style={{ width: '16px', height: '16px' }} />
              </div>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style>
        {`
          @keyframes confetti {
            0% { opacity: 1; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.2); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
          }
        `}
      </style>
    </div>
  );
};

export default DashboardPage;