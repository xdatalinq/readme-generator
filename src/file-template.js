// confirm function/page accessed
const generateTest = () => {
    console.log("file-template.js reached!")
};

// demo create section code
const generateReadme = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
    Markdown Example
    ===============
    
    This is the raw markdown used to generate the below web content.
    
    Bulleted List
    -------------
    
    * Foo
    * Bar
    
    Numbered List
    -------------
    
    1. Foo
    2. Bar
    
    Formatting
    ----------
    
    Can be **bold** or *italic*
    
    Links
    -----
    
    Click [here](http://foo.com) to go somewhere.
    `;
  };