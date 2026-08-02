import './Home.css';

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h1>Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            quod sit blanditiis libero possimus doloremque perspiciatis ipsa
            aliquam, laboriosam minus facere. Doloremque, error vero alias
            dolore reiciendis iste iure consectetur!
          </p>
        </div>
        <div className="home-projects">
          <h3>Projects</h3>
          <div className="home-projects-list">
            <a>Project one</a>
            <a>Project one</a>
            <a>Project one</a>
            <a className="see-more">See more</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
