import axios from 'axios';

// Pre-configured instance of axios client
export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID kdiMmc2dqX-Ss9wb3-UduXKq_eAsKJgQ4dC1ShdTaXA'
	}
});