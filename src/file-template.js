// confirm function/page accessed
const generateTemplate = data => {
    console.log("This is TEMPLATE step data: "+data)
    return `# ${data}
  
  `;
  }

module.exports = { generateTemplate };

// // demo create section code
// const generateReadme = aboutText => {
//     if (!aboutText) {
//       return '';
//     }
  
//     return `
//     Markdown Example
//     ===============
    
//     This is the raw markdown used to generate the below web content.
    
//     Bulleted List
//     -------------
    
//     * Foo
//     * Bar
    
//     Numbered List
//     -------------
    
//     1. Foo
//     2. Bar
    
//     Formatting
//     ----------
    
//     Can be **bold** or *italic*
    
//     Links
//     -----
    
//     Click [here](http://foo.com) to go somewhere.
//     `;
  
// };