# Developer Guide

This document describes how `<zero-md>` is integrated with external stylesheets and compiled Tailwind CSS.

---

## Zero-MD Integration

`<zero-md>` loads Markdown files and renders them inside a Shadow DOM container.

### Template Configuration

```html
<zero-md id="mdViewer" src="README.md">
  <template data-append>
    <link rel="stylesheet" href="style.css" />
  </template>
</zero-md>
```

Updating the `src` attribute loads the new file:

```javascript
const viewer = document.getElementById('mdViewer');
viewer.setAttribute('src', 'guide.md');
```

---

## Styling Workflow

Edit `src/main.css` to add custom CSS rules or theme configurations, then run the Tailwind compiler.

### Build Command:
```bash
npx @tailwindcss/cli -i ./src/main.css -o ./style.css
```


