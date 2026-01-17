import React, { useState, useEffect } from 'react';
import { Crown, Trophy, Medal, TrendingUp, Filter, Award } from 'lucide-react';
import { ScrollReveal, AnimatedCounter } from '../effects';

const LeaderboardPage = () => {
  const [activeFilter, setActiveFilter] = useState('This Week');
  const [showConfetti, setShowConfetti] = useState(false);

  const filters = ['Today', 'This Week', 'This Month', 'All Time'];

  const leaderboardData = [
    { rank: 1, username: 'CashMaster2024', earnings: 2847.50, avatar: '👑', streak: 28 },
    { rank: 2, username: 'SurveyKing', earnings: 2103.25, avatar: '🏆', streak: 21 },
    { rank: 3, username: 'RewardHunter', earnings: 1876.75, avatar: '🥉', streak: 19 },
    { rank: 4, username: 'MoneyMaker', earnings: 1654.30, avatar: '💎', streak: 15 },
    { rank: 5, username: 'EarnEagle', earnings: 1432.80, avatar: '🦅', streak: 12 },
    { rank: 6, username: 'CashCrusher', earnings: 1287.45, avatar: '⚡', streak: 18 },
    { rank: 7, username: 'SurveyPro', earnings: 1156.90, avatar: '🎯', streak: 9 },
    { rank: 8, username: 'RewardRacer', earnings: 1043.25, avatar: '🚀', streak: 11 },
    { rank: 9, username: 'MoneyMaven', earnings: 987.60, avatar: '💰', streak: 7 },
    { rank: 10, username: 'CashCollector', earnings: 876.35, avatar: '🔥', streak: 14 },
    { rank: 47, username: 'YOU', earnings: 234.80, avatar: '😊', streak: 3, isCurrentUser: true },
  ];

  const currentUser = leaderboardData.find(user => user.isCurrentUser);
  const topUsers = leaderboardData.slice(0, 10);

  const getPodiumHeight = (rank) => {
    if (rank === 1) return '120px';
    if (rank === 2) return '100px';
    if (rank === 3) return '80px';
    return '60px';
  };

  const getPodiumColor = (rank) => {
    if (rank === 1) return 'linear-gradient(135deg, #FFD700, #FFA500)';
    if (rank === 2) return 'linear-gradient(135deg, #C0C0C0, #A8A8A8)';
    if (rank === 3) return 'linear-gradient(135deg, #CD7F32, #B87333)';
    return '#1a1a2e';
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)', 
      color: '#ffffff',
      paddingBottom: '100px'
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
          opacity: 0.8,
          animation: 'confettiFall 3s ease-out forwards'
        }}>
          <style>
            {`
              @keyframes confettiFall {
                0% { transform: translateY(-100vh); opacity: 1; }
                100% { transform: translateY(100vh); opacity: 0; }
              }
            `}
          </style>
        </div>
      )}

      {/* Header */}
      <div style={{
        position: 'sticky',
        top: 0,
        background: 'rgba(10, 10, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
        padding: '20px 16px',
        zIndex: 100
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <Trophy style={{ marginRight: '12px', color: '#10B981' }} size={24} />
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            margin: 0,
            background: 'linear-gradient(135deg, #10B981, #FFD700)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Leaderboard
          </h1>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '8px',
          paddingBottom: '8px'
        }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                background: activeFilter === filter 
                  ? 'linear-gradient(135deg, #10B981, #059669)' 
                  : 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeFilter === filter 
                  ? '0 0 20px rgba(16, 185, 129, 0.3)' 
                  : 'none'
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 16px' }}>
        {/* Top 3 Podium */}
        <ScrollReveal>
          <div style={{
            padding: '40px 0',
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {/* Second Place */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #C0C0C0, #A8A8A8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 12px',
                border: '3px solid #C0C0C0',
                position: 'relative'
              }}>
                {topUsers[1]?.avatar}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#C0C0C0',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#000'
                }}>
                  2
                </div>
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                {topUsers[1]?.username}
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#10B981' }}>
                ${topUsers[1]?.earnings.toLocaleString()}
              </div>
              <div style={{
                height: getPodiumHeight(2),
                background: getPodiumColor(2),
                borderRadius: '8px 8px 0 0',
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Medal color="#C0C0C0" size={24} />
              </div>
            </div>

            {/* First Place */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                margin: '0 auto 12px',
                border: '4px solid #FFD700',
                position: 'relative',
                animation: 'pulse 2s infinite'
              }}>
                {topUsers[0]?.avatar}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  background: '#FFD700',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#000'
                }}>
                  1
                </div>
              </div>
              <Crown style={{ color: '#FFD700', margin: '0 auto 8px' }} size={20} />
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
                {topUsers[0]?.username}
              </div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#10B981' }}>
                $<AnimatedCounter end={Math.floor(topUsers[0]?.earnings)} duration={2000} />
              </div>
              <div style={{
                height: getPodiumHeight(1),
                background: getPodiumColor(1),
                borderRadius: '8px 8px 0 0',
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Crown color="#FFD700" size={32} />
              </div>
            </div>

            {/* Third Place */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #CD7F32, #B87333)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                margin: '0 auto 12px',
                border: '3px solid #CD7F32',
                position: 'relative'
              }}>
                {topUsers[2]?.avatar}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#CD7F32',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#fff'
                }}>
                  3
                </div>
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                {topUsers[2]?.username}
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#10B981' }}>
                ${topUsers[2]?.earnings.toLocaleString()}
              </div>
              <div style={{
                height: getPodiumHeight(3),
                background: getPodiumColor(3),
                borderRadius: '8px 8px 0 0',
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Award color="#CD7F32" size={24} />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Rankings List */}
        <ScrollReveal>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            {topUsers.slice(3).map((user, index) => (
              <div
                key={user.rank}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px',
                  height: '60px',
                  borderBottom: index < topUsers.slice(3).length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                  background: user.isCurrentUser 
                    ? 'rgba(16, 185, 129, 0.1)' 
                    : index % 2 === 0 
                      ? 'rgba(255, 255, 255, 0.02)' 
                      : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(16, 185, 129, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = user.isCurrentUser 
                    ? 'rgba(16, 185, 129, 0.1)' 
                    : index % 2 === 0 
                      ? 'rgba(255, 255, 255, 0.02)' 
                      : 'transparent';
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: user.rank <= 10 
                    ? 'linear-gradient(135deg, #10B981, #059669)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700',
                  marginRight: '12px'
                }}>
                  #{user.rank}
                </div>
                
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  marginRight: '12px',
                  border: '2px solid rgba(16, 185, 129, 0.3)'
                }}>
                  {user.avatar}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {user.username}
                    {user.isCurrentUser && (
                      <span style={{
                        background: 'linear-gradient(135deg, #10B981, #059669)',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: '700',
                        textTransform: 'uppercase'
                      }}>
                        YOU
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    🔥 {user.streak} day streak
                  </div>
                </div>

                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#10B981',
                  textAlign: 'right'
                }}>
                  ${user.earnings.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid rgba(16, 185, 129, 0.1)'
          }}>
            <TrendingUp style={{ color: '#10B981', marginBottom: '8px' }} size={24} />
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981' }}>
              <AnimatedCounter end={47} duration={1500} />
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
              Your Rank
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid rgba(255, 215, 0, 0.1)'
          }}>
            <Trophy style={{ color: '#FFD700', marginBottom: '8px' }} size={24} />
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#FFD700' }}>
              <AnimatedCounter end={2847} duration={2000} />
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
              Top Earner
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Card */}
      <div style={{
        position: 'fixed',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'linear-gradient(135deg, #10B981, #059669)',
        borderRadius: '20px',
        padding: '12px 24px',
        boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)',
        zIndex: 50,
        maxWidth: '300px',
        width: 'calc(100% - 32px)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>
              Your Rank: #{currentUser?.rank}
            </div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>
              ${currentUser?.earnings.toFixed(2)} earned
            </div>
          </div>
          <button
            onClick={triggerConfetti}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '12px',
              padding: '8px 12px',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            🎉 Celebrate
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>
    </div>
  );
};

export default LeaderboardPage;