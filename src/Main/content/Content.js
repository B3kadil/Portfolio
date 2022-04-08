
import './Content.css';
function Content() {
  return (
    <div className="content">
    <div className='Content-box'>
      <p className="recent">
       Recent posts
       </p>
     <a href="#" className="view">
       View all
       </a>
   </div>
   <div className='boxes'>
     <div className="content-box-1">
       <div className="content-box-header">
          <p>12 Feb 2020</p>
          <p>|</p>
          <p>Design, Pattern</p>
       </div>
       <p className="content-text">
       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       </p>
     </div>
     <div className="content-box-2">
     <div className="content-box-header">
          <p>12 Feb 2020</p>
          <p>|</p>
          <p>Figma, Icon Design</p>
     </div> 
     <p className="content-text">
     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
     </p>
     </div>
   </div>
   </div>
  );
}

export default Content;
