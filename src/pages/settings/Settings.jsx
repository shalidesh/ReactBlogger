import './settings.css';
import SideBar from '../../components/sidebar/SideBar';


export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form action="" className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingspp">
                    <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>

                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />

                </div>
                <label>Username</label>
                <input type="text" placeholder='Shalika' />

                <label>Email</label>
                <input type="email" placeholder='Shalika@gmail.com' />

                <label>Password</label>
                <input type="password" />

                <button className="settingdUpdate">Update</button>
                

            </form>

        </div>
        <SideBar/>
    </div>
  )
}
