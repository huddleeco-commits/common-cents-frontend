import React, { useState, useEffect } from 'react';
import { ScrollReveal, AnimatedCounter, TiltCard } from '../effects';
import { DollarSign, CreditCard, Gift, Clock, ChevronRight, TrendingUp, Sparkles, Award } from 'lucide-react';

const WalletPage = () => {
  const [balance] = useState(24.50);
  const [cashoutThreshold] = useState(25.00);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedCashout, setSelectedCashout] = useState(null);

  const transactions = [
    { id: 1, date: '2024-01-15', description: 'Survey: Tech Preferences', amount: 2.50, type: 'earned' },
    { id: 2, date: '2024-01-15', description: 'Daily Streak Bonus', amount: 0.50, type: 'bonus' },
    { id: 3, date: '2024-01-14', description: 'Survey: Shopping Habits', amount: 3.25, type: 'earned' },
    { id: 4, date: '2024-01-13', description: 'PayPal Cashout', amount: -15.00, type: 'cashout' },
    { id: 5, date: '2024-01-13', description: 'Survey: Food Delivery', amount: 1.75, type: 'earned' },
    { id: 6, date: '2024-01-12', description: 'Spin Wheel Bonus', amount: 5.00, type: 'bonus' },
  ];

  const cashoutOptions = [
    { 
      id: 'paypal', 
      name: 'PayPal', 
      icon: DollarSign, 
      minimum: 5.00, 
      processing: '2-3 days',
      description: 'Instant to your PayPal account'
    },
    { 
      id: 'giftcard', 
      name: 'Gift Cards', 
      icon: Gift, 
      minimum: 10.00, 
      processing: 'Instant',
      description: 'Amazon, Target, Starbucks & more'
    },
    { 
      id: 'bank', 
      name: 'Bank Transfer', 
      icon: CreditCard, 
      minimum: 25.00, 
      processing: '3-5 days',
      description: 'Direct deposit to your bank'
    }
  ];

  const progressPercentage = (balance / cashoutThreshold) * 100;

  const handleCashout = (option) => {
    if (balance >= option.minimum) {
      setSelectedCashout(option);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  useEffect(() => {
    // Add glowing pulse to available cashout options
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); }
        50% { box-shadow: 0 4px 20px rgba(16, 185, 129, 0.6); }
      }
      @keyframes confetti-fall {
        0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }
      .pulse-glow { animation: pulse-glow 2s infinite; }
      .confetti { animation: confetti-fall 3s ease-out forwards; }
      .balance-glow {
        background: linear-gradient(135deg, #10B981, #059669);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
      color: '#ffffff',
      paddingBottom: '80px'
    }}>
      {/* Confetti Effect */}
      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1000
        }}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                width: '8px',
                height: '8px',
                backgroundColor: i % 2 === 0 ? '#10B981' : '#F59E0B',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {/* Balance Hero Section */}
        <ScrollReveal>
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
            borderRadius: '24px',
            margin: '20px 0 32px 0',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Sparkles size={24} color="#10B981" />
              <h1 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#10B981',
                margin: 0
              }}>Your Balance</h1>
            </div>
            
            <div className="balance-glow" style={{
              fontSize: '48px',
              fontWeight: 'bold',
              margin: '8px 0 16px 0',
              letterSpacing: '-1px'
            }}>
              <AnimatedCounter end={balance} prefix="$" duration={2000} />
            </div>

            <p style={{
              color: '#9ca3af',
              fontSize: '16px',
              marginBottom: '20px'
            }}>
              ${(cashoutThreshold - balance).toFixed(2)} until next cashout tier
            </p>

            {/* Progress Bar */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              height: '8px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                background: 'linear-gradient(90deg, #10B981, #059669)',
                height: '100%',
                width: `${Math.min(progressPercentage, 100)}%`,
                borderRadius: '12px',
                transition: 'width 1s ease-out',
                boxShadow: '0 0 12px rgba(16, 185, 129, 0.4)'
              }} />
            </div>
          </div>
        </ScrollReveal>

        {/* Cashout Options */}
        <ScrollReveal>
          <section style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <TrendingUp size={24} color="#10B981" />
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                margin: 0
              }}>Cash Out</h2>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {cashoutOptions.map((option) => {
                const isAvailable = balance >= option.minimum;
                const IconComponent = option.icon;
                
                return (
                  <TiltCard key={option.id}>
                    <div
                      className={isAvailable ? 'pulse-glow' : ''}
                      onClick={() => isAvailable && handleCashout(option)}
                      style={{
                        background: isAvailable 
                          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15))'
                          : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isAvailable ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: '16px',
                        padding: '20px',
                        cursor: isAvailable ? 'pointer' : 'not-allowed',
                        transition: 'all 0.3s ease',
                        opacity: isAvailable ? 1 : 0.6,
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                          background: isAvailable ? '#10B981' : 'rgba(255, 255, 255, 0.2)',
                          padding: '12px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <IconComponent size={24} color={isAvailable ? '#ffffff' : '#9ca3af'} />
                        </div>
                        
                        <div>
                          <h3 style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            margin: '0 0 4px 0',
                            color: isAvailable ? '#ffffff' : '#9ca3af'
                          }}>
                            {option.name}
                          </h3>
                          <p style={{
                            fontSize: '14px',
                            color: '#9ca3af',
                            margin: '0 0 4px 0'
                          }}>
                            {option.description}
                          </p>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            fontSize: '12px',
                            color: '#6b7280'
                          }}>
                            <span>Min: {formatCurrency(option.minimum)}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Clock size={12} />
                              <span>{option.processing}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <ChevronRight size={20} color={isAvailable ? '#10B981' : '#6b7280'} />
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        {/* Transaction History */}
        <ScrollReveal>
          <section style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <Clock size={24} color="#10B981" />
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                margin: 0
              }}>Recent Activity</h2>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {transactions.map((transaction, index) => (
                <div
                  key={transaction.id}
                  style={{
                    padding: '16px 20px',
                    borderBottom: index < transactions.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '4px'
                    }}>
                      {transaction.type === 'bonus' && <Award size={16} color="#F59E0B" />}
                      {transaction.type === 'earned' && <DollarSign size={16} color="#10B981" />}
                      {transaction.type === 'cashout' && <CreditCard size={16} color="#6b7280" />}
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: 0
                      }}>
                        {transaction.description}
                      </h4>
                    </div>
                    <p style={{
                      fontSize: '14px',
                      color: '#9ca3af',
                      margin: 0
                    }}>
                      {formatDate(transaction.date)}
                    </p>
                  </div>
                  
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: transaction.amount > 0 ? '#10B981' : '#6b7280'
                  }}>
                    {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Achievement Teaser */}
        <ScrollReveal>
          <div style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1))',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <Award size={32} color="#F59E0B" style={{ marginBottom: '12px' }} />
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0 0 8px 0',
              color: '#F59E0B'
            }}>
              Almost there! 🎉
            </h3>
            <p style={{
              color: '#9ca3af',
              fontSize: '14px',
              margin: 0
            }}>
              Complete 2 more surveys to unlock the "Survey Pro" badge and earn a $1 bonus!
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Cashout Modal */}
      {selectedCashout && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          padding: '20px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e, #0a0a1a)',
            borderRadius: '20px',
            padding: '32px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <div style={{
              background: '#10B981',
              padding: '16px',
              borderRadius: '16px',
              display: 'inline-flex',
              marginBottom: '20px'
            }}>
              <selectedCashout.icon size={32} color="#ffffff" />
            </div>
            
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 12px 0'
            }}>
              Cash Out to {selectedCashout.name}
            </h3>
            
            <p style={{
              color: '#9ca3af',
              fontSize: '16px',
              marginBottom: '24px'
            }}>
              You're about to cash out ${balance.toFixed(2)} to your {selectedCashout.name} account.
              Processing time: {selectedCashout.processing}.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => setSelectedCashout(null)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  minHeight: '44px'
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  minHeight: '44px',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                }}
              >
                Confirm Cash Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletPage;