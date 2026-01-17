import React, { useState, useEffect } from 'react';
import { Search, Filter, Clock, DollarSign, Star, Trophy, Zap, Gift, Target } from 'lucide-react';
import { ScrollReveal, AnimatedCounter } from '../effects';

const EarnPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [surveys, setSurveys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filters = ['All', 'Surveys', 'Tasks', 'Offers', 'Daily'];

  const mockSurveys = [
    { id: 1, title: 'Shopping Habits Survey', provider: 'MarketResearch', reward: 2.50, time: '8 min', category: 'Surveys', rating: 4.8, participants: 1247 },
    { id: 2, title: 'Daily Check-in Bonus', provider: 'CashRewards', reward: 0.25, time: '1 min', category: 'Daily', rating: 5.0, participants: 15420 },
    { id: 3, title: 'Watch 3 Videos', provider: 'AdNetwork', reward: 1.00, time: '5 min', category: 'Tasks', rating: 4.6, participants: 892 },
    { id: 4, title: 'Try Netflix Free Trial', provider: 'OfferWall', reward: 15.00, time: '2 min', category: 'Offers', rating: 4.9, participants: 234 },
    { id: 5, title: 'Food Delivery Preferences', provider: 'ConsumerInsights', reward: 3.75, time: '12 min', category: 'Surveys', rating: 4.7, participants: 567 },
    { id: 6, title: 'Share on Social Media', provider: 'SocialBoost', reward: 0.75, time: '3 min', category: 'Tasks', rating: 4.4, participants: 1834 },
    { id: 7, title: 'Sign up for Cashback App', provider: 'FinTech', reward: 8.50, time: '4 min', category: 'Offers', rating: 4.8, participants: 445 },
    { id: 8, title: 'Weekend Streak Bonus', provider: 'CashRewards', reward: 1.50, time: '1 min', category: 'Daily', rating: 5.0, participants: 9876 }
  ];

  useEffect(() => {
    setTimeout(() => {
      setSurveys(mockSurveys);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredSurveys = selectedFilter === 'All' 
    ? surveys 
    : surveys.filter(survey => survey.category === selectedFilter);

  const getProviderLogo = (provider) => {
    const colors = ['#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#06B6D4'];
    const color = colors[provider.length % colors.length];
    return (
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        background: `linear-gradient(135deg, ${color}, ${color}CC)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        {provider.slice(0, 2).toUpperCase()}
      </div>
    );
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Surveys': return <Target size={16} color="#10B981" />;
      case 'Tasks': return <Zap size={16} color="#F59E0B" />;
      case 'Offers': return <Gift size={16} color="#8B5CF6" />;
      case 'Daily': return <Trophy size={16} color="#EF4444" />;
      default: return <DollarSign size={16} color="#10B981" />;
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#ffffff',
      paddingBottom: '100px'
    },
    stickyHeader: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(10, 10, 26, 0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
      padding: '16px'
    },
    headerContent: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #10B981, #F59E0B)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    filterContainer: {
      display: 'flex',
      overflowX: 'auto',
      gap: '8px',
      paddingBottom: '4px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },
    filterTab: {
      padding: '8px 16px',
      borderRadius: '20px',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      background: 'rgba(16, 185, 129, 0.1)',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all 0.3s ease',
      minWidth: 'fit-content'
    },
    activeFilterTab: {
      background: 'linear-gradient(135deg, #10B981, #0D9488)',
      borderColor: '#10B981',
      boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
      transform: 'scale(1.05)'
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '24px 16px'
    },
    statsBar: {
      display: 'flex',
      justifyContent: 'space-around',
      background: 'rgba(16, 185, 129, 0.1)',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '24px',
      border: '1px solid rgba(16, 185, 129, 0.2)'
    },
    statItem: {
      textAlign: 'center'
    },
    statValue: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#10B981',
      marginBottom: '4px'
    },
    statLabel: {
      fontSize: '12px',
      color: '#94A3B8',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    surveysGrid: {
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
    },
    surveyCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      padding: '20px',
      border: '1px solid rgba(16, 185, 129, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    surveyCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)',
      borderColor: 'rgba(16, 185, 129, 0.3)'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '16px'
    },
    cardContent: {
      flex: 1
    },
    surveyTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#ffffff',
      lineHeight: '1.4'
    },
    providerName: {
      fontSize: '12px',
      color: '#94A3B8',
      marginBottom: '12px'
    },
    cardFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px'
    },
    reward: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#10B981',
      textShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
    },
    timeEstimate: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      color: '#94A3B8'
    },
    categoryBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px 8px',
      borderRadius: '8px',
      fontSize: '11px',
      fontWeight: '500',
      background: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.2)'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      color: '#F59E0B'
    },
    participants: {
      fontSize: '11px',
      color: '#64748B'
    },
    glowEffect: {
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      background: 'linear-gradient(135deg, #10B981, #F59E0B, #10B981)',
      borderRadius: '18px',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      zIndex: -1
    },
    loadingCard: {
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '16px',
      padding: '20px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      animation: 'pulse 2s infinite'
    },
    emptyState: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#64748B'
    },
    emptyIcon: {
      fontSize: '48px',
      marginBottom: '16px',
      opacity: 0.5
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.stickyHeader}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>💰 Earn Money</h1>
          <div style={styles.filterContainer}>
            {filters.map(filter => (
              <button
                key={filter}
                style={{
                  ...styles.filterTab,
                  ...(selectedFilter === filter ? styles.activeFilterTab : {})
                }}
                onClick={() => setSelectedFilter(filter)}
                onMouseEnter={(e) => {
                  if (selectedFilter !== filter) {
                    e.target.style.background = 'rgba(16, 185, 129, 0.2)';
                    e.target.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFilter !== filter) {
                    e.target.style.background = 'rgba(16, 185, 129, 0.1)';
                    e.target.style.transform = 'scale(1)';
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <ScrollReveal>
          <div style={styles.statsBar}>
            <div style={styles.statItem}>
              <div style={styles.statValue}>
                <AnimatedCounter end={247} prefix="$" duration={2000} />
              </div>
              <div style={styles.statLabel}>Total Earned</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statValue}>
                <AnimatedCounter end={156} duration={1800} />
              </div>
              <div style={styles.statLabel}>Completed</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statValue}>
                <AnimatedCounter end={12} duration={1500} />
              </div>
              <div style={styles.statLabel}>Day Streak</div>
            </div>
          </div>
        </ScrollReveal>

        <div style={styles.surveysGrid}>
          {isLoading ? (
            Array.from({ length: 6 }, (_, i) => (
              <div key={i} style={styles.loadingCard}>
                <div style={{ height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '12px' }}></div>
                <div style={{ height: '14px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '8px' }}></div>
                <div style={{ height: '14px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '60%' }}></div>
              </div>
            ))
          ) : filteredSurveys.length > 0 ? (
            filteredSurveys.map(survey => (
              <div
                key={survey.id}
                style={styles.surveyCard}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, styles.surveyCardHover);
                  e.currentTarget.querySelector('.glow-effect').style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                  e.currentTarget.querySelector('.glow-effect').style.opacity = '0';
                }}
                onClick={() => {
                  // Simulate survey start
                  alert(`Starting: ${survey.title}`);
                }}
              >
                <div className="glow-effect" style={styles.glowEffect}></div>
                
                <div style={styles.cardHeader}>
                  {getProviderLogo(survey.provider)}
                  <div style={styles.cardContent}>
                    <h3 style={styles.surveyTitle}>{survey.title}</h3>
                    <div style={styles.providerName}>{survey.provider}</div>
                  </div>
                  <div style={styles.reward}>${survey.reward.toFixed(2)}</div>
                </div>

                <div style={styles.cardFooter}>
                  <div style={styles.categoryBadge}>
                    {getCategoryIcon(survey.category)}
                    {survey.category}
                  </div>
                  
                  <div style={styles.timeEstimate}>
                    <Clock size={12} />
                    {survey.time}
                  </div>

                  <div style={styles.rating}>
                    <Star size={12} fill="currentColor" />
                    {survey.rating}
                  </div>

                  <div style={styles.participants}>
                    {survey.participants.toLocaleString()} completed
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>🔍</div>
              <h3>No {selectedFilter.toLowerCase()} available right now</h3>
              <p>Check back soon for more earning opportunities!</p>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          .surveys-grid::-webkit-scrollbar {
            display: none;
          }
          
          @media (max-width: 768px) {
            .surveys-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default EarnPage;