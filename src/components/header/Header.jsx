import './header.css';

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Needlestack</span>
            <span className="headerTitleLg">Game Development</span>
        </div>
        <img className='headerImage' src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header_image" />
    </div>
  )
}
