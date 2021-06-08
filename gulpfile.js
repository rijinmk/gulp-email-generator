const gulp = require("gulp");
const yargs = require("yargs");  
const sass = require("gulp-sass");
const cssmin = require("gulp-cssmin");  
const open = require("gulp-open");
const shell = require("shelljs"); 
// const livereload = require("gulp-livereload"); 
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

    shell.exec(`gulp watch --name ${name}`);

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

gulp.task("extract-json-html", (done) => {
    let name = argv.name; 
    let location = `${__dirname}/src/templates/${name}/index.html`;  
    let html = (fs.readFileSync(location)).toString();  
    let matched = html.match(/\{\{([\w_\.]+)\}\}/gi); 
    let properties = {}; 
    matched.forEach(e => {
        _e=e.replace("{{", "");
        _e=_e.replace("}}", "");
        properties[_e]=`${_e}`;
    }); 
    fs.writeFileSync(`${__dirname}/src/templates/${name}/${name}.json`, JSON.stringify(properties, null, 2));
    done(); 
}); 

gulp.task("make-node-js", (done) => {
    let name = argv.name; 
    let location = `${__dirname}/src/templates/${name}/index.html`;  
    let html = (fs.readFileSync(location)).toString(); 
    let htmlDataObj = JSON.parse((fs.readFileSync(`${__dirname}/src/templates/${name}/${name}.json`)).toString()); 

    _html = html.replace(/{{/gi, "${");
    _html = _html.replace(/}}/gi, "}");
    console.log();
    let forJS = "export const " + name + " = ( " + (Object.keys(htmlDataObj)) + " ) => ";
        forJS += "{return `" + _html + "`}";
    fs.writeFileSync(`${__dirname}/src/templates/${name}/${name}.js`, forJS);
    done(); 
}); 

gulp.task("scss-css", (done) => {
    let name = argv.name; 
    gulp.src(`${__dirname}/src/templates/**/*.scss`)
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest(`${__dirname}/src/templates/`))
    done(); 
}); 

gulp.task("email-ready-html", (done) => {
    let name = argv.name;
    let html = (fs.readFileSync(`${__dirname}/src/templates/${name}/index.html`)).toString(); 
    html = html.split("/* <%% %%> */"); 
    
    let css = fs.readFileSync(`${__dirname}/src/templates/${name}/main.css`).toString(); 
    let emailReadyHTML = html[0] + css + html[1];
    
    fs.writeFileSync(`${__dirname}/src/templates/${name}/email.html`, emailReadyHTML);

    done(); 
}); 

gulp.task("watch", (done) => {
    gulp.watch(`${__dirname}/src/templates/**/*.html`, gulp.series("extract-json-html", "make-node-js"));
    gulp.watch(`${__dirname}/src/templates/**/*.scss`, gulp.series("scss-css", "email-ready-html"));
    done();
}); 