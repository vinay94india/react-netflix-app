// import logo from './logo.svg';
import Card from './Card';
import sData from './SData';

// let ncard = (val)=>{
// // console.log(val);
// return(
//   <Card
//   imgsrc={val.imgsrc}
//   title={val.title}
//   sname={val.sname}
//   link={val.link}
// />
// );
// }

function App() {
  
  // console.log(sData[0].sname);

  // fetch('https://jsonplaceholder.typicode.com/photos')
  // .then(response => response.json())
  // .then(json => console.log(json))

  return (
    <>
        <h1>List of topfour Netflix series in 2022</h1>

      <div className="row">
      {sData.map((val)=>{
        return(
          <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
        );
      })}

      </div>

    </>
  );
}

export default App;
