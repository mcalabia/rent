document.addEventListener("DOMContentLoaded", function() {
  var sitemapUrl = 'https://redfin-group.webflow.io/sitemap.xml'; // Replace with your actual sitemap URL

  function fetchSitemap(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "text/xml");
        var urls = xmlDoc.getElementsByTagName("url");

        var pageListContainer = document.getElementById('page-list-container');
        if (!pageListContainer) {
          console.error('Page list container not found.');
          return;
        }

        var rootList = document.createElement('ul');

        for (var i = 0; i < urls.length; i++) {
          var loc = urls[i].getElementsByTagName("loc")[0].textContent;
          var relativeUrl = loc.replace('https://solutions.rent.com', ''); // Extract relative URL

          var segments = relativeUrl.split('/').filter(Boolean);
          var pageTitle = segments.pop().replace(/-/g, ' ').replace('.html', ''); // Extract page title from relative URL

          var parent = rootList;
          var path = '';

          segments.forEach(segment => {
            path += '/' + segment;
            var listItem = findOrCreateListItem(parent, segment);
            var sublist = listItem.querySelector('ul');
            if (!sublist) {
              sublist = document.createElement('ul');
              listItem.appendChild(sublist);
            }
            parent = sublist;
          });

          var listItem = document.createElement('li');
          var pageLink = document.createElement('a');
          pageLink.href = relativeUrl;
          pageLink.textContent = pageTitle;

          listItem.appendChild(pageLink);
          parent.appendChild(listItem);
        }

        pageListContainer.appendChild(rootList);
      })
      .catch(error => console.error('Error fetching sitemap:', error));
  }

  function findOrCreateListItem(parent, segment) {
    var listItems = parent.querySelectorAll('li');
    for (var i = 0; i < listItems.length; i++) {
      if (listItems[i].textContent.trim() === segment.replace(/-/g, ' ')) {
        return listItems[i];
      }
    }
    var listItem = document.createElement('li');
    listItem.textContent = segment.replace(/-/g, ' ');
    parent.appendChild(listItem);
    return listItem;
  }

  fetchSitemap(sitemapUrl);
});