export const LPORenewalReminder = ( name,LPONumber,date,request_id ) => {return `
<html>
    <head>
        <title></title>
        <style type="text/css">
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
            p, h1, h2, h3, h4, ol, li, ul, div { font-family: 'Open Sans', sans-serif }
            * {margin:0px; padding:0px ;}

            .email,body{background-color:#f0f0f0}body{padding-top:30px;padding-bottom:30px;color:#000}.email{margin:0 auto;width:100%;padding-top:50px;padding-bottom:50px}.email__content{background:#fff;max-width:600px;position:relative;margin:0 auto;border-radius:15px;padding-top:40px;padding-bottom:40px}.email__header{text-align:center;margin-bottom:20px}.email__header img{width:250px}.email__body{width:50%;margin:0 auto 30px;text-align:center}.email__body__intro{display:none}.email__body__footer{margin:20px}.email__body__footer p{font-size:11px;margin-bottom:15px;opacity:.4;text-transform:uppercase;letter-spacing:1px}.email__body__footer a{padding:10px 20px;background:#1890ff;color:#fff!important;font-weight:700;border-radius:5px}.email__footer{text-align:center;margin-top:20px;margin-bottom:20px}.email__footer p{text-transform:uppercase;font-size:12px}a{text-decoration:none;color:#000!important}p.email__body__intro._pcustomer.customer,p.email__body__intro._psupplier.supplier{display:block!important}

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