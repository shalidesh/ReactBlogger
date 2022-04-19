import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postcats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitles">
          Lorem ipsum dolor sit amet consectetur  
 
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        
      </div>
      <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, delectus ipsum, eum eos necessitatibus reprehenderit incidunt a amet quis iste, veritatis quo facere magnam adipisci maiores architecto similique ad eveniet!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia rem assumenda error temporibus alias quod veritatis voluptatum quisquam maiores, vero facere odio quaerat voluptas harum corporis saepe soluta autem!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quam maxime porro eos repellat consequuntur accusamus, fuga nam, ab, eaque eligendi architecto facere hic corrupti cupiditate minima placeat pariatur adipisci?
        </p>
    </div>

  )
}
