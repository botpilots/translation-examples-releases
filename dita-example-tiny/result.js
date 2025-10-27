

document.addEventListener('DOMContentLoaded', () => {
	const toggleOriginalsBtn = document.getElementById('toggleOriginals');
	const expandCollapseAllBtn = document.getElementById('expandCollapseAll');
	const hamburgerBtn = document.getElementById('hamburger-btn');
	const sidebar = document.getElementById('sidebar');
	
	hamburgerBtn.addEventListener('click', () => {
		hamburgerBtn.classList.toggle('open');
		sidebar.classList.toggle('open');
	});

	const versionToggler = document.querySelector('.version-toggler');
	if (versionToggler) {
		const toggleButtons = versionToggler.querySelectorAll('.toggle-version-btn');
		const versionContainers = document.querySelectorAll('.version-container');

		// Set initial active button
		if (toggleButtons.length > 0) {
			toggleButtons[0].classList.add('active');
		}

		toggleButtons.forEach(button => {
			button.addEventListener('click', () => {
				// Deactivate all buttons
				toggleButtons.forEach(btn => btn.classList.remove('active'));
				// Activate clicked button
				button.classList.add('active');

				const versionToShow = button.dataset.version;
				
				versionContainers.forEach(container => {
					if (container.classList.contains(versionToShow)) {
						container.style.display = 'block';
					} else {
						container.style.display = 'none';
					}
				});
			});
		});
	}

	let originalsVisible = false;
	if (toggleOriginalsBtn) {
		toggleOriginalsBtn.addEventListener('click', () => {
			originalsVisible = !originalsVisible;
			const originalTexts = document.querySelectorAll('.original-text');
			originalTexts.forEach(el => {
				el.style.display = originalsVisible ? 'block' : 'none';
			});
			toggleOriginalsBtn.textContent = originalsVisible ? 'Hide Original Text' : 'Show Original Text';
		});
	}

	let allExpanded = false; // Assume most are collapsed by default
	if (expandCollapseAllBtn) {
		expandCollapseAllBtn.addEventListener('click', () => {
			allExpanded = !allExpanded;
			const detailsElements = document.querySelectorAll('details');
			detailsElements.forEach(el => {
				el.open = allExpanded;
			});
			expandCollapseAllBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
		});
	}

	// Set initial state for expand/collapse button
	if (expandCollapseAllBtn) {
		const allDetails = Array.from(document.querySelectorAll('details'));
		const isAnyCollapsed = allDetails.some(d => !d.open);
		if (!isAnyCollapsed) {
			allExpanded = true;
			expandCollapseAllBtn.textContent = 'Collapse All';
		} else {
			allExpanded = false;
			expandCollapseAllBtn.textContent = 'Expand All';
		}
	}
});
// End of script