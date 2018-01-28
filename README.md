# Yap

Yap is the worlds #1 restaurant review website. What's that you say? It sounds like Yelp? Never heard of it.

## Technical Requirements

Your application should meet the following Requirements:

For Restaurants, a user should be able to:
  * view a list of all restaurants on the home page
    * this list should show the restaurant name with an image
  * view more detailed information on a specific restaurant on its own page
  * add a new restaurant
  * delete a restaurant

For Reviews, a user should be able to:
  * add a new review
    * you'll need to figure out how to associate a review with a restaurant so that your app can figure out which reviews are for which restaurants. I recommend [taking a look at using subdocuments](http://mongoosejs.com/docs/subdocs.html).
  * view a list of all reviews for a restaurant on that restaurant's profile page

## Entities

#### Restaurants
Your restaurant entity should have, at a minimum, the following properties:
- name (string)
- phone_number (string)
- website_url (string)
- profile_pic_url (string)
- address (string)
- city (string)
- state (string)

#### Reviews
Your review entity should have, at a minimum, the following properties:
- reviewer (string)
- title (string)
- body (string)
- num_stars (number)

## Steps to get started
We will do the first several steps together so everyone's on the same page:

- Fork this repo on github, then `git clone` the forked repository
- `npm i` so you have the required modules
- Set up your database on mLab (create the db, add a db user, add collection as usual)
- Rename the file `.env.sample` to just `.env` (in other words, remove the `.sample` from the name).
- Add the database username and password you created to the `.env` file in the appropriate place
- Add your mLab connection string to the `app.js`, using the environment variables instead of hardcoding your username and password
- Develop your app
  - I recommend only working on one model/entity at a time. So don't try to build restaurants AND reviews at the same time. Do restaurants first, then reviews.
  - Remember, try moving 'from the data out'. Start with the database, then model, then controller, then views.
- When you're satisfied that you've completed the assignment (or gotten as far as possible), `git push` your code to your forked repo and submit a Pull Request against the upstream repo (like we do for homework)

## Bonus
The following are all optional bonus activities. Pick and choose which you'd like to do, if any:
* Add a stylesheet to make the site look nice :)
* Add some common UI elements (header, footer, etc.) across pages WITHOUT copying/pasting code. You might want to look into ['server side includes'](https://github.com/tj/ejs#includes).
* full CRUD for restaurants
  * add the ability to edit restaurants to the functionality you already have
* Allow users to edit and/or delete reviews
  * Right now we don't have a good way to 'authenticate' users, meaning we can't tell who they are. This means everyone will be able to edit/delete every restaurant or review, even if they didn't create them. That's ok for now!
* SUPER BONUS: figure out how to sort restaurants based on how many reviews they have
