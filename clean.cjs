const fs = require('fs');
const path = require('path');

function clean(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      clean(p);
    } else if (p.endsWith('.vue')) {
      let c = fs.readFileSync(p, 'utf8');
      let orig = c;
      c = c.replace(/\.\s*\{\s*animation:\s*[a-zA-Z]+\s+[^}]+\}/g, '');
      c = c.replace(/\s*:style="\{\s*animationDelay:[^\}]+\}"/g, '');
      if (c !== orig) {
        fs.writeFileSync(p, c);
        console.log("Cleaned " + p);
      }
    }
  });
}

clean('./src/components');
