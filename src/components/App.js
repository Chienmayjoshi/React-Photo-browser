import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		//console.log(term);

		//request call before making a separate file for axios call
		/*const response = await axios.get('https:\//api.unsplash.com/search/photos',{
			params: { query : term},
			headers: {
				Authorization: 'Client-ID fd06bef1ec5385a82a7bb10ee90bd5a6ef2bd7bd9b9c323188a6c47296e4f114'
			}
		});*/

		//2nd method using promise
		/*.then((response) => {
			console.log(response.data.results);
		})*/

		const response = await unsplash.get('/search/photos',{
			params: { query : term}
		});

		this.setState({ images: response.data.results})

	}

	render(){
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
	
}

export default App;