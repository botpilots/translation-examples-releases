

document.addEventListener('DOMContentLoaded', () => {
	const toggleOriginalsBtn = document.getElementById('toggleOriginals');
	const expandCollapseAllBtn = document.getElementById('expandCollapseAll');
	const hamburgerBtn = document.getElementById('hamburger-btn');
	const sidebar = document.getElementById('sidebar');
	
	hamburgerBtn.addEventListener('click', () => {
		hamburgerBtn.classList.toggle('open');
		sidebar.classList.toggle('open');
	});

	let originalsVisible = false;
	toggleOriginalsBtn.addEventListener('click', () => {
		originalsVisible = !originalsVisible;
		const originalTexts = document.querySelectorAll('.original-text');
		originalTexts.forEach(el => {
			el.style.display = originalsVisible ? 'block' : 'none';
		});
		toggleOriginalsBtn.textContent = originalsVisible ? 'Hide Original Text' : 'Show Original Text';
	});

	let allExpanded = false; // Assume most are collapsed by default
	expandCollapseAllBtn.addEventListener('click', () => {
		allExpanded = !allExpanded;
		const detailsElements = document.querySelectorAll('details');
		detailsElements.forEach(el => {
			el.open = allExpanded;
		});
		expandCollapseAllBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
	});

	// Set initial state for expand/collapse button
	const allDetails = Array.from(document.querySelectorAll('details'));
	const isAnyCollapsed = allDetails.some(d => !d.open);
	if (!isAnyCollapsed) {
		allExpanded = true;
		expandCollapseAllBtn.textContent = 'Collapse All';
	} else {
		allExpanded = false;
		expandCollapseAllBtn.textContent = 'Expand All';
	}
});
// End of script