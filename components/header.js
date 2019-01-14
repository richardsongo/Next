import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Website Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About Us</a>
        </Link>
    </div>
)

export default Header
