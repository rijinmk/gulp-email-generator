export const NewUserOnCreate = ( name,link ) => {return `
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
                    <h1>Welcome to Tenderd!</h1>
                    <h3>Hi ${name},</h3>
                    <p class="email__body__intro">
                        Tenderd is an online platform for companies to rent and manage heavy equipment such as trucks, excavators and cranes. We enable our clients to browse through our marketplace of +7,000 equipment in a simple, secure and efficient way.All equipment rented through the Marketplace comes tagged with our proprietary telematics. From our platform, clients can monitor real-time data from the field and effectively manage work orders. To help minimize equipment downtime, promote safety and maximize efficiency.
                    </p>
                    
                    <div class="email__body__footer">
                        <p>Use the same username and password to login</p>
                        <a class="email__button" href="${link}">Login to Tenderd Track</a> 
                    </div>
                </div>
            </div>

            <div class="email__body__double">
                <h3>All our machines come with a dedicated driver.</h3>
                <table>
                    <tr>
                        <td>
                            
                        </td>

                        <td class="email__inquiry">
                            <table>
                                <tr><td>PHONE</td></tr>
                                <tr><td>+97145897096</td></tr>
                                <tr><td>EMAIL</td></tr>
                                <tr><td>info@tenderd.com</td></tr>
                                <tr><td>WEBSITE</td></tr>
                                <tr><td>www.tenderd.com</td></tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="email__footer">
                <p> <span>&copy;</span> 2021 Tenderd <span>&bull;</span> <a href="">Unsubscribe</a></p>
            </div>
        </div>
    </body>
</html>
`}