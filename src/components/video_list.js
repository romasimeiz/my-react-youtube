import React from "react";
import VideoListItem from './video_list_item';

const VideoList = (params) => {
	const videoListItems = params.videos.map( video => { 
		return <VideoListItem
			onVideoSelect={params.onVideoSelect}  
			key={video.etag} 
			video={video} />
	 } );

	return <ul className='col-md-4 list-group'>
				{videoListItems}
			</ul>;
}

export default VideoList;