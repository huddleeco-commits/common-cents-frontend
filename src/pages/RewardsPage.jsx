import React, { useState, useEffect } from 'react';
import { Gift, Clock, Crown, Award, Zap, Users, Star, Flame, TrendingUp, Target, Shield } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';

const RewardsPage = () => {
  const [spinAvailable, setSpinAvailable] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinRotation, setSpinRotation] = useState(0);
  const [streak, setStreak] = useState(7);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeUntilSpin, setTimeUntilSpin] = useState(0);

  const wheelSegments = [
    { amount: 50, color: '#10B981' },
    { amount: 100, color: '#F59E0B' },
    { amount: 25, color: '#10B981' },
    { amount: 200, color: '#F59E0B' },
    { amount: 75, color: '#10B981' },
    { amount: 500, color: '#F59E0B' },
    { amount: 30, color: '#10B981' },
    { amount: 150, color: '#F59E0B' }
  ];

  const recentWinners = [
    { name: 'Alex M.', amount: 250, avatar: '👤' },
    { name: 'Sarah K.', amount: 100, avatar: '👤' },
    { name: 'Mike R.', amount: 500, avatar: '👤' },
    { name: 'Emma L.', amount: 75, avatar: '👤' },
    { name: 'Josh T.', amount: 200, avatar: '👤' }
  ];

  const achievements = [
    { icon: '🎯', name: 'First Spin', unlocked: true },
    { icon: '🔥', name: 'Hot Streak', unlocked: true },
    { icon: '💎', name: 'Big Winner', unlocked: false },
    { icon: '⚡', name: 'Speed Demon', unlocked: true },
    { icon: '🏆', name: 'Champion', unlocked: false },
    { icon: '🌟', name: 'Super Star', unlocked: true }
  ];

  useEffect(() => {
    if (!spinAvailable && timeUntilSpin > 0) {
      const timer = setInterval(() => {
        setTimeUntilSpin(prev => {
          if (prev <= 1) {
            setSpinAvailable(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [spinAvailable, timeUntilSpin]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSpin = () => {
    if (!spinAvailable || isSpinning) return;
    
    setIsSpinning(true);
    const randomRotation = 1440 + Math.random() * 1440; // 4-8 full rotations
    setSpinRotation(prev => prev + randomRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setShowConfetti(true);
      setSpinAvailable(false);
      setTimeUntilSpin(24 * 3600); // 24 hours
      
      setTimeout(() => setShowConfetti(false), 3000);
    }, 3000);
  };

  const getMultiplier = () => {
    if (streak >= 10) return '3x';
    if (streak >= 5) return '2x';
    return '1x';
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
      color: '#ffffff',
      padding: '20px 16px 100px',
      maxWidth: '500px',
      margin: '0 auto',
      position: 'relative'
    },
    hero: {
      textAlign: 'center',
      marginBottom: '40px',
      padding: '20px 0'
    },
    title: {
      fontSize: '28px',
      fontWeight: '800',
      marginBottom: '8px',
      background: 'linear-gradient(135deg, #10B981, #F59E0B)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: 'none'
    },
    subtitle: {
      fontSize: '16px',
      color: '#94a3b8',
      marginBottom: '30px'
    },
    wheelContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '40px',
      position: 'relative'
    },
    wheel: {
      width: '280px',
      height: '280px',
      borderRadius: '50%',
      background: `conic-gradient(
        #10B981 0deg 45deg,
        #F59E0B 45deg 90deg,
        #10B981 90deg 135deg,
        #F59E0B 135deg 180deg,
        #10B981 180deg 225deg,
        #F59E0B 225deg 270deg,
        #10B981 270deg 315deg,
        #F59E0B 315deg 360deg
      )`,
      position: 'relative',
      transform: `rotate(${spinRotation}deg)`,
      transition: isSpinning ? 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
      border: '8px solid #1e293b',
      boxShadow: '0 0 40px rgba(16, 185, 129, 0.3)'
    },
    wheelPointer: {
      position: 'absolute',
      top: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '0',
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent',
      borderTop: '30px solid #ffffff',
      zIndex: 10,
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
    },
    wheelCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '4px solid #ffffff',
      zIndex: 5
    },
    wheelNumbers: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '240px',
      height: '240px',
      pointerEvents: 'none'
    },
    wheelNumber: {
      position: 'absolute',
      color: '#ffffff',
      fontWeight: '700',
      fontSize: '14px',
      textShadow: '0 1px 2px rgba(0,0,0,0.8)'
    },
    spinButton: {
      width: '100%',
      maxWidth: '300px',
      height: '56px',
      background: spinAvailable && !isSpinning 
        ? 'linear-gradient(135deg, #10B981, #059669)' 
        : 'linear-gradient(135deg, #374151, #4B5563)',
      border: 'none',
      borderRadius: '28px',
      color: '#ffffff',
      fontSize: '18px',
      fontWeight: '700',
      cursor: spinAvailable && !isSpinning ? 'pointer' : 'not-allowed',
      marginTop: '20px',
      transition: 'all 0.3s ease',
      boxShadow: spinAvailable && !isSpinning 
        ? '0 0 20px rgba(16, 185, 129, 0.4)' 
        : '0 4px 12px rgba(0,0,0,0.3)',
      animation: spinAvailable && !isSpinning ? 'pulse 2s infinite' : 'none'
    },
    streakCard: {
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '30px',
      border: '1px solid #475569',
      textAlign: 'center'
    },
    streakText: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    multiplier: {
      background: 'linear-gradient(135deg, #F59E0B, #D97706)',
      color: '#ffffff',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '700'
    },
    countdown: {
      color: '#94a3b8',
      fontSize: '16px'
    },
    winnersSection: {
      marginBottom: '40px'
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    winnersScroll: {
      display: 'flex',
      gap: '12px',
      overflowX: 'auto',
      paddingBottom: '8px'
    },
    winnerCard: {
      minWidth: '120px',
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      borderRadius: '12px',
      padding: '16px',
      textAlign: 'center',
      border: '1px solid #475569'
    },
    winnerAvatar: {
      fontSize: '24px',
      marginBottom: '8px'
    },
    winnerName: {
      fontSize: '14px',
      color: '#94a3b8',
      marginBottom: '4px'
    },
    winnerAmount: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#10B981'
    },
    achievementsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      marginBottom: '40px'
    },
    achievementCard: {
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      borderRadius: '12px',
      padding: '16px',
      textAlign: 'center',
      border: '1px solid #475569',
      opacity: 1,
      transition: 'all 0.3s ease'
    },
    achievementCardLocked: {
      opacity: 0.5,
      filter: 'grayscale(1)'
    },
    achievementIcon: {
      fontSize: '32px',
      marginBottom: '8px',
      display: 'block'
    },
    achievementName: {
      fontSize: '12px',
      color: '#94a3b8',
      fontWeight: '500'
    },
    confetti: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1000
    },
    confettiPiece: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      animation: 'confettiFall 3s linear forwards'
    }
  };

  // Add keyframes for animations
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
      50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.8); }
    }
    @keyframes confettiFall {
      0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
  `;
  document.head.appendChild(styleSheet);

  // Wheel number positions (approximated)
  const numberPositions = [
    { top: '10px', left: '50%', transform: 'translateX(-50%)' }, // 50
    { top: '25%', right: '10px' }, // 100
    { bottom: '25%', right: '10px' }, // 25
    { bottom: '10px', left: '50%', transform: 'translateX(-50%)' }, // 200
    { bottom: '25%', left: '10px' }, // 75
    { top: '25%', left: '10px' }, // 500
    { top: '40%', left: '20px' }, // 30
    { top: '40%', right: '20px' } // 150
  ];

  return (
    <div style={styles.container}>
      {showConfetti && (
        <div style={styles.confetti}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.confettiPiece,
                left: `${Math.random() * 100}%`,
                backgroundColor: Math.random() > 0.5 ? '#10B981' : '#F59E0B',
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div style={styles.hero}>
        <h1 style={styles.title}>Daily Spin Wheel</h1>
        <p style={styles.subtitle}>Spin once every 24 hours to win cash rewards!</p>
      </div>

      <ScrollReveal>
        <div style={styles.streakCard}>
          <div style={styles.streakText}>
            <Flame size={24} color="#F59E0B" />
            <AnimatedCounter end={streak} suffix="-day streak!" duration={1000} />
            <span style={styles.multiplier}>{getMultiplier()} multiplier</span>
          </div>
          {!spinAvailable && (
            <div style={styles.countdown}>
              Next spin in {formatTime(timeUntilSpin)}
            </div>
          )}
        </div>
      </ScrollReveal>

      <GlowEffect color="#10B981">
        <TiltCard>
          <div style={styles.wheelContainer}>
            <div style={styles.wheelPointer}></div>
            <div style={styles.wheel}>
              <div style={styles.wheelNumbers}>
                {wheelSegments.map((segment, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.wheelNumber,
                      ...numberPositions[index]
                    }}
                  >
                    ${segment.amount}
                  </div>
                ))}
              </div>
              <div style={styles.wheelCenter}>
                <Gift size={24} color="#10B981" />
              </div>
            </div>
            <button
              style={styles.spinButton}
              onClick={handleSpin}
              disabled={!spinAvailable || isSpinning}
            >
              {isSpinning ? 'SPINNING...' : spinAvailable ? 'SPIN NOW!' : 'COME BACK LATER'}
            </button>
          </div>
        </TiltCard>
      </GlowEffect>

      <ScrollReveal>
        <div style={styles.winnersSection}>
          <h3 style={styles.sectionTitle}>
            <Crown size={20} color="#F59E0B" />
            Recent Winners
          </h3>
          <div style={styles.winnersScroll}>
            {recentWinners.map((winner, index) => (
              <div key={index} style={styles.winnerCard}>
                <div style={styles.winnerAvatar}>{winner.avatar}</div>
                <div style={styles.winnerName}>{winner.name}</div>
                <div style={styles.winnerAmount}>${winner.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div>
          <h3 style={styles.sectionTitle}>
            <Award size={20} color="#10B981" />
            Achievements
          </h3>
          <div style={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <TiltCard key={index}>
                <div
                  style={{
                    ...styles.achievementCard,
                    ...(achievement.unlocked ? {} : styles.achievementCardLocked)
                  }}
                >
                  <span style={styles.achievementIcon}>{achievement.icon}</span>
                  <div style={styles.achievementName}>{achievement.name}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default RewardsPage;