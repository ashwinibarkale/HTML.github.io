function showContent(contentId) {
    var contentDiv = document.getElementById('content');
    var content = '';
  
    switch (contentId) {
      case 'home':
        content = '<h2>Welcome to the Home Page</h2>';
        break;
      case 'contact':
        content = '<h2>Contact Information</h2><p>Phone: +1 123-456-7890<br>Email: info@example.com</p>';
        break;
      case 'information':
        content = '<h2>Information Page</h2><p>This is some information about our services.</p>';
        break;
      case 'guide':
        content = '<h2>User Guide</h2><p>Here is a guide on how to use our website.</p>';
        break;
      default:
        content = '<h2>404 - Page not found</h2>';
        break;
    }
  
    contentDiv.innerHTML = content;
  }
  