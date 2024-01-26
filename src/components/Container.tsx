import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <main>{children}</main>
      <footer className="footer">
        <p className="footer__text">
          Made with{' '}&#10084;{' '}for the Community
        </p>
      </footer>
    </div>
  )
}
