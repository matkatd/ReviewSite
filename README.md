# ReviewSite

This website started as a project for a class, but I wanted to see if I could take it farther. I started by creating HTML templates for the pages I wanted and then created JSON files with the content (text, images, keys, etc.) I used JavaScript to dynamically create the HTML on the topic and review pages. The home and about pages are completely static.

Next, I moved from local JSON files to Google Firebase's cloud database. I used queries to fetch the content from the database and used the same functions to create the pages.

This is a work in progress. I am still working on responsiveness with grid, as well as with photos. I plan on using srcset to use different size images based on the window size. 
Eventually I plan on making it completely static through a templating language.

View the current site here: https://matkatd.github.io/ReviewSite/
