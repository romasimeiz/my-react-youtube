import _ from "lodash";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_details'
const API_KEY = 'AIzaSyDMegoqKElnoE8VVhW0tRzXhyXn-2lEmo0';
	
class App extends Component {

	
	constructor(params) {
		super(params); 

		this.state = { 
			videos : [],
			selectedVideo : null
		};

		this.videoSearch('bmw x5');
		
	}

	videoSearch(term) {
		YTSearch({ key : API_KEY, term: term}, (videos) => {
			this.setState({videos: videos, selectedVideo: videos[0] });
		});
	}

	render() {
		const VideoSearch = _.debounce(  term => { this.videoSearch(term) }, 500 );
		return (
			<div> 
				<SearchBar onVideoSearch={ VideoSearch } />
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect = { selectedVideo => { this.setState( {selectedVideo} ) } } 
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));