---
title: "KSM 2024"
date: "2024-01-01T00:00:00.000Z"
author:
  name: Admin
  picture: "/assets/blog/authors/joe.jpeg"
---

<!-- Parent Page -->
<script src="https://cdn.jsdelivr.net/npm/@iframe-resizer/child@5.3.2"></script>
<script
  src="https://cdn.jsdelivr.net/npm/@iframe-resizer/child"
  type="text/javascript"
  async
></script>

<div style="max-width:700px; margin:auto"> 
  <iframe style="width:100%" src="https://aplikasi.man1kotabima.sch.id/page/viewforms/?id=1" id="myIframe"></iframe>
</div>

<script>
  var iframe = document.getElementById('myIframe');

  // Listen for messages from the iframe
  window.addEventListener('message', function(event) {
    // Check the origin of the message for security (optional)
    // if (event.origin !== 'https://example.com') return;

    var data = event.data;

    if (data.messageType === 'setHeight') {
      // Set the iframe height
      iframe.style.height = data.height + 10+ 'px';
    }
  });
</script>
