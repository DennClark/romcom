---
title: RomCom - Pair
---
RomCom is a website that allows users to generate book covers for hypothetical romance novels.  Users can generate covers randomly or by using their own input values via a form.  
[Deployed Site](https://dennclark.github.io/romcom/)
Each cover consists of a:
1. Cover image
2. title
3. Tagline with two descriptors

Generated covers can be viewed individually, or saved and then displayed with other saved covers.

### Contributors
* Dennis Clark [Dennis GitHub Profile](https://github.com/DennClark)
* Bruce Gordon [Bruce GitHub Profile](https://github.com/bruce-gordon)

### Set Up

* Fork the repo and clone down into the terminal.
* Open in the text editor.
* Read the README.
* in the terminal, run command "open index.html" to interact with the app.

### Iteration 0 - Main Page
Objective - When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors.

When the user loads the page it displays a romance novel book cover that is randomly generated from a selection of saved cover images, titles and descriptors.

The buttons displayed at the top of the page are:
* Show New Random Cover
* Save Cover
* View Saved Covers
* Make Your Own Cover

![](https://media.giphy.com/media/L4TOjMLhDbq8ZJkkDz/giphy.gif)
### Iteration 1 - Show Random Cover
Objectives
1. Every time the user clicks the Show New Random Cover button, a new random cover is created
2. Every time the user clicks the Show New Random Cover button, the random cover is displayed

The user can click the Show New Random Cover button to create and display a new cover.  The rest of the page remains the same.

![](https://media.giphy.com/media/Up8AfA5pyo4PBg28bV/giphy.gif)
### Iteration 2 - Switching Views
Objectives
1. When a user clicks the “Make Your Own Cover” button, we should see the form.  The homepage view and saved covers view should be hidden.
2. When a user clicks the "View Saved Covers" button, we should see the Saved Covers section. The homepage view and form view should be hidden.
3. In both cases, the "Show New Random Cover" and "Save Cover" buttons are hidden.
4. In both cases, the "Home" button is visible.
5. The user can switch between the three views on the correct button clicks.

The user can navigate between the home view, the saved covers, the form for making your own book by using the three corresponding buttons on the top of the page.

![](https://media.giphy.com/media/hR16V8g0EJX570ZCm4/giphy.gif)
### Iteration 3 -
Objectives
1. In the Make Your Own Cover form view, users should be able to fill out the four input fields and then hit the "Make my book" button.
2. This will save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data.
3. It will use the values from the inputs to create a new instance of the Cover class.
4. It will change back to the main home view (hiding the form view again).
5. It will display the newly created cover image, title, and descriptors in the main cover.

The user can create their own custom cover by completing the four input fields and clicking on the "Make my book" button.  The view changes back to the homepage but displays the cover based on user input.  User inputs are also saved for use in later random covers.

![](https://media.giphy.com/media/ThqHyM0DGV9gy90oEG/giphy.gif)
### Iteration 4
Objective
1. When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array.
2. If a user clicks the “Save Cover” more than once on a single cover, it will still only be saved once (no duplicates).
3. When a user clicks the “View Saved Covers” button, the saved covers section is visible.
4. All the covers in the savedCovers array should be displayed in the saved covers section.

The user can save any number of generated covers, but only one time each.  By clicking on the "View Saved Covers" button the user can display smaller images of all covers that have been saved.

![](https://media.giphy.com/media/hQuKoU7OJX19nRLaik/giphy.gif)
### Iteration 5
Objective
1. From the saved covers view, if a user double clicks a saved poster, it will be deleted.

This iteration was not completed.  We attempted to complete the iteration by utitlizing the event.target method in a function and attaching it to an event listener set to listen for 'dblclick'.  We were able to apply this individual elements that make up the covers (title, image, descriptor, etc) but not the cover as a whole section.
