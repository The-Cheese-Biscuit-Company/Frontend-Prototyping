document.addEventListener('DOMContentLoaded', () => {
  const mdViewer = document.getElementById('mdViewer');
  const fileSelect = document.getElementById('fileSelect');
  const sidebarNav = document.getElementById('sidebarNav');

  // Populate sidebar with headings parsed from zero-md rendered DOM
  function populateHeadingNavigation() {
    if (!sidebarNav || !mdViewer) return;

    // Clear existing nav
    sidebarNav.innerHTML = '';

    // Access rendered DOM inside zero-md shadow root or main root
    const shadowRoot = mdViewer.shadowRoot;
    const contentContainer = shadowRoot
      ? shadowRoot.querySelector('.markdown-body') || shadowRoot
      : mdViewer;

    const headings = contentContainer.querySelectorAll('h1, h2, h3');

    if (!headings || headings.length === 0) {
      sidebarNav.innerHTML = '<div class="text-xs text-slate-500 italic px-2 py-1">No headings found</div>';
      return;
    }

    headings.forEach((heading, index) => {
      // Ensure heading has an ID to target
      if (!heading.id) {
        const textSlug = heading.textContent
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
        heading.id = textSlug || `heading-${index}`;
      }

      const btn = document.createElement('button');
      const tag = heading.tagName.toLowerCase();
      
      // Indentation based on heading level
      let indentClass = 'pl-2';
      if (tag === 'h2') {
        indentClass = 'pl-4';
      } else if (tag === 'h3') {
        indentClass = 'pl-6';
      }

      // Clean heading text by stripping hash signs and emoji symbols
      const cleanHeadingText = heading.textContent
        .replace(/^#+\s*/, '')
        .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
        .trim();

      btn.className = `heading-nav-btn text-left py-1 text-sm ${indentClass} hover:underline truncate block`;
      btn.textContent = cleanHeadingText;
      btn.dataset.targetId = heading.id;



      btn.addEventListener('click', () => {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      sidebarNav.appendChild(btn);
    });
  }

  // Listen to zero-md zero-md-rendered event to update sidebar
  if (mdViewer) {
    mdViewer.addEventListener('zero-md-rendered', () => {
      populateHeadingNavigation();
    });

    // Also attempt after a short fallback in case event already fired
    setTimeout(populateHeadingNavigation, 300);
  }

  // Header dropdown listener to switch files
  if (fileSelect) {
    fileSelect.addEventListener('change', (e) => {
      if (mdViewer) {
        mdViewer.setAttribute('src', e.target.value);
      }
    });
  }
});