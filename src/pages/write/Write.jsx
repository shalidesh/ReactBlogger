import './write.css';

export default function Write() {
  return (
    <div className='write'>
        <form action="" className="writeForm">
            <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="writeImg" />
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>

            </div>
            <div className="writeFormGroup">
                <textarea type="text" name="" id="" cols="30" rows="10" placeholder='Tel your story.......' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
