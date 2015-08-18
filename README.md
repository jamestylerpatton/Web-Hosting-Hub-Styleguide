# Web Hosting Hub Styleguide
*A visual style guide for the IMH marketing team*

## Dependencies

- [Node/NPM](https://nodejs.org/) 
- [Ruby (pre-installed on Mac)](https://www.ruby-lang.org/en/documentation/installation/)
- [SASS (SCSS)](http://sass-lang.com/install)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Also Uses

- Browserify
- Bootstrap 3.*
- jQuery

## Getting Started

#### 1. Clone From GitHub:
```sh
git clone git@github.com:jamestylerpatton/Web-Hosting-Hub-Styleguide.git styleguide
```

#### 2. Install Dev Dependencies:
```sh
sudo npm install
```

### 3. Run Gulp:
```sh
gulp
```
This default task will run and compile the latest js and css into the web directory.

To run individual tasks, run `gulp scripts` to compile just the JavaScript, `gulp styles to compile the css, and `gulp watch` to check any changes to the styles/scrips in the resources folder and compile on save.