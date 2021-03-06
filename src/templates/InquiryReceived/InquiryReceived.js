export const InquiryReceived = ( name,link ) => {return `
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
                    <h2>Hi ${name},</h2>
                    <h4>We have received your inquiry</h4>
                    <p class="email__body__intro">Our sales team will be in touch with you shortly. Check the status of your order on TenderdTrack</p>
                    
                    <div class="email__body__footer">
                        <a class="email__button" href="${link}">Check Order Status</a> 
                    </div>

                    <div style="margin-top:50px;" class="email__body__line"></div>

                    <table class="email__body__features">
                        <tr>
                            <td><img width="80" src="https://storage.googleapis.com/tenderd-ui/assets/emailers/648-victory-success-outline.gif" alt=""></td>
                            <td>
                                <h4>Easy access</h4>
                                <p>A better and easier way to manage your fleet of machines.</p>
                            </td>
                        </tr>
                        <tr>
                            <td><img width="80" src="https://storage.googleapis.com/tenderd-ui/assets/emailers/45-clock-time-outline.gif" alt=""></td>
                            <td>
                                <h4>Fast Delivery</h4>
                                <p>Hassle free booking from the comfort of your home with on time delivery</p>
                            </td>
                        </tr>
                    </table>

                    <div class="email__body__line"></div>

                    <p>Any further questions? Feel free to contact us at +97145147224 or email us at info@tenderd.com</p>

                </div>
            </div>
            <div class="email__footer">
                <p> <span>&copy;</span> 2021 Tenderd <span>&bull;</span> <a href="">Unsubscribe</a></p>
            </div>
        </div>
    </body>
</html>
`}