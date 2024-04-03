import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto pl-6 pr-6">
      <main>{children}</main>
      <footer className="footer">
        <p className="footer__text">
          Made with{' '}&#10084;{' '}for the Community
        </p>
      </footer>
    </div>
  )
}
