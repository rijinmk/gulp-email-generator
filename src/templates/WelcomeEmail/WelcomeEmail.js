export const WelcomeEmail = ( name ) => {return `
<html>
    <head>
        <title></title>
        <style type="text/css">
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
            p, h1, h2, h3, h4, ol, li, ul, div { font-family: 'Open Sans', sans-serif }
            * {margin:0px; padding:0px ;}

            /* <%% %%> */

        </style>
    </head>
    <body>
        <a href="#">
            <div class="email">
                <div class="email__header">
                    <img src="http://cdn.mcauto-images-production.sendgrid.net/2271dee4d5199cf4/efd896e0-92b2-4b3a-bf3c-bce0f2b79b06/4650x510.png" alt="">
                </div>
    
                <div class="email__content">
                    <div class="email__body">
                        Hi ${name}
                    </div>
                </div>
    
                 <div class="email__footer">
                     <p> <span>&copy;</span> 2021 Tenderd <span>&bull;</span> <a href="">Unsubscribe</a></p>
                 </div>
                 
            </div>
        </a>
    </body>
</html>
`}