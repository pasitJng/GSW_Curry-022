'use client';
export default function Footer() {
  return (
    <footer className="py-3" style={{ backgroundColor: '#1d428a' }}>
      <div className="d-flex justify-content-center gap-3 mb-2">
        <a
          href="https://www.facebook.com/ph.sis.th.746802"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Facebook"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/shogxnnnn/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://github.com/pasitJng"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="GitHub"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>

      <div className="container text-center">
        <p className="mb-0" style={{ fontSize: '13px', color: '#f8f9fa' }}>
          © {new Date().getFullYear()} Basketball-Sport022. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        .social-icon {
          color: #f8f9fa;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .social-icon:hover {
          color: #ffc72c; /* สีเหลือง Golden State */
        }
      `}</style>
    </footer>
  );
}
