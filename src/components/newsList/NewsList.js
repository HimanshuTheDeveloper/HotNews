import axios from "axios";
import { Component } from "react";
import NewsItem from "./newsItem/NewsItem"

class NewsList extends Component {

    state = {
        data:[] 
    }
    componentDidMount() {
        axios.get(`http://api.mediastack.com/v1/news?access_key=a2290597f7ad65528ec4e2633535ef89&languages=hi`).then(
            (res) => {
                // console.log(res.data.data);
                this.setState({data:  res.data.data})
            }
        )

        
    }
    render() {
        return (
            <div class="container tm-container-2">
                <div class="col-lg-12">
                    {this.state.data.map((item) =>{
                        // console.log(item);

                        return <NewsItem data={item} />
                    })
                    }
                </div>
            </div>
        )
    }
}
export default NewsList;