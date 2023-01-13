/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.
 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the
disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : Zhao Yuyang 
 * Student ID : 1155181315 
 * Date : 2022.10.27
 */


const dataList=[
  {
    "id": "run",
    "featureImageUrl": "/img/run.jpg",
    "title": "Every day 1k, Doctor run away",
    "description": "Running is good for health.",
  },
  {
    "id": "sunset",
    "featureImageUrl": "/img/sunset.jpg",
    "title": "Praise the Sun",
    "description": "The Sun is a wondrous body. Like a magnificent father!",
  },
  {
    "id": "painting",
    "featureImageUrl": "/img/painting.jpg",
    "title": "Do you like drawing?",
    "description": "Painting is an important form in the visual arts",
  },
  {
    "id": "concert",
    "featureImageUrl": "/img/concert.jpg",
    "title": "Memorable Day!",
    "description": "This is the first time I went to a concert",
    "contents": "According to Wikipedia, A concert is a live music performance in front of an audience. The performance may be by a single musician, sometimes then called a recital, or by a musical ensemble, such as an orchestra, choir, or band. Concerts are held in a wide variety and size of settings, from private houses and small nightclubs, dedicated concert halls, amphitheatres and parks, to large multipurpose buildings, such as arenas and stadiums. Indoor concerts held in the largest venues are sometimes called arena concerts or amphitheatre concerts. Informal names for a concert include show and gig. Regardless of the venue, musicians usually perform on a stage (if not actual then an area of the floor designated as such). Concerts often require live event support with professional audio equipment. Before recorded music, concerts provided the main opportunity to hear musicians play. For large concerts or concert tours, the challenging logistics of arranging the musicians, venue, equipment and audience (ticket sales) are handled by professional tour promoters."
  },
  {
    "id": "bicycles",
    "featureImageUrl": "/img/bicycles.jpg",
    "title": "Olympic GO GO!",
    "description": "Bicycle seems fun",
  }
];

const div1 = {
  height: "80px",
  width: "100%",
  backgroundColor:"#FFC765",
}

const h1s = {
  fontSize: "32px",
  color: "#2B1F9E",
  verticalAlign: "middle",
  textAlign:"center",
  padding: "20px 0",
}

const PostThumbnail1 = {
  margin: "auto"
}

// const PostThumbnailImg = {
//   width: "300px",
//   height: "180px",
//   objectFit:"cover",
// }

const divStyle =  {
  // columns: "2",
  // WebkitColumns: "2",
  // MozColumns: "2",
  // gap: "15px 0px" ,
  // verticalAlign: "middle",
  // textAlign:"center",
  padding: "15px 20px",
  // listStyleType: "disc",
  // display: flex,
  // justifyContent: flexStart,
  // flexWrap: wrap
}


const div2 = {
  textAlign: "center",
  padding: "15px 0px",
}

const styleImg = {
  objectFit: "cover"
}

class PostThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLarge: true,
      width: "300px",
      height: "180px",
    };
  }
  imgLarge() {
    this.setState({
        "width": "600px",
        "height": "360px",
    })
  }
  imgNormal() {
    this.setState({
        "width": "300px",
        "height": "180px",
    })
  }
  cliker() {
    this.setState(
    prevState => ({
      isLarge: !prevState.isLarge
    }));
    console.log(this.state.isLarge)
    this.state.isLarge? this.imgLarge():this.imgNormal()
  }
  render() {
    return (
        <div className="col-6" style={div2} onClick={() => this.cliker()}>
            <img src={this.props.posts.featureImageUrl} width={this.state.width} height={this.state.height} style={styleImg}/>
          <div>
            <h2>{this.props.posts.title}</h2>
            <p>{this.props.posts.description}</p>
          </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <div style = {div1}>
          <h1 style = {h1s}> Welcome to My Blog</h1>
        </div>
      </div>
      
    );
  }
}


// const divStyle = {
//   gap:15,
// }

class Main extends React.Component {
  // renderPost(posts) {
  //   return <PostThumbnail posts={dataList} />;
  // }
  render() {
    return (
      <div className = "container" style={divStyle}>
        <div className="row">
        <PostThumbnail posts={dataList[0]}/>
          <PostThumbnail posts={dataList[1]}/>
        </div>
        <div className="row">
          <PostThumbnail posts={dataList[2]}/>
          <PostThumbnail posts={dataList[3]}/>
        </div>
        <div className="row">
          <PostThumbnail posts={dataList[4]}/>
        </div>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.querySelector("#app"));
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
root.render(<App />);
