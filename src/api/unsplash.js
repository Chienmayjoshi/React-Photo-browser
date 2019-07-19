import axios from 'axios';

export default axios.create({
	baseURL: 'https:\//api.unsplash.com',
	headers: {
		Authorization: 'Client-ID fd06bef1ec5385a82a7bb10ee90bd5a6ef2bd7bd9b9c323188a6c47296e4f114'
	}
});