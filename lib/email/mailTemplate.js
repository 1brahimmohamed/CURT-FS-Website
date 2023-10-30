const mailTemplate = (mail) => {

  return `

<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
      }
      @media screen and (max-width: 525px) {
        .wrapper {
          width: 100% !important;
          max-width: 100% !important;
        }
        .responsive-table {
          width: 100% !important;
        }
        .padding {
          padding: 10px 5% 15px 5% !important;
        }
        .section-padding {
          padding: 0 15px 50px 15px !important;
        }
      }
      .form-container {
        margin-bottom: 24px;
        padding: 20px;
        border: 1px dashed #ccc;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }
      .form-heading {
        color: #2a2a2a;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 700;
        text-align: left;
        line-height: 20px;
        font-size: 15px;
        margin: 0 0 8px;
        padding: 0;
      }

      .form-title {
        color: #2a2a2a;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 800;
        text-align: left;
        line-height: 20px;
        font-size: 25px;
        padding: 1rem 0 1rem 0;
      }

      .powered-by{
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }

      .established-by{
        font-size: 13px;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }

      .form-answer {
        color: #2a2a2a;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 300;
        text-align: left;
        line-height: 20px;
        font-size: 16px;
        margin: 0 0 24px;
        padding: 0;
      }
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }
    </style>
  </head>
  <body style="margin: 0 !important; padding: 0 !important; background: #fff">
    <div
      style="
        display: none;
        font-size: 1px;
        color: #fefefe;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    ></div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td
          bgcolor="#ffffff"
          align="center"
          style="padding: 10px 15px 30px 15px"
          class="section-padding"
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 500px"
            class="responsive-table"
          >
            <tr>
              <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <table
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <td
                            style="
                              padding: 0 0 0 0;
                              font-size: 16px;
                              line-height: 25px;
                              color: #232323;
                            "
                            class="padding message-content"
                          >


                            ${ mail.email?
                              (`<h2 class="form-title">New CURT-FS Contact Message</h2>`) :
                              (`<h2 class="form-title">Thank you for reaching us out</h2>`)
                            }

                            <div class="form-container">
                              <h3 class="form-heading">Name</h3>
                              <p class="form-answer">${mail.name}</p>

                              ${ mail.email?
                                    (`<h3 class=\"form-heading\">Email</h3> <p class=\"form-answer\">${mail.email}</p>`) :
                                    (``)
                              }

                              <h3 class="form-heading">Subject</h3>
                              <p class="form-answer">${mail.subject}</p>

                              <h3 class="form-heading">Message</h3>
                              <p class="form-answer">${mail.message}</p>
                            </div>
                          </td>
                        </tr>
                      </table>

                      <table
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0">
                        <tr>
                          <div class="powered-by">
                            Powered by CURT-FS Automatic Mailing Services
                          </div>

                          <div class="established-by">
                            Established by Ibrahim Mohamed
                          </div>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
};

export default mailTemplate;
