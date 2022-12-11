<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Blog built using Gatsby. Based on the <a src = "https://github.com/ihsavru/gatsby-starter-peach"> starter-peach-theme </a>.
</h1>


### This was a fun experiment with using Gatsby. While I've used wordpress, jekyll and other static cite generators, Gatsby is by far the slickest looking from the perspective of how its built using react and integrated with graphQL. 

<br>

### I started with simple and beutiful looking [starter-peach-theme](https://github.com/ihsavru/gatsby-starter-peach) which drew me in with its nice grid layout and dark/light theme switching. I made some small modifications:

<br>

* ### Created `Dockerfile` to set up my development environment
* ### Added compatibility to deploy to [`github-pages`](https://creativedatasolutions.github.io/cds.blog/)
* ### Added [`Disqus`](https://disqus.com/) based comments

### The majority of my strugles were surrounding getting all the `npm` packages to install correctly. Notable pain points included `node-sass`. It could be that this can run on `python 3` but after getting things to work with `python 2` I didn't have the patience to debug this issue further.

### Overall, I had a positive experience with Gatsby!
<br>

### See below for my development notes.
<br>

```bash

#build container from Dockerfile
docker build -t gatsby -f Dockerfile .

#run container on port 80 - for interactive installs
docker run --name gatsby -ti -p 80:80 gatsby bash 

#note if you are feeling lucky add all of the set up code below directly to your Dockerfile
#---

#install theme
gatsby new app https://github.com/ihsavru/gatsby-starter-peach

# Next I will skip the specific instructions on how to move and organize blog markdown files which will be specific to your set up
# The organization which worked for me was as follows
* content/blog/DATE_blog_name.md  --- blog markdown
* content/blog/DATE_blog_name/ --- assets for blog e.g. images, etc

#render your blog
gatsby develop -H 0.0.0.0 -p 80 -o 

#deploy to github pages
#configure your projects gatsby-*.js compoents first to make things specific to your setup
# see the following instructions
#https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/

#deploy your blog to gh-pages
gatsby clean
npm run deploy
```