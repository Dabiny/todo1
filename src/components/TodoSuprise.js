import '../styles/todoSuprise.scss';
import hamster from '../assets/images/hamster.jpg';
const TodoSuprise = () => {
    return (
      <>
        <div className="container">
          <div id="burst-12">
            마참내 <br />난 목표를 해냈다
          </div>
        </div>
        <div>
          <img src={hamster} />
        </div>
      </>
    );
}
export default TodoSuprise;