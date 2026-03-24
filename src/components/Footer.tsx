function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ethan Hapurne</p>
        <p className="footer-contact">
          Contact me:
          {' '}
          <a href="mailto:ethan.hapurne@mail.utoronto.ca">Email</a>
          {' '}
          |
          {' '}
          <a
            href="https://www.linkedin.com/in/ethan-hapurne/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {' '}
          |
          {' '}
          <a href="https://github.com/ethanhapurne" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
