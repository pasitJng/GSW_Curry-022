'use client';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";

export default function Firstsec() {
  return (
    <main
      className="d-flex flex-column justify-content-between bg-decor"
      style={{
        minHeight: '100vh',
        color: '#1d428a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Logo Background */}
      <Image
        src="/image/Logo.png"
        alt="Background Logo"
        fill
        style={{
          objectFit: 'contain',
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Navbar */}
      <header
        className="navbar-header d-flex align-items-center border-bottom pb-1 px-4 shadow-sm"
        style={{
          borderColor: '#1d428a',
          backgroundColor: '#ffc72c',
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
          boxShadow: '0 4px 12px #1d428a22',
        }}
      >
        <Image src="/image/Logo.png" alt="logo" width={70} height={70} className="me-3" />
        <h4 className="m-0 fw-bold" style={{ color: '#1d428a', letterSpacing: 1 }}>
          Basketball - GSW (Golden State Warriors) | Stephen Curry
        </h4>
      </header>

      {/* Header */}
      <div className="w-100 d-flex justify-content-center mt-4">
        <div className="featured-header-glow">
          <span className="featured-header-name">Stephen Curry</span>
          <span className="featured-header-divider">|</span>
          <span className="featured-header-role">Point Guard</span>
          <span className="featured-header-stars ms-3">★★★★★</span>
        </div>
      </div>

      {/* Content */}
      <section
        className="d-flex flex-column flex-md-row justify-content-center align-items-center px-2 px-md-4 gap-4 gap-md-5 w-100"
        style={{ minHeight: '50vh' }}
      >
        {/* Featured Player Card */}
        <div
          className="card shadow-lg border-0 hover-card featured-card mb-4 mb-md-0"
          style={{
            width: '100%',
            maxWidth: '320px',
            borderRadius: '22px',
            background: 'linear-gradient(135deg, #ffc72c 80%, #fffbe6 100%)',
            border: '2px solid #1d428a',
            transition: 'transform 0.5s, box-shadow 0.2s',
            overflow: 'hidden',
            minWidth: 0,
          }}
        >
          <div className="featured-img-wrapper">
            <Image
              src="/image/featured-player.jpg"
              alt="Featured Player"
              width={320}
              height={420}
              className="featured-img"
              style={{
                borderTopLeftRadius: '22px',
                borderTopRightRadius: '22px',
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
                aspectRatio: '3/4',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Highlight Video */}
        <div className="d-flex flex-column align-items-center w-100" style={{ maxWidth: '700px' }}>
          <h5 className="mb-3 fw-bold text-center" style={{ color: '#1d428a', letterSpacing: 1 }}>Highlight</h5>
          <div className="ratio ratio-16x9 shadow rounded-4 border border-2 w-100"
            style={{ borderColor: '#1d428a', background: '#fffbe6', minHeight: '200px' }}>
            <iframe
              src="https://www.youtube.com/embed/aYLIgURZJGM?si=8gXyft4vgHMZPamL"
              title="Stephen Curry Highlight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '18px', width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx global>{`
        .hover-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 8px 32px #1d428a33;
        }
        .bg-decor {
          background: linear-gradient(120deg, #fff 60%, #ffc72c22 100%);
        }
        .bg-decor::before {
          content: '';
          position: absolute;
          top: -80px;
          left: -80px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, #ffc72c55 60%, transparent 100%);
          z-index: 0;
          border-radius: 50%;
        }
        .bg-decor::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, #1d428a22 60%, transparent 100%);
          z-index: 0;
          border-radius: 50%;
        }
        main.bg-decor > * {
          position: relative;
          z-index: 1;
        }
        .featured-header-glow {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(90deg, #fffbe6 60%, #ffc72c33 100%);
          border-radius: 20px;
          box-shadow: 0 2px 16px #ffc72c55, 0 1.5px 8px #1d428a22;
          padding: 12px 36px 12px 28px;
          font-size: 1.1rem;
          font-weight: bold;
          color: #1d428a;
          letter-spacing: 1px;
          position: relative;
          border: 2px solid #ffc72c;
        }
        @media (max-width: 768px) {
          .featured-header-glow {
            font-size: 10px;
            padding: 10px 18px 10px 14px;
          }
          .featured-header-name {
            font-size: 10px;
          }
        }


        .featured-header-name {
          color: #1d428a;
          font-size: 1.1em;
          font-weight: 700;
          text-shadow: 0 2px 8px #fffbe6cc, 0 1px 0 #ffc72c99;
        }
        .featured-header-divider {
          color: #ffc72c;
          font-size: 1em;
          font-weight: 900;
          margin: 0 10px;
          text-shadow: 0 1px 4px #1d428a33;
        }
        .featured-header-role {
          color: #fff;
          background: #1d428a;
          border-radius: 12px;
          padding: 2px 10px;
          font-size: 1em;
          font-weight: 600;
          margin-right: 4px;
          box-shadow: 0 1px 6px #1d428a22;
        }
        .featured-header-stars {
          color: #ffc72c;
          font-size: 1em;
          letter-spacing: 2px;
          text-shadow: 0 1px 4px #1d428a33;
        }
        @media (max-width: 768px) {
          .featured-card {
            max-width: 50vw !important;
            margin-top: 3rem !important;
          }
            .navbar-header h4{
             font-size: 0.8rem;
          .iframe {
            width: 50%;
            height: 50%;
          }
        }
      `}</style>
    </main>
  );
}
