# Developer Guide & Component Reference

This guide covers developer details on using `<zero-md>` with custom external stylesheets in a modern responsive layout.

---

## How zero-md Integration Works

`<zero-md>` is a web component that loads Markdown files and renders them inside a Shadow DOM container.

### Template Injecting style.css

```html
<zero-md id="mdViewer" src="README.md">
  <template data-append>
    <link rel="stylesheet" href="style.css" />
  </template>
</zero-md>
```

When switching options, JavaScript updates the `src` attribute:

```javascript
const viewer = document.getElementById('mdViewer');
viewer.setAttribute('src', 'guide.md');
```

---

## Styling via Tailwind CSS

> **Important Reminder**: Always edit `src/main.css` and run the Tailwind CLI compiler. Do not edit `style.css` directly!

### Build Command:
```bash
npx @tailwindcss/cli -i ./src/main.css -o ./style.css
```

