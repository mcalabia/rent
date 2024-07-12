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
        var urlMap = {};

        for (var i = 0; i < urls.length; i++) {
          var loc = urls[i].getElementsByTagName("loc")[0].textContent;
          var relativeUrl = loc.replace('https://solutions.rent.com', ''); // Extract relative URL

          var segments = relativeUrl.split('/').filter(Boolean);

          var pageTitle;
          if (segments.length === 0) {
            pageTitle = 'homepage';
          } else {
            pageTitle = segments.pop().replace(/-/g, ' ').replace('.html', '');
          }

          var parent = rootList;
          var path = '';

          segments.forEach(segment => {
            path += '/' + segment;
            if (!urlMap[path]) {
              var listItem = document.createElement('li');
              listItem.textContent = segment.replace(/-/g, ' ');
              var sublist = document.createElement('ul');
              listItem.appendChild(sublist);
              parent.appendChild(listItem);
              urlMap[path] = sublist;
            }
            parent = urlMap[path];
          });

          var listItem = document.createElement('li');
          var pageLink = document.createElement('a');
          pageLink.href = relativeUrl || '/';
          pageLink.textContent = pageTitle;

          listItem.appendChild(pageLink);
          parent.appendChild(listItem);
        }

        pageListContainer.appendChild(rootList);
      })
      .catch(error => console.error('Error fetching sitemap:', error));
  }

  fetchSitemap(sitemapUrl);
});