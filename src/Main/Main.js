
import './Main.css';
import imgBeka from './Bekadil-img.jpg';
import Content from './content/Content';
function Main() {
  return (
<main>
  <div className='familiarity'>
  <div><p className="Hi">
    Hi, I am Bekadil, Frontend developer
    </p>
    <p className="aboutMe">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, delectus dolores exercitationem explicabo nobis excepturi corporis. Ut incidunt a repellat quia placeat dolor deleniti blanditiis vitae. Ipsum, autem omnis. Ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex vero harum temporibus a sunt esse provident dolorum quasi modi laborum illum voluptatem eos quam culpa, neque nobis delectus et! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, blanditiis magni? Explicabo ipsa adipisci consectetur iure? Illo quo laboriosam reiciendis aliquid atque, similique sequi? Explicabo asperiores atque debitis nemo adipisci.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, delectus dolores exercitationem explicabo nobis excepturi corporis. Ut incidunt a repellat quia placeat dolor deleniti blanditiis vitae. Ipsum, autem omnis. Ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex vero harum temporibus a sunt esse provident dolorum quasi modi laborum illum voluptatem eos quam culpa, neque nobis delectus et! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, blanditiis magni? Explicabo ipsa adipisci consectetur iure? Illo quo laboriosam reiciendis aliquid atque, similique sequi? Explicabo asperiores atque debitis nemo adipisci.
      
    </p>
    <button>
      Download Resume
    </button>
    </div>
    <img src={imgBeka} alt="" className='myPhoto'/>
  </div>
  <Content/>
</main>
  );
}

export default Main;
