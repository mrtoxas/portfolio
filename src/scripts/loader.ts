export const pageLoader = () => {
	window.addEventListener('load', () => {
		const loader = document.getElementById('pageLoader');
		loader.style.display = 'none';
	})
}