import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const colors = {
    primary: '#4CAF50',
    primaryDark: '#388E3C',
    accent: '#FF9800',
    accentLight: '#FFB74D',
    white: '#FFFFFF',
    cream: '#FFF8E1',
    text: '#333333',
    textLight: '#666666',
    background: '#FAFAFA'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-up-delay-1 {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-bounce {
          animation: bounceIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
        }
        
        .btn-accent:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(255, 152, 0, 0.4);
        }
        
        .nav-link:hover {
          color: #FF9800 !important;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem !important;
          }
          .hero-tagline {
            font-size: 1.1rem !important;
          }
          .section-title {
            font-size: 1.8rem !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .about-content {
            flex-direction: column !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-btn {
            display: flex !important;
          }
          .footer-content {
            flex-direction: column !important;
            text-align: center;
            gap: 1.5rem !important;
          }
        }
        
        @media (min-width: 769px) {
          .nav-mobile-btn {
            display: none !important;
          }
          .nav-mobile-menu {
            display: none !important;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', backgroundColor: colors.background }}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: colors.white,
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
          zIndex: 1000,
          padding: '0.8rem 2rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }} onClick={() => scrollToSection('hero')}>
              <span style={{ fontSize: '2rem' }}>🍊</span>
              <span style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: colors.primary
              }}>Au Palais du Fruit</span>
            </div>

            <div className="nav-desktop" style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              {['Accueil', 'Services', 'À propos', 'Contact'].map((item, i) => (
                <button
                  key={i}
                  className="nav-link"
                  onClick={() => scrollToSection(['hero', 'services', 'about', 'contact'][i])}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1rem',
                    color: colors.text,
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="nav-mobile-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '5px'
              }}
            >
              <span style={{
                width: '25px',
                height: '3px',
                backgroundColor: colors.primary,
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}></span>
              <span style={{
                width: '25px',
                height: '3px',
                backgroundColor: colors.primary,
                borderRadius: '2px',
                opacity: menuOpen ? 0 : 1,
                transition: 'all 0.3s ease'
              }}></span>
              <span style={{
                width: '25px',
                height: '3px',
                backgroundColor: colors.primary,
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
              }}></span>
            </button>
          </div>

          {menuOpen && (
            <div className="nav-mobile-menu" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: colors.white,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              padding: '1rem',
              animation: 'fadeIn 0.3s ease-out'
            }}>
              {['Accueil', 'Services', 'À propos', 'Contact'].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(['hero', 'services', 'about', 'contact'][i])}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '1rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    color: colors.text,
                    cursor: 'pointer'
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" style={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 50%, #2E7D32 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem 4rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            fontSize: '4rem',
            opacity: 0.2
          }} className="animate-float">🍎</div>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            fontSize: '3rem',
            opacity: 0.2,
            animationDelay: '1s'
          }} className="animate-float">🍋</div>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '15%',
            fontSize: '3.5rem',
            opacity: 0.2,
            animationDelay: '0.5s'
          }} className="animate-float">🍇</div>
          <div style={{
            position: 'absolute',
            bottom: '25%',
            right: '8%',
            fontSize: '3rem',
            opacity: 0.2,
            animationDelay: '1.5s'
          }} className="animate-float">🥝</div>

          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            zIndex: 1
          }}>
            <div className="animate-bounce" style={{
              fontSize: '5rem',
              marginBottom: '1rem'
            }}>🍊</div>
            
            <h1 className="hero-title animate-fade-up" style={{
              fontSize: '3.5rem',
              color: colors.white,
              marginBottom: '1rem',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}>
              Au Palais du Fruit
            </h1>
            
            <p className="hero-tagline animate-fade-up-delay-1" style={{
              fontSize: '1.4rem',
              color: colors.cream,
              marginBottom: '2.5rem',
              lineHeight: '1.6'
            }}>
              La fraîcheur des fruits, le goût de l'authenticité
            </p>

            <div className="animate-fade-up-delay-2" style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                className="btn-accent"
                onClick={() => scrollToSection('services')}
                style={{
                  backgroundColor: colors.accent,
                  color: colors.white,
                  border: 'none',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Découvrir nos produits
              </button>
              <button
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
                style={{
                  backgroundColor: 'transparent',
                  color: colors.white,
                  border: `2px solid ${colors.white}`,
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Nous contacter
              </button>
            </div>

            <div style={{
              marginTop: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: colors.cream
            }}>
              <span style={{ fontSize: '1.3rem' }}>📍</span>
              <span style={{ fontSize: '1rem' }}>1 rue Cordelières, 76270 Neufchâtel-en-Bray</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{
          padding: '5rem 2rem',
          backgroundColor: colors.white
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                backgroundColor: colors.cream,
                color: colors.accent,
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                🛒 Nos Produits
              </span>
              <h2 className="section-title" style={{
                fontSize: '2.5rem',
                color: colors.text,
                marginBottom: '1rem'
              }}>
                Une sélection <span style={{ color: colors.primary }}>gourmande</span>
              </h2>
              <p style={{
                color: colors.textLight,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Découvrez notre gamme variée de produits frais et de qualité, 
                sélectionnés avec soin pour votre plaisir et votre bien-être.
              </p>
            </div>

            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              {[
                {
                  icon: '🍎',
                  title: 'Fruits frais & exotiques',
                  description: 'Une sélection variée de fruits frais de saison et exotiques, cueillis à maturité pour un goût incomparable.',
                  color: '#E8F5E9'
                },
                {
                  icon: '🥜',
                  title: 'Fruits secs & épices',
                  description: 'Amandes, noix, pistaches et épices du monde entier pour sublimer vos recettes et vos en-cas.',
                  color: '#FFF3E0'
                },
                {
                  icon: '🧺',
                  title: 'Épicerie générale',
                  description: 'Un vaste choix de produits d\'épicerie pour tous vos besoins quotidiens, de qualité et à prix accessible.',
                  color: '#E3F2FD'
                },
                {
                  icon: '🧃',
                  title: 'Jus de fruits',
                  description: 'Des jus de fruits frais et savoureux pour vous rafraîchir et faire le plein de vitamines naturellement.',
                  color: '#FCE4EC'
                },
                {
                  icon: '💚',
                  title: 'Paniers Too Good To Go',
                  description: 'Participez à la lutte contre le gaspillage alimentaire avec nos paniers surprise à partir de 3,99€.',
                  color: '#E8F5E9'
                },
                {
                  icon: '🤝',
                  title: 'Conseils personnalisés',
                  description: 'Notre équipe familiale vous accueille et vous conseille avec passion pour tous vos achats.',
                  color: '#FFF8E1'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="service-card"
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${colors.cream}`
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: service.color,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    marginBottom: '1.5rem'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: colors.text,
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: colors.textLight,
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          padding: '5rem 2rem',
          backgroundColor: colors.cream
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="about-content" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4rem'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  position: 'relative',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                    padding: '3rem',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      fontSize: '6rem',
                      marginBottom: '1rem'
                    }}>🏪</div>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      marginTop: '1rem'
                    }}>
                      {['🍊', '🍋', '🍎', '🥝', '🍇'].map((emoji, i) => (
                        <span key={i} style={{
                          fontSize: '2.5rem',
                          animation: `float 3s ease-in-out ${i * 0.2}s infinite`
                        }}>{emoji}</span>
                      ))}
                    </div>
                    <p style={{
                      color: colors.white,
                      marginTop: '2rem',
                      fontSize: '1.1rem',
                      textAlign: 'center'
                    }}>
                      Votre primeur de confiance à Neufchâtel-en-Bray
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <span style={{
                  backgroundColor: colors.white,
                  color: colors.primary,
                  padding: '0.5rem 1.5rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>
                  🏠 Notre histoire
                </span>
                <h2 className="section-title" style={{
                  fontSize: '2.5rem',
                  color: colors.text,
                  marginBottom: '1.5rem'
                }}>
                  Une entreprise <span style={{ color: colors.primary }}>familiale</span>
                </h2>
                <p style={{
                  color: colors.textLight,
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  fontSize: '1.05rem'
                }}>
                  <strong>Au Palais du Fruit</strong> est votre commerce d'alimentation générale 
                  au cœur de Neufchâtel-en-Bray, en Normandie. Nous vous accueillons dans une 
                  ambiance chaleureuse et familiale.
                </p>
                <p style={{
                  color: colors.textLight,
                  lineHeight: '1.8',
                  marginBottom: '2rem',
                  fontSize: '1.05rem'
                }}>
                  Notre passion ? Vous offrir des produits frais, savoureux et de qualité. 
                  Des fruits juteux aux épices parfumées, en passant par nos jus maison, 
                  chaque produit est sélectionné avec soin pour votre satisfaction.
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}>
                  {[
                    { icon: '🌿', text: 'Produits frais' },
                    { icon: '👨‍👩‍👧‍👦', text: 'Esprit familial' },
                    { icon: '🌍', text: 'Anti-gaspi' },
                    { icon: '💯', text: 'Qualité garantie' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      backgroundColor: colors.white,
                      padding: '1rem',
                      borderRadius: '12px'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                      <span style={{
                        fontWeight: '600',
                        color: colors.text
                      }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Too Good To Go Banner */}
        <section style={{
          padding: '3rem 2rem',
          background: `linear-gradient(135deg, ${colors.accent} 0%, #F57C00 100%)`
        }}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
            color: colors.white
          }}>
            <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>🥗</span>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Ensemble contre le gaspillage alimentaire !
            </h3>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              opacity: 0.95
            }}>
              Retrouvez nos paniers surprise sur Too Good To Go à partir de <strong>3,99€</strong>
            </p>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: '1rem 2rem',
              borderRadius: '12px',
              display: 'inline-block'
            }}>
              <span style={{ fontWeight: '600' }}>📱 Téléchargez l'appli Too Good To Go</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          padding: '5rem 2rem',
          backgroundColor: colors.white
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                backgroundColor: colors.cream,
                color: colors.accent,
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                📞 Contact
              </span>
              <h2 className="section-title" style={{
                fontSize: '2.5rem',
                color: colors.text,
                marginBottom: '1rem'
              }}>
                Venez nous <span style={{ color: colors.primary }}>rendre visite</span>
              </h2>
              <p style={{
                color: colors.textLight,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Notre équipe vous accueille chaleureusement. 
                N'hésitez pas à nous contacter pour toute question !
              </p>
            </div>

            <div className="contact-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem'
            }}>
              {/* Contact Info */}
              <div>
                <div style={{
                  backgroundColor: colors.cream,
                  borderRadius: '20px',
                  padding: '2rem',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: colors.text,
                    marginBottom: '1.5rem',
                    fontWeight: '600'
                  }}>
                    📍 Nos coordonnées
                  </h3>
                  
                  {[
                    { icon: '🏠', label: 'Adresse', value: '1 rue Cordelières\n76270 Neufchâtel-en-Bray' },
                    { icon: '📧', label: 'Email', value: 'contact@palais-fruit.fr' },
                    { icon: '📞', label: 'Téléphone', value: '02 35 XX XX XX' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1.2rem'
                    }}>
                      <span style={{
                        fontSize: '1.5rem',
                        backgroundColor: colors.white,
                        padding: '0.6rem',
                        borderRadius: '10px'
                      }}>{item.icon}</span>
                      <div>
                        <p style={{
                          fontWeight: '600',
                          color: colors.text,
                          marginBottom: '0.2rem'
                        }}>{item.label}</p>
                        <p style={{
                          color: colors.textLight,
                          whiteSpace: 'pre-line'
                        }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                  borderRadius: '20px',
                  padding: '2rem',
                  color: colors.white,
                  textAlign: 'center'
                }}>
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>🗺️</span>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                    Situé au cœur de Neufchâtel-en-Bray
                  </p>
                  <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
                    Facilement accessible en centre-ville
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div style={{
                backgroundColor: colors.background,
                borderRadius: '20px',
                padding: '2rem',
                border: `1px solid ${colors.cream}`
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: colors.text,
                  marginBottom: '1.5rem',
                  fontWeight: '600'
                }}>
                  ✉️ Envoyez-nous un message
                </h3>

                {formSubmitted ? (
                  <div style={{
                    backgroundColor: '#E8F5E9',
                    padding: '2rem',
                    borderRadius: '15px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>✅</span>
                    <p style={{ color: colors.primary, fontWeight: '600', fontSize: '1.1rem' }}>
                      Merci pour votre message !
                    </p>
                    <p style={{ color: colors.textLight, marginTop: '0.5rem' }}>
                      Nous vous répondrons rapidement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.2rem' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500',
                        color: colors.text
                      }}>Votre nom</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          border: `2px solid ${colors.cream}`,
                          borderRadius: '12px',
                          fontSize: '1rem',
                          outline: 'none',
                          transition: 'border-color 0.3s ease'
                        }}
                        placeholder="Jean Dupont"
                      />
                    </div>

                    <div style={{ marginBottom: '1.2rem' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500',
                        color: colors.text
                      }}>Votre email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          border: `2px solid ${colors.cream}`,
                          borderRadius: '12px',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                        placeholder="jean@exemple.fr"
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '500',
                        color: colors.text
                      }}>Votre message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          border: `2px solid ${colors.cream}`,
                          borderRadius: '12px',
                          fontSize: '1rem',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        placeholder="Bonjour, j'aimerais savoir..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{
                        width: '100%',
                        backgroundColor: colors.primary,
                        color: colors.white,
                        border: 'none',
                        padding: '1rem',
                        fontSize: '1.1rem',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Envoyer le message 📤
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: colors.primaryDark,
          color: colors.white,
          padding: '3rem 2rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div className="footer-content" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '2rem' }}>🍊</span>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>Au Palais du Fruit</p>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Neufchâtel-en-Bray</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {['📘', '📸', '📍'].map((icon, i) => (
                  <button
                    key={i}
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      border: 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      fontSize: '1.3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                © 2024 Au Palais du Fruit - Tous droits réservés
              </p>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                🍎 La fraîcheur des fruits, le goût de l'authenticité
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}