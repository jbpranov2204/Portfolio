const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Remove v-if="isVisible"
  content = content.replace(/\s*v-if="isVisible"/g, '');
  
  // Remove animation classes
  content = content.replace(/\banimate-slideUp\b/g, '');
  content = content.replace(/\banimate-fadeInUp\b/g, '');
  content = content.replace(/\banimate-fadeIn\b/g, '');
  
  // Remove style properties
  content = content.replace(/\s*:style="\{\s*animationDelay:[^}]+\}"/g, '');
  content = content.replace(/\s*style="animation-delay:[^"]+"/g, '');
  
  // Clean up any double spaces or trailing spaces left by class removals
  content = content.replace(/class="\s+/g, 'class="');
  content = content.replace(/\s+"/g, '"');
  
  // Remove useScrollReveal import and usage
  content = content.replace(/import\s+\{\s*useScrollReveal\s*\}\s+from\s+['"]\.\.\/composables\/useAnimations['"];?\r?\n?/g, '');
  content = content.replace(/const\s+\{\s*isVisible,\s*setupObserver\s*\}\s*=\s*useScrollReveal\(\);?\r?\n?/g, '');
  
  // Remove setupObserver block
  content = content.replace(/\s*if\s*\([^)]*\)\s*\{\s*setupObserver\([^)]+\);?\s*\}/g, '');
  content = content.replace(/\s*setupObserver\([^)]+\);?/g, '');
  
  // Remove animation styles
  content = content.replace(/\.animate-slideUp\s*\{[^}]+\}/g, '');
  content = content.replace(/\.animate-fadeInUp\s*\{[^}]+\}/g, '');
  content = content.replace(/\.animate-fadeIn\s*\{[^}]+\}/g, '');
  content = content.replace(/@keyframes\s+slideUp\s*\{[\s\S]*?\}\s*\}/g, '');
  content = content.replace(/@keyframes\s+fadeInUp\s*\{[\s\S]*?\}\s*\}/g, '');
  content = content.replace(/@keyframes\s+fadeIn\s*\{[\s\S]*?\}\s*\}/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.vue')) {
      processFile(fullPath);
    }
  }
}

walkDir(componentsDir);
console.log('Done');
