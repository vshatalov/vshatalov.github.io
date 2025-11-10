<script>
	const section = document.getElementById('mainContent');
	const tocList = document.querySelector('#tocList ul');
	const toggleBtn = document.getElementById('toggleToc');
	const tocContainer = document.getElementById('tocList');

	// Build TOC from headings
	const headings = section.querySelectorAll('h2, h3');
	headings.forEach((heading, index) => {
		if (!heading.id) heading.id = `heading-${index}`;
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = `#${heading.id}`;
		a.textContent = heading.textContent;
		li.appendChild(a);
		tocList.appendChild(li);
	});

	// Toggle visibility
	toggleBtn.addEventListener('click', () => {
		const isVisible = tocContainer.style.display === 'block';
		tocContainer.style.display = isVisible ? 'none' : 'block';
		toggleBtn.textContent = isVisible ? 'Show Table of Contents' : 'Hide Table of Contents';
	});
</script>