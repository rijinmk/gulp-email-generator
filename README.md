### Just Run

Creating a template file
`gulp create --name WelcomeEmail --type tenderd`

`--name` is the name of the templates
Use `--type tenderd` to add Tenderd Header and Footer

Add some `{{someJSONObj}}` to the `index.html` in `templates/${name}/index.html` and save it to generate the `.json` and `.js` files.
Then to finalize, just save the `templates/${name}/main.scss` file to generate the `email.html` file. 