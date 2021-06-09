export const LPORenewalReminder = ( name,LPONumber,date,request_id ) => {return `
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

                    <p class="email__body__intro _pcustomer supplier">LPO No. ${LPONumber} will expire on ${date} date. Please renew to continue the services.</p>

                    <p class="email__body__intro _psupplier supplier">LPO no. ${LPONumber} will be expiring on ${date} date. Please arrange to off-hire unless the client extends the LPO. Working without extended LPO will result in NO PAYMENTS.</p>
                    
                    <div class="email__body__footer">
                        <p>View it on Tenderd</p>
                        <a class="email__button" href="https://track.tenderd.com/ae/procurement/requests/${request_id}">Open Request</a> 
                    </div>
                </div>
            </div>
            <div class="email__footer">
                <p> <span>&copy;</span> 2021 Tenderd <span>&bull;</span> <a href="">Unsubscribe</a></p>
            </div>
        </div>
    </body>
</html>
`}