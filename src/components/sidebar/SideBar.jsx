import './sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img className='sidebar-image' src="https://images.pexels.com/photos/3975635/pexels-photo-3975635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Distinctio odio neque repellendus dicta porro maiores rerum autem ex commodi 
                 labore! Quaerat porro fugit esse repudiandae alias officiis. Quis, eveniet dolorum!</p>

        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarList-item">Life</li>
                    <li className="sidebarList-item">Music</li>
                    <li className="sidebarList-item">Style</li>
                    <li className="sidebarList-item">Sports</li>
                    <li className="sidebarList-item">Tech</li>
                    <li className="sidebarList-item">Cinema</li>
                </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
             <i className="sidebarIcon fa-brands fa-facebook-square"></i>
             <i className="sidebarIcon fa-brands fa-twitter-square"></i>
             <i className="sidebarIcon fa-brands fa-instagram-square"></i>
             <i className="sidebarIcon fa-brands fa-pinterest-square"></i>

            </div>

        </div>
    </div>
  )
}
