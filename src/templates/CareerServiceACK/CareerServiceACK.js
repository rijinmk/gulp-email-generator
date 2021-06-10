export const CareerServiceACK = ( name ) => {return `
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
        <div class="email">
            <div class="email__header">
                <img src="http://cdn.mcauto-images-production.sendgrid.net/2271dee4d5199cf4/efd896e0-92b2-4b3a-bf3c-bce0f2b79b06/4650x510.png" alt="">
            </div>

            <div class="email__content">
                <div class="email__body">
                    Hi ${name}, <br>
                    <p>
                        Thank you for applying to TENDERD. We appreciate your interest in taking the next step in your career with us. We want you to know that we value your application and we will review it carefully. <br><br> If we do not get back to you, it means you might not qualify for the role this time around. However, keep checking the open positions on our website or <a href="https://www.linkedin.com/company/tenderd/">LinkedIn</a> page and apply again to any relevant roles. <br><br> If you have any questions please email us at careers@tenderd.com. <br><br> Best regards, <br><br> Tenderd HR
                    </p>
                </div>
            </div>

                <div class="email__footer">
                    <p> <span>&copy;</span> 2021 Tenderd <span>&bull;</span> <a href="">Unsubscribe</a></p>
                </div>
                
        </div>
    </body>
</html>
`}