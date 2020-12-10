# UpCloud Frontend App

Hi there! This package contains the UpCloud frontend technology stack and an 
unfinished web app.

There are design mockups in the `design-mockups/` directory for the two pages
that this app should show when finished. Please spend about 2-3 hours to explore
the code, get the project running, and possibly write some code! Implement what
you can in the time allotted :) We don't expect you to code the whole app,
gathering some thoughts about the tech stack and how you would approach the
problem is great as well!

The tech stack includes:

- TypeScript
- Next.js
- React.js
- styled-jsx
- Sass/SCSS

(note: UpCloud also uses Redux, but it was omitted here for simplicity)

Let's be in touch and arrange a meet at UpCloud office where we can together go
through your thoughts about everything you saw & did here :) We'd love to know
what you thought about the tech stack and working on this!

Lastly, we'd like to emphasize that 2-3 hours is good, as we don't want to take
up too much of your valuable time at this point!

### Getting Started

Replace the API username and password in `apiClient.ts` with the ones we
supplied to you.

Install the required packages with `yarn install` or `npm i`.

Start the dev server with `yarn dev` or `npm run dev`

Open http://localhost:3000 and you should see the app homepage!

If you are having any problems, please do not hesitate to contact us!

### About the Mockups

The `1-servers-page.png` shows a mockup of the "Servers" page. Users can access
this page via the link at the top-right corner. The page shows a server list
with each server's title, state (green = started, red = stopped, yellow = any
other state), and hostname.

At the top-right corner, you can see the "Storages"-link to open the "Storages"
page. The `2-storages-page.png` shows a mockup of the "Storages" page. This is 
just a simple list of storages with their title and size.

### Hints & Tips

**Don't want TypeScript?** Use .js files and TypeScript will ignore typings.
You can also rename the existing template files to .js if you feel like it.

We are more than happy to see you add your own flair! For example making UX
better, adding loading states, skeleton screens, error states, unit tests,
responsive design, routing, ...

### Returns

Feel free to post this code in GitHub, GitLab, Bitbucket or any service of your
choosing. You can also e.g. upload the code as a zip somewhere. Send us the link
to the code in an email when you're done!
