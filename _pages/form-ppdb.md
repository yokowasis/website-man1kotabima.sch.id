---
title: "Formulir PPDB"
date: "2023-01-01T00:00:00.000Z"
author:
  name: Admin
  picture: "/assets/blog/authors/joe.jpeg"
---

<script
  src="https://cdn.jsdelivr.net/npm/@iframe-resizer/child"
  type="text/javascript"
  async
></script>

<div style="max-width:700px; margin:auto">
  <iframe style="width:100%" src="https://aplikasi.man1kotabima.sch.id//page/viewforms/?id=26" id="myIframe"></iframe>
</div>

<script>
  var iframe = document.getElementById('myIframe');
  window.addEventListener('message', function(event) {
    var data = event.data;
    if (data.messageType === 'setHeight') {
      // Set the iframe height
      iframe.style.height = data.height + 10+ 'px';
    }
    if (data.messageType === 'scrollToTop') {
      // Scroll to top of iframe
      iframe.scrollIntoView();
    }
  });
</script>
