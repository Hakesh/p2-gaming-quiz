# Gaming Quiz

Sherpa Finder is a fictional website targeting both new and existing players in the video game Destiny who want help getting into and learning Raid content in the game. The website gives information about what we do, why we do it, how we help and a sign up form to let the players interested in getting our help reach out and sign up to our Sherpa Raids.

It's one single scrollable website that has been designed to be responsive and usable on a wide range of devices and resolutions.

[Gaming Quiz - Live Link](https://hakesh.github.io/p2-gaming-quiz/) (Right click to open in a new tab)

![Image of Gaming Quiz on a wide range of devices](assets/docs/am-i-responsive-image.png)

---

## CONTENTS

* [Features](#features)
  * [Navigation Bar](#navigation-bar)
  * [Landing Page Image](#landing-page-image)
  * [About Us](#about-us)
  * [How We Help](#how-we-help)
  * [Sign Up](#sign-up)
  * [Footer](#footer)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Typography](#typography)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment](#deployment)

* [Testing](#testing)

* [Credits](#credits)

---

## Features

### Landing Page
  - Featured at the top of the page, it's fully responsive on all resolutions and links to the Logo, Home Page, 'About Us' section, 'How We Help' section and to the Sign Up form.
  - The Navigation Bar will help the user to find whichever section they are looking for across all screen resolutions and devices.

![Image of the Navigation Bar on Sherpa Finder](assets/docs/nav-bar-image.png)

### Quiz Game
  - The Landing Page introduces the users to Sherpa Finder with a beautiful image of Guardians (what players are called in-game) standing together in unity as a team.

![Image of the Landing Page image on Sherpa Finder](assets/docs/landing-page-image.jpg)

### Final Score
  - The 'About Us' section gives an introduction to what sherpa means if they are not famililar with the term and how it translates into Destiny, and what sherpas usually do in the game.
  - It also describes why we exist, why we are needed and should encourage the users to contact us if they find them self in the situations that are mentioned.

![Image of the 'About Us' section Sherpa Finder](assets/docs/about-us-image.jpg)

### How We Help
  - Gives the users a clear idea what we offer to them with our service and how to get it.
  - Encourage the user to join our communities or various social platforms to either get help from us or meet people in similar situations as them, and give them a place to connect.

![Image of the 'How We Help' section Sherpa Finder](assets/docs/how-we-help-image.png)

### Sign Up
  - This section allows the user to get involved and sign up to get help and join our Sherpas in getting to know, learning and doing the raids in a safe environment.
  - The user will be able to specify which type of day suits them the best, and let us know which raid or raids they are interested in doing with us.

![Image of the Sign Up Form on Sherpa Finder](assets/docs/signup-form-image.jpg)

### Footer
  - Has social media icons with relevant links re-directing users to our social media platforms and encourages them to interact with us.

![Image of the Footer on Sherpa Finder](assets/docs/footer-image.png)


### Future Implementations

- Making the countdown actually count down on the page after the final question has been answered.
- A more advanced scoring system.
- Make it more obvious when you select the right or wrong answer, whether it be some minor animation or sound effect.


### Accessibility

I've tried to make the website as accessible as possible where I could by:

- Using semantic HTML.
- Colors that are easy on the eye at any time of day.


## Typography

Google Fonts was used for these fonts:

- **Rajdhani** for all website headings.

![Image of the Rajdhani font](assets/docs/rajdhani-font.png)

- **Antic** for all website body text / paragraphs and the navigation bar.

![Image of the Antic font](assets/docs/antic-font.png)


## Technologies Used

### Languages Used

HTML, CSS and JS was used when making this website.

### Frameworks, Libraries & Programs Used

- Git - For version control.

- GitHub - To save and store the files.

- Google Fonts - To find and import fonts used for the website.

- Microsoft Edge Developer Tools - To troubleshoot, test features see and solve responsiveness, also to try get an understand why or how things were working, especially logging things to the console to see if things are doing or working the way they should.

- [Am I Responsive](https://ui.dev/amiresponsive) - To show the website on a wide range of devices.


## Deployment

Github Pages was used to deploy the website. The instructions to do this can be found below:

1. Log in or sign up to Github.
2. Find the repository for this project, [p1-sherpa-finder](https://github.com/Hakesh/p1-sherpa-finder).
3. Click on the "Settings" button in the menu bar for the repository.
4. Click on Pages in the left hand side navigation bar.
5. From the Source dropdown menu, select "Deploy from a branch".
6. From the Branch dropdown menus, select "main" and "/root" respectively.
7. Click Save. Your live Github Pages site is now deployed at the URL shown at the top of the page. **Keep in mind it might take a bit before the page is deployed and a URL is shown, you might have to refresh the page after a few minutes to get it to show.**

The live link can be found here - https://hakesh.github.io/p2-gaming-quiz/

## Testing

This website was developed using Microsft Edge with the use of Microsoft Edge Dev Tools, which have been used since the very beginning to troubleshoot this website for any problems that arose and to make sure the website was responsive on many different resolutions and devices. 

The website has also been tested in Google Chrome and it works as expected.

My biggest hurdle was getting the name requirement to work without a form, it took a fair bit of trial and error and researching to get it to work in an okay way. I wanted to get/make a similar warning/alert that you get as if you were using the "required" attribute in a form, however not enough time was available to research this option.

The lighthouse score is good but not perfect. In the future I will look to try to use the .webp image format instead for better performance.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C Validator.](https://validator.w3.org/nu/?doc=https%3A%2F%2Fhakesh.github.io%2Fp1-sherpa-finder%2Findex.html)

- CSS
  - No errors were found when passing through the official [(Jigsaw) Validator.](https://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fhakesh.github.io%2Fp1-sherpa-finder%2Findex.html&usermedium=all&vextwarning=&warning=1)

- JS
  - No errors were returned when passing through the official [W3C Validator.](https://validator.w3.org/nu/?doc=https%3A%2F%2Fhakesh.github.io%2Fp1-sherpa-finder%2Findex.html)


### Lighthouse Testing

![Image of Sherpa Finder Lighthouse Score](assets/docs/lighthouse-score-image.png)

### Unfixed Bugs

- If you spam click the correct answer you are able to get an unlimited amount of points/score.


## Credits

- [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k)
  - Another one of his videos coming to my rescue. Wouldn't have been able to finish this project in time if it wasn't for him. A large amount of JS code is credited to him as the quiz game is based on his own, with other features implemented by me (score count, end screen, name requirement, etc). 
  I only had 1.5-2 days of time on this project and wasn't able to figure out a solution by myself.

- [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template)
  - My repository was created using the GitPod template given by Code Institute.

- [Stackoverflow](https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer)
  - Wasn't sure how to make a countdown timer and found this amazingly simple snippet from Ali in the thread linked that worked flawlessly. Just wish I was able to implement the actual countdown onto a text, but I wasnt able to get it to work in time.

- [W3schools](https://www.w3schools.com/)
  - No specific code snippet was used from them but they are an incredible resource for learning/helping/remembring that I will always feel a need to include them here as their explanations and examples have incredible value.

- [Blizzard](https://blizzard.gamespress.com/Wrath-of-the-Lich-King-Classic-Reveal)
  - For providing excellent images in their press-kit. This is where my stunning background image is coming from.

- [Google Fonts](https://fonts.google.com/)
  - Used for finding and using the fonts 'Antic' and 'Rajdhani'.

- Love Math Project
  - Some inspiration and learning from this project was carried over to this one.