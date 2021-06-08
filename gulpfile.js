const gulp = require("gulp");
const yargs = require("yargs");  
const sass = require("sass"); 
// const livereload = require("livereload"); 
const fs = require('fs');
const argv = yargs.argv;

gulp.task("create", (done) => {
    let name = argv.name; 
    let type = argv.type;

    console.log(name); 
    let dir = `${__dirname}/src/templates/${name}`; 
    fs.mkdirSync(dir, {recursive: true});
    
    if(type==="blank"){
        fs.writeFileSync(`${dir}/index.html`, ""); 
        fs.writeFileSync(`${dir}/main.scss`, ""); 
    }

    if(type==="tenderd"){
        let tenderdHTML = fs.readFileSync(`${__dirname}/src/public/emailReadyTemplates/tenderd.html`); 
        let tenderdSCSS = fs.readFileSync(`${__dirname}/src/public/emailReadyTemplates/tenderd.scss`); 
        fs.writeFileSync(`${dir}/index.html`, tenderdHTML); 
        fs.writeFileSync(`${dir}/main.scss`, tenderdSCSS); 
    }
    done(); 
}); 

gulp.task("list", (done) => {
    let listOfTemplates = fs.readdirSync(`${__dirname}/src/templates`);
    console.log(); 
    console.log("--- Templates ---"); 
    listOfTemplates.forEach(e => {
        console.log("--> ", e); 
    }); 
    console.log("-----------------");  
    console.log(); 
    done(); 
}); 

gulp.task("extract-sendgrid", (done) => {
    let location = `${__dirname}/src/templates/**/*.html`;  
    gulp.src(location)
        .pipe((a,b,c) => {
            console.log(a, b, c); 
        });  
    done(); 
}); 