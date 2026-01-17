import React, { useState } from 'react';
import { User, ChevronRight, Copy, Award, Settings, Bell, CreditCard, HelpCircle, LogOut, Users, Gift } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard } from '../effects';

const ProfilePage = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  
  const userStats = {
    totalEarned: 142.50,
    surveysCompleted: 89,
    level: 12,
    memberSince: 'January 2024',
    referralCode: 'CASH4U2024'
  };

  const achievements = [
    { id: 1, name: 'First Survey', icon: '🎯', unlocked: true },
    { id: 2, name: 'Streak Master', icon: '🔥', unlocked: true },
    { id: 3, name: '$100 Club', icon: '💰', unlocked: true },
    { id: 4, name: 'Speed Demon', icon: '⚡', unlocked: true },
    { id: 5, name: 'Survey Pro', icon: '🏆', unlocked: false },
    { id: 6, name: 'Referral King', icon: '👑', unlocked: false }
  ];

  const settingsItems = [
    { icon: Bell, label: 'Notifications', hasArrow: true },
    { icon: CreditCard, label: 'Payment Methods', hasArrow: true },
    { icon: Gift, label: 'Redeem Rewards', hasArrow: true },
    { icon: HelpCircle, label: 'Help & Support', hasArrow: true },
    { icon: Settings, label: 'App Settings', hasArrow: true },
    { icon: LogOut, label: 'Log Out', hasArrow: false, danger: true }
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(userStats.referralCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
      color: '#ffffff',
      paddingBottom: '80px'
    },
    header: {
      padding: '40px 20px 30px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
      borderBottom: '1px solid rgba(16, 185, 129, 0.2)'
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      fontSize: '32px',
      fontWeight: 'bold',
      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)',
      border: '3px solid rgba(16, 185, 129, 0.3)'
    },
    username: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '4px',
      fontFamily: "'Inter', system-ui, sans-serif"
    },
    memberSince: {
      fontSize: '14px',
      opacity: 0.7,
      fontWeight: '500'
    },
    statsContainer: {
      padding: '20px',
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    },
    statCard: {
      flex: '1',
      minWidth: '100px',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '20px 16px',
      textAlign: 'center',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      transition: 'all 0.3s ease'
    },
    statValue: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#10B981',
      marginBottom: '4px',
      fontFamily: "'Inter', system-ui, sans-serif"
    },
    statLabel: {
      fontSize: '12px',
      opacity: 0.8,
      fontWeight: '500'
    },
    section: {
      padding: '0 20px 24px'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '16px',
      fontFamily: "'Inter', system-ui, sans-serif"
    },
    referralCard: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
      borderRadius: '16px',
      padding: '20px',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      marginBottom: '8px'
    },
    referralTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    referralSubtext: {
      fontSize: '14px',
      opacity: 0.8,
      marginBottom: '16px'
    },
    codeContainer: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    },
    codeBox: {
      flex: 1,
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '8px',
      padding: '12px 16px',
      fontSize: '16px',
      fontWeight: '600',
      fontFamily: 'monospace',
      border: '1px solid rgba(16, 185, 129, 0.3)'
    },
    copyButton: {
      background: copiedCode ? '#059669' : '#10B981',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 16px',
      color: '#ffffff',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'all 0.3s ease',
      boxShadow: copiedCode ? '0 0 20px rgba(5, 150, 105, 0.4)' : '0 4px 15px rgba(16, 185, 129, 0.4)'
    },
    achievementsContainer: {
      display: 'flex',
      gap: '12px',
      overflowX: 'auto',
      paddingBottom: '8px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },
    achievementBadge: {
      minWidth: '80px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '16px 12px',
      textAlign: 'center',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      transition: 'all 0.3s ease'
    },
    achievementIcon: {
      fontSize: '24px',
      marginBottom: '8px',
      display: 'block',
      filter: 'grayscale(100%)',
      opacity: 0.5
    },
    achievementIconUnlocked: {
      fontSize: '24px',
      marginBottom: '8px',
      display: 'block',
      filter: 'none',
      opacity: 1
    },
    achievementName: {
      fontSize: '11px',
      fontWeight: '500',
      opacity: 0.8
    },
    settingsList: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(16, 185, 129, 0.2)'
    },
    settingsItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px 20px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: 'transparent'
    },
    settingsIcon: {
      width: '20px',
      height: '20px',
      marginRight: '16px',
      opacity: 0.8
    },
    settingsLabel: {
      flex: 1,
      fontSize: '16px',
      fontWeight: '500'
    },
    chevron: {
      width: '16px',
      height: '16px',
      opacity: 0.5
    },
    dangerText: {
      color: '#ef4444'
    }
  };

  return (
    <div style={styles.container}>
      <ScrollReveal>
        <div style={styles.header}>
          <div style={styles.avatar}>
            <User size={32} />
          </div>
          <div style={styles.username}>Sarah M.</div>
          <div style={styles.memberSince}>Member since {userStats.memberSince}</div>
        </div>
      </ScrollReveal>

      <div style={styles.statsContainer}>
        <TiltCard>
          <div style={styles.statCard}>
            <div style={styles.statValue}>
              <AnimatedCounter end={userStats.totalEarned} prefix="$" duration={2000} />
            </div>
            <div style={styles.statLabel}>Total Earned</div>
          </div>
        </TiltCard>
        
        <TiltCard>
          <div style={styles.statCard}>
            <div style={styles.statValue}>
              <AnimatedCounter end={userStats.surveysCompleted} duration={2000} />
            </div>
            <div style={styles.statLabel}>Surveys</div>
          </div>
        </TiltCard>
        
        <TiltCard>
          <div style={styles.statCard}>
            <div style={styles.statValue}>
              <AnimatedCounter end={userStats.level} duration={1500} />
            </div>
            <div style={styles.statLabel}>Level</div>
          </div>
        </TiltCard>
      </div>

      <ScrollReveal>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <Users size={18} style={{ display: 'inline', marginRight: '8px' }} />
            Invite Friends
          </div>
          <div style={styles.referralCard}>
            <div style={styles.referralTitle}>
              <Gift size={16} />
              Earn $1 per friend
            </div>
            <div style={styles.referralSubtext}>
              Share your code and earn cash when friends join!
            </div>
            <div style={styles.codeContainer}>
              <div style={styles.codeBox}>{userStats.referralCode}</div>
              <button style={styles.copyButton} onClick={copyReferralCode}>
                <Copy size={16} />
                {copiedCode ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <Award size={18} style={{ display: 'inline', marginRight: '8px' }} />
            Achievements
          </div>
          <div style={styles.achievementsContainer}>
            {achievements.map(achievement => (
              <TiltCard key={achievement.id}>
                <div style={styles.achievementBadge}>
                  <span style={achievement.unlocked ? styles.achievementIconUnlocked : styles.achievementIcon}>
                    {achievement.icon}
                  </span>
                  <div style={{...styles.achievementName, opacity: achievement.unlocked ? 1 : 0.5}}>
                    {achievement.name}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Settings</div>
          <div style={styles.settingsList}>
            {settingsItems.map((item, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.settingsItem,
                  borderBottom: index === settingsItems.length - 1 ? 'none' : styles.settingsItem.borderBottom
                }}
              >
                <item.icon style={{...styles.settingsIcon, color: item.danger ? '#ef4444' : undefined}} />
                <div style={{...styles.settingsLabel, ...(item.danger ? styles.dangerText : {})}}>
                  {item.label}
                </div>
                {item.hasArrow && <ChevronRight style={styles.chevron} />}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProfilePage;