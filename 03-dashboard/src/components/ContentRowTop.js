import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMoviesInDb from "./LastMovieInDb";

function ContentRowTop() {
  let metrics=[
    {
        title:"MOVIES IN DATA BASE",
        quantity:"21",
        icon:"fa-film",
        color:"primary" 
    },
    {
        title:"TOTAL AWARDS",
        quantity:"79",
        icon:"fa-award",
        color:"success" 
    },
    {
        title:"ACTORS QUANTITY",
        quantity:"49",
        icon:"fa-user",
        color:"warning" 
    }

  ]
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
                {metrics.map((metric,i)=><ContentRowMovies key={i} title={metric.title} quantity={metric.quantity} icon={metric.icon} color={metric.color} />)}
            </div>
           
            <div className="row">
                <LastMoviesInDb />
                <GenresInDb/>
            </div>
        </div>
    )
}
export default ContentRowTop;