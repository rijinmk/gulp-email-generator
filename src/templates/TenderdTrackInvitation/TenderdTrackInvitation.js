export const TenderdTrackInvitation = ( params_name,bdm_name,name,email,link ) => {return `
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
                    <h2>Hi ${params_name},</h2>
                    <p class="email__body__intro">You've been invited by ${bdm_name} to register in Tenderd Track.
                        This is an invitation exclusively for ${name} (${email}).</p>

                    <div class="email__body__content">
                        <table>
                            <tr>
                                <td> <img src="https://storage.googleapis.com/tenderd-ui/assets/emailers/001-management.png" alt=""> </td>
                                <td>Manage all project, equipment and operator documents.</td>
                            </tr>
                            <tr>
                                <td> <img src="https://storage.googleapis.com/tenderd-ui/assets/emailers/002-location.png" alt=""> </td>
                                <td>Track equipment location and working hours </td>
                            </tr>
                            <tr>
                                <td> <img src="https://storage.googleapis.com/tenderd-ui/assets/emailers/003-clipboard.png" alt=""> </td>
                                <td> Manage work orders and track progress </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="email__body__footer">
                        <p>Login and get started</p>
                        <a class="email__button" href="${link}">Click Here</a> 
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