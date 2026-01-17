import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Users, Award, Sparkles, CheckCircle } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Live Support',
      description: 'Get instant help with our 24/7 chat support',
      value: 'Chat with us',
      action: 'Start Chat',
      gradient: 'linear-gradient(135deg, #10B981, #059669)'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 2 hours',
      value: 'support@earnrewards.com',
      action: 'Send Email',
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our rewards specialists',
      value: '1-800-REWARDS',
      action: 'Call Now',
      gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I cash out my earnings?',
      answer: 'Instant cashouts are available 24/7 once you reach the $5 minimum threshold!'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Absolutely! We use bank-level encryption and never share your data with third parties.'
    },
    {
      question: 'How do daily streaks work?',
      answer: 'Complete at least one survey daily to maintain your streak and unlock bonus multipliers!'
    }
  ];

  const confettiStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1000,
    background: showConfetti ? `
      radial-gradient(circle at 20% 50%, #10B981 2px, transparent 3px),
      radial-gradient(circle at 40% 20%, #F59E0B 1px, transparent 2px),
      radial-gradient(circle at 60% 60%, #10B981 2px, transparent 3px),
      radial-gradient(circle at 80% 30%, #F59E0B 1px, transparent 2px),
      radial-gradient(circle at 90% 70%, #10B981 2px, transparent 3px)
    ` : 'none',
    backgroundSize: '100px 100px, 80px 80px, 120px 120px, 90px 90px, 110px 110px',
    animation: showConfetti ? 'confetti 3s ease-out' : 'none'
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: "'Inter', system-ui, sans-serif"
    }}>
      {/* Confetti Effect */}
      <div style={confettiStyles}></div>
      
      <style>
        {`
          @keyframes confetti {
            0% {
              transform: translateY(-100vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.3); }
          }
          
          .input-focus:focus {
            outline: none;
            border-color: #10B981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
          }
        `}
      </style>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #2a2a3e 100%)',
        padding: '120px 20px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}></div>

        <ScrollReveal>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '12px 24px',
              borderRadius: '50px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              marginBottom: '30px',
              animation: 'glow 2s infinite'
            }}>
              <Sparkles style={{ width: '20px', height: '20px', color: '#10B981' }} />
              <span style={{ color: '#10B981', fontWeight: '600' }}>24/7 Support Team</span>
            </div>

            <h1 style={{
              fontSize: window.innerWidth < 768 ? '36px' : '48px',
              fontWeight: '800',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Need Help Maximizing<br />Your Cash Rewards?
            </h1>

            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Our rewards specialists are here to help you earn more, cash out faster, and make the most of your time on our platform.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '60px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '16px 24px',
                borderRadius: '12px',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>
                <Clock style={{ width: '20px', height: '20px', color: '#10B981' }} />
                <span style={{ color: '#ffffff', fontWeight: '500' }}>
                  Average Response: <strong style={{ color: '#10B981' }}>2 minutes</strong>
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(245, 158, 11, 0.1)',
                padding: '16px 24px',
                borderRadius: '12px',
                border: '1px solid rgba(245, 158, 11, 0.3)'
              }}>
                <Users style={{ width: '20px', height: '20px', color: '#F59E0B' }} />
                <span style={{ color: '#ffffff', fontWeight: '500' }}>
                  <AnimatedCounter end={50000} suffix="+ Happy Users" duration={2000} />
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Methods */}
      <ScrollReveal>
        <section style={{
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: window.innerWidth < 768 ? '28px' : '36px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#ffffff'
            }}>
              Choose Your Preferred Contact Method
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Get the help you need, when you need it, through the channel that works best for you
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {contactMethods.map((method, index) => (
              <TiltCard key={index}>
                <GlowEffect color="#10B981">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(42, 42, 62, 0.8) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '40px 30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  className="hover-lift">
                    {/* Background Gradient */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: method.gradient
                    }}></div>

                    {/* Icon */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: method.gradient,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
                    }}>
                      <method.icon style={{ width: '36px', height: '36px', color: '#ffffff' }} />
                    </div>

                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      marginBottom: '12px',
                      color: '#ffffff'
                    }}>
                      {method.title}
                    </h3>

                    <p style={{
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '20px',
                      lineHeight: '1.5'
                    }}>
                      {method.description}
                    </p>

                    <div style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#10B981',
                      marginBottom: '24px'
                    }}>
                      {method.value}
                    </div>

                    <button style={{
                      background: method.gradient,
                      border: 'none',
                      borderRadius: '12px',
                      padding: '12px 24px',
                      color: '#ffffff',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      {method.action}
                      <Send style={{ width: '16px', height: '16px' }} />
                    </button>
                  </div>
                </GlowEffect>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Form & Business Details */}
      <ScrollReveal>
        <section style={{
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <div>
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#ffffff'
                }}>
                  Send Us a Message
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6'
                }}>
                  Have a specific question about maximizing your rewards? Drop us a line and we'll get back to you with personalized tips!
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} style={{
                  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(42, 42, 62, 0.8) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#10B981',
                        marginBottom: '8px'
                      }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-focus"
                        style={{
                          width: '100%',
                          padding: '16px',
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: '#ffffff',
                          fontSize: '16px',
                          transition: 'all 0.3s ease'
                        }}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#10B981',
                        marginBottom: '8px'
                      }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-focus"
                        style={{
                          width: '100%',
                          padding: '16px',
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: '#ffffff',
                          fontSize: '16px',
                          transition: 'all 0.3s ease'
                        }}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#10B981',
                        marginBottom: '8px'
                      }}>
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-focus"
                        style={{
                          width: '100%',
                          padding: '16px',
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: '#ffffff',
                          fontSize: '16px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <option value="" style={{ background: '#1a1a2e', color: '#ffffff' }}>Select a topic</option>
                        <option value="cashout" style={{ background: '#1a1a2e', color: '#ffffff' }}>Cash Out Issues</option>
                        <option value="surveys" style={{ background: '#1a1a2e', color: '#ffffff' }}>Survey Questions</option>
                        <option value="rewards" style={{ background: '#1a1a2e', color: '#ffffff' }}>Rewards & Bonuses</option>
                        <option value="account" style={{ background: '#1a1a2e', color: '#ffffff' }}>Account Support</option>
                        <option value="technical" style={{ background: '#1a1a2e', color: '#ffffff' }}>Technical Issues</option>
                        <option value="other" style={{ background: '#1a1a2e', color: '#ffffff' }}>Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#10B981',
                        marginBottom: '8px'
                      }}>
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="input-focus"
                        rows="5"
                        style={{
                          width: '100%',
                          padding: '16px',
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          color: '#ffffff',
                          fontSize: '16px',
                          transition: 'all 0.3s ease',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        placeholder="Tell us how we can help you maximize your earnings..."
                      />
                    </div>

                    <GlowEffect color="#10B981">
                      <button
                        type="submit"
                        style={{
                          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '18px 32px',
                          color: '#ffffff',
                          fontSize: '18px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '12px',
                          width: '100%',
                          minHeight: '56px'
                        }}
                      >
                        <Send style={{ width: '20px', height: '20px' }} />
                        Send Message & Get Help
                      </button>
                    </GlowEffect>
                  </div>
                </form>
              ) : (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  animation: 'pulse 2s infinite'
                }}>
                  <CheckCircle style={{
                    width: '64px',
                    height: '64px',
                    color: '#10B981',
                    marginBottom: '24px'
                  }} />
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    marginBottom: '16px',
                    color: '#ffffff'
                  }}>
                    Message Sent Successfully! 🎉
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '24px'
                  }}>
                    Thanks for reaching out! Our support team will get back to you within 2 hours with personalized help to boost your earnings.
                  </p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    padding: '12px 20px',
                    borderRadius: '8px'
                  }}>
                    <Award style={{ width: '16px', height: '16px', color: '#10B981' }} />
                    <span style={{ color: '#10B981', fontWeight: '600' }}>
                      +50 Bonus Points Added to Your Account!
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Business Details & FAQs */}
            <div>
              {/* Business Info */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(42, 42, 62, 0.8) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px',
                marginBottom: '40px'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '30px',
                  color: '#ffffff',
                  textAlign: 'center'
                }}>
                  Get in Touch
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #10B981, #059669)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Mail style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                        Email Support
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>
                        support@earnrewards.com
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    background: 'rgba(245, 158, 11, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Phone style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                        Phone Support
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>
                        1-800-REWARDS (24/7)
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <MapPin style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                        Headquarters
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>
                        San Francisco, CA 94102
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  textAlign: 'center',
                  marginTop: '30px',
                  padding: '20px',
                  background: 'rgba(16, 185, 129, 0.05)',
                  borderRadius: '12px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <Clock style={{ width: '20px', height: '20px', color: '#10B981' }} />
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#10B981' }}>
                      Average Response Time
                    </span>
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>
                    <AnimatedCounter end={2} suffix=" Minutes" duration={2000} />
                  </div>
                </div>
              </div>

              {/* Quick FAQs */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(42, 42, 62, 0.8) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '30px',
                  color: '#ffffff',
                  textAlign: 'center'
                }}>
                  Quick Answers
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {faqs.map((faq, index) => (
                    <div key={index} style={{
                      padding: '20px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#10B981',
                        marginBottom: '8px'
                      }}>
                        {faq.question}
                      </h4>
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: '1.5'
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default ContactPage;